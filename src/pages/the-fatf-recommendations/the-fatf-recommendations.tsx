import { useTranslation } from "react-i18next";

import { IoArrowDownSharp } from "react-icons/io5";

import recomandation_img from "../../../public/images/nov23-recommendations.png";
import { NavLink } from "react-router-dom";

export default function TheFatfRecommendations() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("THE_FATF_RECOMMENDATIONS")}
        </h2>
        <div className="flex md:flex-row flex-col md:items-start items-center text-[18px] font-[Graphik,Calibri,sans-serif]">
          <img
            src={recomandation_img}
            alt="recomendation"
            className="md:w-[200px] w-[100%] h-automd:max-h-[100%] max-h-[300px] object-contain"
          />
          <div className="px-8 py-4">
            <p className="italic py-1.5">
              {t("THE_FATF_RECOMMENDATIONS_DATE")}
            </p>
            <p className="py-1.5">{t("THE_FATF_RECOMMENDATIONS_PARAGRAPH1")}</p>
            <p className="py-1.5">{t("THE_FATF_RECOMMENDATIONS_PARAGRAPH2")}</p>
            <div className="border border-[#4f9eb2] border-2 rounded-[4px] p-6  my-2.5">
              <h3 className="mb-5">
                <NavLink
                  to="/recommendation-book/recommendations.pdf"
                  download
                  className="text-[#333] text-xl font-[Graphik,Calibri,sans-serif]"
                >
                  {t("FATF_RECOMMENDATIONS_2012")}
                </NavLink>
              </h3>
              <p className="text-3 font-[300] mt-2.5 mb-1">
                {t("THE_FATF_RECOMMENDATIONS_PARAGRAPH3")}
              </p>
              <div className="flex md:flex-row flex-col justify-between md:items-end items-start gap-3 mt-5">
                <NavLink
                  to="/recommendation-book/recommendations.pdf"
                  target="blank"
                  download
                  className="inline-flex items-center gap-2 text-[#333] text-[18px] font-[Graphik,Calibri,sans-serif] px-[24px] py-[8px] border-2 border-[#267589] rounded-[10rem]  md:order-1 order-2"
                >
                  <IoArrowDownSharp />
                  <span>{t("DOWNLOAD")}</span>
                </NavLink>
                <span className="text-[#5d7a88] text-[0.725em] uppercase font-[400] loading-normal md:order-2 order-1">
                  application/pdf 1 MB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
