import Image from "next/image";
import React from "react";

const HomeCard2 = (props) => {
  return (
    <>
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center gap-[10px]">
          <Image src={props.img} alt="" />
          <h1 className="text-[20px] font-bold">{props.text}</h1>
        </div>
        <p className="text-gray-500">
         {props.description}
        </p>
      </div>
    </>
  );
};

export default HomeCard2;
