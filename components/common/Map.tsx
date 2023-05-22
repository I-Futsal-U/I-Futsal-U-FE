import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

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

        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(inputValue, placesSearchCB);
        // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        function placesSearchCB(data, status, pagination) {
          if (status === window.kakao.maps.services.Status.OK) {
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            const bounds = new window.kakao.maps.LatLngBounds();

            for (let i = 0; i < data.length; i++) {
              bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
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
