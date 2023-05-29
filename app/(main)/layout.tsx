import Header from "@/components/layout/Header/Header";

export default async function RootLayout({
  children,
  landing,
}: {
  children: React.ReactNode;
  landing: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="w-screen pt-20">
        {children}
        {landing}
      </main>
    </>
  );
}
