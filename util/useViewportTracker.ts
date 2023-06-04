import { useEffect, useState } from "react";

export default function useViewportTracker() {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    function handleViewportChange() {
      setViewportWidth(window.innerWidth);
    }
    if (typeof window !== "undefined") {
      setViewportWidth(window.innerWidth);
      window.addEventListener("resize", handleViewportChange);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleViewportChange);
      }
    };
  }, []);

  return viewportWidth;
}
