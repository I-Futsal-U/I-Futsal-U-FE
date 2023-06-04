interface MyPageLayoutProps {
  children: React.ReactNode;
}

function MyPageLayout({ children }: MyPageLayoutProps) {
  return <div className="p-7">{children}</div>;
}

export default MyPageLayout;
