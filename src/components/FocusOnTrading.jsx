import React from "react";
import Heading from "./common/Heading";
import CommonBtn from "./common/CommonBtn";

const FocusOnTrading = () => {
  return (
    <div className="pt-[140px]">
      <div className="container xl:max-w-[1164px] mx-auto px-3">
        <div className="flex flex-row flex-nowrap">
          <div className="w-6/12">
            <div className="py-[4.82px] px-5 bg-primary border border-solid border-pink max-w-[159px] rounded-full mb-[10px]">
              <p className="text-white text-nowrap leading-[140%] text-base font-normal">
                Focus on Trading
              </p>
            </div>
            <Heading
              className="lg:max-w-[567px] mb-4"
              Heading="Simplified Trading, Enhanced Experience"
            />
            <p className="text-base lg:max-w-[482px] font-normal text-white leading-[140%] opacity-90 mb-4">
              Forget web3 complexity, at Dexodus we make it simple. Just trade.
              Enjoy an overall more intuitive trading experience.
            </p>
            <p className="text-base lg:max-w-[482px] font-normal text-white leading-[140%] opacity-90 mb-12">
              Escape Web3 Complexity with Dexodus: Trade Effortlessly,
              Experience Intuitive Simplicity
            </p>
            <CommonBtn btnName="Start Now" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusOnTrading;
