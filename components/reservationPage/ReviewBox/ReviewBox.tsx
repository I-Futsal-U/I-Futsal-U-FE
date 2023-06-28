import { IoArrowRedoCircle } from "@react-icons/all-files/io5/IoArrowRedoCircle";

import RatingStar from "./RatingStar";

export default function ReviewBox() {
  return (
    <section className="flex flex-row justify-center mt-24 pb-10 mx-10 md:mx-0">
      <div className="relative w-full md:w-7/12 rounded-lg">
        <input type="text" className="w-full h-52 bg-slate-100 rounded-lg" />
        <button className="absolute bottom-2 right-2" type="button">
          <IoArrowRedoCircle className="w-10 h-10" />
        </button>
        <div className="absolute top-2 right-2 border-l-2 border-b-2 rounded-md p-2 border-blue-400">
          <RatingStar />
        </div>
      </div>
    </section>
  );
}
