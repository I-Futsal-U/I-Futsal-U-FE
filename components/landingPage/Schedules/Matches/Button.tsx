import type { MatchButtonStyleType } from "@/types/button";

export default function Button() {
  const APPLICABLE: MatchButtonStyleType = {
    className: "bg-blue-400 text-white",
    text: "신청가능",
    disabled: false,
  };

  const CLOSE_SOON: MatchButtonStyleType = {
    className: "bg-red-500 text-white",
    text: "마감임박",
    disabled: false,
  };

  const CLOSED: MatchButtonStyleType = {
    className: "bg-slate-100 text-slate-400",
    text: "마감",
    disabled: true,
  };

  return (
    <button
      className={`w-28 h-10 px-1 py-2 text-sm  ${CLOSED.className} rounded-xl font-extrabold ml-auto mr-2`}
      disabled={CLOSED.disabled}
      type="button"
    >
      {CLOSED.text}
    </button>
  );
}
