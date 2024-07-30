import React from 'react';

interface DefaultBtnProps {
    text: string;
    link?: string;
  }
  
  export const DefaultBtn = ({ text }: DefaultBtnProps) => {
    return (
      <button className="bg-ii_blue h-[40px] w-full px-[35px] hover:bg-[#4f60bf] hover:duration-[350ms]">
        <p className="text-ii_light overflow-hidden text-ellipsis text-nowrap text-center text-[0.92rem] font-semibold uppercase leading-[40px]">{text}</p>
      </button>
    );
  };