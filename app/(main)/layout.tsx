import Header from "@/components/common/Header/Header";
import initMockAPI from "@/mocks";
export default async function RootLayout({
  children,
  landing,
}: {
  children: React.ReactNode;
  landing: React.ReactNode;
}) {
  if (process.env.NODE_ENV === "test") {
    initMockAPI();
  }
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
