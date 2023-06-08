export type MONTH_TYPE = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type DAY_TYPE = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type TodayType = {
  month: MONTH_TYPE;
  date: number;
  day: DAY_TYPE;
};

export type DateType = {
  year: number;
  month: MONTH_TYPE;
  day: number;
};
