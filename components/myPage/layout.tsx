"use client";

import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  href?: string;
}

function Layout({ children, title, href }: LayoutProps) {
  return (
    <section className="w-full p-4 border-2 border-solid border-blue-300 rounded-2xl shadow-md my-8">
      <div className="flex">
        <h2 className="mb-5 font-extrabold text-xl">{title}</h2>
        {href && (
          <Link href={href} className="ml-auto text-sm">
            <span>전체보기</span>
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

export default Layout;
