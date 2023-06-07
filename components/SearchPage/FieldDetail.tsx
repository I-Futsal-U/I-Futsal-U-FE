import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import Image from "next/image";

import logo from "../../public/images/logo.png";
import mockdata from "./mockdata.json";

type HandleDetailboxClose = () => void;
interface ComponentProps {
  toggle: HandleDetailboxClose;
}

export default function FieldDetail({ toggle }: ComponentProps) {
  return (
    <>
      <div className="fixed flex flex-row justify-center z-40 md:ml-72  md:border-r-4 border-zinc-600 overflow-y-auto h-screen bg-gray-900 opacity-95 text-white w-screen md:w-80 pt-2 ">
        <IoMdClose
          className="z-50 cursor-pointer absolute end-5 top-2 w-7 h-7 text-white hover:text-gray-500 "
          onClick={toggle}
        />
        <div
          id="menu_wrap"
          className="overflow-y-auto h-screen z-10 bg-gray-900 opacity-95 text-white relative pt-10"
          style={{ maxHeight: "calc(100vh - 80px)" }}
        >
          <div id="placesList" className="flex flex-col pt-6 px-5">
            <Image
              src={logo}
              width={200}
              height={200}
              alt="field image"
            ></Image>
            <div className="">
              <div className="flex flex-row justify-center items-center mt-12 mb-6 bg-white text-black h-8 rounded-2xl ">
                오늘 가능한 경기만 모아봤어요!
              </div>
              <div>
                {mockdata.Field.map((item) => {
                  return (
                    <div key={item.id}>
                      <div>{item.field}</div>
                      <div>{item.time}</div>
                      <div>{item.number_of_people}</div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-row justify-center items-center  mt-12 mb-6 bg-white text-black h-8 rounded-2xl">
                이 구장의 평균별점은 3.7/5점이에요!
              </div>
              <div>
                {mockdata.review.map((item) => {
                  return (
                    <div key={item.id}>
                      <div>{item.user_nickname}</div>
                      <div>{item.star}</div>
                      <div>{item.content}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
