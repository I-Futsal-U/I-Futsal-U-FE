import MatchItem from "@/components/layout/MatchItem/MatchItem";

import Layout from "../layout";

function Reservation() {
  return (
    <Layout title="예약 목록" href="/myPage/reservation">
      <MatchItem />
      <MatchItem />
      <MatchItem />
    </Layout>
  );
}

export default Reservation;
