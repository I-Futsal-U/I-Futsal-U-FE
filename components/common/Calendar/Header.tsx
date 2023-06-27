import type { DateType } from "@/types/days";

interface HeaderProps {
  date: DateType;
}

export default function Header({ date }: HeaderProps) {
  return (
    <div
      className="col-span-6 text-center font-extrabold text-2xl"
      aria-label="Calendar Header"
    >
      <span className="mr-3">{date.year}.</span>
      <span>{date.month + 1}</span>
    </div>
  );
}
