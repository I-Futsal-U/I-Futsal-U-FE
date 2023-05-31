import LocalFieldsCarousel from "../../LocalFieldsCarousel/LocalFieldsCarousel";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("LocalFieldsCarousel test", () => {
  test("로딩중일 떄 Swiper가 렌더링 되지 않는다.", () => {
    const setStateMock = jest.fn();
    const useStateMock = () => [false, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock as jest.Mock);

    render(<LocalFieldsCarousel />);

    const LoadingDiv = screen.getByLabelText("when loading is false");
    expect(LoadingDiv).toBeInTheDocument();
  });
  test("로딩중이 끝나면 Swiper가 렌더링 된다.", () => {
    const setStateMock = jest.fn();
    const useStateMock = () => [true, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock as jest.Mock);

    render(<LocalFieldsCarousel />);

    const LoadedDiv = screen.getByLabelText("when loading is true");
    expect(LoadedDiv).toBeInTheDocument();
  });
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
