import React from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import { PrimaryIcon } from "../../shared/icon/primary-icon";
import { FaBars, FaXmark } from "react-icons/fa6";
import { HeaderSearchBtn } from "../../shared/buttons";
import { Logotype } from "../../shared/logotype";
import { LanguageMenu } from "../../components/language-menu";

export const Navigation = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
      console.log(isOpen);
    }
  }, [location]);

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

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <nav
        className="flex items-center overflow-hidden lg:hidden"
        onClick={handleToggle}
      >
        <div className={`mcursor-pointer relative z-[101] `}>
          {isOpen ? null : (
            <PrimaryIcon icon={FaBars} color="#13181b" size="30" />
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
                <div className="flex justify-between items-center">
                  <Logotype />
                  <div className={`mcursor-pointer z-[101] fixed right-[20px]`}>
                    {isOpen ? (
                      <PrimaryIcon icon={FaXmark} color="#df3327" size="30" />
                    ) : null}
                  </div>
                </div>
                {data.map((link) => (
                  <NavLink
                    to={link.url}
                    key={link.id}
                    className="w-full capitalise text-[20px] text-[#13181b] border-b-2 border-[#4f9eb2] border-b-[#13181b] py-[8px]"
                  >
                    {link.name}
                  </NavLink>
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
          <NavLink
            to={link.url}
            key={link.id}
            className="h-[58px] text-[#13181b] text-[20px] capitalise text-ii_light font-[inherit] pt-[8px] xl:px-[24px] px-[18px] pb-[1.25rem] mx-[8px] hover:border-b-[2px] border-[#df3327] hover:text-ii_blue hover:duration-300"
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </>
  );
};
