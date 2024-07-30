import React from "react";

import { useTranslation } from "react-i18next";

import private_sector_img from "@/public/images/banner-private-sector.png";

export default function PrivateSector() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("PRIVATE_SECTOR_TITLE")}
        </h2>
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <img src={private_sector_img} alt="private_sector" />
          <p>{t("PRIVATE_SECTOR_PR1")}</p>
          <p>{t("PRIVATE_SECTOR_PR2")}</p>
          <p>{t("PRIVATE_SECTOR_PR3")}</p>
          <p>{t("PRIVATE_SECTOR_PR4")}</p>
        </div>
      </div>
    </main>
  );
}
