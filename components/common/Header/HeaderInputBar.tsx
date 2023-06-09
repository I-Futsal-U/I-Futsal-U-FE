"use client";

import { CgSearch } from "@react-icons/all-files/cg/CgSearch";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HeaderInputBar() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/search");
    queryClient.setQueryData(["inputValue"], input);
    setInput("");
    await queryClient.refetchQueries(["inputValue"]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row items-center bg-black h-1/2 w-2/3 md:w-1/3 rounded-full mr-8 md:mr-0 "
    >
      <div className="w-11/12">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="지역, 구장으로 찾기"
          className="bg-black text-white w-11/12 ml-5 caret-blue-800 outline-none border-none"
        />
      </div>
      <button
        className="text-white mr-6 text-base md:text-lg  hover:animate-ping"
        type="button"
      >
        <CgSearch />
      </button>
    </form>
  );
}
