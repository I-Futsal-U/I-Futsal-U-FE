import Layout from "./layout";

interface ResultProps {
  children: React.ReactNode;
}

function Results({ children }: ResultProps) {
  return <Layout title="검색결과">{children}</Layout>;
}

export default Results;
