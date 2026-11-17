import Reveal from "@/components/Reveal";
import { SectionHeader, Pill } from "@/components/ui";
import { Link } from "react-router-dom";

const challenges = [
  { icon: "gavel", title: "FEMA Compliance", desc: "Navigating Foreign Exchange Management Act regulations for investments, repatriation, and account types." },
  { icon: "public", title: "Cross-Border Taxation", desc: "Understanding DTAA benefits, residency status implications, and avoiding double taxation on global income." },
  { icon: "currency_exchange", title: "Currency Management", desc: "Strategic hedging and rupee-cost averaging to manage exchange rate risk on repatriation." },
  { icon: "family_restroom", title: "Family Considerations", desc: "Joint accounts, nominations, and managing investments for family members in India." },
];

const accountTypes = [
  { code: "NRE", name: "Non-Resident External", desc: "Rupee-denominated, repatriable. Interest tax-free in India. Ideal for savings and FDs." },
  { code: "NRO", name: "Non-Resident Ordinary", desc: "For Indian income (rent, dividends). Repatriable up to $1M/year. Subject to TDS." },
  { code: "FCNR(B)", name: "Foreign Currency Non-Resident", desc: "Foreign currency deposits. Fully repatriable. Hedges currency risk. Tax-free interest." },
];

const investmentRoutes = [
  "Mutual Funds (equity & debt)", "Direct Equity (PIS route)", "Bonds & NCDs", "Fixed Deposits (NRE/FCNR)",
  "Real Estate (with FEMA limits)", "NPS for NRIs", "PPF (if existing account)", "GIFT City IFSC products",
];

export default function NriInvesting() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height)]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-container to-primary text-on-primary py-20 md:py-28">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <Pill icon="public">NRI Investing</Pill>
            <h1 className="font-headline text-headline-xl md:text-[56px] leading-[1.1] mt-6 mb-6 max-w-3xl">
              Investing in India from <em className="text-secondary-container not-italic">abroad</em>, made simple.
            </h1>
            <p className="text-body-lg text-primary-fixed-dim max-w-xl leading-relaxed">
              Specialized guidance for Non-Resident Indians navigating the complexities of
              cross-border investing — compliance, taxation, and repatriation, all handled.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="The NRI Landscape"
              title={<>Unique challenges, <em className="text-secondary not-italic">specialized solutions</em></>}
              subtitle="Investing as an NRI involves regulatory, tax, and currency considerations that require expert navigation."
              align="center"
            />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {challenges.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="card-lift bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-7 flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-fixed text-2xl">{c.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-headline-sm text-primary mb-2">{c.title}</h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="Banking Foundations"
              title={<>Choosing the right <em className="text-secondary not-italic">account</em></>}
              subtitle="The foundation of NRI investing starts with the right banking structure."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {accountTypes.map((a, i) => (
              <Reveal key={a.code} delay={i * 100}>
                <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-7 h-full card-lift">
                  <div className="font-headline text-3xl font-semibold text-secondary mb-1">{a.code}</div>
                  <div className="text-body-sm text-on-surface-variant uppercase tracking-wider mb-3">{a.name}</div>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Routes */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="Where You Can Invest"
              title={<>A wide range of <em className="text-secondary not-italic">investment avenues</em></>}
              align="center"
            />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {investmentRoutes.map((route, i) => (
              <Reveal key={route} delay={i * 60}>
                <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5 text-center card-lift">
                  <span className="material-symbols-outlined text-secondary text-2xl mb-2 block">trending_up</span>
                  <span className="text-body-sm text-primary font-medium">{route}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-on-primary">
        <div className="max-w-3xl mx-auto px-gutter-mobile md:px-gutter text-center">
          <Reveal>
            <h2 className="font-headline text-headline-lg md:text-headline-xl mb-4">
              Investing in India doesn't have to be complicated.
            </h2>
            <p className="text-body-lg text-primary-fixed-dim mb-8">
              Let us handle the compliance and paperwork while you focus on your goals.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-container text-primary font-semibold rounded-full hover:bg-secondary-fixed-dim transition-all hover:shadow-xl">
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              Talk to an NRI Specialist
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
