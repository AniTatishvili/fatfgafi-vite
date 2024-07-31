import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

interface Language {
  [key: string]: { nativeName: string };
}

const LNGS: Language = {
  en: { nativeName: "English" },
  fr: { nativeName: "French" },
};

export const LanguageMenu = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleOption = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentLanguage = i18n.resolvedLanguage || "en";
  const currentLanguageName =
    LNGS[currentLanguage]?.nativeName || "Select Language";

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <div className="w-[143px]">
        <button
          type="button"
          className="inline-flex w-full justify-between items-center bg-[#ECEFF1] rounded-[0.25em] bg-white px-4 py-[0.7rem] text-[18px] text-[#5d7a88] font-[Graphik,Calibri,sans-serif] hover:bg-white"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleMenu}
        >
          <span>{currentLanguageName}</span>
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className="max-w-[143px] absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {Object.keys(LNGS).map((lng) => (
              <div
                key={lng}
                onClick={() => handleOption(lng)}
                className="block px-4 py-2 text-[1em] text-[#13181b] cursor-pointer hover:bg-[#4f9eb2]"
                role="menuitem"
                tabIndex={-1}
                id={`menu-item-${lng}`}
              >
                {LNGS[lng].nativeName}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
