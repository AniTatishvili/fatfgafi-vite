import React from "react";

import { useTranslation } from "react-i18next";

import { ShapeTeal } from "../../../shared/shape-teal";

import slide1 from "../../../../public/images/key-content/gettyimages-1335707451.jpeg";
import slide2 from "../../../../public/images/key-content/crypto.jpeg";
import slide3 from "../../../../public/images/key-content/banner-private-sector.png";

interface LatestNewsItems {
  src: string;
  title: string;
  desc: string;
  url: string;
}

export const KeyContent = () => {
  const { t } = useTranslation();

  const LatestNewsArr: LatestNewsItems[] = [
    {
      src: slide1,
      title: t("THE_FATF_RECOMMENDATIONS"),
      desc: t("KEY_CONTENT_DESC1"),
      url: "/the-fatf-recommendations",
    },
    {
      src: slide2,
      title: t("KEY_CONTENT_TITLE2"),
      desc: t("KEY_CONTENT_DESC2"),
      url: "/publications/assessment-methodology",
    },
    {
      src: slide3,
      title: t("KEY_CONTENT_TITLE3"),
      desc: t("KEY_CONTENT_DESC3"),
      url: "/private-sector",
    },
  ];

  return (
    <div className="w-full my-[32px]">
      <ShapeTeal text={t("KEY_CONTENT")} />
      <div className="max-w-[80%] w-[90%] h-fit flex lg:flex-row flex-col justify-center items-center lg:gap-[1em] gap-8 mx-auto overflow-hidden">
        {LatestNewsArr.map((item, i) => {
          return (
            <a
              key={i}
              href={item.url}
              className="lg:w-[33.3%] w-[100%] bg-[#f8f8f8] flex flex-col justify-center items-center rounded-[15px] primary-hover"
            >
              <div className="p-[1rem] font-[Graphik,Calibri,sans-serif]">
                <h3 className="text-[#333] text-[24px] font-[700] leading-[1.5em] mt-[0.625rem] mb-[1.1875rem]">
                  {item.title}
                </h3>
                <p className="text-[#333] text-[18px]  leading-[1.25em] pb-[1em]">
                  {item.desc}
                </p>
              </div>
              <div className="w-[100%] h-[14rem] rounded-b-[5px] overflow-hidden">
                <img
                  src={item.src}
                  alt="news"
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
