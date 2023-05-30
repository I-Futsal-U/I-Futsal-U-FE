import mockdata from "./mockdata.json";
import Image from "next/image";

export default function FieldDetail() {
  return (
    <>
      <div className="flex flex-row absolute z-50 ml-72">
        <div className="overflow-y-auto h-screen z-10 bg-gray-900 opacity-95 text-white w-72 relative pt-2">
          <Image src={mockdata.Field.image} alt="field image" />
          <div>
            <div id="match-collection">
              <div>오늘 가능한 경기만 모아봤어요!</div>
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
            </div>
            <div>
              <div>이 구장의 평균별점은 3.7/5점이에요!</div>
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
