import DateCarousel from "../DateCarousel/DateCarousel";
import MatchList from "./Matches/MatchList";
import SearchOptions from "./SearchOptions/SearchOptions";

function Schedules() {
  return (
    <section className="w-screen max-w-7xl mx-auto">
      <DateCarousel />
      <SearchOptions />
      <MatchList />
    </section>
  );
}

export default Schedules;
