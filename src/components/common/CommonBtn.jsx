import React from "react";

const CommonBtn = ({ className, btnName }) => {
  return (
    <div>
      <button
        className={`${className} py-[12.5px] text-white px-5 bg-btngradient shadow-btnshadow rounded-full`}
      >
        {btnName}
      </button>
    </div>
  );
};

export default CommonBtn;
