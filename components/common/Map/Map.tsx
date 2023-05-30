import FieldDetail from "./FieldDetail";
import useKakaoMap from "@/util/useKakaoMap";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Map() {
  const [toggle, setToggle] = useState(false);
  const [listBoxActive, setListBoxActive] = useState(false);
  const [detailBoxActive, setDetailBoxActive] = useState(false);
  const listItems: { [key: string]: string }[] = useKakaoMap();

  const handleToggle = () => {
    setToggle((prev) => !prev);
    setListBoxActive((prev) => !prev);
  };
  const handleDetailboxOpen = () => {
    setDetailBoxActive(true);
  };
  const handleDetailboxClose = () => {
    setDetailBoxActive(false);
  };

  return (
    <>
      <div className="flex flex-row fixed z-50 inset-y-1/2 ml-4">
        {listItems.length === 0 || listBoxActive === false ? null : (
          <div
            onClick={handleToggle}
            className="z-50 bg-black hover:bg-slate-500 w-10 h-10 rounded-full relative flex items-center justify-center cursor-pointer"
          >
            <IoIosArrowForward className="text-white text-2xl absolute inset-0 m-auto" />
          </div>
        )}
      </div>
      <div className="flex flex-row fixed z-50">
        {toggle === false && listItems.length !== 0 ? (
          <div
            id="menu_wrap"
            className="overflow-y-auto h-screen z-10 bg-gray-900 opacity-95 text-white w-72 relative pt-2 border-r-2 border-zinc-600"
            style={{ maxHeight: "calc(100vh - 80px)" }}
          >
            <ul id="placesList" className="flex flex-col pt-10">
              <IoIosArrowBack
                onClick={handleToggle}
                className="cursor-pointer absolute end-5 top-2 w-7 h-7 text-white hover:text-gray-500 "
              />
              {listItems.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="py-6 px-5 border-t-2 border-zinc-600"
                    onClick={handleDetailboxOpen}
                  >
                    <div className="text-xl pb-1">{item?.place_name}</div>
                    <div className="text-sm pb-1">{item?.address_name}</div>
                    <div className="text-sm text-zinc-400">{item?.phone}</div>
                  </div>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="flex flex-row fixed">
        <div id="map" className="w-screen h-screen absolute top-0 left-0 z-0" />
      </div>
      {detailBoxActive === true ? (
        <FieldDetail toggle={handleDetailboxClose} />
      ) : null}
    </>
  );
}
