import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeImg from "./MarqueeImg";

const MovingSec = () => {
  return (
    <div className="my-12">
      <h1 className="text-center font-extralight text-4xl p-5 ">Sponsore!</h1>
      <Marquee>
        <MarqueeImg></MarqueeImg>
      </Marquee>
    </div>
  );
};

export default MovingSec;
