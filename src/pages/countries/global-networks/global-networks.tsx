import { useTranslation } from "react-i18next";

import globus from "../../../../public/images/fichier-1.png";
import world_map from "../../../../public/images/world-map--countries-map.png";

export default function GlobalNetworks() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <div className="flex md:flex-row flex-col items-center gap-8 py-4">
          <img src={globus} alt="globus" className="max-w-[112px]" />
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif]">
            {t("GLOBAL_NETWORKS_TITLE")}
          </h2>
        </div>
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <p>{t("GLOBAL_NETWORKS_PR1")}</p>
          <p>{t("GLOBAL_NETWORKS_PR2")}</p>
          <img src={world_map} alt="map" />
        </div>
      </div>
    </main>
  );
}
