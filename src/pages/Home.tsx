import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { SectionHeader, ServiceCard, StatCard, Pill } from "@/components/ui";

const services = [
  {
    icon: "account_balance",
    title: "Wealth Planning",
    description: "Comprehensive financial planning tailored to your goals — from asset allocation to estate structuring.",
    path: "/wealth-planning",
  },
  {
    icon: "public",
    title: "NRI Investing",
    description: "Cross-border investment strategies for Non-Resident Indians, navigating FEMA, taxation, and repatriation.",
    path: "/nri-investing",
  },
  {
    icon: "savings",
    title: "Retirement Planning",
    description: "Build a retirement corpus that lasts — with withdrawal strategies, pension planning, and healthcare buffers.",
    path: "/retirement",
  },
  {
    icon: "school",
    title: "Knowledge Hub",
    description: "Guides, calculators, and insights to help you make informed financial decisions with confidence.",
    path: "/resources",
  },
];

const processSteps = [
  { num: "01", title: "Discovery", desc: "We start with a deep-dive conversation to understand your financial picture, goals, and risk tolerance." },
  { num: "02", title: "Strategy", desc: "A customized wealth plan is built around your timeline, cash flow needs, and family objectives." },
  { num: "03", title: "Implementation", desc: "We execute the plan with disciplined investment selection and seamless onboarding." },
  { num: "04", title: "Ongoing Review", desc: "Quarterly reviews and continuous monitoring keep your plan aligned as life evolves." },
];

const insights = [
  { tag: "Markets", title: "Why global diversification matters more in 2026", date: "Nov 2026", read: "6 min" },
  { tag: "NRI", title: "FEMA compliance: A practical guide for NRIs", date: "Oct 2026", read: "8 min" },
  { tag: "Retirement", title: "The 4% rule revisited for Indian retirees", date: "Oct 2026", read: "5 min" },
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
              <Pill icon="auto_awesome">Fiduciary-First Advisory</Pill>
              <h1 className="font-headline text-headline-xl md:text-[64px] leading-[1.05] mt-6 mb-6">
                Wealth built with <em className="text-secondary-container not-italic">discipline</em>, managed with <em className="text-secondary-container not-italic">care</em>.
              </h1>
              <p className="text-body-lg text-primary-fixed-dim max-w-lg mb-8 leading-relaxed">
                Shah Financial is a wealth planning and advisory firm serving professionals,
                families, and NRIs. We help you build, protect, and transfer wealth with clarity
                and confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-secondary-container text-primary font-semibold rounded-full hover:bg-secondary-fixed-dim transition-all duration-300 hover:shadow-xl"
                >
                  <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                  Book a Consultation
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
                  src="https://images.unsplash.com/photo-1554224155-6726b9ff8772?w=800&h=600&fit=crop"
                  alt="Financial planning dashboard"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface rounded-xl shadow-xl p-5 max-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[20px]">trending_up</span>
                  </div>
                  <div>
                    <div className="font-headline text-2xl font-semibold text-primary">₹500Cr+</div>
                    <div className="text-body-sm text-on-surface-variant">Assets Advised</div>
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
            {["SEBI Registered Investment Adviser", "AMFI Registered", "15+ Years Experience", "Fiduciary Standard"].map((item) => (
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
            <Reveal><StatCard value="₹500Cr+" label="Assets Advised" /></Reveal>
            <Reveal delay={100}><StatCard value="250+" label="Families Served" /></Reveal>
            <Reveal delay={200}><StatCard value="15+" label="Years Experience" /></Reveal>
            <Reveal delay={300}><StatCard value="98%" label="Client Retention" /></Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="What We Do"
              title={<>Comprehensive wealth management, <em className="text-secondary not-italic">tailored to you</em></>}
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
                  <div className="font-headline text-3xl text-secondary/40 font-semibold mb-2">{step.num}</div>
                  <h3 className="font-headline text-headline-sm text-primary mb-2">{step.title}</h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="py-16 md:py-24 bg-primary text-on-primary">
        <div className="max-w-3xl mx-auto px-gutter-mobile md:px-gutter text-center">
          <Reveal>
            <span className="material-symbols-outlined text-secondary-container text-5xl mb-6">format_quote</span>
            <blockquote className="font-headline text-headline-lg md:text-headline-xl leading-tight mb-8">
              "Shah Financial helped us consolidate decades of scattered investments into a
              coherent plan. For the first time, we feel genuinely in control of our financial future."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="font-headline text-primary font-semibold">R</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Rajesh &amp; Meera Patel</div>
                <div className="text-body-sm text-primary-fixed-dim">Clients since 2018 · Mumbai</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Insights preview */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <Reveal>
              <SectionHeader
                eyebrow="Knowledge Hub"
                title={<>Latest <em className="text-secondary not-italic">insights</em></>}
              />
            </Reveal>
            <Link to="/resources" className="text-secondary font-medium text-body-sm flex items-center gap-1.5 hover:gap-2.5 transition-all">
              View all <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((post, i) => (
              <Reveal key={post.title} delay={i * 100}>
                <Link to="/resources" className="group block card-lift bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden h-full">
                  <div className="h-40 bg-gradient-to-br from-primary-container to-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-fixed text-4xl opacity-50">article</span>
                  </div>
                  <div className="p-6">
                    <span className="text-label-md uppercase text-secondary">{post.tag}</span>
                    <h3 className="font-headline text-headline-sm text-primary mt-2 mb-3 group-hover:text-secondary transition-colors">{post.title}</h3>
                    <div className="flex items-center gap-3 text-body-sm text-on-surface-variant">
                      <span>{post.date}</span><span>·</span><span>{post.read} read</span>
                    </div>
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
              Book Your Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
