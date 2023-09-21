import { useEffect } from "react";

function CheckUserScroll({bottomReached}) {
  useEffect(() => {
    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      // Calculates the height of the client viewport, adjusted for the device's pixel ratio
      const clientHeight = document.documentElement.clientHeight * window.devicePixelRatio;
      if (scrollTop + clientHeight >= scrollHeight) {
        bottomReached();
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [bottomReached]);
}

export default CheckUserScroll