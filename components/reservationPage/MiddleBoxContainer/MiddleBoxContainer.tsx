import MatchpointBox from "../MatchpointBox/MatchpointBox";
import ReservationBox from "../ReservationBox/ReservationBox";

export default function MiddleBoxContainer() {
  return (
    <>
      <section className="flex flex-row flex-wrap md:flex-nowrap justify-center">
        <MatchpointBox />
        <ReservationBox />
      </section>
    </>
  );
}
