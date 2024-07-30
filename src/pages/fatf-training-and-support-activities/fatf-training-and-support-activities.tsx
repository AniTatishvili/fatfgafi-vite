import React from "react";

import { useTranslation } from "react-i18next";

export default function FatfTrainingAndSupportActivities() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("FATF_TRAINING_AND_SUPPORT_ACTIVITIES_TITLE")}
        </h2>
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <p>{t("FATF_TRAINING_AND_SUPPORT_ACTIVITIES_PR1")}</p>
          <p>{t("FATF_TRAINING_AND_SUPPORT_ACTIVITIES_PR2")}</p>
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("FATF_TRAINING_AND_SUPPORT_ACTIVITIES_TITLE2")}
          </h2>
          <p>{t("FATF_TRAINING_AND_SUPPORT_ACTIVITIES_PR3")}</p>
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("FATF_TRAINING_AND_SUPPORT_ACTIVITIES_TITLE3")}
          </h2>
          <p>{t("FATF_TRAINING_AND_SUPPORT_ACTIVITIES_PR4")}</p>
          <p>{t("FATF_TRAINING_AND_SUPPORT_ACTIVITIES_PR5")}</p>
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("FATF_TRAINING_AND_SUPPORT_ACTIVITIES_TITLE4")}
          </h2>
          <p>{t("FATF_TRAINING_AND_SUPPORT_ACTIVITIES_PR6")}</p>
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("FATF_TRAINING_AND_SUPPORT_ACTIVITIES_TITLE5")}
          </h2>
          <p>{t("FATF_TRAINING_AND_SUPPORT_ACTIVITIES_PR7")}</p>
          <p>{t("FATF_TRAINING_AND_SUPPORT_ACTIVITIES_PR8")}</p>
          <p>{t("FATF_TRAINING_AND_SUPPORT_ACTIVITIES_PR9")}</p>
        </div>
      </div>
    </main>
  );
}
