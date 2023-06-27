import PaymentsItem from "../common/Item/PaymentsItem/PaymentsItem";
import Layout from "../common/PeriodButtons/layout";

export default function Result() {
  return (
    <Layout title="검색 결과">
      <PaymentsItem />
      <PaymentsItem />
    </Layout>
  );
}
