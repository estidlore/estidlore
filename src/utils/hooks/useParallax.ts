import { useCallback } from "react";

import type { Point } from "utils/types";

import { useMousePosition } from "./useMousePosition";
import { useRect } from "./useRect";

const getCenter = (rect?: DOMRect): Point => {
  if (rect === undefined) {
    return { x: 0, y: 0 };
  }
  return {
    x: (rect.left + rect.right) / 2,
    y: (rect.top + rect.bottom) / 2
  };
};

const useParallax = (
  ref: React.RefObject<HTMLElement>
): ((distance: number) => Point) => {
  const rect = useRect(ref);
  const origin = getCenter(rect);
  const mousePos = useMousePosition(ref, origin);

  return useCallback(
    (distance: number) => ({
      toString(): string {
        return `${this.x}px ${this.y}px`;
      },
      x: mousePos.x / -distance,
      y: mousePos.y / -distance
    }),
    [mousePos]
  );
};

export { useParallax };
