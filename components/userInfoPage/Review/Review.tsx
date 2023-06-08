import ReviewItem from "../../common/Item/ReviewItem/ReviewItem";
import Layout from "../layout";

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
