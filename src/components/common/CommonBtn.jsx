import React from "react";
import { BtnArrow } from "./Icon";

const CommonBtn = ({ className, btnName }) => {
  return (
    <div>
      <button
        className={`${className} py-[12.5px] text-white px-5 bg-btngradient shadow-btnshadow rounded-full flex justify-center items-center gap-[10px]`}
      >
        {btnName} <BtnArrow />
      </button>
    </div>
  );
};

export default CommonBtn;
