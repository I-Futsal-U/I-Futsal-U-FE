import { renderHook } from "@testing-library/react";

import type { DAY_TYPE, MONTH_TYPE } from "@/types/days";

import useCreateDates from "../../DateCarousel/hooks/useCreateDates";

describe("useCreateDates hook test", () => {
  test("오늘 부터 {weeks}주 동안의 날짜 정보를 도출한다.", () => {
    const weeks = 2;
    const { result } = renderHook(() => useCreateDates(weeks));

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
    expect(result.current[0]).toHaveLength(14);
    expect(result.current[0]).toEqual(dates);
  });
});
