import ReservationBoxItem from "./ReservationBoxItem";

export default function ReservationBox() {
  return (
    <>
      <section className="box-border border border-neutral-400 rounded-xl w-3/12 md:w-2/12 h-64 pt-4 mt-10 pl-5 shadow-2xl sticky">
        <ReservationBoxItem />
      </section>
    </>
  );
}
