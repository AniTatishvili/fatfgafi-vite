import { useTranslation } from "react-i18next";

import crowdfunding_img from "../../../public/images/methods-and-trends/crowdfunding-for-tf-small.jpeg";
import countering_img from "../../../public/images/methods-and-trends/gettyimages2.jpeg";
import money_laundering_img from "../../../public/images/methods-and-trends/gettyimages.jpeg";
import { NavLink } from "react-router-dom";

interface MethodsAndTrendsProps {
  src: string;
  title: string;
  date: string;
  desc: string;
  url: string;
}

export default function MethodsAndTrends() {
  const { t } = useTranslation();

  const MethodsAndTrendsArr: MethodsAndTrendsProps[] = [
    {
      src: crowdfunding_img,
      title: t("METHODS_AND_TRENDS_TITLE2"),
      date: t("METHODS_AND_TRENDS_DATE1"),
      desc: t("METHODS_AND_TRENDS_PR4"),
      url: "/methods-and-trends/crowdfaunding-for-terrorism-financing",
    },
    {
      src: countering_img,
      title: t("METHODS_AND_TRENDS_TITLE3"),
      date: t("METHODS_AND_TRENDS_DATE2"),
      desc: t("METHODS_AND_TRENDS_PR5"),
      url: "/methods-and-trends/countering-ransomware-financing",
    },
    {
      src: money_laundering_img,
      title: t("METHODS_AND_TRENDS_TITLE4"),
      date: t("METHODS_AND_TRENDS_DATE3"),
      desc: t("METHODS_AND_TRENDS_PR6"),
      url: "/methods-and-trends/money-laundering-terrorist-financing-art-antiquities-market",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("FRAUD_WARNING_TITLE")}
        </h2>
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <p>{t("METHODS_AND_TRENDS_PR1")}</p>
          <p>{t("METHODS_AND_TRENDS_PR2")}</p>
          <p>{t("METHODS_AND_TRENDS_PR3")}</p>
        </div>
        <div className="flex flex-col items-center gap-[32px] mt-8">
          {MethodsAndTrendsArr.map((item, i) => {
            return (
              <div key={i} className="">
                <h3 className="text-[#333] text-[24px] font-[700] font-[Graphik,Calibri,sans-serif] py-6">
                  <NavLink to={item.url}>{item.title}</NavLink>
                </h3>
                <div className="bg-[#f8f8f8] flex md:flex-row flex-col items-center rounded-[15px] overflow-hidden">
                  <img
                    src={item.src}
                    alt="methods"
                    className="md:w-[300px] w-[100%] h-auto md:h-[234px] max-h-[300px] object-cover"
                  />
                  <div className="px-8 py-4">
                    <p className="text-[18px] font-[400] font-[Graphik,Calibri,sans-serif]">
                      {item.date}
                    </p>
                    <p className="text-[18px] font-[400] font-[Graphik,Calibri,sans-serif]">
                      {item.desc}
                    </p>
                    <NavLink
                      to={item.url}
                      className="inline-flex items-center gap-2 text-[#fff] text-[18px] font-[Graphik,Calibri,sans-serif] px-[24px] py-[8px] bg-[#267589] mt-6 rounded-[10rem]"
                    >
                      <span>{t("READ_MORE")}</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
