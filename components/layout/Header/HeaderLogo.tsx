"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import useViewportTracker from "@/util/useViewportTracker";

import logo from "../../../public/images/logo.png";

export default function HeaderLogo() {
  const router = useRouter();
  const viewportWidth = useViewportTracker();

  return (
    <div className="cursor-pointer ml-8">
      {viewportWidth < 768 ? null : (
        <Image
          src={logo}
          alt="Header logo"
          width={180}
          height={50}
          onClick={() => router.push("/")}
        />
      )}
    </div>
  );
}
