import React from "react";

import { useTranslation } from "react-i18next";

export default function FrequentlyAskedQuestions() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] flex flex-col gap-[20px] my-[40px]">
        <div className="flex flex-col gap-2 text-[#333] text-[18px] font-[400] font-[Graphik,Calibri,sans-serif]">
          <h5 className="text-[#333] text-[20px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("FREQUENTLY_ASKED_QUESTIONS_TITLE1")}
          </h5>
          <p>{t("FREQUENTLY_ASKED_QUESTIONS_PR1")}</p>
        </div>
        <div className="flex flex-col gap-2 text-[#333] text-[18px] font-[400] font-[Graphik,Calibri,sans-serif]">
          <h5 className="text-[#333] text-[20px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("FREQUENTLY_ASKED_QUESTIONS_TITLE2")}
          </h5>
          <p>{t("FREQUENTLY_ASKED_QUESTIONS_PR2")}</p>
        </div>
        <div className="flex flex-col gap-2 text-[#333] text-[18px] font-[400] font-[Graphik,Calibri,sans-serif]">
          <h5 className="text-[#333] text-[20px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("FREQUENTLY_ASKED_QUESTIONS_TITLE3")}
          </h5>
          <p>{t("FREQUENTLY_ASKED_QUESTIONS_PR3")}</p>
          <p>{t("FREQUENTLY_ASKED_QUESTIONS_PR4")}</p>
        </div>
        <div className="flex flex-col gap-2 text-[#333] text-[18px] font-[400] font-[Graphik,Calibri,sans-serif]">
          <h5 className="text-[#333] text-[20px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("FREQUENTLY_ASKED_QUESTIONS_TITLE4")}
          </h5>
          <p>{t("FREQUENTLY_ASKED_QUESTIONS_PR5")}</p>
        </div>
      </div>
    </main>
  );
}
