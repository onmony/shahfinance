import Reveal from "@/components/Reveal";
import { SectionHeader, ServiceCard, Pill } from "@/components/ui";
import { Link } from "react-router-dom";

const pillars = [
  { icon: "pie_chart", title: "Asset Allocation", desc: "Diversified portfolios across equities, fixed income, alternatives, and cash — calibrated to your risk profile and time horizon." },
  { icon: "shield", title: "Risk Management", desc: "Structured protection through insurance review, emergency funds, and hedging strategies tailored to your liabilities." },
  { icon: "home_work", title: "Estate Planning", desc: "Wills, trusts, and succession structures that ensure smooth wealth transfer with minimal tax friction." },
  { icon: "receipt_long", title: "Tax Optimization", desc: "Proactive tax-loss harvesting, capital gains planning, and structure-aware investing to maximize after-tax returns." },
];

const offerings = [
  { title: "Portfolio Construction", desc: "Evidence-based portfolio design using low-cost instruments, tilted toward your goals — not Wall Street's." },
  { title: "Goal-Based Planning", desc: "Every rupee is mapped to a purpose — retirement, education, home, legacy — with dedicated sub-portfolios." },
  { title: "Cash Flow Management", desc: "Budgeting frameworks and liquidity ladders that balance today's lifestyle with tomorrow's needs." },
  { title: "Insurance Review", desc: "Comprehensive audit of life, health, and property coverage to close gaps and eliminate redundant policies." },
  { title: "Estate & Succession", desc: "Trust structures, nomination alignment, and family governance documents for seamless transitions." },
  { title: "Annual Wealth Review", desc: "A structured yearly review rebalancing, re-aligning, and re-calibrating your plan to life changes." },
];

export default function WealthPlanning() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height)]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-container to-primary text-on-primary py-20 md:py-28">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <Pill icon="account_balance">Wealth Planning</Pill>
            <h1 className="font-headline text-headline-xl md:text-[56px] leading-[1.1] mt-6 mb-6 max-w-3xl">
              Build, protect, and transfer wealth with <em className="text-secondary-container not-italic">intention</em>.
            </h1>
            <p className="text-body-lg text-primary-fixed-dim max-w-xl leading-relaxed">
              A holistic approach to wealth management that integrates investing, insurance,
              taxation, and estate planning into one coherent strategy — built around your life.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="The Four Pillars"
              title={<>Wealth planning built on <em className="text-secondary not-italic">fundamentals</em></>}
              subtitle="Every plan we build rests on these four foundations — no fads, no speculation."
              align="center"
            />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="card-lift bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-7 flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-fixed text-2xl">{p.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-headline-sm text-primary mb-2">{p.title}</h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="What's Included"
              title={<>Everything you need, <em className="text-secondary not-italic">under one roof</em></>}
              align="center"
            />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 80}>
                <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-6 h-full card-lift">
                  <h3 className="font-headline text-headline-sm text-primary mb-3">{o.title}</h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">{o.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-gutter-mobile md:px-gutter text-center">
          <Reveal>
            <h2 className="font-headline text-headline-lg md:text-headline-xl text-primary mb-4">
              Let's build your wealth plan.
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-8">
              Start with a comprehensive portfolio review — free of cost, full of insight.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary font-semibold rounded-full hover:bg-primary-fixed-dim transition-all hover:shadow-xl">
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              Schedule a Review
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
