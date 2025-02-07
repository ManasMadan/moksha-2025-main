import React from "react";
import Image from "next/image";
import { HomeEventCard } from "./SVGs";
const Events = () => {
  return (
    <div
      className="h-screen min-w-[100vw] w-auto bg-no-repeat bg-left-top mountainTopEvents"
      style={{ backgroundImage: "url(/assets/events/topMountain.png)" }}
    >
      <div
        className=" h-full w-full bg-no-repeat bg-right-bottom mountainTopEvents"
        style={{ backgroundImage: "url(/assets/events/bottomMountain.png)" }}
      >
        <h2 className="text-center pt-[7.5vh] text-4xl ps-4 md:text-6xl font-bold mb-16">
          EVENTS
        </h2>

        <div className=" w-full flex justify-center content-center">
          <HomeEventCard className="min-w-[300px] min-h-[300px]"/>
          <HomeEventCard className="min-w-[300px] min-h-[300px]"/>
          <HomeEventCard className="min-w-[300px] min-h-[300px]"/>
        </div>
      </div>
    </div>
  );
};

export default Events;
