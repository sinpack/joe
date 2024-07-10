import { useEffect, RefObject } from 'react';

// eslint-disable-next-line no-unused-vars
type ClickOutsideHandler = (event: MouseEvent) => void;

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: ClickOutsideHandler
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export default useClickOutside;
