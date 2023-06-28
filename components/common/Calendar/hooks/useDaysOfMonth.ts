/* eslint-disable @typescript-eslint/naming-convention */
import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";

import type { DateType } from "@/types/days";

// 특정 년, 월의 총 일수를 구하여 달력에 들어갈 모든 날짜를 배열에 저장하는 hook
// 시작 요일 이전의 날짜는 0으로 채운다.
/**
 * ex) 23년 6월 1일의 시작 요일은 목요일.
 * 6월 1일의 이전 날짜(일 ~ 수)는 0으로 채운다.
 * [0, 0, 0, 0, 1 , 2, 3, ... , 30]
 */
export default function useDaysOfMonth(
  date: DateType,
): [number[], Dispatch<SetStateAction<number[]>>] {
  const [totalDays, setTotalDays] = useState<number[]>([]); // 특정 달의 모든 날짜를 담을 배열 ex) 5월 => 1 ~ 31

  useEffect(() => {
    const days = [];
    const total_days = new Date(date.year, date.month + 1, 0).getDate(); // 이번 달의 총 일수 구하기
    const start_day = new Date(date.year, date.month, 1).getDay(); // 시작 요일 0 ~ 6

    for (let i = 0; i < start_day; i++) {
      // 존재하지 않는 요일의 경우 button의 value를 비운다.
      // ex) 6월 1일은 목요일이다. `월~수`의 value를 비운다.
      days.push(0);
    }

    for (let i = 1; i <= total_days; i++) {
      // 1 ~ 30 or 31 까지의
      days.push(i);
    }

    setTotalDays([...days]);
  }, [date]);

  return [totalDays, setTotalDays];
}
