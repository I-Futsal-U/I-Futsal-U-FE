import { render, screen } from "@testing-library/react";
import React, { useState } from "react";

import DateCarousel from "../../DateCarousel/DateCarousel";
import type {
  DAY_TYPE,
  MONTH_TYPE,
} from "../../DateCarousel/hooks/useCreateDates";

jest.mock("../../DateCarousel/hooks/useCreateDates", () => ({
  ...jest.requireActual("../../DateCarousel/hooks/useCreateDates"),
  useCreateDates: jest.fn().mockImplementation(() => {
    const DATE = new Date();
    const dates = [];

    for (let i = 0; i < 2 * 7; i++) {
      const TMP = new Date(
        DATE.getFullYear(),
        DATE.getMonth() as MONTH_TYPE,
        i + DATE.getDate(),
      );
      dates.push({
        month: TMP.getMonth() as MONTH_TYPE,
        date: TMP.getDate(),
        day: TMP.getDay() as DAY_TYPE,
      });
    }
    return [dates];
  }),
}));

describe("DateCarousel Test", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test("로딩중일 떄 Swiper가 렌더링 되지 않는다.", () => {
    const setStateMock = jest.fn();
    const useStateMock = () => [false, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock as jest.Mock);

    render(<DateCarousel />);

    const LoadingDiv = screen.getByLabelText("when loading is false");
    expect(LoadingDiv).toBeInTheDocument();
  });
  test("로딩중이 끝나면 Swiper가 렌더링 된다.", () => {
    const setStateMock = jest.fn();
    const useStateMock = () => [true, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock as jest.Mock);

    render(<DateCarousel />);

    const LoadedDiv = screen.getByLabelText("when loading is true");
    expect(LoadedDiv).toBeInTheDocument();
  });
  test("Swiper slide가 배열 길이만큼 렌더링 된다", () => {
    const setStateMock = jest.fn();
    const useStateMock = () => [true, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock as jest.Mock);

    render(<DateCarousel />);
    const SwiperSlides = screen.getAllByLabelText("carousel slide");
    expect(SwiperSlides).toHaveLength(14);
  });
  test("Navigation 버튼이 렌더링된다.", () => {
    render(<DateCarousel />);
    const prevButton = screen.getByTestId("prevBtn");
    const nextButton = screen.getByTestId("nextBtn");

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  /**추가되어야 할 기능 */
  test("날짜 클릭하면 해당 날짜 경기 정보를 가져온다", () => {
    /**추가되어야 할 기능 */
  });
});
