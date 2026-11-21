import Reveal from "@/components/Reveal";
import { SectionHeader, Pill, StatCard } from "@/components/ui";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { Link } from "react-router-dom";
import { cta, faqs, org, placeholders, regulatory } from "@/data/facts";

const tenets = [
  {
    icon: "balance",
    title: "Objective Scheme Selection",
    desc: "We are product-neutral. Recommendations come from your Consolidated Account Statement and your goals, not from which asset management company pays the most.",
  },
  {
    icon: "public",
    title: "Dual-Jurisdiction Fluency",
    desc: "Resident and NRI rules side by side: NRE and NRO routing, FEMA repatriation limits, TDS and DTAA relief, and the paperwork each route requires.",
  },
  {
    icon: "handshake",
    title: "Unhurried Consultation",
    desc: "A 20-minute intro call, then a written diagnostic. No sales target on the call, no retainer invoice, no obligation to transact through our desk.",
  },
  {
    icon: "query_stats",
    title: "Consolidated CAS Diagnostics",
    desc: "We read holdings across CAMS and KFintech and flag duplicate schemes, category overlap and expense drag that a statement-by-statement view hides.",
  },
];

const charter = [
  {
    anchor: "regulatory-standing",
    title: "Regulatory standing",
    body: `Shah Financial is an AMFI-registered mutual fund distributor based in Begumpet, Hyderabad (ARN-${regulatory.arn1} and ARN-${regulatory.arn2}, EUIN ${regulatory.euin}). We distribute mutual fund schemes regulated by the Securities and Exchange Board of India (SEBI). We do not operate as a PMS or alternate investment broker, which keeps our work inside the statutory retail and family distribution frameworks.`,
  },
  {
    anchor: "compensation",
    title: "How we are paid",
    body: regulatory.compensation,
  },
  {
    anchor: "ownership-and-exit",
    title: "Your ownership and exit",
    body: "Your investments are held in your own name, in your own folios, at all times. There are no lock-ins, exit penalties, or restrictions imposed by our firm. You can redeem, switch, pause Systematic Investment Plans (SIPs), or move to another distributor directly through AMC portals, CAMS, or KFintech whenever you choose.",
  },
  {
    anchor: "grievance",
    title: "Grievance redressal",
    body: `Complaints are handled by our ${regulatory.grievanceOfficer} at ${regulatory.grievanceEmail}. Acknowledgement within ${regulatory.responseSla}; resolution timeline ${regulatory.grievanceTimeline}. You can also escalate directly to the AMC or to the AMFI/SEBI complaint portal.`,
  },
];

export default function About() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height)]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-container to-primary text-on-primary py-20 md:py-28">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <Pill icon="info">About Us</Pill>
            <h1 className="font-headline text-headline-xl md:text-[56px] leading-[1.1] mt-6 mb-6 max-w-3xl">
              A desk built on <em className="text-secondary-container not-italic">objectivity</em> and <em className="text-secondary-container not-italic">discipline</em>.
            </h1>
            <p className="text-body-lg text-primary-fixed-dim max-w-xl leading-relaxed">
              {org.description} We are a distributor, not a product pusher: we stay
              product-neutral, we disclose exactly how we are paid, and you keep full control of
              every folio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Facts */}
      <section className="py-16 bg-surface">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Reveal><StatCard value="AMFI" label="Registered Distributor" /></Reveal>
            <Reveal delay={100}><StatCard value="Begumpet" label="Hyderabad Desk" /></Reveal>
            <Reveal delay={200}><StatCard value={placeholders.aum} label="Assets Under Distribution" /></Reveal>
            <Reveal delay={300}><StatCard value={placeholders.familiesServed} label="Families Served" /></Reveal>
          </div>
          <p className="text-regulatory-legal text-on-surface-variant text-center mt-8 max-w-2xl mx-auto">
            {placeholders.note} {placeholders.arnNote}
          </p>
        </div>
      </section>

      {/* Practice */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader eyebrow="Our Practice" title={<>One desk for <em className="text-secondary not-italic">resident and NRI</em> money</>} />
            <div className="mt-6 space-y-4 text-body-lg text-on-surface-variant leading-relaxed">
              <p>
                Shah Financial works from a single office in Begumpet, central Hyderabad, and
                serves two kinds of client: families in India whose investments accumulated
                piecemeal across banks, insurers and old employer schemes, and NRIs in the Gulf,
                UK, US, Singapore and Australia who need Indian exposure managed without flying
                home for paperwork.
              </p>
              <p>
                The work is diagnostic before it is transactional. We read your Consolidated
                Account Statement, show you where you are duplicated, where the expense drag sits,
                and what you already own that solves the problem you came to us with. Only then do
                we discuss buying anything.
              </p>
              <p>
                We are compensated by trail commission paid by the asset management company out of
                the scheme&rsquo;s expense ratio. We do not bill you for the first review, and we do not
                hold your money or your folios &mdash; the units stay in your own DEMAT or folio, in your
                own NRE, NRO or resident account.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tenets */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="Disciplined Operating Tenets"
              title={<>How the desk actually <em className="text-secondary not-italic">runs</em></>}
              align="center"
            />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {tenets.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="card-lift bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-7 flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-headline-sm text-primary mb-2">{item.title}</h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory charter */}
      <section id="regulatory-charter" className="py-16 md:py-24 bg-surface-container-low scroll-mt-[var(--header-height)]">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="Regulatory Charter"
              title={<>The disclosures we would want <em className="text-secondary not-italic">read back to us</em></>}
              subtitle="Registration standing, compensation, ownership of your folios, and how a complaint is handled. Nothing here is conditional."
              align="center"
            />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {charter.map((panel, i) => (
              <Reveal key={panel.anchor} delay={i * 100}>
                <div id={panel.anchor} className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-7 h-full scroll-mt-[var(--header-height)]">
                  <h3 className="font-headline text-headline-sm text-primary mb-3">{panel.title}</h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">{panel.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-regulatory-legal text-on-surface-variant text-center mt-10 max-w-3xl mx-auto">
            {regulatory.disclaimer} This page describes a mutual fund distribution practice. It is
            not personalised investment advice, and statutory text is reviewed with our compliance
            counsel before launch.
          </p>
        </div>
      </section>

      <FaqAccordion
        id="faq-section"
        eyebrow="Frequently Asked"
        title={<>Questions about our <em className="text-secondary not-italic">practice</em></>}
        items={faqs.regulatory}
      />

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-on-primary">
        <div className="max-w-3xl mx-auto px-gutter-mobile md:px-gutter text-center">
          <Reveal>
            <h2 className="font-headline text-headline-lg md:text-headline-xl mb-4">
              Want guidance with zero product bias?
            </h2>
            <p className="text-body-lg text-primary-fixed-dim mb-8">
              Start with a 20-minute call and a read of your existing statement.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-container text-primary font-semibold rounded-full hover:bg-secondary-fixed-dim transition-all hover:shadow-xl">
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              {cta.primary}
            </Link>
          </Reveal>
        </div>
      </section>

      <JsonLd path="/about" breadcrumb="About Us" faqs={faqs.regulatory} />
    </div>
  );
}
