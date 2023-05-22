import { useEffect } from "react";

export default function Map() {
  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;
    document.head.appendChild(mapScript);
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.541, 126.986),
          level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        const mapTypeControl = new window.kakao.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(
          mapTypeControl,
          window.kakao.maps.ControlPosition.TOPRIGHT,
        );

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        const zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, []);

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div id="map" className="w-screen h-screen"></div>
      </div>
    </>
  );
}
