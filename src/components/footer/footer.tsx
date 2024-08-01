import { useTranslation } from "react-i18next";

import { GoArrowRight } from "react-icons/go";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-[#f8f8f8] mt-[24px]">
      <div className="md:w-[80%] w-[90%] flex lg:flex-row flex-col lg:items-start items-center py-[2.5em] m-auto gap-4">
        <div className="lg:w-[25%] w-[100%] lg:block flex flex-col items-center">
          <h4 className="text-[#333] text-[18px] font-[Graphik,Calibri,sans-serif] font-[700]">
            Discover
          </h4>
          <ul className="py-[20px] lg:block flex flex-col items-center primary-list">
            <li>
              <NavLink
                to="/the-fatf-recommendations"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("THE_FATF")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/countries"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("COUNTRIES")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("PUBLICATIONS")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("CALENDARS")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/private-sector"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("PRIVATE_SECTOR")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/students-academia"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("INFORMATION_FOR_STUDENTS_AND_ACADEMIA")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="lg:w-[25%] w-[100%] lg:block flex flex-col items-center">
          <h4 className="text-[#333] text-[18px] font-[Graphik,Calibri,sans-serif] font-[700]">
            Need help?
          </h4>
          <ul className="py-[20px] lg:block flex flex-col items-center primary-list">
            <li>
              <NavLink
                to="/fraud-warning"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("FRAUD_WARNING")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/frequently-asked-questions"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("FREQUENTLY_ASKED_QUESTIONS")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("FATF_GLOSSARY")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="lg:w-[25%] w-[100%] lg:block flex flex-col items-center">
          <h4 className="text-[#333] text-[18px] font-[Graphik,Calibri,sans-serif] font-[700]">
            More
          </h4>
          <ul className="py-[20px] lg:block flex flex-col items-center primary-list">
            <li>
              <NavLink
                to="/fatf-training-and-support-activities"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("FATF_TRAINING_SUPPORT_ACTIVITIES")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="flex items-center gap-2 text-[#267589] text-[18px] font-[Graphik,Calibri,sans-serif] py-[8px]"
              >
                <span>{t("RESTRICTED_ACCESS_FOR_FATS_DETEGATES_ONLY")}</span>
                <GoArrowRight />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="lg:w-[25%] w-[100%] flex flex-col lg:items-end items-center">
          <ul className="flex flex-row justify-center items-center gap-4 py-[20px]">
            <li>
              <NavLink to="https://x.com/FATFNews" className="text-[27px]">
                <FaTwitter />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.facebook.com/theFATF"
                className="text-[27px]"
              >
                <FaFacebookF />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.instagram.com/fatf_gafi/?hl=en"
                className="text-[27px]"
              >
                <PiInstagramLogoFill />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.linkedin.com/company/financial-action-task-force-fatf-/"
                className="text-[27px]"
              >
                <FaLinkedinIn />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.youtube.com/@TheFATF"
                className="text-[27px]"
              >
                <FaYoutube />
              </NavLink>
            </li>
          </ul>
          <NavLink
            to="/contact"
            className="w-fit flex items-center gap-2 text-[#fff] text-[18px] font-[Graphik,Calibri,sans-serif] px-[24px] py-[8px] md:mt-0 mt-3 bg-[#df3327] hover:bg-[#92140b] rounded-[10rem] whitespace-nowrap"
          >
            <span>{t("CONTACT_US")}</span>
            <RiArrowRightDoubleLine />
          </NavLink>
        </div>
      </div>
      <div className="w-full bg-[#267589] flex flex-col items-center py-6 mt-[24px]">
        <div className="w-fit flex flex-row justify-center items-center gap-2">
          <NavLink
            to="/terms-conditions"
            className="flex items-center gap-2 text-[#fff] sm:text-[18px] text-[16px] font-[Graphik,Calibri,sans-serif] border-b-1 py-[8px]"
          >
            <span className="leading-[0.75] border-b-[2px]">
              {t("TERMS_CONDITIONS")}
            </span>
            |
          </NavLink>
          <NavLink
            to="/privacy-policy"
            className="flex items-center gap-2 text-[#fff] sm:text-[18px] text-[16px] font-[Graphik,Calibri,sans-serif] py-[8px]"
          >
            <span className="leading-[0.75] border-b-[2px]">
              {t("PRIVACY_POLICY")}
            </span>
            |
          </NavLink>
          <NavLink
            to="/"
            className="flex items-center gap-2 text-[#fff] sm:text-[18px] text-[16px] font-[Graphik,Calibri,sans-serif] py-[8px]"
          >
            <span className="leading-[0.75] border-b-[2px]">
              {t("SITEMAP")}
            </span>
          </NavLink>
        </div>
        <p className="text-[#fff] text-[18px] font-[Graphik,Calibri,sans-serif] border-b-1 py-[8px] mt-2">
          © fatf-gafi 2024. All rights reserved
        </p>
      </div>
    </footer>
  );
};
