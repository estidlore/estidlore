import React from "react";

import "./styles.css";
import type { Star, StarsProps } from "./types";

const randomColor = (): string => {
  const channels = Array.from(Array(3)).map(
    () => Math.floor(Math.random() * 32) + 192,
  );
  return `rgb(${channels.join(",")})`;
};

const randomPosition = (range: number): number => {
  return range * Math.random() + (100 - range) / 2;
};

const getStar = (): Star => {
  return {
    color: randomColor(),
    size: Math.random() * 3 + 1.5,
    twinkle: {
      period: Math.random() + 1,
      time: Math.random(),
    },
    x: randomPosition(110),
    y: randomPosition(110),
  };
};

const Stars = React.memo(({ amount }: StarsProps): JSX.Element => {
  const stars = Array.from(Array(amount), getStar);

  return (
    <>
      {stars.map((star) => {
        return (
          <div
            className={"Star"}
            key={`${star.x}-${star.y}-${star.size}`}
            style={{
              animationDelay: `${star.twinkle.time}s`,
              animationDuration: `${star.twinkle.period}s`,
              background: star.color,
              left: `${star.x}%`,
              padding: star.size,
              top: `${star.y}%`,
            }}
          />
        );
      })}
    </>
  );
});
Stars.displayName = "Stars";

export { Stars };
