import { Route, Routes } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";
import Index from "@/pages/Index";
import VetDetails from "@/pages/VetDetails";
import FtleDetails from "@/pages/FtleDetails";
import FisheriesDetails from "@/pages/FisheriesDetails";
import AbeDetails from "@/pages/AbeDetails";
import AgricultureDetails from "@/pages/AgricultureDetails";
import QuestionDrills from "@/pages/QuestionDrills";
import Practice from "@/pages/Practice";
import Classroom from "@/pages/Classroom";
import IOS from "@/pages/IOS";
import Lite from "@/pages/Lite";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import PreRegister from "@/pages/PreRegister";
import Press from "@/pages/Press";
import PressArticle from "@/pages/PressArticle";
import ReviewClass from "@/pages/ReviewClass";
import ApiEndpoints from "@/pages/ApiEndpoints";
import Products from "@/pages/Products";
import CheckYourEmail from "@/pages/CheckYourEmail";
import SubscriptionConfirmed from "@/pages/SubscriptionConfirmed";
import SearchPage from "@/pages/Search";

/**
 * Synchronous routes used only by the prerender entry. Keeping them separate
 * lets crawlers receive complete HTML while the browser loads one route chunk
 * at a time.
 */
export const StaticAppRoutes = () => (
  <>
    <ScrollToTop />
    <CustomCursor />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/question-drills" element={<QuestionDrills />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/classroom" element={<Classroom />} />
      <Route path="/ios" element={<IOS />} />
      <Route path="/lite" element={<Lite />} />
      <Route path="/review/vet" element={<VetDetails />} />
      <Route path="/review/ftle" element={<FtleDetails />} />
      <Route path="/review/fisheries" element={<FisheriesDetails />} />
      <Route path="/review/abe" element={<AbeDetails />} />
      <Route path="/review/agriculture" element={<AgricultureDetails />} />
      <Route path="/press" element={<Press />} />
      <Route path="/press/:id" element={<PressArticle />} />
      <Route path="/enroll" element={<PreRegister />} />
      <Route path="/review-class" element={<ReviewClass />} />
      <Route path="/our-products" element={<Products />} />
      <Route path="/check-your-email" element={<CheckYourEmail />} />
      <Route path="/subscription-confirmed" element={<SubscriptionConfirmed />} />
      <Route path="/api-endpoints" element={<ApiEndpoints />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);
