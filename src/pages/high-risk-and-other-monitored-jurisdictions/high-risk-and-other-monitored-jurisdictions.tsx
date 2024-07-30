import React from "react";

import { useTranslation } from "react-i18next";

export default function HighRiskAndOtherMonitoredJurisdictions() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("HIGH_RISK_TITLE")}
        </h2>
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <p>{t("HIGH_RISK_PR1")}</p>
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("REVIEW_PROCESS_TITLE")}
          </h2>
          <p>{t("HIGH_RISK_PR2")}</p>
          <p>{t("HIGH_RISK_PR3")}</p>
          <p>{t("HIGH_RISK_PR4")}</p>
          <p>{t("HIGH_RISK_PR6")}</p>
          <p>{t("HIGH_RISK_PR7")}</p>
          <p>{t("HIGH_RISK_PR8")}</p>
          <p>{t("HIGH_RISK_PR9")}</p>
          <p>{t("HIGH_RISK_PR10")}</p>
          <p>{t("HIGH_RISK_PR11")}</p>
          <p>{t("HIGH_RISK_PR12")}</p>
          <p>{t("HIGH_RISK_PR13")}</p>
          <p>{t("HIGH_RISK_PR14")}</p>
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("PUBLIC_IDENTIFICATION")}
          </h2>
          <p>{t("HIGH_RISK_PR15")}</p>
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("REMOVAL_FROM_FATF_REVIEW")}
          </h2>
          <p>{t("HIGH_RISK_PR16")}</p>
        </div>
      </div>
    </main>
  );
}
