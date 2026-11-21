import { useState } from "react";
import Reveal from "@/components/Reveal";
import { SectionHeader, Pill } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { Link } from "react-router-dom";
import { cta, faqs, regulatory } from "@/data/facts";

type Category = "NRI" | "Regulation" | "Our Practice";

interface QuestionEntry {
  question: string;
  category: Category;
  to: string;
}

const questionIndex: QuestionEntry[] = [
  ...faqs.nri.map((f) => ({ question: f.question, category: "NRI" as Category, to: "/nri-investing#nri-faqs" })),
  ...faqs.regulatory.map((f) => ({ question: f.question, category: "Our Practice" as Category, to: "/about#faq-section" })),
  {
    question: "What does the regulatory charter actually commit to?",
    category: "Regulation",
    to: "/about#regulatory-charter",
  },
  {
    question: "How large a corpus do my expenses require at retirement?",
    category: "Regulation",
    to: "/retirement#calculator",
  },
];

const categories: ("All" | Category)[] = ["All", "NRI", "Regulation", "Our Practice"];

const tools = [
  {
    icon: "calculate",
    title: "Retirement corpus calculator",
    desc: "Sliders for age, expenses, existing corpus and a published assumption set. Outputs the corpus the plan needs and the monthly SIP the gap implies.",
    to: "/retirement#calculator",
    state: "Live now",
  },
  {
    icon: "gavel",
    title: "Regulatory charter",
    desc: "Registration standing, trail-commission disclosure, your ownership of the folios, and the grievance route. One page, no conditions.",
    to: "/about#regulatory-charter",
    state: "Live now",
  },
  {
    icon: "public",
    title: "NRI desk coverage matrix",
    desc: "Which Hyderabad calling window maps to Gulf, UK, US and Singapore working hours, with the live IST clock.",
    to: "/nri-investing#nri-faqs",
    state: "Live now",
  },
  {
    icon: "description",
    title: "CAS portfolio review",
    desc: "You send the CAMS or KFintech statement; we return the findings in writing. Free, and with no obligation to transact through us.",
    to: "/contact",
    state: "Book by call or form",
  },
];

const register = [
  {
    label: "AMFI Master Circular for mutual fund distributors",
    href: "https://www.amfiindia.com/uploads/AMFI_Master_Cicular_for_MF_Ds_3c7f5ee44f.pdf",
    note: "The operating circular our distribution desk works under.",
  },
  {
    label: "Revised AMFI Code of Conduct for MF Distributors (2022)",
    href: "https://www.amfiindia.com/uploads/Revised_Codeof_Conductfor_Mutual_Fund_Distributors_April2022_57d91fe1c4.pdf",
    note: "Conduct, disclosure and advertising obligations we are bound by.",
  },
  {
    label: "AMFI distributor registry (verify an ARN or EUIN)",
    href: "https://www.amfiindia.com/distributor",
    note: "Check our registration number yourself before engaging with anyone.",
  },
  {
    label: "AMFI — Role of mutual fund distributors and advisors",
    href: "https://www.amfiindia.com/Themes/Theme1/downloads/FAQsonRoleofMFDsAdvts.pdf",
    note: "What a distributor may and may not do, in the regulator's own words.",
  },
];

export default function Resources() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const visible = active === "All" ? questionIndex : questionIndex.filter((q) => q.category === active);

  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height)]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-container to-primary text-on-primary py-20 md:py-28">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <Pill icon="school">Knowledge Hub</Pill>
            <h1 className="font-headline text-headline-xl md:text-[56px] leading-[1.1] mt-6 mb-6 max-w-3xl">
              The working documents, <em className="text-secondary-container not-italic">in the open</em>.
            </h1>
            <p className="text-body-lg text-primary-fixed-dim max-w-xl leading-relaxed">
              Every question we answer on a call, the calculator we run in front of you, and the
              regulator&rsquo;s own circulars so you can check us against them. No gated PDFs and no
              email-wall.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tools */}
      <section id="interactive-tools" className="py-16 md:py-24 bg-surface scroll-mt-[var(--header-height)]">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="Tools"
              title={<>Useful <em className="text-secondary not-italic">right now</em></>}
              subtitle="Four things on this site that do a job without waiting for a sales conversation."
              align="center"
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {tools.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <Link
                  to={t.to}
                  className="group card-lift block bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-6 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-primary text-2xl">{t.icon}</span>
                  </div>
                  <h3 className="font-headline text-headline-sm text-primary mb-2">{t.title}</h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed mb-4">{t.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-label-md uppercase text-secondary">
                    {t.state}
                    <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Question index */}
      <section id="faq-accordion" className="py-16 md:py-24 bg-surface-container-low scroll-mt-[var(--header-height)]">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="Question Index"
              title={<>Every question, <em className="text-secondary not-italic">and where it is answered</em></>}
              subtitle="Pick a category. Each line links to the page that carries the full answer, so the answer and the citation stay together."
              align="center"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-wrap justify-center gap-2 mt-10 mb-12" role="group" aria-label="Filter questions by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  aria-pressed={active === cat}
                  className={`px-4 py-2 rounded-full text-body-sm font-medium transition-all ${
                    active === cat
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant hover:border-primary"
                  }`}
                >
                  {cat}
                  <span className="sr-only">
                    {active === cat ? "filter applied" : "apply filter"}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <ul className="grid md:grid-cols-2 gap-4">
            {visible.map((entry, i) => (
              <Reveal key={entry.question} delay={i * 40}>
                <li className="h-full">
                  <Link
                    to={entry.to}
                    className="group flex h-full items-start gap-4 card-lift bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5"
                  >
                    <span className="text-label-md uppercase text-secondary flex-shrink-0 pt-1 w-24">
                      {entry.category}
                    </span>
                    <span className="text-body-md text-primary leading-relaxed flex-1">
                      {entry.question}
                    </span>
                    <span
                      className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
          <p className="text-body-sm text-on-surface-variant mt-8">
            Showing {visible.length} of {questionIndex.length} indexed questions.
          </p>
        </div>
      </section>

      {/* Regulator's own documents */}
      <section id="statutory-downloads" className="py-16 md:py-24 bg-surface scroll-mt-[var(--header-height)]">
        <div className="max-w-3xl mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="Primary Sources"
              title={<>Read the <em className="text-secondary not-italic">regulator</em>, not us</>}
              subtitle="These are amfiindia.com documents, not our summaries. If anything on this website conflicts with them, they win."
            />
          </Reveal>
          <ul className="mt-10 space-y-4">
            {register.map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <li className="rounded-xl border border-outline-variant/25 bg-surface-container-low p-5">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-headline text-headline-sm text-primary hover:text-secondary transition-colors inline-flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[20px] text-secondary">description</span>
                    {item.label}
                  </a>
                  <p className="text-body-sm text-on-surface-variant mt-2 leading-relaxed">{item.note}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-gutter-mobile md:px-gutter text-center">
          <Reveal>
            <h2 className="font-headline text-headline-lg md:text-headline-xl text-primary mb-4">
              Something not answered here?
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-8 max-w-xl mx-auto">
              Ask it on the call. If it needs a lawyer, a chartered accountant or an insurance
              broker, we will say so instead of stretching our licence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary font-semibold rounded-full hover:bg-primary-fixed-dim transition-all duration-300 hover:shadow-xl"
            >
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              {cta.primary}
            </Link>
            <p className="text-regulatory-legal text-on-surface-variant mt-6">
              {regulatory.disclaimer}
            </p>
          </Reveal>
        </div>
      </section>

      <JsonLd path="/resources" breadcrumb="Resources" />
    </div>
  );
}
