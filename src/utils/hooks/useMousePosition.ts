import { useCallback, useEffect, useState } from "react";

import type { Point } from "utils/types";

const getDistance = (p1: Point, p2: Point): number => {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
};

const useMousePosition = (
  ref: React.RefObject<HTMLElement>,
  origin: Point = { x: 0, y: 0 },
): Point => {
  const [position, setPosition] = useState<Point>({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (ev: MouseEvent) => {
      const newPos = { x: ev.clientX - origin.x, y: ev.clientY - origin.y };
      setPosition((position) => {
        const distance = getDistance(position, newPos);
        return distance > 10 ? newPos : position;
      });
    },
    [origin.x, origin.y],
  );

  useEffect(() => {
    const el = ref.current;
    if (el === null) {
      return;
    }
    el.addEventListener("mousemove", handleMouseMove);
    return (): void => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove, ref.current]);

  return position;
};

export { useMousePosition };
