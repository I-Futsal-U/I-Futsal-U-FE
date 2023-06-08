"use client";

import { FiStar } from "@react-icons/all-files/fi/FiStar";
import { useState } from "react";

export default function RatingStar() {
  const starArr = [1, 2, 3, 4, 5];
  const [hover, setHover] = useState(0);
  return (
    <section className="flex flex-row justify-center items-center">
      {starArr.map((idx) => (
        <FiStar
          key={idx}
          onMouseEnter={() => setHover(idx)}
          onMouseLeave={() => setHover(0)}
          fill={idx <= hover ? "#000" : "#E5E5E5"}
          className=""
        />
      ))}
    </section>
  );
}
