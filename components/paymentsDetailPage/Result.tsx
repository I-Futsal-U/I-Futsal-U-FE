import PaymentsItem from "../common/Item/PaymentsItem/PaymentsItem";
import Layout from "../common/PeriodButtons/layout";

function Result() {
  return (
    <Layout title="검색 결과">
      <PaymentsItem />
      <PaymentsItem />
    </Layout>
  );
}
export default Result;
