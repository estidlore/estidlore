import { useCallback, useLayoutEffect, useState } from "react";

import type { Point } from "utils/types";

const useMousePosition = (
  origin: Point = {
    x: 0,
    y: 0
  }
): Point => {
  const [position, setPosition] = useState<Point>({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (ev: MouseEvent) => {
      setPosition({ x: ev.clientX - origin.x, y: ev.clientY - origin.y });
    },
    [origin]
  );

  useLayoutEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return (): void => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

export { useMousePosition };
