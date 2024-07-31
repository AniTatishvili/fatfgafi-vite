import { useTranslation } from "react-i18next";

import logo1 from "../../../../public/images/associate-members/apgml-logo.png";
import logo2 from "../../../../public/images/associate-members/cfatf-2016-160.gif";
import logo3 from "../../../../public/images/associate-members/eag-logo.gif";
import logo4 from "../../../../public/images/associate-members/esaamlg-logo.gif";
import logo5 from "../../../../public/images/associate-members/logo-gabac.png";
import logo6 from "../../../../public/images/associate-members/gafilat-100.gif";
import logo7 from "../../../../public/images/associate-members/giaba-logo.jpeg";
import logo8 from "../../../../public/images/associate-members/mena-fatf-logo-new.png";
import logo9 from "../../../../public/images/associate-members/moneyval-logo.jpeg";

interface AssociateMembersProps {
  src: string;
}

const ItemsArr: AssociateMembersProps[] = [
  { src: logo1 },
  { src: logo2 },
  { src: logo3 },
  { src: logo4 },
  { src: logo5 },
  { src: logo6 },
  { src: logo7 },
  { src: logo8 },
  { src: logo9 },
];

export const AssociateMembers = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f8f8f8] mb-[40px]">
      <div className="md:w-[80%] w-[90%] mx-auto pb-[27px]">
        <h2 className="text-[#333] text-[36px] font-[Graphik,Calibri,sans-serif] font-[700] pt-4 pb-3">
          {t("OUR_ASSOCIATE_MEMBERS")}
        </h2>
        <div className="w-full flex flex-row flex-wrap items-center justify-center py-[40px] gap-y-[30px]">
          {ItemsArr.map((item, i) => {
            return (
              <div
                key={i}
                className="w-[124px] h-[120px] bg-[#fff] flex flex-wrap items-center justify-center rounded-[15px] p-4 lg:mx-[60px] mx-[30px]"
              >
                <img
                  src={item.src}
                  alt="logo"
                  className="max-w-[90px] max-h-[90px] object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
