import LocalFieldsCarousel from "@/components/landingPage/LocalFieldsCarousel/LocalFieldsCarousel";
import MainCarousel from "@/components/landingPage/MainCarousel/MainCarousel";
import Schedules from "@/components/landingPage/Schedules/Schedules";
function LandingPage() {
  return (
    <>
      <MainCarousel />
      <LocalFieldsCarousel />
      <Schedules />
    </>
  );
}

export default LandingPage;
