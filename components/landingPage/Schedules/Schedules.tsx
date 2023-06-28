import DateCarousel from "../DateCarousel/DateCarousel";
import MatchList from "./Matches/MatchList";
import SearchOptions from "./SearchOptions/SearchOptions";

export default function Schedules() {
  return (
    <section className="w-screen max-w-7xl mx-auto">
      <DateCarousel />
      <SearchOptions />
      <MatchList />
    </section>
  );
}
