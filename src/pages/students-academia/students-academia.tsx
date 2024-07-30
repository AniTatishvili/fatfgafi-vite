import React from "react";

import { useTranslation } from "react-i18next";

import students_banner from "@/public/images/students-banner.jpeg";

export default function StudentsAcademia() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <img src={students_banner} alt="private_sector" />
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("STUDENTS_ACADEMIA_TITLE")}
          </h2>
          <p>{t("STUDENTS_ACADEMIA_PR1")}</p>
          <p>{t("STUDENTS_ACADEMIA_PR2")}</p>
          <p>{t("STUDENTS_ACADEMIA_PR3")}</p>
          <p>{t("PRIVATE_SECTOR_PR4")}</p>
          <h3 className="text-[#333] md:text-[28px] text-[18px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("STUDENTS_ACADEMIA_TITLE2")}
          </h3>
          <p>{t("STUDENTS_ACADEMIA_PR4")}</p>
          <p>{t("STUDENTS_ACADEMIA_PR5")}</p>
          <p>{t("STUDENTS_ACADEMIA_PR6")}</p>
          <p>{t("STUDENTS_ACADEMIA_PR7")}</p>
          <h3 className="text-[#333] md:text-[28px] text-[18px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("STUDENTS_ACADEMIA_TITLE3")}
          </h3>
          <p>{t("STUDENTS_ACADEMIA_PR8")}</p>
          <p>{t("STUDENTS_ACADEMIA_PR9")}</p>
          <p>{t("STUDENTS_ACADEMIA_PR10")}</p>
        </div>
      </div>
    </main>
  );
}
