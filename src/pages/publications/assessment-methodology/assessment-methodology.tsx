import { useTranslation } from "react-i18next";

export default function AssessmentMethodology() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("ASSESSMENT_METHODOLOGY_TITLE")}
        </h2>
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <p>{t("ASSESSMENT_METHODOLOGY_PR1")}</p>
          <p>{t("ASSESSMENT_METHODOLOGY_PR2")}</p>
          <p>{t("ASSESSMENT_METHODOLOGY_PR3")}</p>
          <p>{t("ASSESSMENT_METHODOLOGY_PR4")}</p>
          <p>{t("ASSESSMENT_METHODOLOGY_PR5")}</p>
          <p>{t("ASSESSMENT_METHODOLOGY_PR6")}</p>
          <p>{t("ASSESSMENT_METHODOLOGY_PR7")}</p>
          <h3 className="text-[#333] md:text-[28px] text-[18px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("ASSESSMENT_METHODOLOGY_TITLE2")}
          </h3>
          <p>{t("ASSESSMENT_METHODOLOGY_PR8")}</p>
        </div>
      </div>
    </main>
  );
}
