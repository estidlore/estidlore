import { useCallback, useLayoutEffect, useState } from "react";

const useRect = (ref: React.RefObject<HTMLElement>): DOMRect | undefined => {
  const [rect, setRect] = useState(ref.current?.getBoundingClientRect());

  const handleResize = useCallback(() => {
    const newRect = ref.current?.getBoundingClientRect();
    if (newRect !== undefined) {
      setRect(newRect);
    }
  }, [ref.current]);

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return rect;
};

export { useRect };
