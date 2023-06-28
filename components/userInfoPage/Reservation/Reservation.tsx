import MatchItem from "@/components/common/Item/MatchItem/MatchItem";

import Layout from "../layout";

export default function Reservation() {
  return (
    <Layout title="예약 목록" href="/userInfo/reservationDetail">
      <MatchItem />
      <MatchItem />
      <MatchItem />
    </Layout>
  );
}
