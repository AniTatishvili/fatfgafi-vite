import { useTranslation } from "react-i18next";

import banner_img from "../../../public/images/bo-banner-image-no-logo.png";

export default function BeneficialOwnership() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <div className="text-[#333] text-[18px] font-[400] font-[Graphik,Calibri,sans-serif]">
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("BENEFICIAL_OWNERSHIP_TITLE1")}
          </h2>
          <p>{t("BENEFICIAL_OWNERSHIP_PARAGRAPH1")}</p>
        </div>
        <div className="flex flex-col gap-3 text-[#333] text-[18px] font-[400] font-[Graphik,Calibri,sans-serif]">
          <h2 className="text-[#333] md:text-[36px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("BENEFICIAL_OWNERSHIP_TITLE2")}
          </h2>
          <div className="flex flex-col gap-3 ms-[10%]">
            <p>{t("BENEFICIAL_OWNERSHIP_PARAGRAPH2")}</p>
            <p>{t("BENEFICIAL_OWNERSHIP_PARAGRAPH3")}</p>
            <p>{t("BENEFICIAL_OWNERSHIP_PARAGRAPH4")}</p>
            <p>{t("BENEFICIAL_OWNERSHIP_PARAGRAPH5")}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-[#333] text-[18px] font-[400] font-[Graphik,Calibri,sans-serif]">
          <h3 className="text-[#333] md:text-[36px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("BENEFICIAL_OWNERSHIP_TITLE3")}
          </h3>
          <div className="flex flex-col gap-3 ms-[10%]">
            <img src={banner_img} alt="banner" className="my-4" />
            <p>{t("BENEFICIAL_OWNERSHIP_PARAGRAPH6")}</p>
            <ul className="list-disc marker:text-[#4f9eb2] ms-[20px]">
              <li className="pb-[0.5em]">
                {t("BENEFICIAL_OWNERSHIP_PARAGRAPH7")}
              </li>
              <li className="pb-[0.5em]">
                {t("BENEFICIAL_OWNERSHIP_PARAGRAPH8")}
              </li>
              <li className="pb-[0.5em]">
                {t("BENEFICIAL_OWNERSHIP_PARAGRAPH9")}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-[#333] text-[18px] font-[400] font-[Graphik,Calibri,sans-serif]">
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("BENEFICIAL_OWNERSHIP_TITLE4")}
          </h2>
          <div className="flex flex-col gap-3 ms-[10%]">
            <p>{t("BENEFICIAL_OWNERSHIP_PARAGRAPH10")}</p>
            <p>{t("BENEFICIAL_OWNERSHIP_PARAGRAPH11")}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
