import { useTranslation } from "react-i18next";

export default function MoneyLaunderingFromEnvironmentalCrime() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("MONEY_LAUNDERING_FROM_ENVIRONMENTAL_CRIME_TITLE")}
        </h2>
        <div className="flex flex-col gap-3 text-[#333] text-[18px] font-[400] font-[Graphik,Calibri,sans-serif]">
          <p>{t("MONEY_LAUNDERING_FROM_ENVIRONMENTAL_CRIME_PR1")}</p>
          <p>{t("MONEY_LAUNDERING_FROM_ENVIRONMENTAL_CRIME_PR2")}</p>
          <p>{t("MONEY_LAUNDERING_FROM_ENVIRONMENTAL_CRIME_PR3")}</p>
          <p>{t("MONEY_LAUNDERING_FROM_ENVIRONMENTAL_CRIME_PR4")}</p>
          <p>{t("MONEY_LAUNDERING_FROM_ENVIRONMENTAL_CRIME_PR5")}</p>
          <p>{t("MONEY_LAUNDERING_FROM_ENVIRONMENTAL_CRIME_PR6")}</p>
          <p>{t("MONEY_LAUNDERING_FROM_ENVIRONMENTAL_CRIME_PR7")}</p>
          <p>{t("MONEY_LAUNDERING_FROM_ENVIRONMENTAL_CRIME_PR8")}</p>
          <p>{t("MONEY_LAUNDERING_FROM_ENVIRONMENTAL_CRIME_PR9")}</p>
        </div>
      </div>
    </main>
  );
}
