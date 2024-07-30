import React from "react";

import { useTranslation } from "react-i18next";

export default function FinancialInclusionAndNpoIsseus() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("FINANCIAL_INCLUSION_TITLE")}
        </h2>
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <p>{t("FINANCIAL_INCLUSION_PR1")}</p>
          <p>{t("FINANCIAL_INCLUSION_PR2")}</p>
          <p>{t("FINANCIAL_INCLUSION_PR3")}</p>
          <p>{t("FINANCIAL_INCLUSION_PR4")}</p>
          <p>{t("FINANCIAL_INCLUSION_PR5")}</p>
          <p>{t("FINANCIAL_INCLUSION_PR6")}</p>
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("FINANCIAL_INCLSION_TITLE2")}
          </h2>
          <p>{t("FINANCIAL_INCLUSION_PR7")}</p>
          <p>{t("FINANCIAL_INCLUSION_PR8")}</p>
          <p>{t("FINANCIAL_INCLUSION_PR9")}</p>
          <p>{t("FINANCIAL_INCLUSION_PR10")}</p>
        </div>
      </div>
    </main>
  );
}
