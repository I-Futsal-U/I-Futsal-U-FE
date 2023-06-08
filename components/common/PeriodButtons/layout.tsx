interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

function Layout({ children, title }: LayoutProps) {
  return (
    <section className="flex-grow border-2 border-solid rounded-xl p-3 mb-5">
      <h2 className="mb-3 text-xl font-extrabold">{title}</h2>
      {children}
    </section>
  );
}

export default Layout;
