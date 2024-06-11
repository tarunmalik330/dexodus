import React from "react";

const Heading = ({ Heading, className }) => {
  return (
    <h2
      className={`${className} font-medium text-5xl text-white leading-[130%]`}
    >
      {Heading}
    </h2>
  );
};

export default Heading;
