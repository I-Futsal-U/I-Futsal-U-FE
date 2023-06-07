"use client";

import { useState } from "react";

import type { DateType, MONTH_TYPE } from "@/types/days";

import Buttons from "./Buttons";
import Dates from "./Dates";
import Header from "./Header";
import { useDateParams } from "./hooks/useDateParams";
import { useDaysOfMonth } from "./hooks/useDaysOfMonth";

// 각 달의 일수 구하기 => new Date(YYYY, M, 0).getDate()

function Calendar() {
  const [date, setDate] = useState<DateType>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() as MONTH_TYPE, // 0 ~ 11월 이기 때문에
    day: new Date().getDate(),
  });

  const [totalDays] = useDaysOfMonth(date);
  useDateParams(date);

  const goToPrevMonth = () => {
    const prevDate = new Date(date.year, date.month - 1, date.day);

    const newDate: DateType = {
      year: prevDate.getFullYear(),
      month: prevDate.getMonth() as MONTH_TYPE,
      day: prevDate.getDate(),
    };

    setDate(newDate);
  };

  const goToNextMonth = () => {
    const nextDate = new Date(date.year, date.month + 1, date.day);

    const newDate = {
      year: nextDate.getFullYear(),
      month: nextDate.getMonth() as MONTH_TYPE,
      day: nextDate.getDate(),
    };

    setDate(newDate);
  };

  const handleDate = (day: number) => {
    const targetDate = new Date(date.year, date.month, day);

    const newDate = {
      year: targetDate.getFullYear(),
      month: targetDate.getMonth() as MONTH_TYPE,
      day: targetDate.getDate(),
    };

    setDate(newDate);
  };

  return (
    <section
      className="relative md:w-2/5 border-2 border-solid border-blue-500 rounded-2xl p-4 h-[31rem]"
      aria-label="Calendar"
    >
      <Buttons goToPrevMonth={goToPrevMonth} goToNextMonth={goToNextMonth} />
      <Header date={date} />
      <Dates totalDays={totalDays} handleDate={handleDate} date={date} />
    </section>
  );
}

export default Calendar;
