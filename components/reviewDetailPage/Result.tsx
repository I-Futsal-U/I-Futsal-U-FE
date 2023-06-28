import ReviewItem from "../common/Item/ReviewItem/ReviewItem";
import Layout from "../common/PeriodButtons/layout";

export default function Result() {
  return (
    <Layout title="검색 결과">
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </Layout>
  );
}
