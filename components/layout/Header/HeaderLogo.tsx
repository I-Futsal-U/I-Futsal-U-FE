"use client";

import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeaderLogo() {
  const router = useRouter();

  // 뷰포트사이즈 감지 이벤트핸들러
  const [viewportWidth, setViewportWidth] = useState(0);
  useEffect(() => {
    function handleViewportChange() {
      setViewportWidth(window.innerWidth);
    }
    if (typeof window !== "undefined") {
      setViewportWidth(window.innerWidth);
      window.addEventListener("resize", handleViewportChange);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleViewportChange);
      }
    };
  }, []);

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
