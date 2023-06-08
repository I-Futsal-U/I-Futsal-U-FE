"use client";

import { BsChevronLeft } from "@react-icons/all-files/bs/BsChevronLeft";
import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight";

interface ButtonProps {
  goToPrevMonth: (e: React.MouseEvent<HTMLElement>) => void;
  goToNextMonth: (e: React.MouseEvent<HTMLElement>) => void;
}

function Buttons({ goToPrevMonth, goToNextMonth }: ButtonProps) {
  return (
    <div
      className="absolute top-5 right-2 lg:right-12 flex gap-1"
      aria-label="Calendar Buttons"
    >
      <button
        type="button"
        className="border border-solid rounded-full p-1"
        onClick={goToPrevMonth}
        aria-label="Go to previous Month"
      >
        <span className="text-center">
          <BsChevronLeft />
        </span>
      </button>
      <button
        type="button"
        className="border border-solid rounded-full p-1"
        onClick={goToNextMonth}
        aria-label="Go to next Month"
      >
        <span className="text-center">
          <BsChevronRight />
        </span>
      </button>
    </div>
  );
}

export default Buttons;
