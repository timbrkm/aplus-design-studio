import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Statement from "./pages/Statement";
import NotFound from "./pages/NotFound";
import PageWrapper from "./components/PageWrapper";

const queryClient = new QueryClient();

// HSL-Farben aus index.css
const colors = {
  background: "hsl(0 0% 100%)",
  portfolio: "hsl(197 21% 72%)",
  about: "hsl(100 20% 70%)",
  contact: "hsl(31 100% 42%)",
  statement: "hsl(0 0% 47%)",
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper color={colors.background}><Index /></PageWrapper>} />
        <Route path="/portfolio" element={<PageWrapper color={colors.portfolio}><Portfolio /></PageWrapper>} />
        <Route path="/ueber-mich" element={<PageWrapper color={colors.about}><About /></PageWrapper>} />
        <Route path="/kontakt" element={<PageWrapper color={colors.contact}><Contact /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper color={colors.contact}><Contact /></PageWrapper>} />
        <Route path="/statement" element={<PageWrapper color={colors.statement}><Statement /></PageWrapper>} />
        <Route path="*" element={<PageWrapper color={colors.background}><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
