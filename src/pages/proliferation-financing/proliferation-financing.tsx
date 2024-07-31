import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import proliferation_img from "../../../public/images/proliferation-guidance-cover.png";

export default function ProliferationFinancing() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("PROLIFERATION_FINANCING_TITLE")}
        </h2>
        <div className="flex flex-col gap-3">
          <p>{t("PROLIFERATION_FINANCING__PR1")}</p>
          <ul className="list-disc marker:text-[#4f9eb2] ms-[20px]">
            <li className="pb-[0.5em]">{t("PROLIFERATION_FINANCING__PR2")}</li>
            <li className="pb-[0.5em]">{t("PROLIFERATION_FINANCING__PR3")}</li>
          </ul>
          <p>{t("PROLIFERATION_FINANCING__PR4")}</p>
          <p>{t("PROLIFERATION_FINANCING__PR5")}</p>
          <NavLink
            to="/proliferation-financing/guidance-counter-proliferation-financing"
            className="flex md:flex-row flex-col items-center my-6"
          >
            <img
              src={proliferation_img}
              alt="recomendation"
              className="md:min-w-[300px] w-[300px] h-auto rounded-[15px]"
            />
            <div className="md:px-8 px-0 py-4">
              <h3 className="text-[#333] text-[24px] font-[700] font-[Graphik,Calibri,sans-serif] py-6">
                {t("PROLIFERATION_FINANCING__TITLE2")}
              </h3>
              <p className="text-[18px] font-[Graphik,Calibri,sans-serif]">
                {t("PROLIFERATION_FINANCING__PR12")}
              </p>
            </div>
          </NavLink>
          <p>{t("PROLIFERATION_FINANCING__PR6")}</p>
          <ul className="list-disc marker:text-[#4f9eb2] ms-[20px]">
            <li className="pb-[0.5em]">{t("PROLIFERATION_FINANCING__PR7")}</li>
            <li className="pb-[0.5em]">{t("PROLIFERATION_FINANCING__PR8")}</li>
            <li className="pb-[0.5em]">{t("PROLIFERATION_FINANCING__PR9")}</li>
            <li className="pb-[0.5em]">{t("PROLIFERATION_FINANCING__PR10")}</li>
          </ul>
          <p>{t("PROLIFERATION_FINANCING__PR11")}</p>
        </div>
      </div>
    </main>
  );
}
