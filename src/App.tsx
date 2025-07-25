import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, Transition } from "framer-motion";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Statement from "./pages/Statement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw"
  },
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: "100vw"
  }
};

const pageTransition: Transition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Index /></motion.div>} />
        <Route path="/portfolio" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Portfolio /></motion.div>} />
        <Route path="/ueber-mich" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><About /></motion.div>} />
        <Route path="/kontakt" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Contact /></motion.div>} />
        <Route path="/contact" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Contact /></motion.div>} />
        <Route path="/statement" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Statement /></motion.div>} />
        <Route path="*" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><NotFound /></motion.div>} />
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
