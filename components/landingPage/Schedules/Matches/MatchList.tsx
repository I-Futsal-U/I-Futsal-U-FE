import MatchItem from "@/components/common/Item/MatchItem/MatchItem";

import Button from "./Button";

export default function MatchList() {
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
