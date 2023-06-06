import mockdata from "../mockdata.json";
import ReservationBoxItem from "./ReservationBoxItem";

export default function ReservationBox() {
  const data = mockdata.Field.reservationdata;

  return (
    <>
      <section className="box-border border border-neutral-400 rounded-xl w-2/12 h-64 pt-4 mt-10 pl-5 shadow-2xl sticky">
        <ReservationBoxItem mockdata={data} />
      </section>
    </>
  );
}
