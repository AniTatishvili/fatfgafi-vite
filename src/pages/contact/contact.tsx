import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] flex md:flex-row flex-col gap-[40px] my-[40px]">
        <div>
          <div className="flex flex-col gap-3 text-[#333] text-[18px] font-[400] font-[Graphik,Calibri,sans-serif]">
            <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
              {t("CONTACT_TITLE")}
            </h2>
            <p>{t("CONTACT_PARAGRAPH1")}</p>
            <NavLink
              to="/frequently-asked-questions"
              className="w-fit flex items-center gap-2 text-[#fff] text-[18px] font-[Graphik,Calibri,sans-serif] px-[24px] py-[8px] md:mt-0 mt-3 bg-[#df3327] hover:bg-[#92140b] rounded-[10rem]"
            >
              <span>{t("CONTACT_BUTTON1")}</span>
            </NavLink>
          </div>
          <div className="flex flex-col gap-3 text-[#333] text-[18px] font-[400] font-[Graphik,Calibri,sans-serif]">
            <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
              {t("CONTACT_TITLE2")}
            </h2>
            <p>{t("CONTACT_PARAGRAPH2")}</p>
            <NavLink
              to="/fraud-warning"
              className="w-fit flex items-center gap-2 text-[#fff] text-[18px] font-[Graphik,Calibri,sans-serif] px-[24px] py-[8px] md:mt-0 mt-3 bg-[#df3327] hover:bg-[#92140b] rounded-[10rem]"
            >
              <span>{t("CONTACT_BUTTON2")}</span>
            </NavLink>
          </div>
          <div className="flex flex-col gap-3 text-[#333] text-[18px] font-[400] font-[Graphik,Calibri,sans-serif]">
            <h4 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
              {t("CONTACT_TITLE3")}
            </h4>
            <p>{t("CONTACT_PARAGRAPH3")}</p>
            <p>{t("CONTACT_PARAGRAPH4")}</p>
            <p>{t("CONTACT_PARAGRAPH4")}</p>
            <p>{t("CONTACT_PARAGRAPH5")}</p>
            <p>Tel: + 33 1 45 24 90 90</p>
            <p>{t("CONTACT_PARAGRAPH8")}</p>
            <p>Contact@fatf-gafi.org</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-[#333] text-[18px] font-[400] font-[Graphik,Calibri,sans-serif]">
          <h3 className="text-[#333] md:text-[36px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
            {t("CONTACT_TITLE4")}
          </h3>
          <p>
            {t("CONTACT_PARAGRAPH9")}
            <NavLink to="/" className="text-[#df3327] underline decoration-2">
              media@fatf-gafi.org.
            </NavLink>
          </p>
          <p>
            {t("CONTACT_PARAGRAPH1")}
            <a
              href="https://www.flickr.com/photos/fatf"
              className="text-[#df3327] underline decoration-2"
            >
              www.flickr.com/fatf
            </a>{" "}
            {t("CONTACT_PARAGRAPH12")} on{" "}
            <a
              href="https://www.youtube.com/TheFATF"
              className="text-[#df3327] underline decoration-2"
            >
              www.youtube.com/TheFATF
            </a>
          </p>
          <p>{t("CONTACT_PARAGRAPH11")}</p>
        </div>
      </div>
    </main>
  );
};
