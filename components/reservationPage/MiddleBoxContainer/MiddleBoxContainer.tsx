import FieldDataBox from "../FieldDataBox/FieldDataBox";
import MatchpointBox from "../MatchpointBox/MatchpointBox";
import ReservationBox from "../ReservationBox/ReservationBox";

export default function MiddleBoxContainer() {
  return (
    <>
      <section className="flex flex-row flex-wrap md:flex-nowrap justify-center">
        <div className="w-full md:w-1/4 ml-2 md:mr-72 ">
          <MatchpointBox />
          <FieldDataBox />
        </div>
        <ReservationBox />
      </section>
    </>
  );
}
