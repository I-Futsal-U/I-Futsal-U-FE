import { render, screen } from "@testing-library/react";

import MainItem from "../../MainCarousel/MainItem";

describe("MainItem test", () => {
  test("react", () => {
    const iconMock = () => <span data-testid="icon-mock" />;
    render(<MainItem icon={iconMock} />);

    const soccer = screen.getByTestId("icon-mock");
    expect(soccer).toBeInTheDocument();
  });
});
