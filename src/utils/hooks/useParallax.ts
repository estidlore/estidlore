import { useCallback } from "react";

import type { Point } from "utils/types";

import { useMousePosition } from "./useMousePosition";
import { useRect } from "./useRect";

const useParallax = (
  ref: React.RefObject<HTMLElement>
): ((distance: number) => Point) => {
  const rect = useRect(ref);
  const mousePos = useMousePosition(rect);

  return useCallback(
    (distance: number) => {
      const k = -10 * distance;
      return {
        toString(): string {
          return `${this.x}px ${this.y}px`;
        },
        x: mousePos.x / k,
        y: mousePos.y / k
      };
    },
    [mousePos]
  );
};

export { useParallax };
