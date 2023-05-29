import { render, screen } from "@testing-library/react";

import Schedules from "../../Schedules/Schedules";

// 기능 완성 후, 작성 예정
jest.mock("next/navigation");
describe("Schedules test", () => {
  test("Schedules 렌더링 테스트", () => {
    render(<Schedules />);
  });
});
