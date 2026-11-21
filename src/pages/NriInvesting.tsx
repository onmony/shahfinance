import Reveal from "@/components/Reveal";
import { SectionHeader, Pill } from "@/components/ui";
import FaqAccordion from "@/components/FaqAccordion";
import DeskCoverage from "@/components/DeskCoverage";
import JsonLd from "@/components/JsonLd";
import { Link } from "react-router-dom";
import { cta, faqs, regulatory } from "@/data/facts";

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
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <Reveal>
                <Pill icon="public">NRI Investing</Pill>
                <h1 className="font-headline text-headline-xl md:text-[56px] leading-[1.1] mt-6 mb-6 max-w-3xl">
                  Investing in India from <em className="text-secondary-container not-italic">abroad</em>, without flying home for paperwork.
                </h1>
                <p className="text-body-lg text-primary-fixed-dim max-w-xl leading-relaxed">
                  We are a mutual fund distributor, so our desk work is on the fund route: NRE and
                  NRO routing, FEMA repatriation steps, TDS and DTAA treatment, and remote KYC with
                  in-person verification by video. Everything is confirmed against current rules on
                  your call.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-2">
              <Reveal delay={120}>
                <DeskCoverage />
              </Reveal>
            </div>
          </div>
          <Reveal delay={200}>
            <p className="mt-10 rounded-xl border border-secondary-fixed/25 bg-tertiary-container/60 px-5 py-4 text-body-sm text-on-primary-container leading-relaxed max-w-3xl">
              <strong className="font-semibold text-secondary-fixed">Regulatory acceptance notice:</strong>{" "}
              Fund-house acceptance rules for NRIs (for example in the USA and Canada) vary and
              change. We confirm current AMC compliance status and FATCA / CRS eligibility directly
              on your intro call rather than promising it here.
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
              title={<>Unique challenges, <em className="text-secondary not-italic">plain answers</em></>}
              subtitle="Four things decide how much of your return you keep: which account you route through, which country treats you as resident, when you convert currency, and who else has rights on the folio."
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
              eyebrow="What Your Money Can Reach"
              title={<>The routes an <em className="text-secondary not-italic">NRI in India</em> can use</>}
              subtitle="We distribute mutual funds, and that is where our guidance is qualified. The other routes are listed so you can compare them — for equity through a PIS account, deposits, or property you will need a bank, a broker, or a chartered accountant rather than us."
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

      <FaqAccordion
        id="nri-faqs"
        eyebrow="Answered Directly"
        title={<>NRI questions, <em className="text-secondary not-italic">answered</em></>}
        subtitle="Rules change. These are the current framework positions we work to, confirmed for your country on the call."
        items={faqs.nri}
      />

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-on-primary">
        <div className="max-w-3xl mx-auto px-gutter-mobile md:px-gutter text-center">
          <Reveal>
            <h2 className="font-headline text-headline-lg md:text-headline-xl mb-4">
              Start with the route, not the product.
            </h2>
            <p className="text-body-lg text-primary-fixed-dim mb-8">
              Tell us where you live and what you already hold in India. We will tell you which
              documentation the chosen route needs before anything is bought.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-container text-primary font-semibold rounded-full hover:bg-secondary-fixed-dim transition-all hover:shadow-xl">
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              {cta.primary}
            </Link>
            <p className="text-regulatory-legal text-primary-fixed-dim/70 mt-6">
              {regulatory.disclaimer}
            </p>
          </Reveal>
        </div>
      </section>

      <JsonLd
        path="/nri-investing"
        breadcrumb="NRI Investing"
        faqs={faqs.nri}
        service={{
          name: "NRI mutual fund investment guidance",
          description:
            "Mutual fund route guidance for Non-Resident Indians: NRE and NRO account routing, FEMA repatriation procedure, TDS and DTAA treatment, and remote KYC with in-person verification.",
        }}
      />
    </div>
  );
}
