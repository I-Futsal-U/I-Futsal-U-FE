import { BsDot } from "@react-icons/all-files/bs/BsDot";
import { useSearchParams } from "next/navigation";

import { DAYS } from "@/constant/days";
import type { MONTH_TYPE } from "@/types/days";

interface DatesProps {
  totalDays: number[];
  handleDate: (e: number) => void;
}

export default function Dates({ totalDays, handleDate }: DatesProps) {
  const searchParams = useSearchParams();
  const checkDate = (e: number): boolean => {
    const day = searchParams.get("day");

    return Number(day) === e;
  };

  const isToday = (e: number): boolean => {
    const today = new Date();
    const year = Number(searchParams.get("year"));
    const month = Number(searchParams.get("month"));

    if (
      year === today.getFullYear() &&
      month === (today.getMonth() as MONTH_TYPE) &&
      e === today.getDate()
    ) {
      return true;
    }
    return false;
  };

  return (
    <div
      className={`grid grid-cols-7 grid-rows-${
        Math.ceil(totalDays.length / 7) + 1
      }`}
      aria-label="Calendar Body"
    >
      {DAYS.map((e) => (
        <div
          key={e}
          className={`text-[11px] sm:text-[13px] lg:text-base text-center mt-6 font-extrabold ${
            e === "SUN" ? "text-red-500" : ""
          }`}
        >
          <span>{e}</span>
        </div>
      ))}
      {totalDays.map((e, i) => (
        <button
          key={`${i} undefined`}
          type="button"
          disabled={e === 0}
          className={`h-16 font-extrabold ${i % 7 === 0 ? "text-red-500" : ""}`}
          onClick={() => handleDate(e)}
        >
          {isToday(e) && (
            <span
              className={`relative z-1 -top-3 block h-1 font-extrabold leading-none`}
            >
              <BsDot className="mx-auto text-green-400 text-3xl" />
            </span>
          )}
          <span
            className={`py-2 px-3 rounded-full ${
              checkDate(e) ? "bg-blue-500 text-white" : ""
            } `}
          >
            {e === 0 ? "" : e}
          </span>
        </button>
      ))}
    </div>
  );
}
