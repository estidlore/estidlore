interface Star {
  color: string;
  size: number;
  twinkle: {
    period: number;
    time: number;
  };
  x: number;
  y: number;
}

interface StarsProps {
  amount: number;
}

export type { Star, StarsProps };
