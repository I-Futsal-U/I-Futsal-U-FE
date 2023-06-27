"use client";

import { useRouter } from "next/navigation";

interface ButtonProps {
  text: string;
  href?: string;
}

export default function Button({ text, href = "/" }: ButtonProps) {
  const router = useRouter();

  const handleLink = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <button
      type="button"
      className="h-10 border-solid border-2 border-gray-200 rounded-3xl px-4 py-1 mx-1 font-extrabold"
      onClick={handleLink}
    >
      <span>{text}</span>
    </button>
  );
}
