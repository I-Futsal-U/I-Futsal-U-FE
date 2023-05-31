import MainCarousel from "../../MainCarousel/MainCarousel";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Main Carousel Test", () => {
  test("Carousel Slide가 렌더링된다.", () => {
    render(<MainCarousel />);

    const slide1 = screen.getByText("우리 모두 페어플레이해요!");
    const slide2 = screen.getByText("주변 풋살장을 찾아보세요.");
    expect(slide1).toBeInTheDocument();
    expect(slide2).toBeInTheDocument();
  });
  test("navigation 버튼이 렌더링 된다.", () => {
    render(<MainCarousel />);
    const prevButton = screen.getByTestId("prevBtn");
    const nextButton = screen.getByTestId("nextBtn");

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
  test("두번째 slide는 active, 첫번째 slide는 prev, next className을 갖는다.", async () => {
    const user = userEvent.setup();
    render(<MainCarousel />);

    const nextButton = screen.getByTestId("nextBtn");

    await user.click(nextButton);

    const initalSlide1 = screen.getByTestId("우리 모두 페어플레이해요!");
    const initalSlide2 = screen.getByTestId("주변 풋살장을 찾아보세요.");

    expect(initalSlide1).toHaveClass("swiper-slide-next");
    expect(initalSlide2).toHaveClass("swiper-slide-active");

    // bug, jsDOM환경에서 swiper-slide-active not working
  });
});
