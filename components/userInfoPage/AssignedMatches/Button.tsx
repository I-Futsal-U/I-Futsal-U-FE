import type { MatchButtonStyleType } from "@/types/button";

export default function Button() {
  const END_BUTTON: MatchButtonStyleType = {
    className: "bg-slate-300",
    text: "모집 완료",
    disabled: true,
  };

  const ONGOING_BUTTON: MatchButtonStyleType = {
    className: "bg-blue-500",
    text: "11/15",
    disabled: true,
  };

  return (
    <button
      className={`w-28 h-10 px-1 py-2 text-sm text-white ${ONGOING_BUTTON.className} rounded-xl font-extrabold ml-auto mr-2`}
      type="button"
      disabled={ONGOING_BUTTON.disabled}
    >
      {ONGOING_BUTTON.text}명
    </button>
  );
}
