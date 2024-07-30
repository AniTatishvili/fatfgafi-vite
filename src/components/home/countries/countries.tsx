import React from "react";

import { useTranslation } from "react-i18next";

import globus from "../../../../public/images/fichier-1.png";

export const Countries = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f8f8f8] pb-[30px] mt-[24px]">
      <div className="md:w-[80%] w-[90%] m-auto">
        <h2 className="text-[#333] text-[36px] font-[Graphik,Calibri,sans-serif] font-[700] pt-4 pb-3">
          {t("COUNTRIES")}
        </h2>
        <div className="md:w-[calc(33.3%-1rem)] w-[100%] flex flex-col items-center mt-4 mb-3">
          <img src={globus} alt="globus" />
          <p className="text-[#333] text-[1em] font-[Graphik,Calibri,sans-serif] font-[400] leading-5 p-4">
            {t("COUNTRIES_DESC")}
          </p>
        </div>
        <a
          href="/countries/global-networks"
          className="inline-flex items-center gap-2 text-[#fff] text-[18px] font-[Graphik,Calibri,sans-serif] px-[24px] py-[8px] bg-[#267589] rounded-[10rem] my-4 ml-4"
        >
          <span>{t("FIND_OUT_MORE_ABOUT_THE_FATF_GLOBAL_NETWORK")}</span>
        </a>
      </div>
    </div>
  );
};
