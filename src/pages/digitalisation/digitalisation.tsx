import { useTranslation } from "react-i18next";

import digital1 from "../../../public/images/digitalisation/gettyimages-680271202-rev.jpeg";
import digital2 from "../../../public/images/digitalisation/gettyimages-1210917404.jpeg";
import digital3 from "../../../public/images/digitalisation/gettyimages-1017199998--converted-.png";
import digital4 from "../../../public/images/digitalisation/gettyimages-1173458627.jpeg";
import { NavLink } from "react-router-dom";

interface DigitalisationProps {
  title: string;
  desc: string;
  src: string;
}

export default function Digitalisation() {
  const { t } = useTranslation();

  const DigitalisationArr: DigitalisationProps[] = [
    {
      title: t("DIGITALISATION_ITEM1_TITLE"),
      desc: t("DIGITALISATION_ITEM1_PARAGR"),
      src: digital1,
    },
    {
      title: t("DIGITALISATION_ITEM2_TITLE"),
      desc: t("DIGITALISATION_ITEM2_PARAGR"),
      src: digital2,
    },
    {
      title: t("DIGITALISATION_ITEM3_TITLE"),
      desc: t("DIGITALISATION_ITEM3_PARAGR"),
      src: digital3,
    },
    {
      title: t("DIGITALISATION_ITEM4_TITLE"),
      desc: t("DIGITALISATION_ITEM4_PARAGR"),
      src: digital4,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[28px] text-[20px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t("DIGITALISATION_TITLE1")}
        </h2>
        <div className="flex flex-col gap-3 pb-8 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <p>{t("DIGITALISATION_PARAGR1")}</p>
          <p>{t("DIGITALISATION_PARAGR2")}</p>
          <ul className="list-disc marker:text-[#4f9eb2] ms-[20px]">
            <li className="pb-[0.5em]">{t("DIGITALISATION_PARAGR3")}</li>
            <li className="pb-[0.5em]">{t("DIGITALISATION_PARAGR4")}</li>
          </ul>
          <p>{t("DIGITALISATION_PARAGR5")}</p>
        </div>
        <div className="flex flex-col gap-[32px]">
          {DigitalisationArr.map((item, i) => {
            return (
              <div
                key={i}
                className="bg-[#e2f3f7] flex md:flex-row flex-col rounded-[15px] overflow-hidden"
              >
                <div className="flex flex-col justify-between gap-[20px] px-8 py-4 md:order-1 order-2">
                  <h3 className="text-[#333] text-[24px] font-[700] font-[Graphik,Calibri,sans-serif]">
                    <NavLink to="/">{item.title}</NavLink>
                  </h3>
                  <p>{item.desc}</p>
                  <a
                    href="#"
                    className="w-fit inline-flex items-center gap-2 text-[#fff] text-[18px] font-[Graphik,Calibri,sans-serif] px-[24px] py-[8px] bg-[#267589] rounded-[10rem] my-4 ml-4"
                  >
                    <span>{t("READ_MORE")}</span>
                  </a>
                </div>
                <img
                  src={item.src}
                  alt="digitalisation"
                  className="md:w-[300px] w-full object-cover md:order-2 order-1"
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
