
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Security from "./pages/Security";
import NotFound from "./pages/NotFound";
import Retail from "./pages/segments/Retail";
import Industry from "./pages/segments/Industry";
import Service from "./pages/segments/Service";
import ITSupport from "./pages/services/ITSupport";
import SecuritySolutions from "./pages/services/SecuritySolutions";
import CloudSolutions from "./pages/services/CloudSolutions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/security" element={<SecuritySolutions />} />
          <Route path="/it-support" element={<ITSupport />} />
          <Route path="/cloud" element={<CloudSolutions />} />
          <Route path="/segment/retail" element={<Retail />} />
          <Route path="/segment/industry" element={<Industry />} />
          <Route path="/segment/service" element={<Service />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
