type DeepPartial<T> = T extends object
  ? {
      [K in keyof T]?: DeepPartial<T[K]>;
    }
  : T;

interface DeepRecord<T = string> {
  [k: string]: DeepRecord<T> | T;
}

interface Point {
  toString: () => string;
  x: number;
  y: number;
}

export type { DeepPartial, DeepRecord, Point };
