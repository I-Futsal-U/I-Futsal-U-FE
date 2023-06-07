interface Mockdata {
  time: string;
  field: string;
  address: string;
  star: string;
  fee: string;
}
export default function ReservationBoxItem({
  mockdata,
}: {
  mockdata: Mockdata;
}) {
  return (
    <>
      <section className="">
        <div className="text-lg font-medium">{mockdata.time}</div>
        <div className="text-xl mt-2">{mockdata.field}</div>
        <div className="text-sm text-stone-600">{mockdata.address}</div>
        <div className="text-sm mt-2">{mockdata.fee}</div>
        <button className="bg-sky-500 rounded-lg w-5/6 mt-10 ml-4 h-7 hover:bg-sky-700">
          신청하기
        </button>
      </section>
    </>
  );
}
