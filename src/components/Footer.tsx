import { Link } from "react-router-dom";
import { cta, org, regulatory, regulatoryLine } from "@/data/facts";

const footerLinks: Record<string, { label: string; path: string }[]> = {
  Services: [
    { label: "Wealth Planning", path: "/wealth-planning" },
    { label: "NRI Investing", path: "/nri-investing" },
    { label: "Retirement Planning", path: "/retirement" },
    { label: "Portfolio Health Check", path: "/wealth-planning" },
  ],
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Resources", path: "/resources" },
    { label: "Contact", path: "/contact" },
    { label: cta.primary, path: "/contact" },
  ],
  Legal: [
    { label: "Disclosures", path: "/about#regulatory-charter" },
    { label: "Compensation Model", path: "/about#compensation" },
    { label: "Privacy Policy", path: "/about#regulatory-charter" },
    { label: "Disclaimer", path: "/about#regulatory-charter" },
  ],
};

const channels = [
  { label: `Chat on WhatsApp (${org.phoneDisplay})`, href: `https://wa.me/${org.whatsapp}`, icon: "chat_bubble" },
  { label: `Call ${org.phoneDisplay}`, href: `tel:${org.phoneTel}`, icon: "call" },
  { label: `Email ${org.email}`, href: `mailto:${org.email}`, icon: "mail" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary mt-20">
      <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="font-headline text-primary text-xl font-semibold">S</span>
              </div>
              <span className="font-headline text-xl font-semibold">Shah Financial</span>
            </div>
            <p className="text-body-sm text-primary-fixed-dim max-w-sm leading-relaxed">
              {org.description}
            </p>
            <address className="not-italic text-body-sm text-primary-fixed-dim mt-6 space-y-1 leading-relaxed">
              <span className="block">{org.address.display}</span>
              <a href={`tel:${org.phoneTel}`} className="block hover:text-on-primary transition-colors link-underline">
                {org.phoneDisplay}
              </a>
              <a href={`mailto:${org.email}`} className="block hover:text-on-primary transition-colors link-underline">
                {org.email}
              </a>
              <span className="block pt-1">{org.hours}</span>
              <span className="block">{org.hoursNriNote}</span>
            </address>
            <div className="flex gap-3 mt-6">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  aria-label={channel.label}
                  {...(channel.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="w-10 h-10 rounded-full border border-primary-fixed-dim/30 flex items-center justify-center hover:bg-secondary-container hover:text-primary transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-[20px]">{channel.icon}</span>
                </a>
              ))}
            </div>
          </div>

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

      <div className="border-t border-primary-fixed-dim/15">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter py-6">
          <p className="text-regulatory-legal text-primary-fixed-dim/80 leading-relaxed max-w-4xl">
            {regulatoryLine}
          </p>
          <p className="text-regulatory-legal text-primary-fixed-dim/80 leading-relaxed max-w-4xl mt-3">
            {regulatory.disclaimer}
          </p>
          <p className="text-regulatory-legal text-primary-fixed-dim/70 leading-relaxed max-w-4xl mt-3">
            Shah Financial operates as a mutual fund distributor, not as a SEBI-registered
            investment adviser. Scheme guidance on this website is general in nature, is not
            personalised investment advice, and does not constitute an offer to sell securities. All
            investments carry risk, including possible loss of principal. Past performance is not
            indicative of future results.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 gap-3">
            <p className="text-regulatory-legal text-primary-fixed-dim/60" suppressHydrationWarning>
              © {new Date().getFullYear()} {org.legalName}. All rights reserved.
            </p>
            <p className="text-regulatory-legal text-primary-fixed-dim/60">
              ARN and EUIN values shown above are placeholders until the AMFI registry values are filled.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
