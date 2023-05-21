import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MainCarousel from "../../MainCarousel/MainCarousel";

describe("Main Carousel Test", () => {
  test("Carousel Slide가 렌더링된다.", () => {
    render(<MainCarousel />);

    const slide1 = screen.getByText("우리 모두 페어플레이해요!");
    const slide2 = screen.getByText("주변 풋살장을 찾아보세요.");
    expect(slide1).toBeInTheDocument();
    expect(slide2).toBeInTheDocument();
  });
  test("navigation 버튼이 렌더링 된다.", async () => {
    const user = userEvent.setup();

    render(<MainCarousel />);
    const prevButton = screen.getByTestId("prevBtn");
    const nextButton = screen.getByTestId("nextBtn");

    await user.click(nextButton);
    await user.click(prevButton);

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
  test("next, prev slide로 Navigate된다.", async () => {
    const user = userEvent.setup();
    render(<MainCarousel />);

    const nextButton = screen.getByTestId("nextBtn");

    await user.click(nextButton);
    const activeSlide1 = screen.getByTestId("우리 모두 페어플레이해요!");
    const activeSlide2 = screen.getByText("주변 풋살장을 찾아보세요.");
    // expect(activeSlide1).toHaveClass("swiper-slide-active");
    // bug, jsDOM환경에서 swiper-slide-active가 생성되지 않음
    // https://github.com/nolimits4web/swiper/issues/5722
    expect(activeSlide1).toBeInTheDocument();
    expect(activeSlide2).toBeInTheDocument();
  });
});
