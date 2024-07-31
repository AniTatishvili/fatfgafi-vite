import { useTranslation } from "react-i18next";

export default function TargetedUpdateVirtualassetsVasps() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("TARGETED_UPDATE_VIRTUAL_ASSETS_VASPS_TITLE")}
        </h2>
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <p>{t("TARGETED_UPDATE_VIRTUAL_ASSETS_VASPS__PR1")}</p>
          <p>{t("TARGETED_UPDATE_VIRTUAL_ASSETS_VASPS__PR2")}</p>
          <p>{t("TARGETED_UPDATE_VIRTUAL_ASSETS_VASPS__PR3")}</p>
          <p>{t("TARGETED_UPDATE_VIRTUAL_ASSETS_VASPS__PR4")}</p>
          <p>{t("TARGETED_UPDATE_VIRTUAL_ASSETS_VASPS__PR5")}</p>
          <p>{t("TARGETED_UPDATE_VIRTUAL_ASSETS_VASPS__PR6")}</p>
          <p>{t("TARGETED_UPDATE_VIRTUAL_ASSETS_VASPS__PR7")}</p>
          <p>{t("TARGETED_UPDATE_VIRTUAL_ASSETS_VASPS__PR8")}</p>
          <p>{t("TARGETED_UPDATE_VIRTUAL_ASSETS_VASPS__PR9")}</p>
          <ul className="list-disc marker:text-[#4f9eb2] ms-[20px]">
            <li>{t("TARGETED_UPDATE_VIRTUAL_ASSETS_VASPS__PR10")}</li>
            <li>{t("TARGETED_UPDATE_VIRTUAL_ASSETS_VASPS__PR11")}</li>
            <li>{t("TARGETED_UPDATE_VIRTUAL_ASSETS_VASPS__PR12")}</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
