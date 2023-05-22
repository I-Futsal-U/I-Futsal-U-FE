import Header from "@/components/layout/Header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="w-screen pt-20">{children}</main>
    </>
  );
}
