import { useTranslation } from "react-i18next";

import { NavLink } from "react-router-dom";

import recomandation_img from "../../../public/images/nov23-recommendations.png";

export default function FatfRecommendations() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("FATF_RECOMMENDATIONS")}
        </h2>
        <div className="flex flex-col gap-3 pb-8 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <p>{t("FATF_RECOMMENDATIONS_PARAGRAPH1")}</p>
          <p>{t("FATF_RECOMMENDATIONS_PARAGRAPH2")}</p>
          <ul className="list-disc marker:text-[#4f9eb2] ms-[20px]">
            <li className="pb-[0.5em]">{t("FATF_RECOMMENDATIONS_LI1")}</li>
            <li className="pb-[0.5em]">{t("FATF_RECOMMENDATIONS_LI2")}</li>
            <li className="pb-[0.5em]">{t("FATF_RECOMMENDATIONS_LI3")}</li>
            <li className="pb-[0.5em]">{t("FATF_RECOMMENDATIONS_LI4")}</li>
            <li className="pb-[0.5em]">{t("FATF_RECOMMENDATIONS_LI5")}</li>
            <li className="pb-[0.5em]">{t("FATF_RECOMMENDATIONS_LI6")}</li>
            <li className="pb-[0.5em]">{t("FATF_RECOMMENDATIONS_LI7")}</li>
          </ul>
        </div>
        <NavLink
          to="/the-fatf-recommendations"
          className="flex md:flex-row flex-col md:items-start items-center bg-[#e2f3f7] rounded-[15px] overflow-hidden"
        >
          <img
            src={recomandation_img}
            alt="recomendation"
            className="w-[300px] h-auto"
          />
          <div className="px-8 py-4">
            <h3 className="text-[#333] text-[24px] font-[700] font-[Graphik,Calibri,sans-serif] py-6">
              FATF Recommendations
            </h3>
            <p className="text-[18px] font-[Graphik,Calibri,sans-serif]">
              {t("FATF_RECOMMENDATIONS_PARAGRAPH3")}
            </p>
          </div>
        </NavLink>
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif] pt-8">
          <p>{t("FATF_RECOMMENDATIONS_PARAGRAPH4")}</p>
          <p>{t("FATF_RECOMMENDATIONS_PARAGRAPH5")}</p>
          <p>{t("FATF_RECOMMENDATIONS_PARAGRAPH6")}</p>
        </div>
      </div>
    </main>
  );
}
