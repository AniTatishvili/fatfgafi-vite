import { useTranslation } from "react-i18next";

export default function BlackAndGrayLists() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] flex flex-col gap-[20px] my-[40px]">
        <div className="flex flex-col gap-2 text-[#333] text-[18px] font-[400] font-[Graphik,Calibri,sans-serif]">
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("BLACK_GRAY_LISTS_TITLE")}
          </h2>
          <p>{t("BLACK_GRAY_LISTS_PARAGRAPH1")}</p>
        </div>
        <div>
          <h3 className="text-[#333] text-[36px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("BLACK_GRAY_LISTS_TITLE2")}
          </h3>
          <p>{t("BLACK_GRAY_LISTS_PARAGRAPH2")}</p>
        </div>
        <div>
          <h3 className="text-[#333] text-[36px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("BLACK_GRAY_LISTS_TITLE3")}
          </h3>
          <p>{t("BLACK_GRAY_LISTS_PARAGRAPH3")}</p>
        </div>
      </div>
    </main>
  );
}
