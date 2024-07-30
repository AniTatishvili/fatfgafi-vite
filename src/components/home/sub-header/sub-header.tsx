import React from "react";
import { useTranslation } from "react-i18next";

import { GoArrowRight } from "react-icons/go";
import { RiArrowRightDoubleLine } from "react-icons/ri";

export const SubHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#eceff1] py-[16px]">
      <div className="mx-auto w-full flex md:flex-row flex-col md:justify-between items-center md:max-w-[80%] max-w-[90%] primary-list">
        <a
          href="/black-and-gray-lists"
          className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
        >
          <span>{t("BLACK_AND_GRAY_LISTS")}</span>
          <GoArrowRight />
        </a>
        <a
          href="/fatf-recommendations"
          className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
        >
          <span>{t("FATF_RECOMMENDATIONS")}</span>
          <GoArrowRight />
        </a>
        <button className="flex items-center gap-2 text-[#fff] text-[18px] font-[Graphik,Calibri,sans-serif] px-[24px] py-[8px] md:mt-0 mt-3 bg-[#df3327] hover:bg-[#92140b] rounded-[10rem]">
          <span>{t("FRAUD_WARNING")}</span>
          <RiArrowRightDoubleLine />
        </button>
      </div>
    </div>
  );
};
