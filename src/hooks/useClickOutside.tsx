import { RefObject, useEffect } from 'react';

const useClickOutside = (
  refs: RefObject<HTMLElement>[],
  clickEnabled: boolean,
  handleOnClickOutside: (event: MouseEvent | TouchEvent) => void,
) => {
  useEffect(() => {
    if (clickEnabled) {
      return;
    }
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!refs.some((ref) => ref.current?.contains(event.target as Node))) {
        handleOnClickOutside(event);
      }
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handleOnClickOutside, clickEnabled]);
};

export default useClickOutside;
