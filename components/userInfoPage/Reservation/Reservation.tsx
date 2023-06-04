import MatchItem from "@/components/common/MatchItem/MatchItem";

import Layout from "../layout";

function Reservation() {
  return (
    <Layout title="예약 목록" href="/userInfo/reservationDetail">
      <MatchItem />
      <MatchItem />
      <MatchItem />
    </Layout>
  );
}

export default Reservation;
