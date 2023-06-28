import mockdata from "../mockdata.json";

export default function ReservationBox() {
  const data = mockdata.Field.reservationdata;

  return (
    <div className="box-border border border-neutral-400 rounded-xl h-64 pt-4 mt-10 px-5 shadow-xl">
      <div className="text-lg font-medium">{data.time}</div>
      <div className="text-xl mt-2">{data.field}</div>
      <div className="text-sm text-stone-600">{data.address}</div>
      <div className="text-sm mt-2">{data.fee}</div>
      <button
        className="bg-sky-500 rounded-lg w-5/6 mt-10 ml-4 h-7 hover:bg-sky-700"
        type="button"
      >
        신청하기
      </button>
    </div>
  );
}
