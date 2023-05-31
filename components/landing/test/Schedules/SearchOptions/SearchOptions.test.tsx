import SearchOptions from "../../../Schedules/SearchOptions/SearchOptions";
import { render } from "@testing-library/react";

// 기능 완성 후, 작성 예정
jest.mock("next/navigation");

describe("SearchOptions test", () => {
  test("SearchOptions 렌더링 테스트", () => {
    render(<SearchOptions />);
  });
});
