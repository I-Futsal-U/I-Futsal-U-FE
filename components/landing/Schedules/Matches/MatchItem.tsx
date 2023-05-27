import Button from "./Button";

function MatchItem() {
  return (
    <div className="flex py-3 items-center border-b border-solid border-gray-400">
      <span className="text-xl px-4">18:00</span>
      <div className="flex flex-col px-4">
        <span className="text-base font-extrabold">
          서울 피치푸마목동(홈플러스 목동점) 1구장
        </span>
        <div className="flex text-xs">
          <span className="after:content-['·'] after:mx-1">남녀모두</span>
          <span className="after:content-['·'] after:mx-1">6vs6</span>
          <span className="after:content-['·'] after:mx-1">3파전</span>
          <span>모든 레벨</span>
        </div>
      </div>
      <Button />
    </div>
  );
}

export default MatchItem;
