import Button from "./Button";

function SearchOptions() {
  return (
    <div className="flex w-5/6 mx-auto mb-7">
      <Button text="성별" aria-label="search by gender" />
      <Button text="레벨" aria-label="search by level" />
    </div>
  );
}

export default SearchOptions;
