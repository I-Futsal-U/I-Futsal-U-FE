import LocalFieldsCarousel from "@/components/landing/LocalFieldsCarousel/LocalFieldsCarousel";
import MainCarousel from "@/components/landing/MainCarousel/MainCarousel";
import Schedules from "@/components/landing/Schedules/Schedules";

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
