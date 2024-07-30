import React from "react";

import { useIntl } from "react-intl";

import recomandation_img from "@/public/images/nov23-recommendations.png";

export default function AssetRecovery() {
  const { formatMessage } = useIntl();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          Asset recovery
        </h2>
        <div className="flex flex-col gap-3 text-[18px] font-[400] font-[Graphik,Calibri,sans-serif] mb-6">
          <p>{formatMessage({ id: "ASSET_RECOVERY_PAGE_PARAGRAPH1" })}</p>
          <p>{formatMessage({ id: "ASSET_RECOVERY_PAGE_PARAGRAPH2" })}</p>
          <p>{formatMessage({ id: "ASSET_RECOVERY_PAGE_PARAGRAPH3" })}</p>
          <p>{formatMessage({ id: "ASSET_RECOVERY_PAGE_PARAGRAPH4" })}</p>
        </div>
        <div className="bg-[#f8f8f8] flex md:flex-row flex-col items-center rounded-[15px] overflow-hidden">
          <img
            src={recomandation_img}
            alt="recomendation"
            className="md:w-[300px] w-[100%] h-auto md:max-h-[100%] max-h-[300px] object-contain"
          />
          <div className="px-8 py-4">
            <h3 className="text-[#333] text-[24px] font-[700] font-[Graphik,Calibri,sans-serif] py-6">
              <a href="/the-fatf-recommendations">
                {formatMessage({ id: "THE_FATF_RECOMMENDATIONS" })}
              </a>
            </h3>
            <p className="text-[18px] font-[400] font-[Graphik,Calibri,sans-serif]">
              {formatMessage({ id: "ASSET_RECOVERY_PAGE_PARAGRAPH5" })}
            </p>
            <a
              href="/the-fatf-recommendations"
              className="inline-flex items-center gap-2 text-[#fff] text-[18px] font-[Graphik,Calibri,sans-serif] px-[24px] py-[8px] bg-[#267589] mt-6 rounded-[10rem]"
            >
              <span>{formatMessage({ id: "THE_FATF_RECOMMENDATIONS" })}</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
