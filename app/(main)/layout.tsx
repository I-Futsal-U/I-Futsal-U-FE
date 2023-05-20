import Header from "@/components/layout/Header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="w-screen mt-20">{children}</main>
    </>
  );
}
