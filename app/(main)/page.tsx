import DateCarousel from "@/components/landing/DateCarousel";
import LocalFieldsCarousel from "@/components/landing/LocalFieldsCarousel/LocalFieldsCarousel";
import MainCarousel from "@/components/landing/MainCarousel/MainCarousel";
import Schedules from "@/components/landing/Sehcdules";

function LandingPage() {
  return (
    <>
      <MainCarousel />
      <LocalFieldsCarousel />
      <DateCarousel />
      <Schedules />
    </>
  );
}

export default LandingPage;
