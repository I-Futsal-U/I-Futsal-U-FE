import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "./page";

function sampleFunction(a: number, b: number) {
  return a + b;
}

describe("sample Test", () => {
  test("Home Test", async () => {
    const user = userEvent.setup();

    render(<Home />);
    const text = screen.getByText(/app\/page/i);
    await user.click(text);
    expect(text).toBeInTheDocument();
  });

  test("Test Sample function", () => {
    expect(sampleFunction(1, 2)).toBe(3);
  });
});
