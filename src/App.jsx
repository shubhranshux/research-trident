import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import SubNav from './components/SubNav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

// Footer pages — Academics & Student Life
const LibraryPage         = lazy(() => import("./pages/LibraryPage"));
const IQACPage            = lazy(() => import("./pages/IQACPage"));
const DVVPage             = lazy(() => import("./pages/DVVPage"));
const TridentPoliciesPage = lazy(() => import("./pages/TridentPoliciesPage"));
const TestimonialsPage    = lazy(() => import("./pages/TestimonialsPage"));
const StudentClubsPage    = lazy(() => import("./pages/StudentClubsPage"));
const CiscoThingQbatorPage= lazy(() => import("./pages/CiscoThingQbatorPage"));
const GrievancePage       = lazy(() => import("./pages/GrievancePage"));
const ICCPage             = lazy(() => import("./pages/ICCPage"));
const AlumniPage          = lazy(() => import("./pages/AlumniPage"));

// Footer pages — About the Institution
const AboutPage              = lazy(() => import("./pages/AboutPage"));
const NAACPage               = lazy(() => import("./pages/NAACPage"));
const NBAPage                = lazy(() => import("./pages/NBAPage"));
const NIRFPage               = lazy(() => import("./pages/NIRFPage"));
const SIROPage               = lazy(() => import("./pages/SIROPage"));
const AICTEDisclosurePage    = lazy(() => import("./pages/AICTEDisclosurePage"));
const CareerPage             = lazy(() => import("./pages/CareerPage"));
const InformationBrochurePage= lazy(() => import("./pages/InformationBrochurePage"));
const BPUTAffiliationPage    = lazy(() => import("./pages/BPUTAffiliationPage"));
const FinancialAuditsPage    = lazy(() => import("./pages/FinancialAuditsPage"));
const AntiRaggingPage        = lazy(() => import("./pages/AntiRaggingPage"));

// Footer pages — Legal
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const DisclaimerPage    = lazy(() => import("./pages/DisclaimerPage"));
const TermsOfUsePage    = lazy(() => import("./pages/TermsOfUsePage"));

// Research pages
const ObjectivePage               = lazy(() => import("./pages/ObjectivePage"));
const ResearchRecognitionPage     = lazy(() => import("./pages/ResearchRecognitionPage"));
const ResearchCommitteePage       = lazy(() => import("./pages/ResearchCommitteePage"));
const EmpowermentPage             = lazy(() => import("./pages/EmpowermentPage"));
const ResearchLinkagePage         = lazy(() => import("./pages/ResearchLinkagePage"));
const ExtramuralFundingPage       = lazy(() => import("./pages/ExtramuralFundingPage"));
const IntramuralFundingPage       = lazy(() => import("./pages/IntramuralFundingPage"));
const DomainResearchHubsPage      = lazy(() => import("./pages/DomainResearchHubsPage"));
const PatentsPage                 = lazy(() => import("./pages/PatentsPage"));
const ConsultancyPage             = lazy(() => import("./pages/ConsultancyPage"));
const ResearchConsultancyPolicyPage = lazy(() => import("./pages/ResearchConsultancyPolicyPage"));
const RDPolicyPage                = lazy(() => import("./pages/RDPolicyPage"));

function SectionFallback() {
  return <div style={{ minHeight: "100vh" }} />;
}

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white selection:bg-primary/20 text-text-dark font-sans">
        <Header />
        <SubNav />
        <Suspense fallback={<SectionFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Footer Pages — Academics & Student Life */}
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/iqac" element={<IQACPage />} />
            <Route path="/dvv" element={<DVVPage />} />
            <Route path="/trident-policies" element={<TridentPoliciesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/alumni" element={<AlumniPage />} />
            <Route path="/student-clubs" element={<StudentClubsPage />} />
            <Route path="/cisco-thingqbator" element={<CiscoThingQbatorPage />} />
            <Route path="/grievance" element={<GrievancePage />} />
            <Route path="/icc" element={<ICCPage />} />

            {/* Footer Pages — About the Institution */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/naac" element={<NAACPage />} />
            <Route path="/nba" element={<NBAPage />} />
            <Route path="/nirf" element={<NIRFPage />} />
            <Route path="/siro" element={<SIROPage />} />
            <Route path="/aicte-disclosure" element={<AICTEDisclosurePage />} />
            <Route path="/bput-affiliation" element={<BPUTAffiliationPage />} />
            <Route path="/financial-audits" element={<FinancialAuditsPage />} />
            <Route path="/anti-ragging" element={<AntiRaggingPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/information-brochure" element={<InformationBrochurePage />} />

            {/* Footer Pages — Legal */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />

            {/* Research Pages */}
            <Route path="/objective" element={<ObjectivePage />} />
            <Route path="/research-recognition" element={<ResearchRecognitionPage />} />
            <Route path="/research-committee" element={<ResearchCommitteePage />} />
            <Route path="/empowerment" element={<EmpowermentPage />} />
            <Route path="/research-linkage" element={<ResearchLinkagePage />} />
            <Route path="/extramural-funding" element={<ExtramuralFundingPage />} />
            <Route path="/intramural-funding" element={<IntramuralFundingPage />} />
            <Route path="/domain-research-hubs" element={<DomainResearchHubsPage />} />
            <Route path="/patents" element={<PatentsPage />} />
            <Route path="/consultancy" element={<ConsultancyPage />} />
            <Route path="/research-consultancy-policy" element={<ResearchConsultancyPolicyPage />} />
            <Route path="/rd-policy" element={<RDPolicyPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
