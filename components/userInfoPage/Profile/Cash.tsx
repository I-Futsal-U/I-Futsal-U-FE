export default function Cash() {
  return (
    <div className="flex items-center justify-center gap-16 md:gap-28 mt-8">
      <span className="text-base md:text-lg font-bold">캐시: 0원</span>
      <button
        type="button"
        className="w-28 h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
      >
        충전하기
      </button>
    </div>
  );
}
