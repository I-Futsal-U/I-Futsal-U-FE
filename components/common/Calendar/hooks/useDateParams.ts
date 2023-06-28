import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import type { DateType } from "@/types/days";

// year, month, day를 queryString에 추가해줍니다.
export default function useDateParams(date: DateType) {
  const router = useRouter();
  const pathname = usePathname();

  const setDateParams = (newDate: DateType) => {
    const params = new URLSearchParams();
    params.set("year", `${newDate.year}`);
    params.append("month", `${newDate.month}`);
    params.append("day", `${newDate.day}`);

    router.push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    setDateParams(date);
  }, [date]);
}
