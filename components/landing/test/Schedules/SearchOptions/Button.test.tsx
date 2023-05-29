import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";

import Button from "@/components/landing/Schedules/SearchOptions/Button";

// 기능 완성 후, 작성 예정
jest.mock("next/navigation");
describe("SearchOptions Button test", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("button을 클릭하면, useRouter().push(href)가 호출된다.", async () => {
    const user = UserEvent.setup();
    const pushMock = jest.fn((href: string) => ({ href }));

    (useRouter as jest.Mock).mockImplementation(() => ({
      push: (href: string) => pushMock(href),
    }));

    render(<Button text="성별" href="/sex" />);

    const button = screen.getByRole("button", { name: "성별" });
    await user.click(button);

    expect(pushMock).toHaveBeenCalledWith("/sex");
  });
  test("href에 아무것도 넣지 않으면 버튼 클릭 시, useRouter().push('/')가 호출된다.", async () => {
    const user = UserEvent.setup();
    const pushMock = jest.fn((href: string) => ({ href }));

    (useRouter as jest.Mock).mockImplementation(() => ({
      push: (href: string) => pushMock(href),
    }));
    render(<Button text="레벨" />);

    const button = screen.getByRole("button", { name: "레벨" });
    await user.click(button);

    expect(pushMock).toHaveBeenCalledWith("/");
  });
});
