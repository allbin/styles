import { RefObject, useLayoutEffect, useState } from 'react';

// Leaves some air between the list and the edge it is measured against.
const EDGE_BUFFER = 20;
// A list squeezed into a tight space still shows a couple of rows.
const MIN_LIST_HEIGHT = 120;

interface ListPlacementOptions {
  isOpen: boolean;
  // The element the list is anchored to, normally the field itself.
  anchorRef: RefObject<HTMLElement>;
  listRef: RefObject<HTMLElement>;
  // The element the list is kept inside of, defaults to the viewport.
  containerRef?: RefObject<HTMLElement>;
  // Upper bound for the list height in px, unbounded when omitted.
  maxHeight?: number;
}

interface ListPlacement {
  placeAbove: boolean;
  // Height cap in px, null while the list fits without being shrunk.
  maxListHeight: number | null;
}

/**
 * Decides whether a popup list opens below or above its anchor, and how tall it
 * may be, based on the space left inside the container. Recalculates while the
 * list is open since scrolling, resizing and filtering all change the answer.
 */
const useListPlacement = ({
  isOpen,
  anchorRef,
  listRef,
  containerRef,
  maxHeight,
}: ListPlacementOptions): ListPlacement => {
  const [placeAbove, setPlaceAbove] = useState(false);
  const [maxListHeight, setMaxListHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (!isOpen) {
      return;
    }

    const cap = maxHeight ?? Infinity;

    const calculatePlacement = () => {
      const anchor = anchorRef.current;
      const list = listRef.current;
      if (!anchor || !list) {
        return;
      }

      const container = containerRef?.current;
      const containerRect = container
        ? container.getBoundingClientRect()
        : new DOMRect(0, 0, window.innerWidth, window.innerHeight);
      const anchorRect = anchor.getBoundingClientRect();

      const spaceBelow = containerRect.bottom - anchorRect.bottom;
      const spaceAbove = anchorRect.top - containerRect.top;

      // scrollHeight reports the full content height even while the list is
      // capped, so the list can grow back once there is room for it again.
      const desiredHeight = Math.min(cap, list.scrollHeight);
      const requiredSpace = desiredHeight + EDGE_BUFFER;

      if (spaceBelow >= requiredSpace || spaceAbove >= requiredSpace) {
        setPlaceAbove(spaceBelow < requiredSpace);
        setMaxListHeight(null);
        return;
      }

      const usableBelow = Math.max(MIN_LIST_HEIGHT, spaceBelow - EDGE_BUFFER);
      const usableAbove = Math.max(MIN_LIST_HEIGHT, spaceAbove - EDGE_BUFFER);
      const above = usableAbove > usableBelow;

      setPlaceAbove(above);
      setMaxListHeight(Math.min(cap, above ? usableAbove : usableBelow));
    };

    calculatePlacement();

    const list = listRef.current;
    // Filtering and loading options change how much room the list asks for.
    const observer = new ResizeObserver(calculatePlacement);
    if (list) {
      observer.observe(list);
    }
    window.addEventListener('resize', calculatePlacement);
    window.addEventListener('scroll', calculatePlacement, true);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', calculatePlacement);
      window.removeEventListener('scroll', calculatePlacement, true);
    };
  }, [isOpen, anchorRef, listRef, containerRef, maxHeight]);

  return { placeAbove, maxListHeight };
};

export default useListPlacement;
