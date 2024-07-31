import { useTranslation } from "react-i18next";

export default function CrowdfaundingForTerrorismFinancing() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_TITLE")}
        </h2>
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <p>{t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_PR1")}</p>
          <p>{t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_PR2")}</p>
          <p>{t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_PR3")}</p>
          <p>{t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_PR4")}</p>
          <p>{t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_PR5")}</p>
          <h3 className="text-[#333] md:text-[36px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("WHAT_IS_CROWDFAUNDING")}
          </h3>
          <p className="italic">
            {t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_PR6")}
          </p>
          <h4 className="text-[#333] md:text-[1em] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_MAIN_METHODS")}
          </h4>
          <p>{t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_PR7")}</p>
          <ul>
            <li>{t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_PR8")}</li>
            <li>{t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_PR9")}</li>
            <li>{t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_PR10")}</li>
            <li>{t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_PR11")}</li>
          </ul>
          <p>{t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_PR12")}</p>
          <p>{t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_PR13")}</p>
          <p>{t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_PR14")}</p>
          <p>{t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_PR15")}</p>
          <p>{t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_PR16")}</p>
          <p>{t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_PR17")}</p>
          <p>{t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_PR18")}</p>
          <p>{t("CROWDFAUNDING_FOR_TERRORISM_FINANCING_PR19")}</p>
        </div>
      </div>
    </main>
  );
}
