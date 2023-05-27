import { render, screen } from "@testing-library/react";

import Button from "@/components/landing/Schedules/SearchOptions/Button";

// 기능 완성 후, 작성 예정

describe("SearchOptions Button test", () => {
  test("SearchOptions 성별 검색 Button", () => {
    render(<Button text="성별" />);
  });
  test("SearchOptions 레벨 검색 Button", () => {
    render(<Button text="레벨" />);
  });
});
