import type { IDate } from "types/time";

interface IWork {
  company: string;
  description?: string;
  from: IDate;
  id: string;
  role: string;
  skills: string[];
  to: IDate | "Present";
}

export type { IWork };
