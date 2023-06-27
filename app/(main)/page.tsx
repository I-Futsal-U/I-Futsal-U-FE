import LocalFieldsCarousel from "@/components/landingPage/LocalFieldsCarousel/LocalFieldsCarousel";
import MainCarousel from "@/components/landingPage/MainCarousel/MainCarousel";
import Schedules from "@/components/landingPage/Schedules/Schedules";
export default function LandingPage() {
  return (
    <>
      <MainCarousel />
      <LocalFieldsCarousel />
      <Schedules />
    </>
  );
}
