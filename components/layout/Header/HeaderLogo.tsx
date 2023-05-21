"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import logo from "../../../public/images/logo.png";

export default function HeaderLogo() {
  const router = useRouter();

  // 뷰포트사이즈 감지 이벤트핸들러
  const [viewportWidth, setViewportWidth] = useState(0);
  useEffect(() => {
    setViewportWidth(window.innerWidth);

    function handleViewportChange() {
      setViewportWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleViewportChange);
    // 컴포넌트 언마운트 시 이벤트 핸들러 제거
    return () => {
      window.removeEventListener("resize", handleViewportChange);
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
