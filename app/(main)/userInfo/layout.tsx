interface MyPageLayoutProps {
  children: React.ReactNode;
}

export default function MyPageLayout({ children }: MyPageLayoutProps) {
  return <div className="p-7">{children}</div>;
}
