import Reveal from "@/components/Reveal";
import { SectionHeader, Pill } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { Link } from "react-router-dom";
import { cta, regulatory } from "@/data/facts";

const pillars = [
  {
    icon: "description",
    title: "Statement Before Opinion",
    desc: "The review starts from your Consolidated Account Statement issued by CAMS or KFintech, not from a questionnaire about appetite. What you actually hold decides what we say.",
  },
  {
    icon: "balance",
    title: "Cost and Structure",
    desc: "Direct versus regular plan pricing, the Total Expense Ratio of each scheme, and exit-load windows are read out scheme by scheme, in rupees per year.",
  },
  {
    icon: "flag",
    title: "Goal-Led Allocation",
    desc: "Each holding is tied to a purpose and a horizon: retirement, education, a property purchase, a buffer. Anything with no goal attached is a candidate for cleanup.",
  },
  {
    icon: "shield_person",
    title: "Ownership Hygiene",
    desc: "Nomination status, joint-holder records, contact and PAN updates, and repatriation linkage on NRE or NRO folios. The administrative layer that decides whether your family can actually access the money.",
  },
];

const reviewScope = [
  { title: "Holdings Inventory", desc: "Every folio listed by AMC, scheme, plan type, mode of holding and statement period, so nothing is reviewed blind." },
  { title: "Overlap and Duplication", desc: "Schemes bought repeatedly through different agents that end up holding the same stocks, so you are less diversified than the count suggests." },
  { title: "Expense Drag", desc: "The rupee cost of regular-plan distribution and high TERs compounded over your actual holding period." },
  { title: "Category Mix", desc: "Equity, hybrid and debt split against your horizons, including the concentration risk of too many like-minded funds." },
  { title: "Cash-Flow Mechanics", desc: "SIP dates against salary credit, SWP sizes against real monthly spend, and emergency float kept outside the market." },
  { title: "Exit and Transition", desc: "How to redeem, switch, or move to another distributor through AMC portals, CAMS or KFintech, with the paperwork listed." },
];

const outOfScope = [
  { icon: "health_and_safety", label: "Insurance", who: "an IRDAI-registered insurance broker or agent" },
  { icon: "gavel", label: "Wills, trusts and succession documents", who: "a practising lawyer" },
  { icon: "account_circle", label: "Income-tax returns and advance rulings", who: "a chartered accountant" },
  { icon: "apartment", label: "Property, PMS, AIF and unlisted securities", who: "the SEBI-registered intermediary for that asset class" },
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
              Know exactly what you own before you <em className="text-secondary-container not-italic">buy anything</em>.
            </h1>
            <p className="text-body-lg text-primary-fixed-dim max-w-xl leading-relaxed">
              A CAS-based portfolio health check for families in Hyderabad and NRIs with money
              parked across old bank, insurer and employer schemes. Objective, written down, and
              free of any obligation to transact through our desk.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="The Four Foundations"
              title={<>Planning built on <em className="text-secondary not-italic">what is provable</em></>}
              subtitle="Each foundation is checked against a document you already have, not against a forecast."
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

      {/* Review scope */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="What the Review Covers"
              title={<>Six things we read, <em className="text-secondary not-italic">line by line</em></>}
              align="center"
            />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {reviewScope.map((o, i) => (
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

      {/* Out of scope */}
      <section id="out-of-scope" className="py-16 md:py-24 bg-surface scroll-mt-[var(--header-height)]">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="Where We Stop"
              title={<>Four jobs that need <em className="text-secondary not-italic">someone else</em></>}
              subtitle="We are a mutual fund distributor. We will flag these, hand you the note in writing, and point you to the registered professional for that work. We do not sell or administer them."
            />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4 mt-10 max-w-4xl">
            {outOfScope.map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <div className="flex gap-4 rounded-xl border border-outline-variant/25 bg-surface-container-low p-5 h-full">
                  <span className="material-symbols-outlined text-secondary text-2xl flex-shrink-0">{item.icon}</span>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    <span className="block font-headline text-headline-sm text-primary mb-1">{item.label}</span>
                    Needs {item.who}.
                  </p>
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
              Start with the review, not the purchase.
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-8">
              Send your statement and we will come back with the findings in writing.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary font-semibold rounded-full hover:bg-primary-fixed-dim transition-all hover:shadow-xl">
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              {cta.primary}
            </Link>
            <p className="text-regulatory-legal text-on-surface-variant mt-6">
              {regulatory.disclaimer} See{" "}
              <Link to="/about#compensation" className="underline">how we are paid</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      <JsonLd
        path="/wealth-planning"
        breadcrumb="Wealth Planning"
        service={{
          name: "CAS-based portfolio health check",
          description:
            "A written review of a household's mutual fund holdings read from the CAMS or KFintech Consolidated Account Statement: holdings inventory, scheme overlap, expense drag, goal mapping, nomination and KYC status, and redemption or distributor-transition steps.",
        }}
      />
    </div>
  );
}
