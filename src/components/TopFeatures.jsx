import React from "react";
import Heading from "./common/Heading";
import { featuresCardList } from "./common/CommonHelper";

const TopFeatures = () => {
  return (
    <div className="xl:pt-[140px] md:pt-[90px] sm:pt-[60px] pt-12">
      <div className="container xl:max-w-[1164px] mx-auto xl:px-3 px-6 pt-[73px]">
        <div className="border border-solid border-pink rounded-full py-[6px] px-5 max-w-[132px] mx-auto mb-[10px]">
          <p className="text-white text-center sm:text-base text-sm text-nowrap">
            Top-features
          </p>
        </div>
        <Heading
          Heading="Discover Our Unique Features"
          className="capitalize text-center mb-4"
        />
        <p className="text-white opacity-90 sm:text-base text-sm lg:max-w-[535px] mx-auto text-center font-normal leading-[140%]">
          Forget web3 complexity, at Dexodus we make it simple. Just trade.
          Enjoy an overall more intuitive trading experience.
        </p>
        <div className="flex flex-row flex-wrap md:pt-[70px] sm:pt-[55px] pt-11 max-lg:justify-center max-lg:gap-6">
          {featuresCardList.map((obj, index) => (
            <div key={index} className="lg:w-4/12 md:6/12 flex justify-center">
              <div className="featured-card rounded-[10px] relative xl:p-6 sm:p-5 p-4 border border-solid border-transparent after:-z-[1] after:absolute after:p-[1px] after:w-full after:h-full after:pointer-events-none after:bg-lightblack xl:max-w-[364px] md:max-w-[315px] w-full h-full">
                <div className="md:pb-8 pb-6">{obj.svg}</div>
                <p className="text-white capitalize xl:text-xsm text-2xl font-medium leading-[140%] mb-3">
                  {obj.tittle}
                </p>
                <p className="text-white sm:text-base text-sm">
                  {obj.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopFeatures;