import { useTranslation } from "react-i18next";

export const FraudWarning = () => {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("FRAUD_WARNING_TITLE")}
        </h2>
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <p>{t("FRAUD_WARNING_PARAGRAPH1")}</p>
          <p>{t("FRAUD_WARNING_PARAGRAPH2")}</p>
          <p>{t("FRAUD_WARNING_PARAGRAPH3")}</p>
          <p>{t("FRAUD_WARNING_PARAGRAPH4")}</p>
          <p>{t("FRAUD_WARNING_PARAGRAPH5")}</p>
        </div>
      </div>
    </main>
  );
};
