import MiddleBoxContainer from "@/components/reservationPage/MiddleBoxContainer/MiddleBoxContainer";
import ReservationFieldsCarousel from "@/components/reservationPage/ReservationFieldsCarousel/ReservationFieldsCarousel";
import ReviewBox from "@/components/reservationPage/ReviewBox/ReviewBox";

export default function reservationPage() {
  return (
    <>
      <ReservationFieldsCarousel />
      <MiddleBoxContainer />
      <ReviewBox />
    </>
  );
}
