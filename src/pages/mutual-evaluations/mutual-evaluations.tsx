import { useTranslation } from "react-i18next";

import mutual_evaluations_img from "../../../public/images/mutual-evaluations-v7.jpeg";

export default function MutualEvaluations() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("MUTUAL_EVALUATIONS_TITLE")}
        </h2>
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <p>{t("MUTUAL_EVALUATIONS_PR1")}</p>
          <p>{t("MUTUAL_EVALUATIONS_PR2")}</p>
          <p>{t("MUTUAL_EVALUATIONS_PR3")}</p>
          <p>{t("MUTUAL_EVALUATIONS_PR4")}</p>
          <p>{t("MUTUAL_EVALUATIONS_PR5")}</p>
          <p>{t("MUTUAL_EVALUATIONS_PR6")}</p>
          <p>{t("MUTUAL_EVALUATIONS_PR7")}</p>
          <h3 className="text-[#333] md:text-[28px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("STAGES_IN_THE_MUTUAL_EVALUTION_PROCESS")}
          </h3>
          <img
            src={mutual_evaluations_img}
            alt="mutual_evaluations"
            className="m-auto"
          />
          <p>{t("MUTUAL_EVALUATIONS_PR8")}</p>
          <p>{t("MUTUAL_EVALUATIONS_PR9")}</p>
          <p>{t("MUTUAL_EVALUATIONS_PR10")}</p>
          <p>{t("MUTUAL_EVALUATIONS_PR10")}</p>
          <p>{t("MUTUAL_EVALUATIONS_PR11")}</p>
          <p>{t("MUTUAL_EVALUATIONS_PR12")}</p>
          <p>{t("MUTUAL_EVALUATIONS_PR13")}</p>
          <p>{t("MUTUAL_EVALUATIONS_PR14")}</p>
          <p>{t("MUTUAL_EVALUATIONS_PR15")}</p>
          <p>{t("MUTUAL_EVALUATIONS_PR16")}</p>
          <p>{t("MUTUAL_EVALUATIONS_PR17")}</p>
          <p>{t("MUTUAL_EVALUATIONS_PR18")}</p>
        </div>
      </div>
    </main>
  );
}
