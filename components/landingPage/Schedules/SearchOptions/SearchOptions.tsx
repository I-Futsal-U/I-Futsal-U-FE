import Button from "./Button";

export default function SearchOptions() {
  return (
    <div className="flex w-5/6 mx-auto mb-7">
      <Button text="성별" href="/sex" aria-label="search by gender" />
      <Button text="레벨" href="/level" aria-label="search by level" />
    </div>
  );
}
