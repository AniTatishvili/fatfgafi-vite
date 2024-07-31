import { useTranslation } from "react-i18next";

import { GoArrowRight } from "react-icons/go";

import { ShapeTeal } from "../../../shared/shape-teal";
import { NavLink } from "react-router-dom";

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
              <NavLink
                to="/methods-and-trends"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("METHODS_AND_TRENDS")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/fatf-recommendations"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("FATF_RECOMMENDATIONS")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mutual-evaluations"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("MUTUAL_EVALUATIONS")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/high-risk-and-other-monitored-jurisdictions"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("HIGH_RISK_AND_OTHER_MONITORED_JURISDICTIONS")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <p className="w-[70%] text-[#333] text-[18px] font-[Graphik,Calibri,sans-serif] py-[14px]">
            {t("THE-FATF_ASLO_WORKS_ON_THE_FOLLOWING_AREAS")}
          </p>
          <ul className="grid md:grid-cols-2 grid-cols-1 py-[20px] primary-list">
            <li>
              <NavLink
                to="/asset-recovery"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("ASSET_RECOVERY")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/beneficial-ownership"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("BENEFICIAL_OWNERSHIP")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/corruption"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("CORRUPTION")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/digitalisation"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("DIGITALISATION")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/environmental-crime"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("ENVIREMENTAL_CRIME")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/environmental-crime"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("ENVIREMENTAL_CRIME")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/financial-inclusion-and-npo-isseus"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("FINANCIAL_INCLUSION_AND_NPO_ISSUES")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/proliferation-financing"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("PROLIFERATION_FINANCING")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/terrorist-financing"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("TERRORIST_FINANCING")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/virtual-assets"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("VIRTUAL_ASSETS")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          to="/"
          className="inline-flex items-center gap-2 text-[#fff] text-[18px] font-[Graphik,Calibri,sans-serif] px-[24px] py-[8px] bg-[#267589] rounded-[10rem]"
        >
          <span>{t("MORE_ABOUT_FATF")}</span>
        </NavLink>
      </div>
    </div>
  );
};
