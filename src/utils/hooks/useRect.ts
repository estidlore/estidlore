import { useCallback, useEffect, useState } from "react";

const useRect = (ref: React.RefObject<HTMLElement>): DOMRect | undefined => {
  const [rect, setRect] = useState<DOMRect>();

  const handleResize = useCallback(() => {
    setRect(ref.current?.getBoundingClientRect());
  }, [ref.current]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return rect;
};

export { useRect };
