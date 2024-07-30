import React from "react";

import { useTranslation } from "react-i18next";

export default function VirtualAssets() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("VIRTUAL_ASSETS_TITLE")}
          </h2>
          <p>{t("VIRTUAL_ASSETS_PR1")}</p>
          <p>{t("VIRTUAL_ASSETS_PR2")}</p>
          <p>{t("VIRTUAL_ASSETS_PR3")}</p>
        </div>
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("TAKING_EFFECTIVE_ACTION_TITLE")}
          </h2>
          <p>{t("VIRTUAL_ASSETS_PR4")}</p>
          <p>{t("VIRTUAL_ASSETS_PR5")}</p>
          <p>{t("VIRTUAL_ASSETS_PR6")}</p>
        </div>
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <h3 className="text-[#333] md:text-[28px] text-[20px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("VIRTUAL_ASSETS_TITLE2")}
          </h3>
          <div className="flex md:flex-row flex-col gap-8">
            <div className="md:w-[50%] w-[100%]">
              <h4 className="text-[#333] md:text-[22px] text-[18px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
                {t("COUNTRIES")}
              </h4>
              <p className="pb-2">{t("NEED_TO")}</p>
              <ul className="list-disc marker:text-[#4f9eb2] ms-[20px]">
                <li>{t("VIRTUAL_ASSETS_PR7")}</li>
                <li>{t("VIRTUAL_ASSETS_PR8")}</li>
                <li>{t("VIRTUAL_ASSETS_PR9")}</li>
              </ul>
            </div>
            <div className="md:w-[50%] w-[100%]">
              <h4 className="text-[#333] md:text-[22px] text-[18px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
                {t("VIRTUAL_ASSETS_SERVICE_PROVIDERS")}
              </h4>
              <p className="pb-2">{t("NEED_TO")}</p>
              <ul className="list-disc marker:text-[#4f9eb2] ms-[20px]">
                <li>{t("VIRTUAL_ASSETS_PR10")}</li>
                <li>{t("VIRTUAL_ASSETS_PR11")}</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
            <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
              {t("BUILDING_PARTNESHIPS")}
            </h2>
            <p>{t("VIRTUAL_ASSETS_PR12")}</p>
            <p>{t("VIRTUAL_ASSETS_PR13")}</p>
            <p>{t("VIRTUAL_ASSETS_PR14")}</p>
            <p>{t("VIRTUAL_ASSETS_PR15")}</p>
            <p>{t("VIRTUAL_ASSETS_PR16")}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
