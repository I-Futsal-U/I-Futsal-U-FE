import { useEffect, useState } from "react";

import type { DAY_TYPE, MONTH_TYPE, TodayType } from "@/constant/days";

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
