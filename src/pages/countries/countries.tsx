import { useTranslation } from "react-i18next";

import world_map from "../../../public/images/world-map--countries-map.png";

export default function Countries() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("COUNTRIES_TITLE")}
        </h2>
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <p>{t("COUNTRIES_PR")}</p>
          <img src={world_map} alt="map" />
        </div>
      </div>
    </main>
  );
}
