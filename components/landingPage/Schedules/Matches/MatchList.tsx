import MatchItem from "@/components/common/MatchItem/MatchItem";

import Button from "./Button";

function MatchList() {
  return (
    <div className="w-5/6 mx-auto">
      <MatchItem>
        <Button />
      </MatchItem>
      <MatchItem>
        <Button />
      </MatchItem>
      <MatchItem>
        <Button />
      </MatchItem>
      <MatchItem>
        <Button />
      </MatchItem>
    </div>
  );
}

export default MatchList;
