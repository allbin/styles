import { RefObject, useEffect } from 'react';

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  clickEnabled: boolean,
  handleOnClickOutside: (event: MouseEvent | TouchEvent) => void,
) => {
  useEffect(() => {
    if (clickEnabled) {
      return;
    }
    const listener = (event: MouseEvent | TouchEvent) => {
      console.log('Testar');
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handleOnClickOutside(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handleOnClickOutside, clickEnabled]);
};

export default useClickOutside;
