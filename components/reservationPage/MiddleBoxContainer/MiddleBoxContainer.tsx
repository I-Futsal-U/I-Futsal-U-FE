import FieldDataBox from "../FieldDataBox/FieldDataBox";
import MatchpointBox from "../MatchpointBox/MatchpointBox";
import ReservationBox from "../ReservationBox/ReservationBox";

export default function MiddleBoxContainer() {
  return (
    <div className="flex flex-row flex-nowrap justify-center  box-border">
      <section className="flex flex-row flex-wrap md:flex-nowrap justify-center w-full md:w-7/12 px-0 mx-10 md:mx-0">
        <div className="md:mr-52">
          <MatchpointBox />
          <FieldDataBox />
        </div>
        <ReservationBox />
      </section>
    </div>
  );
}
