type TMonth =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";

interface IDate {
  month: TMonth;
  year: number;
}

export type { IDate, TMonth };
