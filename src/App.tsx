import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Founders from "./pages/Founders";
import Contact from "./pages/Contact";
import EximServices from "./pages/services/EximServices";
import RegistrationServices from "./pages/services/RegistrationServices";
import ComplianceServices from "./pages/services/ComplianceServices";
import ConsultingServices from "./pages/services/ConsultingServices";
import NpaServices from "./pages/services/NpaServices";
import InsuranceServices from "./pages/services/InsuranceServices";
import AdditionalServices from "./pages/services/AdditionalServices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/founders" element={<Founders />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/exim" element={<EximServices />} />
          <Route path="/services/registration" element={<RegistrationServices />} />
          <Route path="/services/compliance" element={<ComplianceServices />} />
          <Route path="/services/consulting" element={<ConsultingServices />} />
          <Route path="/services/npa" element={<NpaServices />} />
          <Route path="/services/insurance" element={<InsuranceServices />} />
          <Route path="/services/additional" element={<AdditionalServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
