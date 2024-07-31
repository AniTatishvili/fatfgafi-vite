import { useTranslation } from "react-i18next";

export default function TermsConditions() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("TERMS_AND_CONDITIONS_TITLE")}
        </h2>
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <p>{t("TERMS_AND_CONDITIONS_PR1")}</p>
          <p>{t("TERMS_AND_CONDITIONS_PR2")}</p>
          <ul className="list-disc marker:text-[#4f9eb2] ms-[20px]">
            <li>{t("TERMS_AND_CONDITIONS_PR3")}</li>
            <li>{t("TERMS_AND_CONDITIONS_PR4")}</li>
            <li>{t("TERMS_AND_CONDITIONS_PR5")}</li>
            <li>{t("TERMS_AND_CONDITIONS_PR6")}</li>
            <li>{t("TERMS_AND_CONDITIONS_PR7")}</li>
          </ul>
          <p>{t("TERMS_AND_CONDITIONS_PR8")}</p>
          <div className="ms-[20px]">
            <p>FATF-GAFI</p>
            <p>2, rue André-Pascal</p>
            <p>75775 Paris cedex 16</p>
            <p>FRANCE</p>
            <p>{t("TERMS_AND_CONDITIONS_PR11")}: +33 (0)1 44 30 61 37</p>
            <p>
              {t("TERMS_AND_CONDITIONS_PR12")}:{" "}
              <span className="text-[#df3327]">contact@fatf-gafi.org</span>
            </p>
          </div>
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("TERMS_AND_CONDITIONS_TITLE2")}
          </h2>
          <p>{t("TERMS_AND_CONDITIONS_PR9")}</p>
          <p>{t("TERMS_AND_CONDITIONS_PR10")}</p>
        </div>
      </div>
    </main>
  );
}
