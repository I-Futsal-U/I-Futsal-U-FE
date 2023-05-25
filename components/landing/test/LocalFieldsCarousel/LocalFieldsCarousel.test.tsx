import { getByLabelText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LocalFieldsCarousel from "../../LocalFieldsCarousel/LocalFieldsCarousel";

describe("LocalFieldsCarousel test", () => {
  test("Swiper Slide가 렌더링된다.", () => {
    render(<LocalFieldsCarousel />);
    const slides = screen.getAllByLabelText("carousel slide");
    expect(slides).toHaveLength(6);
  });
  test("Navigation 버튼이 렌더링된다.", () => {
    render(<LocalFieldsCarousel />);
    const prevButton = screen.getByTestId("prevBtn");
    const nextButton = screen.getByTestId("nextBtn");

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
  test("Swiper Slide는 className으로 swiper-slide를 갖는다.", async () => {
    const user = userEvent.setup();
    render(<LocalFieldsCarousel />);

    const nextButton = screen.getByTestId("nextBtn");

    await user.click(nextButton);

    const slides = screen.getAllByLabelText("carousel slide");

    expect(slides[4]).toHaveClass("swiper-slide");
    expect(slides[1]).toHaveClass("swiper-slide");

    // bug, jsDOM환경에서 swiper-slide-active not working
  });
});
