import Modal from "./Modal";
import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";

jest.mock("next/navigation");
describe("Modal test", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("적용하기 버튼을 클릭하면 A함수를 호출한다", () => {
    // 추후 추가 예정
  });
  test("모달 바깥 영역을 클릭하면 closeModal 함수가 호출되어야 합니다", async () => {
    const user = UserEvent.setup();

    const closeModalMock = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      back: closeModalMock,
    }));

    render(
      <Modal>
        <div>모달 내용</div>
      </Modal>,
    );

    const modalOverlay = screen.getByTestId("modal-overlay");
    await user.click(modalOverlay);

    expect(closeModalMock).toHaveBeenCalledTimes(1);
  });
  test("모달 안 영역을 클릭하면 closeModal 함수가 호출되지 않아야 합니다", async () => {
    const user = UserEvent.setup();
    const closeModalMock = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      back: closeModalMock,
    }));

    render(
      <Modal>
        <div>모달 내용</div>
      </Modal>,
    );

    const modalContent = screen.getByTestId("modal-content");
    await user.click(modalContent);

    expect(closeModalMock).not.toHaveBeenCalled();
  });
});
