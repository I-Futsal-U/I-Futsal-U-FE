import { render, screen } from "@testing-library/react";

import MainItem from "../../MainCarousel/MainItem";

describe("MainItem test", () => {
  test("react", () => {
    const iconMock = () => <span data-testid="icon-mock" />;
    render(<MainItem icon={iconMock} text="테스트" />);

    const soccer = screen.getByTestId("icon-mock");
    const text = screen.getByText("테스트");

    expect(soccer).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
