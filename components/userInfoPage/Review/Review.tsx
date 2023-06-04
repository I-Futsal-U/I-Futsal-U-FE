import Layout from "../layout";
import ReviewItem from "./ReviewItem";

function Review() {
  return (
    <Layout title="나의 리뷰" href="/userInfo/reviewDetail">
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </Layout>
  );
}

export default Review;
