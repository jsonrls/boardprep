import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";
import Index from "./pages/Index";
import VetDetails from "./pages/VetDetails";
import FtleDetails from "./pages/FtleDetails";
import FisheriesDetails from "./pages/FisheriesDetails";
import AbeDetails from "./pages/AbeDetails";
import QuestionDrills from "./pages/QuestionDrills";
import MobileApp from "./pages/MobileApp";
import Classroom from "./pages/Classroom";
import IOS from "./pages/IOS";
import Lite from "./pages/Lite";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PreRegister from "./pages/PreRegister";
import Press from "./pages/Press";
import PressArticle from "./pages/PressArticle";
import ReviewClass from "./pages/ReviewClass";
import ApiEndpoints from "./pages/ApiEndpoints";
import Products from "./pages/Products";
import { trackVisit } from "./lib/visitTracker";

const queryClient = new QueryClient();

const VisitTracker = () => {
  const location = useLocation();

  useEffect(() => {
    void trackVisit({
      path: `${location.pathname}${location.search}`,
      referrer: document.referrer || undefined,
    });
  }, [location.pathname, location.search]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <CustomCursor />
          <VisitTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/question-drills" element={<QuestionDrills />} />
            {/* <Route path="/mobile-app" element={<MobileApp />} /> */}
            <Route path="/classroom" element={<Classroom />} />
            <Route path="/ios" element={<IOS />} />
            <Route path="/lite" element={<Lite />} />
            <Route path="/review/vet" element={<VetDetails />} />
            <Route path="/review/ftle" element={<FtleDetails />} />
            <Route path="/review/fisheries" element={<FisheriesDetails />} />
            <Route path="/review/abe" element={<AbeDetails />} />
            <Route path="/press" element={<Press />} />
            <Route path="/press/:id" element={<PressArticle />} />
            <Route path="/enroll" element={<PreRegister />} />
            <Route path="/review-class" element={<ReviewClass />} />
            <Route path="/our-products" element={<Products />} />
            <Route path="/api-endpoints" element={<ApiEndpoints />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
