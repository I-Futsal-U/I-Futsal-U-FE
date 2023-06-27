/* eslint-disable react/no-array-index-key */
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaStarHalf } from "@react-icons/all-files/fa/FaStarHalf";

export default function ReviewItem() {
  const rating = 3.5;
  const integer = Math.floor(rating);
  const float = rating - integer;

  const stars = new Array(integer).fill(true);
  return (
    <div className="flex my-4 items-center gap-2 max-w-2xl">
      <p className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">
        잠실 제 1경기장 잔디 상태도 좋고, 화장실 상태도 깨끗해서 좋았어요
      </p>
      <div className="flex">
        {stars.map((e, i) => (
          <FaStar key={i} />
        ))}
        {float && <FaStarHalf />}
      </div>
    </div>
  );
}
