import { render } from "@testing-library/react";

import MatchList from "@/components/landingPage/Schedules/Matches/MatchList";

describe("MatchList test", () => {
  test("MatchList 렌더링 테스트", () => {
    render(<MatchList />);
  });
});
