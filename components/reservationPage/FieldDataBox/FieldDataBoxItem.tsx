export default function FieldDataBoxItem() {
  return (
    <>
      <ul>
        <div className="text-lg font-medium mb-3">매치 규칙</div>
        <li>모든 파울은 사이드라인에서 킥인 골키퍼에게 백패스 가능</li>
        <li>손으로는 잡으면 안돼요 사람을 향한 태클 금지</li>
      </ul>
      <ul className="mt-5">
        <div className="text-lg font-medium mb-3">진행 방식</div>
        <li>풋살화와 개인 음료만 준비하세요 매니저가 경기 진행을 도와드려요</li>
        <li>
          골키퍼와 휴식을 공평하게 돌아가면서 해요 레벨 데이터를 기준으로 팀을
          나눠요
        </li>
        <li>친구끼리 와도 팀 실력이 맞지 않으면 다른 팀이 될 수 있어요</li>
      </ul>
      <ul className="mt-5">
        <div className="text-lg font-medium mb-3">알아두면 좋아요</div>
        <li>
          서로 존중하고 격려하며 함께 즐겨요 플랩 평균 레벨은 아마추어2예요{" "}
        </li>
        <li>플랩에서는 하루 평균 180경기가 진행되고 있어요</li>
        <li>매일 3,000여명이 팀 없이도 풋살을 즐기고 있어요</li>
      </ul>
    </>
  );
}
