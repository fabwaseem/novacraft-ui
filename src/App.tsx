import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

const Index = lazy(() => import("./pages/Index"));
const Components = lazy(() => import("./pages/Components"));
const Themes = lazy(() => import("./pages/Themes"));
const Blocks = lazy(() => import("./pages/Blocks"));
const Templates = lazy(() => import("./pages/Templates"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Navbar />
        <Suspense fallback={<div role="status" className="p-10 text-sm text-muted-foreground">Loading page</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/components" element={<Components />} />
            <Route path="/blocks" element={<Blocks />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/themes" element={<Themes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
