"use client";

import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { useState } from "react";

import useKakaoMap from "@/util/useKakaoMap";
import useViewportTracker from "@/util/useViewportTracker";

import FieldDetail from "./FieldDetail";
import PlaceList from "./PlaceList";

export default function Map() {
  const [toggle, setToggle] = useState(false);
  const [listBoxActive, setListBoxActive] = useState(false);
  const [detailBoxActive, setDetailBoxActive] = useState(false);
  const listItems: { [key: string]: string }[] = useKakaoMap();
  const viewportWidth = useViewportTracker();

  const handleToggle = () => {
    setToggle((prev) => !prev);
    setListBoxActive((prev) => !prev);
    setDetailBoxActive(false);
  };
  const handleDetailboxOpen = () => {
    setDetailBoxActive(true);
  };
  const handleDetailboxClose = () => {
    setDetailBoxActive(false);
  };

  const mobile =
    toggle === false &&
    listItems.length !== 0 &&
    viewportWidth < 768 &&
    detailBoxActive === false;
  const mobile2 =
    toggle === false && listItems.length !== 0 && viewportWidth > 768;

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
      <div className="flex flex-row fixed z-50 top-96 md:top-20">
        {mobile || mobile2 ? (
          <div
            id="menu_wrap"
            className="overflow-y-auto h-screen z-10 bg-gray-900 opacity-95 text-white w-screen md:w-72 relative pt-2 border-r-2 border-zinc-600"
            style={{ maxHeight: "calc(100vh - 80px)" }}
          >
            <ul id="placesList" className="flex flex-col pt-10">
              <IoIosArrowBack
                onClick={handleToggle}
                className="cursor-pointer absolute end-5 top-2 w-7 h-7 text-white hover:text-gray-500 "
              />
              <PlaceList listItems={listItems} toggle={handleDetailboxOpen} />
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
