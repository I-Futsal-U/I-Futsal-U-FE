import temporarydata from "./temporarydata.json";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface PlaceSearch {
  data: { [key: string]: string }[];
  status: string | null;
  pagination: number;
}

export default function Map() {
  const { data: inputValue } = useQuery(["inputValue"]);

  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(mapScript);
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
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

        // 마커 이미지의 이미지 주소입니다
        const imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        for (let i = 0; i < positions.length; i++) {
          // 마커 이미지의 이미지 크기 입니다
          const imageSize = new window.kakao.maps.Size(24, 35);

          // 마커 이미지를 생성합니다
          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
          );

          // 마커를 생성합니다
          const marker = new window.kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
          });
        }

        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(inputValue, placesSearchCB);
        // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        function placesSearchCB(
          data: PlaceSearch["data"],
          status: PlaceSearch["status"],
          pagination: PlaceSearch["pagination"],
        ) {
          if (status === window.kakao.maps.services.Status.OK) {
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            const bounds = new window.kakao.maps.LatLngBounds();
            console.log(data);

            if (data) {
              for (let i = 0; i < data.length; i++) {
                bounds.extend(
                  new window.kakao.maps.LatLng(data[i].y, data[i].x),
                );
              }
            }
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
          }
        }
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, [inputValue]);

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div id="map" className="w-screen h-screen"></div>
      </div>
    </>
  );
}
