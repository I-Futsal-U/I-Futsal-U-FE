interface DateItemProps {
  date: number;
  day: string;
}
function DateItem({ date, day }: DateItemProps) {
  return (
    <button
      type="button"
      className={`${
        day === "SUN" ? "text-red-600" : "text-black"
      } w-full flex flex-col justify-between align-middle text-center border-2 border-solid rounded-3xl hover:bg-blue-500 hover:text-white`}
    >
      <span className="mx-auto font-bold">{date}</span>
      <span className="mx-auto font-bold">{day}</span>
    </button>
  );
}

export default DateItem;
