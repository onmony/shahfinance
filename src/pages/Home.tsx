import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { SectionHeader, ServiceCard, StatCard, Pill } from "@/components/ui";
import { cta, org, placeholders, regulatory } from "@/data/facts";

const services = [
  {
    icon: "account_balance",
    title: "Wealth Planning",
    description: "A CAS-based portfolio health check of what you already hold, plus objective scheme selection with no product bias and no lock-ins.",
    path: "/wealth-planning",
  },
  {
    icon: "public",
    title: "NRI Investing",
    description: "NRE and NRO account routing, FEMA repatriation steps, TDS and DTAA treatment, and remote KYC — explained for overseas residents.",
    path: "/nri-investing",
  },
  {
    icon: "savings",
    title: "Retirement Planning",
    description: "Corpus and SWP modelling with inflation and healthcare buffers, so the withdrawal plan is sized to last through retirement.",
    path: "/retirement",
  },
  {
    icon: "school",
    title: "Knowledge Hub",
    description: "Answered questions on regulation, compensation and repatriation, plus the calculator and charter you can read before you call.",
    path: "/resources",
  },
];

const processSteps = [
  { num: "01", title: "Discovery", desc: "A 20-minute intro call to understand your goals, cash-flow needs, existing holdings and risk tolerance. No charge and no obligation to transact." },
  { num: "02", title: "Diagnostics", desc: "We read your Consolidated Account Statement across CAMS and KFintech and flag duplicate schemes, category overlap and expense drag." },
  { num: "03", title: "Implementation", desc: "You open or move folios through your own NRE, NRO or resident account. Remote KYC and IPV are completed digitally; we stay on the call with you." },
  { num: "04", title: "Ongoing Review", desc: "Every folio stays in your own name. Reviews run on request, and you can redeem, switch or change distributor whenever you choose." },
];

const resources = [
  {
    tag: "Regulation",
    title: "Who pays Shah Financial, and how much",
    desc: "Our compensation model in plain terms: trail commission from the AMC, out of the scheme's expense ratio, with no client retainers.",
    to: "/about#compensation",
    icon: "receipt_long",
  },
  {
    tag: "NRI",
    title: "NRE vs NRO: which account should you use",
    desc: "Repatriation rights, the USD 1 million NRO limit, and the Form 15CA and 15CB steps, answered directly.",
    to: "/nri-investing#nri-faqs",
    icon: "public",
  },
  {
    tag: "Retirement",
    title: "How large a corpus your expenses actually need",
    desc: "The calculator models inflation to retirement and the withdrawal years after it, then shows the monthly SIP the gap implies.",
    to: "/retirement#calculator",
    icon: "calculate",
  },
];

