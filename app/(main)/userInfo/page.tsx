import AssignedMatches from "@/components/userInfoPage/AssignedMatches/AssignedMatches";
import Payments from "@/components/userInfoPage/Payments/Payments";
import Profile from "@/components/userInfoPage/Profile/Profile";
import Reservation from "@/components/userInfoPage/Reservation/Reservation";
import Review from "@/components/userInfoPage/Review/Review";

export default function UserInfoPage() {
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
