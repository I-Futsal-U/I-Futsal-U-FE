import temporarydata from "./temporarydata.json";
import { QueryCache, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

interface PlaceSearch {
  data: { [key: string]: string }[];
  status: string | null;
  pagination: number;
}

export default function Map() {
  const { data: inputValue } = useQuery({
    queryKey: ["inputValue"],
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
  console.log(inputValue);

  const [listItems, setListItems] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [listBoxActive, setListBoxActive] = useState(true);

  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(mapScript);
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        let markers = [];
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.541, 126.986),
          level: 5,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        const mapTypeControl = new window.kakao.maps.MapTypeControl();
        map.addControl(
          mapTypeControl,
          window.kakao.maps.ControlPosition.TOPRIGHT,
        );

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        const zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
        const positions = temporarydata.DATA.map((item) => ({
          title: item.svcnm,
          latlng: new window.kakao.maps.LatLng(item.y, item.x),
        }));

        // 검색관련 객체 및 함수 생성부분입니다.
        const ps = new window.kakao.maps.services.Places();
        if (inputValue) {
          ps.keywordSearch(inputValue, placesSearchCB);
        }
        function placesSearchCB(
          data: PlaceSearch["data"],
          status: PlaceSearch["status"],
          pagination: PlaceSearch["pagination"],
        ) {
          if (status === window.kakao.maps.services.Status.OK) {
            // 정상적으로 검색이 완료됐으면
            // 검색 목록과 마커를 표출합니다
            displayPlaces(data);
            setListItems(data);

            // 페이지 번호를 표출합니다
          } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
            alert("검색 결과가 존재하지 않습니다.");
            return;
          } else if (status === window.kakao.maps.services.Status.ERROR) {
            alert("검색 결과 중 오류가 발생했습니다.");
            return;
          }
        }

        // 검색 결과 목록과 마커를 표출하는 함수입니다
        function displayPlaces(places) {
          const fragment = document.createDocumentFragment(),
            bounds = new window.kakao.maps.LatLngBounds(),
            listStr = "";

          // 지도에 표시되고 있는 마커를 제거합니다
          removeMarker();

          for (let i = 0; i < places.length; i++) {
            // 마커를 생성하고 지도에 표시합니다
            const placePosition = new window.kakao.maps.LatLng(
                places[i].y,
                places[i].x,
              ),
              marker = addMarker(placePosition, i);

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            bounds.extend(placePosition);
          }

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        }

        // 마커를 생성하고 지우는 함수들입니다.
        function addMarker(position, idx, title) {
          const imageSrc =
              "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
            imageSize = new window.kakao.maps.Size(24, 35), // 마커 이미지의 크기
            markerImage = new window.kakao.maps.MarkerImage(
              imageSrc,
              imageSize,
            ),
            marker = new window.kakao.maps.Marker({
              position: position, // 마커의 위치
              image: markerImage,
            });

          marker.setMap(map); // 지도 위에 마커를 표출합니다
          markers.push(marker); // 배열에 생성된 마커를 추가합니다

          return marker;
        }
        function removeMarker() {
          for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
          }
          markers = [];
        }
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, [inputValue]);

  const handleToggle = () => {
    setToggle((prev) => !prev);
    setListBoxActive((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-row fixed z-50 inset-y-1/2 ml-4">
        {listItems.length === 0 || listBoxActive === true ? null : (
          <div
            onClick={handleToggle}
            className="z-50 bg-black hover:bg-slate-500 w-10 h-10 rounded-full relative flex items-center justify-center cursor-pointer"
          >
            <IoIosArrowForward className="text-white text-2xl absolute inset-0 m-auto" />
          </div>
        )}
      </div>
      <div className="flex flex-row fixed z-50">
        {toggle === true && listItems.length !== 0 ? (
          <div
            id="menu_wrap"
            className="overflow-y-auto h-screen z-10 bg-gray-900 opacity-95 text-white w-72 relative pt-2"
            style={{ maxHeight: "calc(100vh - 80px)" }}
          >
            <ul id="placesList" className="flex flex-col pt-10">
              <IoIosArrowBack
                onClick={handleToggle}
                className="cursor-pointer absolute end-5 top-2 w-7 h-7 text-white hover:text-gray-500 "
              />
              {listItems.map((item) => {
                return (
                  <li
                    key={item.id}
                    className=" py-6 px-5 border-t-2 border-zinc-600"
                  >
                    <div className="text-xl pb-1">{item?.place_name}</div>
                    <div className="text-sm pb-1">{item?.address_name}</div>
                    <div className="text-sm text-zinc-400">{item?.phone}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="flex flex-row fixed">
        <div id="map" className="w-screen h-screen absolute top-0 left-0 z-0" />
      </div>
    </>
  );
}
