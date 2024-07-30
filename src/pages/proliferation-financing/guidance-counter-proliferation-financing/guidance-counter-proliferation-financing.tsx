import React from "react";

import { useTranslation } from "react-i18next";

export default function GuidanceCounterProliferationFinancing() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <span className="text-[#333] text-[18px] font-[700] font-[Graphik,Calibri,sans-serif]">
          {t("GUIDANCE_COUNTER_FINANCING_PR1")}
        </span>
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("GUIDANCE_COUNTER_FINANCING_TITLE")}
        </h2>
        <div className="flex flex-col gap-3 pb-8 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <p>{t("GUIDANCE_COUNTER_FINANCING_PR2")}</p>
          <p>{t("GUIDANCE_COUNTER_FINANCING_PR3")}</p>
          <ul className="list-disc marker:text-[#4f9eb2] ms-[20px]">
            <li className="pb-[0.5em]">
              {t("GUIDANCE_COUNTER_FINANCING_PR4")}
            </li>
            <li className="pb-[0.5em]">
              {t("GUIDANCE_COUNTER_FINANCING_PR5")}
            </li>
          </ul>
          <p>{t("GUIDANCE_COUNTER_FINANCING_PR6")}</p>
          <p>{t("GUIDANCE_COUNTER_FINANCING_PR7")}</p>
          <p>{t("GUIDANCE_COUNTER_FINANCING_PR8")}</p>
        </div>
        {/* <Link href="/the-fatf-recommendations" className="flex md:flex-row flex-col md:items-start items-center bg-[#e2f3f7] rounded-[15px] overflow-hidden">
          <Image src={recomandation_img} alt="recomendation" className="w-[300px] h-auto" />
          <div className="px-8 py-4">
            <h3 className="text-[#333] text-[24px] font-[700] font-[Graphik,Calibri,sans-serif] py-6">FATF Recommendations</h3>
            <p className="text-[18px] font-[Graphik,Calibri,sans-serif]">The FATF Recommendations are the basis on which all countries should meet the shared objective of tackling money laundering, terrorist financing and the financing of proliferation. The FATF calls upon all countries to effectively implement these measures in their national systems.</p>
          </div>
        </Link> */}
      </div>
    </main>
  );
}
