import React from "react";

import { useTranslation } from "react-i18next";

import { GoArrowRight } from "react-icons/go";

import { ShapeTeal } from "../../../shared/shape-teal";

export const Topics = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f8f8f8] my-[32px]">
      <ShapeTeal text={t("OUR_TOPICS")} />
      <div className="w-[85%] mx-auto py-[32px]">
        <div>
          <p className="w-[70%] text-[#333] text-[18px] font-[Graphik,Calibri,sans-serif] py-[14px]">
            {t("OUR_TOPICS_DESC")}
          </p>
          <ul className="grid md:grid-cols-2 grid-cols-1 py-[20px] primary-list">
            <li>
              <a
                href="/methods-and-trends"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("METHODS_AND_TRENDS")}</span>
                <GoArrowRight />
              </a>
            </li>
            <li>
              <a
                href="/fatf-recommendations"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("FATF_RECOMMENDATIONS")}</span>
                <GoArrowRight />
              </a>
            </li>
            <li>
              <a
                href="/mutual-evaluations"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("MUTUAL_EVALUATIONS")}</span>
                <GoArrowRight />
              </a>
            </li>
            <li>
              <a
                href="/high-risk-and-other-monitored-jurisdictions"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("HIGH_RISK_AND_OTHER_MONITORED_JURISDICTIONS")}</span>
                <GoArrowRight />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="w-[70%] text-[#333] text-[18px] font-[Graphik,Calibri,sans-serif] py-[14px]">
            {t("THE-FATF_ASLO_WORKS_ON_THE_FOLLOWING_AREAS")}
          </p>
          <ul className="grid md:grid-cols-2 grid-cols-1 py-[20px] primary-list">
            <li>
              <a
                href="/asset-recovery"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("ASSET_RECOVERY")}</span>
                <GoArrowRight />
              </a>
            </li>
            <li>
              <a
                href="/beneficial-ownership"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("BENEFICIAL_OWNERSHIP")}</span>
                <GoArrowRight />
              </a>
            </li>
            <li>
              <a
                href="/corruption"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("CORRUPTION")}</span>
                <GoArrowRight />
              </a>
            </li>
            <li>
              <a
                href="/digitalisation"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("DIGITALISATION")}</span>
                <GoArrowRight />
              </a>
            </li>
            <li>
              <a
                href="/environmental-crime"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("ENVIREMENTAL_CRIME")}</span>
                <GoArrowRight />
              </a>
            </li>
            <li>
              <a
                href="/environmental-crime"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("ENVIREMENTAL_CRIME")}</span>
                <GoArrowRight />
              </a>
            </li>
            <li>
              <a
                href="/financial-inclusion-and-npo-isseus"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("FINANCIAL_INCLUSION_AND_NPO_ISSUES")}</span>
                <GoArrowRight />
              </a>
            </li>
            <li>
              <a
                href="/proliferation-financing"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("PROLIFERATION_FINANCING")}</span>
                <GoArrowRight />
              </a>
            </li>
            <li>
              <a
                href="/terrorist-financing"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("TERRORIST_FINANCING")}</span>
                <GoArrowRight />
              </a>
            </li>
            <li>
              <a
                href="/virtual-assets"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("VIRTUAL_ASSETS")}</span>
                <GoArrowRight />
              </a>
            </li>
          </ul>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[#fff] text-[18px] font-[Graphik,Calibri,sans-serif] px-[24px] py-[8px] bg-[#267589] rounded-[10rem]"
        >
          <span>{t("MORE_ABOUT_FATF")}</span>
        </a>
      </div>
    </div>
  );
};
