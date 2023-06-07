import mockdata from "../mockdata.json";
import ReservationBoxItem from "./ReservationBoxItem";

export default function ReservationBox() {
  const data = mockdata.Field.reservationdata;

  return (
    <>
      <div className="box-border border border-neutral-400 rounded-xl w-80 h-64 pt-4 mt-10 pl-5 shadow-xl">
        <ReservationBoxItem mockdata={data} />
      </div>
    </>
  );
}
