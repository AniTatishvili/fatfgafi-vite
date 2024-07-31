import React from "react";

import { useTranslation } from "react-i18next";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { SliderBtn } from "./slider-btn";

import fatf_plenary from "../../../../public/images/main-slider/fatf-plenary.png";
import fatf_cover from "../../../../public/images/main-slider/fatf-cover-delivery-hp-full-cover-copy.png";
import public_consult from "../../../../public/images/main-slider/public-consult.png";
import elisa_banner from "../../../../public/images/main-slider/elisa-banner-slider.png";
import website_horizontal_general from "../../../../public/images/main-slider/website-horizontal-general.png";
import homepage_caroussel from "../../../../public/images/main-slider/homepage-caroussel-image.jpeg";
import crypto_image from "../../../../public/images/main-slider/crypto-image.jpeg";
import beneficial_ownership from "../../../../public/images/main-slider/beneficial-ownership.jpeg";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
interface SliderItemType {
  bannerSource: string;
  title: string;
  desc?: string;
  link?: string;
}

export const MainSlider = () => {
  const { t } = useTranslation();

  const [swiperKey] = React.useState(0);
  const refSlide = React.useRef<SwiperRef>(null);

  const silderItemsArr: SliderItemType[] = [
    {
      bannerSource: fatf_plenary,
      title: t("OUTCOMES_OF_FATF_PLENARY"),
    },
    {
      bannerSource: fatf_cover,
      title: t("BREAKING_BARRIERS"),
      desc: t("SLIDE_TWO_DESCRIPTION"),
    },
    {
      bannerSource: public_consult,
      title: t("PUBLIC_CONSULTATION"),
      desc: t("SLIDE_THREE_DESCRIPTION"),
      link: t("PLEASE_PROVIDE_YOUR_RESPONSES"),
    },
    {
      bannerSource: elisa_banner,
      title: t("SLIDE_FOUR_TITLE"),
      desc: t("SLIDE_FOUR_DESCROPTION"),
      link: t("SLIDE_FOUR_BTN"),
    },
    {
      bannerSource: website_horizontal_general,
      title: t("SLIDE_FIVE_TITLE"),
      desc: t("SLIDE_FIVE_DESCRIPTION"),
      link: t("FATF_MINISTERIAL_DECLARATION"),
    },
    {
      bannerSource: homepage_caroussel,
      title: t("THE_FATF_RECOMMENDATIONS"),
      desc: t("SLIDE_SIX_DECLARATION"),
      link: t("FATF_RECOMMENDATIONS"),
    },
    {
      bannerSource: crypto_image,
      title: t("SLIDE_SEVEN_TITLE"),
      desc: t("READ_THE_LATEST_UPDATE"),
    },
    {
      bannerSource: beneficial_ownership,
      title: t("BENEFICIAL_OWNERSHIP"),
      desc: t("SLIDE_EIGHT_DESCRIPTION"),
      link: t("READ_MORE"),
    },
  ];

  const handleClickChangeSlide = (pos: string) => {
    pos === "left"
      ? refSlide.current?.swiper.slidePrev()
      : refSlide.current?.swiper.slideNext();
  };

  return (
    <div className="w-[100%] relative mb-[32px]">
      <Swiper
        key={swiperKey}
        ref={refSlide}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        style={{ width: "100%", height: "fit-content" }}
      >
        {silderItemsArr.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="w-full md:h-[540px] h-[260px] relative z-10">
              <img
                src={item.bannerSource}
                className="w-full h-[100%] object-cover"
                alt="slider"
              />
              <div className="w-[70%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-20">
                <h2 className="text-[#fff] text-[2.25em] my-[1rem]">
                  {item.title}
                </h2>
                <p className="text-[#fff] text-[24px] py-[1rem]">{item.desc}</p>
                {item.link && (
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#fff] text-[18px] font-[Graphik,Calibri,sans-serif] px-[24px] py-[8px] mt-[1rem] mb-[0.5rem] bg-[#267589] rounded-[10rem]"
                  >
                    {item.link}
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-row items-center absolute bottom-0 right-[16px] z-50">
        <button
          className="w-[2.5rem] h-[2.5rem] bg-[#eceff1] flex justify-center items-center m-[0.125rem] mb-0 rounded-[0.25em]"
          onClick={() => handleClickChangeSlide("left")}
        >
          <SliderBtn icon={IoIosArrowBack} direct={"left"} size={24} />
        </button>
        <button
          className="w-[2.5rem] h-[2.5rem] bg-[#eceff1] flex justify-center items-center m-[0.125rem] mb-0 rounded-[0.25em]"
          onClick={() => handleClickChangeSlide("right")}
        >
          <SliderBtn icon={IoIosArrowForward} direct={"right"} size={24} />
        </button>
      </div>
    </div>
  );
};
