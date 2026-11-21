import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Seo from "@/components/Seo";
import Home from "@/pages/Home";
import WealthPlanning from "@/pages/WealthPlanning";
import NriInvesting from "@/pages/NriInvesting";
import Retirement from "@/pages/Retirement";
import Resources from "@/pages/Resources";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wealth-planning" element={<WealthPlanning />} />
      <Route path="/nri-investing" element={<NriInvesting />} />
      <Route path="/retirement" element={<Retirement />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function AppShell() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Pages />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Seo />
      <AppShell />
    </BrowserRouter>
  );
}

/** Used by the build-time renderer: one static document per route, same tree as the client. */
export function StaticRoute({ path }: { path: string }) {
  return (
    <MemoryRouter initialEntries={[path]}>
      <ScrollToTop />
      <Seo />
      <AppShell />
    </MemoryRouter>
  );
}
