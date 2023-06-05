import ReservationBoxItem from "./MatchpointBoxItem";

export default function MatchpointBox() {
  return (
    <>
      <section className="border-2 border-solid border-gray-800 rounded-xl w-96 md:w-2/6 h-64 md:ml-20 pl-6 pt-4">
        <div className="text-xl font-semibold">매치포인트</div>
        <ReservationBoxItem />
      </section>
    </>
  );
}
