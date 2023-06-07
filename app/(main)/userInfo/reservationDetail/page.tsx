import Calendar from "@/components/common/Calendar/Calendar";
import Result from "@/components/reservationDetailPage/Result";

function ReservationDetailPage() {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <Calendar />
      <Result />
    </div>
  );
}

export default ReservationDetailPage;
