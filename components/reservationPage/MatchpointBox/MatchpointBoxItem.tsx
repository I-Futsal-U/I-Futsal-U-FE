"use client";

import { AiOutlineTeam } from "@react-icons/all-files/ai/AiOutlineTeam";
import { FiTrendingUp } from "@react-icons/all-files/fi/FiTrendingUp";
import { GiSoccerField } from "@react-icons/all-files/gi/GiSoccerField";
import { GiSonicShoes } from "@react-icons/all-files/gi/GiSonicShoes";
import { ImManWoman } from "@react-icons/all-files/im/ImManWoman";

import mockdata from "../mockdata.json";

export default function MatchpointBoxItem() {
  const matchpoint = mockdata.Field.matchpoint;

  return (
    <>
      <section className="text-zinc-700 md:text-sm lg:text-base">
        <div className="flex flex-nowrap">
          <div className="flex flex-nowrap mt-5">
            <FiTrendingUp />
            <div className="ml-3">{matchpoint?.level}</div>
          </div>
          <div className="flex flex-nowrap mt-5 ml-10">
            <ImManWoman />
            <div className="ml-3">{matchpoint?.sex}</div>
          </div>
          <div className="flex flex-nowrap mt-5 ml-5 md:ml-10">
            <GiSoccerField />
            <div className="ml-3 ">{matchpoint?.versus}</div>
          </div>
        </div>
        <div className="flex flex-nowrap">
          <div className="flex flex-nowrap mt-5">
            <AiOutlineTeam />
            <div className="ml-3">{matchpoint?.numofpeople}</div>
          </div>
          <div className="flex flex-nowrap mt-5 ml-10">
            <GiSonicShoes />
            <div className="ml-3">{matchpoint?.shoes}</div>
          </div>
        </div>
      </section>
    </>
  );
}
