import React from "react";
import automatedmirror from "../assets/images/png/automated-mirror.png";
import Heading from "./common/Heading";
import CommonBtn from "./common/CommonBtn";

const CopyTrading = () => {
  return (
    <div className="xl:pt-[140px] md:pt-[90px] sm:pt-[60px] pt-12">
      <div className="container xl:max-w-[1164px] mx-auto xl:px-3 px-6">
        <div className="flex flex-row flex-wrap items-center">
          <div className="lg:w-6/12 w-full lg:pb-0 sm:pb-12 pb-9 flex lg:justify-start justify-center">
            <img
              width={507}
              height={507}
              src={automatedmirror}
              alt="automatedmirror"
              className="w-full xl:max-w-[507px] min-[420px]:max-w-[420px] max-w-[270px]"
            />
          </div>
          <div className="lg:w-6/12 w-full flex items-end justify-end">
            <div className="">
              <div className="max-w-[133px] py-[4.82px] px-5 bg-primary border border-solid border-pink rounded-full mb-[10px]">
                <p className="text-white text-nowrap leading-[140%] text-base font-normal">
                  Copy Trading
                </p>
              </div>
              <Heading
                Heading="Automated Mirror Trading Platform"
                className="lg:max-w-[509px] mb-4"
              />
              <p className="leading-[140%] font-normal sm:text-base text-sm text-white opacity-90 lg:max-w-[482px] lg:mb-12 mb-6">
                Follow and execute the strategies of top traders in the protocol
                through our user-friendly copy trading feature.
              </p>
              <CommonBtn btnName="Learn More" className="capitalize" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyTrading;
