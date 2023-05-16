import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "./page";

describe("sample Test", () => {
  test("Home Test", async () => {
    const user = userEvent.setup();

    render(<Home />);
    const text = screen.getByText(/app\/page/i);
    await user.click(text);
    expect(text).toBeInTheDocument();
  });
});
