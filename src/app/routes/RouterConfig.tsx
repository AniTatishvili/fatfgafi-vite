import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Redirect } from "./Redirect";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import { Home } from "../../pages/home";

import { FraudWarning } from "../../pages/fraud-warning";
import BlackAndGrayLists from "../../pages/black-and-gray-lists/black-and-gray-lists";
import { Contact } from "../../pages/contact/contact";
import FatfRecommendations from "../../pages/fatf-recommendations/fatf-recommendations";
import { AssetRecovery } from "../../pages/asset-recovery";
import TheFatfRecommendations from "../../pages/the-fatf-recommendations/the-fatf-recommendations";
import BeneficialOwnership from "../../pages/beneficial-ownership/beneficial-ownership";
import MethodsAndTrends from "../../pages/methods-and-trends/methods-and-trends";
import MoneyLaunderingTerroristFinancingArtAntiquitiesMarket from "../../pages/methods-and-trends/money-laundering-terrorist-financing-art-antiquities-market/money-laundering-terrorist-financing-art-antiquities-market";
import CrowdfaundingForTerrorismFinancing from "../../pages/methods-and-trends/crowdfaunding-for-terrorism-financing/crowdfaunding-for-terrorism-financing";
import CounteringRansomwareFinancing from "../../pages/methods-and-trends/countering-ransomware-financing/countering-ransomware-financing";
import MutualEvaluations from "../../pages/mutual-evaluations/mutual-evaluations";
import HighRiskAndOtherMonitoredJurisdictions from "../../pages/high-risk-and-other-monitored-jurisdictions/high-risk-and-other-monitored-jurisdictions";
import Corruption from "../../pages/corruption/corruption";
import Digitalisation from "../../pages/digitalisation/digitalisation";
import EnvironmentalCrime from "../../pages/environmental-crime/environmental-crime";
import FinancialInclusionAndNpoIsseus from "../../pages/financial-inclusion-and-npo-isseus/financial-inclusion-and-npo-isseus";
import ProliferationFinancing from "../../pages/proliferation-financing/proliferation-financing";
import TerroristFinancing from "../../pages/terrorist-financing/terrorist-financing";
import VirtualAssets from "../../pages/virtual-assets/virtual-assets";
import GlobalNetworks from "../../pages/countries/global-networks/global-networks";
import TargetedUpdateVirtualassetsVasps from "../../pages/fatf-recommendations/targeted-update-virtual-assets-vasps/targeted-update-virtual-assets-vasps";
import GatekeeperTcCorruption from "../../pages/publications/gatekeeper-tc-corruption/gatekeeper-tc-corruption";
import FatfNraNationalRiskAssessmentsGuidancePublicConsultation from "../../pages/fatf-recommendations/fatf-nra-national-risk-assessments-guidance-public-consultation/fatf-nra-national-risk-assessments-guidance-public-consultation";
import GuidanceCounterProliferationFinancing from "../../pages/proliferation-financing/guidance-counter-proliferation-financing/guidance-counter-proliferation-financing";
import MoneyLaunderingFromEnvironmentalCrime from "../../pages/environmental-crime/money-laundering-from-environmental-crime/money-laundering-from-environmental-crime";
import MoneyLaunderingWildlifeTrade from "../../pages/environmental-crime/money-laundering-wildlife-trade/money-laundering-wildlife-trade";
import PrivateSector from "../../pages/private-sector/private-sector";
import AssessmentMethodology from "../../pages/publications/assessment-methodology/assessment-methodology";
import PrivacyPolicy from "../../pages/privacy-policy/privacy-policy";
import TermsConditions from "../../pages/terms-conditions/terms-conditions";
import FatfTrainingAndSupportActivities from "../../pages/fatf-training-and-support-activities/fatf-training-and-support-activities";
import StudentsAcademia from "../../pages/students-academia/students-academia";
import FrequentlyAskedQuestions from "../../pages/frequently-asked-questions/frequently-asked-questions";
import Countries from "../../pages/countries/countries";

export function RouterConfig() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Redirect />}>
          <Route path="asset-recovery" element={<AssetRecovery />} />
          <Route path="fraud-warning" element={<FraudWarning />} />
          <Route path="black-and-gray-lists" element={<BlackAndGrayLists />} />
          <Route
            path="fatf-recommendations"
            element={<FatfRecommendations />}
          />
          <Route path="methods-and-trends" element={<MethodsAndTrends />} />
          <Route
            path="methods-and-trends/crowdfaunding-for-terrorism-financing"
            element={<CrowdfaundingForTerrorismFinancing />}
          />
          <Route
            path="methods-and-trends/countering-ransomware-financing"
            element={<CounteringRansomwareFinancing />}
          />
          <Route
            path="methods-and-trends/money-laundering-terrorist-financing-art-antiquities-market"
            element={<MoneyLaunderingTerroristFinancingArtAntiquitiesMarket />}
          />
          <Route
            path="fatf-recommendations"
            element={<FatfRecommendations />}
          />
          <Route path="mutual-evaluations" element={<MutualEvaluations />} />
          <Route
            path="high-risk-and-other-monitored-jurisdictions"
            element={<HighRiskAndOtherMonitoredJurisdictions />}
          />
          <Route
            path="beneficial-ownership"
            element={<BeneficialOwnership />}
          />
          <Route path="corruption" element={<Corruption />} />
          <Route path="digitalisation" element={<Digitalisation />} />
          <Route path="environmental-crime" element={<EnvironmentalCrime />} />
          <Route
            path="financial-inclusion-and-npo-isseus"
            element={<FinancialInclusionAndNpoIsseus />}
          />
          <Route
            path="proliferation-financing"
            element={<ProliferationFinancing />}
          />
          <Route path="terrorist-financing" element={<TerroristFinancing />} />
          <Route path="virtual-assets" element={<VirtualAssets />} />
          <Route
            path="countries/global-networks"
            element={<GlobalNetworks />}
          />
          <Route
            path="fatf-recommendations/targeted-update-virtual-assets-vasps"
            element={<TargetedUpdateVirtualassetsVasps />}
          />
          <Route
            path="publications/gatekeeper-tc-corruption"
            element={<GatekeeperTcCorruption />}
          />
          <Route
            path="proliferation-financing/guidance-counter-proliferation-financing"
            element={<GuidanceCounterProliferationFinancing />}
          />
          <Route
            path="fatf-recommendations/fatf-nra-national-risk-assessments-guidance-public-consultation"
            element={
              <FatfNraNationalRiskAssessmentsGuidancePublicConsultation />
            }
          />
          <Route
            path="environmental-crime/money-laundering-wildlife-trade"
            element={<MoneyLaunderingWildlifeTrade />}
          />
          <Route
            path="environmental-crime/money-laundering-from-environmental-crime"
            element={<MoneyLaunderingFromEnvironmentalCrime />}
          />
          <Route path="countries/global-networks" element={<FraudWarning />} />
          <Route
            path="the-fatf-recommendations"
            element={<TheFatfRecommendations />}
          />
          <Route
            path="publications/assessment-methodology"
            element={<AssessmentMethodology />}
          />
          <Route path="private-sector" element={<PrivateSector />} />

          <Route
            path="frequently-asked-questions"
            element={<FrequentlyAskedQuestions />}
          />
          <Route path="students-academia" element={<StudentsAcademia />} />
          <Route path="countries" element={<Countries />} />
          <Route
            path="fatf-training-and-support-activities"
            element={<FatfTrainingAndSupportActivities />}
          />
          <Route path="terms-conditions" element={<TermsConditions />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* Add a 404 Not Found route if needed */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}
