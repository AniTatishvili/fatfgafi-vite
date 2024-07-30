import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

import { PrimaryIcon } from "../../shared/icon/primary-icon";
import { FaBars, FaXmark } from "react-icons/fa6";
import { HeaderSearchBtn } from "../../shared/buttons";
import { Logotype } from "../../shared/logotype";
import { LanguageMenu } from "../../components/language-menu";

export const Navigation = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const data = [
    { id: 1, url: "/", name: t("HOME") },
    {
      id: 2,
      url: "/asset-recovery",
      name: t("ASSET_RECOVERY"),
    },
    {
      id: 3,
      url: "/fraud-warning",
      name: t("FRAUD_WARNING"),
    },
  ];

  return (
    <>
      <nav className="flex items-center overflow-hidden lg:hidden">
        <div
          className={`cursor-pointer z-[101] ${
            isOpen ? "fixed right-[20px]" : "static"
          }`}
        >
          {isOpen ? (
            <PrimaryIcon
              icon={FaXmark}
              color="#df3327"
              size="30"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <PrimaryIcon
              icon={FaBars}
              color="#13181b"
              size="30"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
        {isMounted &&
          createPortal(
            <div
              className={`transition-slowest ease fixed top-0 z-[100] flex min-h-[100vh] w-full bg-[#4f9eb2] flex-col gap-6 px-6 transition-[right] duration-500 lg:hidden ${
                isOpen ? "right-0" : "-right-full"
              }`}
            >
              <div className="flex flex-col gap-4">
                <Logotype />
                {data.map((link) => (
                  <a
                    href={link.url}
                    key={link.id}
                    className="w-full capitalise text-[20px] text-[#13181b] border-b-2 border-[#4f9eb2] border-b-[#13181b] py-[8px]"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="md:w-[80%] w-[90%] flex flex-col items-center gap-4 mx-auto">
                  <HeaderSearchBtn />
                  <LanguageMenu />
                </div>
              </div>
            </div>,
            document.body
          )}
      </nav>
      <nav className="text-ii_aght hidden justify-center items-center gap-2 text-[20px] lg:flex">
        {data.map((link) => (
          <a
            href={link.url}
            key={link.id}
            className="h-[58px] text-[#13181b] text-[20px] capitalise text-ii_light font-[inherit] pt-[8px] xl:px-[24px] px-[18px] pb-[1.25rem] mx-[8px] hover:border-b-[2px] border-[#df3327] hover:text-ii_blue hover:duration-300"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </>
  );
};
