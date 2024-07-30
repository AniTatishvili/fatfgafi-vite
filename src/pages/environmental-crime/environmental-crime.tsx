import React from "react";

import { useTranslation } from "react-i18next";

import PrimaryVideo from "../../shared/videos/primery-video";

import environmental_img1 from "@/public/images/environental-crime/gettyimages-1280359252.jpeg";
import environmental_img2 from "@/public/images/environental-crime/gettyimages-513415737.jpeg";

export default function EnvironmentalCrime() {
  const { t } = useTranslation();

  const videoId = "PQqoETqsv0o";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("ENVIRONMENTAL_CRIME_TITLE")}
        </h2>
        <div className="flex flex-col gap-3 text-[#333] text-[18px] font-[400] font-[Graphik,Calibri,sans-serif]">
          <p>{t("ENVIRONMENTAL_CRIME_PR1")}</p>
          <p>{t("ENVIRONMENTAL_CRIME_PR2")}</p>
          <p>{t("ENVIRONMENTAL_CRIME_PR3")}</p>
          <div className="flex md:flex-row flex-col items-center py-[2em]">
            <img
              src={environmental_img1}
              alt="recomendation"
              className="md:min-w-[300px] w-[300px] h-auto rounded-[15px]"
            />
            <div className="md:px-8 px-0 py-4">
              <h3 className="text-[#333] text-[24px] font-[700] font-[Graphik,Calibri,sans-serif] pb-5">
                <a href="/environmental-crime/money-laundering-from-environmental-crime">
                  {t("ENVIRONMENTAL_CRIME_TITLE1")}
                </a>
              </h3>
              <p className="text-[18px] font-[Graphik,Calibri,sans-serif]">
                {t("ENVIRONMENTAL_CRIME_PR9")}
              </p>
              <a
                href="/environmental-crime/money-laundering-from-environmental-crime"
                className="inline-flex items-center gap-2 text-[#fff] text-[18px] font-[Graphik,Calibri,sans-serif] px-[24px] py-[8px] bg-[#267589] mt-6 rounded-[10rem]"
              >
                <span>{t("THE_FATF_RECOMMENDATIONS")}</span>
              </a>
            </div>
          </div>
          <p>{t("ENVIRONMENTAL_CRIME_PR4")}</p>
          <p>{t("ENVIRONMENTAL_CRIME_PR5")}</p>

          <p>{t("ENVIRONMENTAL_CRIME_PR6")}</p>
          <div className="py-[2em]">
            <div className="flex justify-between lg:flex-row flex-col gap-[40px]">
              <PrimaryVideo embedId={videoId} />
              <h4 className="text-[#333] text-[22px] font-[700] font-[Graphik,Calibri,sans-serif]">
                {t("ENVIRONMENTAL_CRIME_PR11")}
              </h4>
            </div>
            <p className="py-5">
              <span className="font-[700]">
                {t("ENVIRONMENTAL_CRIME_PR12")}
              </span>
            </p>
          </div>
          <p>{t("ENVIRONMENTAL_CRIME_PR7")}</p>
          <div className="flex md:flex-row flex-col items-center py-[2em]">
            <img
              src={environmental_img2}
              alt="recomendation"
              className="md:min-w-[300px] w-[300px] h-auto rounded-[15px]"
            />
            <div className="md:px-8 px-0 py-4">
              <h3 className="text-[#333] text-[24px] font-[700] font-[Graphik,Calibri,sans-serif] py-5">
                <a href="/environmental-crime/money-laundering-wildlife-trade">
                  {t("ENVIRONMENTAL_CRIME_TITLE2")}
                </a>
              </h3>
              <p className="text-[18px] font-[Graphik,Calibri,sans-serif]">
                {t("ENVIRONMENTAL_CRIME_PR10")}
              </p>
              <a
                href="/environmental-crime/money-laundering-wildlife-trade"
                className="inline-flex items-center gap-2 text-[#fff] text-[18px] font-[Graphik,Calibri,sans-serif] px-[24px] py-[8px] bg-[#267589] mt-6 rounded-[10rem]"
              >
                <span>{t("THE_FATF_RECOMMENDATIONS")}</span>
              </a>
            </div>
          </div>
          <p>{t("ENVIRONMENTAL_CRIME_PR8")}</p>
        </div>
      </div>
    </main>
  );
}
