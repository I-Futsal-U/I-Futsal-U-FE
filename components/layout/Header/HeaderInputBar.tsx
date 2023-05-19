"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HeaderInputBar() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newInput = input;
    queryClient.setQueryData(["inputValue"], newInput);
    setInput("");
    // router.push("/testpage");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="지역, 구장으로 찾기"
        ></input>
        <button>버튼</button>
      </form>
    </>
  );
}
