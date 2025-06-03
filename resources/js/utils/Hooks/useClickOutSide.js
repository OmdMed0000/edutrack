// utils/Hooks/useClickOutSide.js
import { useEffect } from "react";

export default function useClickOutSide(handler, refs) {
  useEffect(() => {
    function handleClickOutside(event) {
      const isInside = Array.isArray(refs)
        ? refs.some(ref => ref?.current?.contains(event.target))
        : refs?.current?.contains?.(event.target);

      if (!isInside) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler, refs]);
}
