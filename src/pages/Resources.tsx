import { useState } from "react";
import Reveal from "@/components/Reveal";
import { SectionHeader, Pill } from "@/components/ui";

const categories = ["All", "Markets", "NRI", "Retirement", "Taxation", "Estate Planning"];

const articles = [
  { tag: "Markets", title: "Why global diversification matters more in 2026", excerpt: "As correlations shift, adding international exposure can reduce portfolio risk without sacrificing returns.", date: "Nov 2026", read: "6 min", icon: "trending_up" },
  { tag: "NRI", title: "FEMA compliance: A practical guide for NRIs", excerpt: "Everything you need to know about PIS, repatriation limits, and account types — explained simply.", date: "Oct 2026", read: "8 min", icon: "public" },
  { tag: "Retirement", title: "The 4% rule revisited for Indian retirees", excerpt: "Does the classic withdrawal framework work in India's inflation environment? We run the numbers.", date: "Oct 2026", read: "5 min", icon: "savings" },
  { tag: "Taxation", title: "Capital gains changes: What investors should know", excerpt: "A breakdown of recent tax changes and how to structure your portfolio for after-tax efficiency.", date: "Sep 2026", read: "7 min", icon: "receipt_long" },
  { tag: "Estate Planning", title: "Wills vs. trusts: Which is right for you?", excerpt: "Understanding the differences, costs, and benefits of each approach to wealth transfer.", date: "Sep 2026", read: "6 min", icon: "home_work" },
  { tag: "Markets", title: "Understanding risk-adjusted returns", excerpt: "Why raw returns can be misleading — and how to evaluate investments like a professional.", date: "Aug 2026", read: "4 min", icon: "analytics" },
];

const tools = [
  { icon: "calculate", title: "Retirement Calculator", desc: "Estimate your retirement corpus and monthly SIP requirements.", path: "/retirement" },
  { icon: "savings", title: "SIP Planner", desc: "Calculate how much your systematic investments could grow over time." },
  { icon: "pie_chart", title: "Asset Allocator", desc: "Get a suggested asset allocation based on your risk profile." },
  { icon: "percent", title: "Tax Impact Estimator", desc: "Estimate capital gains tax on your mutual fund redemptions." },
];

export default function Resources() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? articles : articles.filter((a) => a.tag === active);

  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height)]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-container to-primary text-on-primary py-20 md:py-28">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <Pill icon="school">Knowledge Hub</Pill>
            <h1 className="font-headline text-headline-xl md:text-[56px] leading-[1.1] mt-6 mb-6 max-w-3xl">
              Insights to help you <em className="text-secondary-container not-italic">decide better</em>.
            </h1>
            <p className="text-body-lg text-primary-fixed-dim max-w-xl leading-relaxed">
              Guides, articles, and interactive tools — built to demystify finance and
              empower your decisions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="Interactive Tools"
              title={<>Calculators &amp; <em className="text-secondary not-italic">planners</em></>}
              align="center"
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {tools.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="card-lift bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-primary text-2xl">{t.icon}</span>
                  </div>
                  <h3 className="font-headline text-headline-sm text-primary mb-2">{t.title}</h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed mb-3">{t.desc}</p>
                  <span className="text-secondary text-body-sm font-medium flex items-center gap-1.5">
                    Open tool <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="Articles & Insights"
              title={<>Read, learn, <em className="text-secondary not-italic">grow</em></>}
              align="center"
            />
          </Reveal>

          {/* Filter tabs */}
          <Reveal delay={100}>
            <div className="flex flex-wrap justify-center gap-2 mt-10 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full text-body-sm font-medium transition-all ${
                    active === cat
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant hover:border-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <article className="group card-lift bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden h-full cursor-pointer">
                  <div className="h-44 bg-gradient-to-br from-primary-container to-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-fixed text-5xl opacity-40">{a.icon}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-label-md uppercase text-secondary">{a.tag}</span>
                      <span className="text-body-sm text-on-surface-variant">·</span>
                      <span className="text-body-sm text-on-surface-variant">{a.read}</span>
                    </div>
                    <h3 className="font-headline text-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors">{a.title}</h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed mb-4">{a.excerpt}</p>
                    <span className="text-body-sm text-on-surface-variant">{a.date}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
