import MatchItem from "../common/Item/MatchItem/MatchItem";

export default function Result() {
  return (
    <section className="p-5 border-2 border-solid border-gray-200 rounded-2xl flex-grow">
      <MatchItem />
      <MatchItem />
    </section>
  );
}
