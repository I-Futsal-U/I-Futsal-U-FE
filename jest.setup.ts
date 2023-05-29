import "@testing-library/jest-dom/extend-expect";
jest.mock("swiper/css", jest.fn());
afterEach(() => {
  jest.clearAllMocks();
});
