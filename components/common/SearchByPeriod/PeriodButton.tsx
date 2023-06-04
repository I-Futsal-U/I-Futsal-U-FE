interface PeriodButtonProps {
  value: string;
  period: string;
}

function PeriodButton({ value, period }: PeriodButtonProps) {
  return (
    <button
      type="button"
      value={period}
      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-xl"
    >
      {value}
    </button>
  );
}

export default PeriodButton;
