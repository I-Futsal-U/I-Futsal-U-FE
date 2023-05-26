import { useEffect, useState } from "react";
// date.getDate() - 오늘 날짜
// date.getMonth() - 이번달 (0 ~ 11)
// date.getDay() - 오늘 요일 (0 ~ 6)

export type MONTH_TYPE = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type DAY_TYPE = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type TodayType = {
  month: MONTH_TYPE;
  date: number;
  day: DAY_TYPE;
};

export const DAYS = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

export const useCreateDates = (weeks: number) => {
  const [days, setDays] = useState<TodayType[]>();

  useEffect(() => {
    const DATE = new Date();
    const dates = [];

    for (let i = 0; i < weeks * 7; i++) {
      const TMP = new Date(
        DATE.getFullYear(),
        DATE.getMonth() as MONTH_TYPE,
        i + DATE.getDate(),
      );
      dates.push({
        month: TMP.getMonth() as MONTH_TYPE,
        date: TMP.getDate(),
        day: TMP.getDay() as DAY_TYPE,
      });
    }

    setDays(dates);
  }, []);

  return [days];
};
