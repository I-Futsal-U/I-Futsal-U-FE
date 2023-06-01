import AssignedMatches from "@/components/myPage/AssignedMatches/AssignedMatches";
import Profile from "@/components/myPage/Profile/Profile";
import Reservation from "@/components/myPage/Reservation/Reservation";
import Review from "@/components/myPage/Review/Review";

function MyPage() {
  return (
    <div className="p-7">
      <Profile />
      <Review />
      <Reservation />
      <AssignedMatches />
    </div>
  );
}

export default MyPage;
