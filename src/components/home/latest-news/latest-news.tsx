import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { ShapeTeal } from "../../../shared/shape-teal";

import slide1 from "../../../../public/images/latest-news/vasp-2024-.png";
import slide2 from "../../../../public/images/latest-news/hrgtc-slider-2.png";
import slide3 from "../../../../public/images/latest-news/public-consult (1).png";

interface LatestNewsItems {
  src: string;
  title: string;
  date: string;
  desc: string;
  url: string;
}

export const LatestNews = () => {
  const { t } = useTranslation();

  const LatestNewsArr: LatestNewsItems[] = [
    {
      src: slide1,
      title: t("LATEST_NEWS_TITLE1"),
      date: t("9_JUL_2024"),
      desc: t("LATEST_NEWS_DESC1"),
      url: "/fatf-recommendations/targeted-update-virtual-assets-vasps",
    },
    {
      src: slide2,
      title: t("LATEST_NEWS_TITLE2"),
      date: t("8_JUL_2024"),
      desc: t("LATEST_NEWS_DESC2"),
      url: "publications/gatekeeper-tc-corruption",
    },
    {
      src: slide3,
      title: t("LATEST_NEWS_TITLE3"),
      date: t("1_JUL_2024"),
      desc: t("LATEST_NEWS_DESC"),
      url: "/fatf-recommendations/fatf-nra-national-risk-assessments-guidance-public-consultation",
    },
  ];

  return (
    <div className="w-full bg-[#f8f8f8] my-[32px]">
      <ShapeTeal text={t("LATEST_NEWS")} />
      <div className="max-w-[80%] w-[90%] flex lg:flex-row flex-col justify-between items-center gap-[48px] mx-auto">
        {LatestNewsArr.map((item, i) => {
          return (
            <NavLink
              key={i}
              to={item.url}
              className="lg:w-[33.3%] w-[100%] flex flex-col justify-center items-center primary-hover"
            >
              <div className="w-[100%] h-[17rem] rounded-[10px] overflow-hidden">
                <img
                  src={item.src}
                  alt="news"
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
              <div className="p-[1rem] font-[Graphik,Calibri,sans-serif]">
                <h3 className="text-[#333] text-[24px] font-[700] leading-[1.5em] mt-[0.625rem] mb-[1.1875rem]">
                  {item.title}
                </h3>
                <p className="text-[#333] text-[18px]  leading-[1.25em] py-[1em]">
                  {item.date}
                </p>
                <p className="text-[#333] text-[18px]  leading-[1.25em] pb-[1em]">
                  {item.desc}
                </p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
