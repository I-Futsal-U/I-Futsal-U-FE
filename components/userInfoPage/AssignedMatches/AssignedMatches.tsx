import MatchItem from "@/components/common/Item/MatchItem/MatchItem";

import Layout from "../layout";
import Button from "./Button";

function AssignedMatches() {
  return (
    <Layout title="배정된 경기 목록" href="/userInfo/assignedDetail">
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
