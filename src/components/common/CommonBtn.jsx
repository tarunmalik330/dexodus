import React from "react";
import { BtnArrow } from "./Icon";

const CommonBtn = ({ className, btnName }) => {
  return (
    <div>
      <button
        className={`${className} sm:py-[12.5px] py-2 text-white px-5 bg-btngradient shadow-btnshadow rounded-full flex justify-center sm:text-base text-sm items-center gap-[10px] leading-[119%] font-semibold`}
      >
        {btnName} <BtnArrow />
      </button>
    </div>
  );
};

export default CommonBtn;
