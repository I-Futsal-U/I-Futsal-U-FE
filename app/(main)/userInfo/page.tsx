import AssignedMatches from "@/components/userInfo/AssignedMatches/AssignedMatches";
import Payments from "@/components/userInfo/Payments/Payments";
import Profile from "@/components/userInfo/Profile/Profile";
import Reservation from "@/components/userInfo/Reservation/Reservation";
import Review from "@/components/userInfo/Review/Review";

function UserInfoPage() {
  return (
    <>
      <Profile />
      <Payments />
      <Review />
      <Reservation />
      <AssignedMatches />
    </>
  );
}

export default UserInfoPage;
