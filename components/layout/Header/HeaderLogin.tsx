"use client";

import Link from "next/link";

export default function HeaderLogin() {
  return (
    <>
      {/* 로그인페이지 생기면 router.push의 path 변경하겠습니다. */}
      <Link
        href="/"
        className="bg-black text-white text-center rounded-full  text-xs md:text-base w-16 md:w-24  md:h-1/2  py-3 md:py-2 mr-10 md:mr-32 hover:bg-blue-900"
      >
        로그인
      </Link>
    </>
  );
}
