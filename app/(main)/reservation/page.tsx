import MiddleBoxContainer from "@/components/reservationPage/MiddleBoxContainer/MiddleBoxContainer";
import ReservationFieldsCarousel from "@/components/reservationPage/ReservationFieldsCarousel/ReservationFieldsCarousel";

export default function reservationPage() {
  return (
    <>
      <ReservationFieldsCarousel />
      <MiddleBoxContainer />
    </>
  );
}
