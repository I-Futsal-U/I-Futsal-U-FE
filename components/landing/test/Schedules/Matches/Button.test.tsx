import { render, screen } from "@testing-library/react";

import Button from "@/components/landing/Schedules/Matches/Button";
// 기능 완성 후, 작성 예정

describe("MatchItem Button test", () => {
  test("MatchItem Button(신청 가능) 테스트", () => {
    render(<Button />);
  });
  test("MatchItem Button(마감임박) 테스트", () => {
    render(<Button />);
  });
  test("MatchItem Button(마감)) 테스트", () => {
    render(<Button />);
  });
});
