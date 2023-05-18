"use client";

import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeaderLogo() {
  const router = useRouter();

  return (
    <div className="cursor-pointer">
      <Image
        src={logo}
        alt="Header logo"
        width={250}
        height={85.85}
        onClick={() => router.push("/")}
      />
    </div>
  );
}
