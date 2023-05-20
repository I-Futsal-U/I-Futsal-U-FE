import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";

import ReactQuery from "@/components/provider/ReactQuery";
config.autoAddCss = false;

export const metadata = {
  title: "I·Futsal·U",
  description: "서울시 풋살매칭서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko-KR">
      <body>
        <ReactQuery>{children}</ReactQuery>
      </body>
    </html>
  );
}
