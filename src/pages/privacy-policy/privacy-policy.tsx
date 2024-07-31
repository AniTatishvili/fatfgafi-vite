import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("PRIVACY_POLICY_TITLE")}
        </h2>
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <p>{t("PRIVACY_POLICY_PR1")}</p>
          <p>{t("PRIVACY_POLICY_PR2")}</p>
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("PRIVACY_POLICY_TITLE2")}
          </h2>
          <p>{t("PRIVACY_POLICY_PR3")}</p>
          <p>{t("PRIVACY_POLICY_PR4")}</p>
          <p>{t("PRIVACY_POLICY_PR5")}</p>
          <ul className="list-disc marker:text-[#4f9eb2] ms-[20px]">
            <li>{t("PRIVACY_POLICY_PR6")}</li>
            <li>{t("PRIVACY_POLICY_PR7")}</li>
          </ul>
          <p>{t("PRIVACY_POLICY_PR8")}</p>
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("PRIVACY_POLICY_TITLE3")}
          </h2>
          <p>{t("PRIVACY_POLICY_PR9")}</p>
          <ul className="list-disc marker:text-[#4f9eb2] ms-[20px]">
            <li>{t("PRIVACY_POLICY_PR10")}</li>
            <li>{t("PRIVACY_POLICY_PR11")}</li>
            <li>{t("PRIVACY_POLICY_PR12")}</li>
            <li>{t("PRIVACY_POLICY_PR13")}</li>
          </ul>
          <p>{t("PRIVACY_POLICY_PR14")}</p>
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("PRIVACY_POLICY_TITLE4")}
          </h2>
          <p>{t("PRIVACY_POLICY_PR15")}</p>
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("PRIVACY_POLICY_TITLE5")}
          </h2>
          <p>{t("PRIVACY_POLICY_PR16")}</p>
          <p>{t("PRIVACY_POLICY_PR17")}</p>
          <p>{t("PRIVACY_POLICY_PR18")}</p>
          <p>{t("PRIVACY_POLICY_PR19")}</p>
        </div>
      </div>
    </main>
  );
}
