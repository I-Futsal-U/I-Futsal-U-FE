import { render, screen } from "@testing-library/react";

import MainCarousel from "../../MainCarousel/MainCarousel";

jest.mock("swiper/css", jest.fn());

describe("Main Carousel Test", () => {
  test("", () => {
    render(<MainCarousel />);
  });
});
