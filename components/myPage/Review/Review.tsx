import Layout from "../layout";
import ReviewItem from "./ReviewItem";

function Review() {
  return (
    <Layout title="나의 리뷰" href="/myPage/review">
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </Layout>
  );
}

export default Review;
