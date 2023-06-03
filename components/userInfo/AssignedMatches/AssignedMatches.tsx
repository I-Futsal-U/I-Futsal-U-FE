import MatchItem from "@/components/layout/MatchItem/MatchItem";

import Layout from "../layout";
import Button from "./Button";

function AssignedMatches() {
  return (
    <Layout title="배정된 경기 목록" href="/myPage/assigned">
      <MatchItem>
        <Button />
      </MatchItem>
      <MatchItem>
        <Button />
      </MatchItem>
    </Layout>
  );
}

export default AssignedMatches;
