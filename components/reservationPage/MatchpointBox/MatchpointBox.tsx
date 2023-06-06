import ReservationBoxItem from "./MatchpointBoxItem";

export default function MatchpointBox() {
  return (
    <>
      <section className="box-border w-4/12 h-48 pt-4 mt-10 border-b-2 mr-40">
        <div className="text-2xl font-semibold">매치포인트</div>
        <ReservationBoxItem />
      </section>
    </>
  );
}
