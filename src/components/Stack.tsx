import React from "react";
import { stackCards } from "@/data";
import { Carousel, Card } from "@/components/ui/AppleCardsCarousel";

const Stack = () => {
  const cards = stackCards.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <div className="py-20" id="stack">
      <h1 className="heading">
        Tech Stack <span className="text-purple">I Use </span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <Carousel items={cards} />
      </div>
    </div>
  );
};

export default Stack;
