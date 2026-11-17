import { Link } from "react-router-dom";

const footerLinks = {
  Services: [
    { label: "Wealth Planning", path: "/wealth-planning" },
    { label: "NRI Investing", path: "/nri-investing" },
    { label: "Retirement Planning", path: "/retirement" },
    { label: "Portfolio Review", path: "/contact" },
  ],
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Resources", path: "/resources" },
    { label: "Contact", path: "/contact" },
    { label: "Book Consultation", path: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", path: "/contact" },
    { label: "Terms of Service", path: "/contact" },
    { label: "Disclosures", path: "/contact" },
    { label: "Disclaimer", path: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary mt-20">
      {/* Top section */}
      <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="font-headline text-primary text-xl font-semibold">S</span>
              </div>
              <span className="font-headline text-xl font-semibold">Shah Financial</span>
            </div>
            <p className="text-body-sm text-primary-fixed-dim max-w-sm leading-relaxed">
              Fiduciary-first wealth planning and advisory for professionals, families,
              and NRIs. Helping you build, protect, and transfer wealth with discipline
              and clarity.
            </p>
            <div className="flex gap-3 mt-6">
              {["linkedin", "share", "email"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary-fixed-dim/30 flex items-center justify-center hover:bg-secondary-container hover:text-primary transition-all duration-300"
                  aria-label={icon}
                >
                  <span className="material-symbols-outlined text-[20px]">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-label-md uppercase text-secondary-fixed-dim mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-body-sm text-primary-fixed-dim hover:text-on-primary transition-colors link-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Regulatory bar */}
      <div className="border-t border-primary-fixed-dim/15">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter py-6">
          <p className="text-regulatory-legal text-primary-fixed-dim/70 leading-relaxed max-w-4xl">
            Shah Financial Advisory is a registered investment adviser. All investments
            carry risk, including possible loss of principal. Past performance is not
            indicative of future results. This website is for informational purposes only
            and does not constitute investment advice or an offer to sell securities.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-3">
            <p className="text-regulatory-legal text-primary-fixed-dim/60">
              © {new Date().getFullYear()} Shah Financial Advisory. All rights reserved.
            </p>
            <div className="flex gap-5">
              <span className="text-regulatory-legal text-primary-fixed-dim/60">SEBI Reg. No: INA0000XXXXX</span>
              <span className="text-regulatory-legal text-primary-fixed-dim/60">AMFI Reg. No: ARN-XXXXXX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
