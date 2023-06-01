interface MatchItemProps {
  children?: React.ReactNode;
}

function MatchItem({ children }: MatchItemProps) {
  return (
    <div className="flex py-3 items-center border-b border-solid border-gray-400">
      <span className="text-lg sm:text-xl px-2 sm:px-4">18:00</span>
      <div className="flex flex-col px-2 sm:px-4 overflow-hidden">
        <span className="text-base font-extrabold overflow-hidden whitespace-nowrap text-ellipsis">
          서울 피치푸마목동(홈플러스 목동점) 1구장
        </span>
        <div className="flex text-xs overflow-hidden">
          <span className="after:content-['·'] after:mx-0.5 sm:after:mx-1">
            남녀모두
          </span>
          <span className="after:content-['·'] after:mx-0.5 sm:after:mx-1">
            6vs6
          </span>
          <span className="after:content-['·'] after:mx-0.5 sm:after:mx-1">
            3파전
          </span>
          <span>모든 레벨</span>
        </div>
      </div>
      {children}
    </div>
  );
}

export default MatchItem;
