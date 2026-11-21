import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { canonicalPath } from "@/data/facts";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Wealth Planning", path: "/wealth-planning" },
  { label: "NRI Investing", path: "/nri-investing" },
  { label: "Retirement", path: "/retirement" },
  { label: "Resources", path: "/resources" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-md shadow-sm border-b border-outline-variant/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
        <div className="flex items-center justify-between h-[var(--header-height-mobile)] md:h-[var(--header-height)]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="font-headline text-on-primary text-xl font-semibold">S</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-headline text-lg font-semibold transition-colors ${scrolled ? "text-primary" : "text-primary"}`}>
                Shah Financial
              </span>
              <span className={`text-[10px] tracking-[0.15em] uppercase transition-colors ${scrolled ? "text-on-surface-variant" : "text-on-surface-variant"}`}>
                Advisory &amp; Wealth Planning
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = canonicalPath(location.pathname) === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={active ? "page" : undefined}
                  className={`px-3 py-2 text-body-sm rounded-lg transition-all duration-200 link-underline ${
                    active
                      ? "text-primary font-semibold"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary text-body-sm font-medium rounded-full hover:bg-primary-fixed-dim transition-all duration-300 hover:shadow-lg"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              Book Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-primary"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface border-t border-outline-variant/20 animate-fade-down">
          <nav className="max-w-page mx-auto px-gutter-mobile py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = canonicalPath(location.pathname) === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={active ? "page" : undefined}
                  className={`px-4 py-3 rounded-lg text-body-md transition-colors ${
                    active ? "bg-primary-fixed text-primary font-semibold" : "text-on-surface hover:bg-surface-container-low"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="mt-2 px-5 py-3 bg-primary text-on-primary text-center font-medium rounded-full"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