export default function Home() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height)]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-container via-primary to-tertiary text-on-primary">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, #d6e3ff 0%, transparent 50%), radial-gradient(circle at 80% 70%, #ffc974 0%, transparent 40%)" }} />
        <div className="relative max-w-page mx-auto px-gutter-mobile md:px-gutter py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <Pill icon="verified_user">AMFI-Registered Distributor</Pill>
              <h1 className="font-headline text-headline-xl md:text-[64px] leading-[1.05] mt-6 mb-6">
                Wealth built with <em className="text-secondary-container not-italic">discipline</em>, looked after with <em className="text-secondary-container not-italic">care</em>.
              </h1>
              <p className="text-body-lg text-primary-fixed-dim max-w-lg mb-8 leading-relaxed">
                {org.description} We review what you already hold, explain every cost, and
                stay product-neutral about which scheme you buy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-secondary-container text-primary font-semibold rounded-full hover:bg-secondary-fixed-dim transition-all duration-300 hover:shadow-xl"
                >
                  <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                  {cta.primary}
                </Link>
                <Link
                  to="/wealth-planning"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-primary-fixed-dim/40 text-on-primary font-medium rounded-full hover:bg-primary-fixed/10 transition-all duration-300"
                >
                  Explore Services
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/img/hero-panel.svg"
                  width={800}
                  height={600}
                  alt="Illustrative compounding curve for a systematic investment plan, labelled as an illustration and not a return projection"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface rounded-xl shadow-xl p-5 max-w-[240px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                  </div>
                  <div>
                    <div className="font-headline text-xl font-semibold text-primary">Begumpet, Hyderabad</div>
                    <div className="text-body-sm text-on-surface-variant">{org.hours}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-surface py-6 border-b border-outline-variant/15">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-on-surface-variant">
            {[
              "AMFI-registered mutual fund distributor",
              "Product-neutral scheme selection",
              "Trail-commission transparency",
              "Remote NRI onboarding (KYC + IPV)",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-body-sm">
                <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Reveal><StatCard value="AMFI" label="Registered Distributor" /></Reveal>
            <Reveal delay={100}><StatCard value="Begumpet" label="Hyderabad Advisory Desk" /></Reveal>
            <Reveal delay={200}><StatCard value={placeholders.aum} label="Assets Under Distribution" /></Reveal>
            <Reveal delay={300}><StatCard value={placeholders.familiesServed} label="Families Served" /></Reveal>
          </div>
          <p className="text-regulatory-legal text-on-surface-variant text-center mt-8 max-w-2xl mx-auto">
            {placeholders.note}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="What We Do"
              title={<>What the desk does, <em className="text-secondary not-italic">day to day</em></>}
              subtitle="From growing your wealth to protecting it for the next generation, we provide end-to-end financial guidance."
              align="center"
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="How We Work"
              title={<>A disciplined, <em className="text-secondary not-italic">four-step</em> process</>}
              subtitle="Transparent and methodical — every step is designed around your long-term success."
            />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {processSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <div className="relative pl-5 border-l-2 border-secondary/30">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-on-secondary text-[10px] font-bold">{i + 1}</span>
                  </div>
                  <div className="font-headline text-3xl text-secondary/75 font-semibold mb-2">{step.num}</div>
                  <h3 className="font-headline text-headline-sm text-primary mb-2">{step.title}</h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Charter statement */}
      <section className="py-16 md:py-24 bg-primary text-on-primary">
        <div className="max-w-3xl mx-auto px-gutter-mobile md:px-gutter text-center">
          <Reveal>
            <span className="material-symbols-outlined text-secondary-container text-5xl mb-6">gavel</span>
            <blockquote className="font-headline text-headline-lg md:text-headline-xl leading-tight mb-8">
              "Your investments are held in your own name, in your own folios, at all times. There
              are no lock-ins, exit penalties, or restrictions imposed by our firm."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="font-headline text-primary font-semibold">S</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Shah Financial regulatory charter</div>
                <Link to="/about#regulatory-charter" className="text-body-sm text-secondary-fixed hover:underline">
                  Read the full charter and our compensation model
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Answers and tools preview */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <Reveal>
              <SectionHeader
                eyebrow="Answers, Not Teasers"
                title={<>Read the <em className="text-secondary not-italic">working documents</em></>}
              />
            </Reveal>
            <Link to="/resources" className="text-secondary font-medium text-body-sm flex items-center gap-1.5 hover:gap-2.5 transition-all">
              View all <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <Link to={item.to} className="group block card-lift bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden h-full">
                  <div className="h-40 bg-gradient-to-br from-primary-container to-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-fixed text-4xl opacity-60">{item.icon}</span>
                  </div>
                  <div className="p-6">
                    <span className="text-label-md uppercase text-secondary">{item.tag}</span>
                    <h3 className="font-headline text-headline-sm text-primary mt-2 mb-3 group-hover:text-secondary transition-colors">{item.title}</h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-gutter-mobile md:px-gutter text-center">
          <Reveal>
            <h2 className="font-headline text-headline-lg md:text-headline-xl text-primary mb-4">
              Ready to take control of your financial future?
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-8 max-w-xl mx-auto">
              Book a no-obligation consultation. We'll review your current portfolio and
              outline a path forward — no jargon, no pressure.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary font-semibold rounded-full hover:bg-primary-fixed-dim transition-all duration-300 hover:shadow-xl"
            >
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              {cta.primary}
            </Link>
            <p className="text-body-sm text-on-surface-variant mt-5">
              Or call the Begumpet desk on{" "}
              <a href={`tel:${org.phoneTel}`} className="text-secondary font-medium hover:underline">
                {org.phoneDisplay}
              </a>{" "}
              · {regulatory.disclaimer}
            </p>
          </Reveal>
        </div>
      </section>

      <JsonLd path="/" breadcrumb="Home" />
    </div>
  );
}
