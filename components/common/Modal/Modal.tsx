import { GrClose } from "@react-icons/all-files/gr/GrClose";
import { useRouter } from "next/navigation";

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();

  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.back();
  };
  return (
    <div
      data-testid="modal-overlay"
      className="fixed z-20 top-0 w-screen h-screen bg-black/70"
      onClick={closeModal}
    >
      <div
        data-testid="modal-content"
        className="relative top-0 md:top-1/2 md:-translate-y-1/2 w-full md:max-w-md bg-white p-4 mx-auto md:rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-3 right-4"
        >
          <GrClose />
        </button>
        {children}
        <div className="w-full text-center">
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 mx-auto w-36 h-11 rounded-xl"
            onClick={closeModal}
          >
            적용하기
          </button>
        </div>
      </div>
    </div>
  );
}
