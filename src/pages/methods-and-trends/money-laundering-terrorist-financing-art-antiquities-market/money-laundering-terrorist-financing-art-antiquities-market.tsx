import { useTranslation } from "react-i18next";
import PrimaryVideo from "../../../shared/videos/primery-video";

export default function MoneyLaunderingTerroristFinancingArtAntiquitiesMarket() {
  const { t } = useTranslation();

  const videoId = "3DsLwQ-ao20";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="md:w-[80%] w-[90%] my-[40px]">
        <h2 className="text-[#333] md:text-[44px] text-[30px] font-[700] font-[Graphik,Calibri,sans-serif] py-4">
          {t(
            "MONEY_LAUNDERING_TERRORIST_FINANCING_ART_ANTIQUITIES_MARKET_TITLE"
          )}
        </h2>
        <div className="flex flex-col gap-3 text-[18px] font-[Graphik,Calibri,sans-serif]">
          <p>
            {t(
              "MONEY_LAUNDERING_TERRORIST_FINANCING_ART_ANTIQUITIES_MARKET_PR1"
            )}
          </p>
          <p>
            {t(
              "MONEY_LAUNDERING_TERRORIST_FINANCING_ART_ANTIQUITIES_MARKET_PR2"
            )}
          </p>
          <p>
            {t(
              "MONEY_LAUNDERING_TERRORIST_FINANCING_ART_ANTIQUITIES_MARKET_PR3"
            )}
          </p>
          <p>
            {t(
              "MONEY_LAUNDERING_TERRORIST_FINANCING_ART_ANTIQUITIES_MARKET_PR4"
            )}
          </p>
          <PrimaryVideo embedId={videoId} />
        </div>
      </div>
    </main>
  );
}
