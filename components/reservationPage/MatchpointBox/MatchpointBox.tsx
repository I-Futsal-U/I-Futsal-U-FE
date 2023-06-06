import ReservationBoxItem from "./MatchpointBoxItem";

export default function MatchpointBox() {
  return (
    <>
      <section className="box-border w-full h-48 pt-4 mt-10 border-b-2">
        <div className="text-2xl font-semibold">매치포인트</div>
        <ReservationBoxItem />
      </section>
    </>
  );
}
