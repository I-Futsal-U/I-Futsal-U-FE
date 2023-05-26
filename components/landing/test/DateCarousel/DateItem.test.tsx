import { render, screen } from "@testing-library/react";

import DateItem from "../../DateCarousel/DateItem";

describe("DateItem Test", () => {
  test("day가 문자열 `SUN`이면 빨간색 text", () => {
    render(<DateItem date={28} day="SUN" />);

    const button = screen.getByRole("button", { name: /SUN/ });
    expect(button).toHaveClass("text-red-600");
  });
  test("day가 문자열 `Sun`이 아니면 검정색 text", () => {
    render(<DateItem date={27} day="FRI" />);
    const button = screen.getByRole("button", { name: /FRI/ });
    expect(button).toHaveClass("text-black");
  });
  test("mouseover하면 배경은 파란색, text는 하얀색", () => {
    render(<DateItem date={27} day="FRI" />);
    const button = screen.getByRole("button", { name: /FRI/ });

    expect(button).toHaveClass("hover:bg-blue-500 hover:text-white");
  });

  /**나중에 추가되어야 할 기능 */
  test("선택된 날짜와 day가 같다면 배경은 파란색, text는 하얀색", () => {});
});
