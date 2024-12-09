import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { stack } from "@/data";

const Stack = () => {
  return (
    <div className="py-20" id="stack">
      <h1 className="heading">
        Tech Stack <span className="text-purple">I Use </span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards items={stack} direction="right" speed="fast" />
      </div>
    </div>
  );
};

export default Stack;
