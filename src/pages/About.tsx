import Reveal from "@/components/Reveal";
import { SectionHeader, Pill, StatCard } from "@/components/ui";
import { Link } from "react-router-dom";

const values = [
  { icon: "verified_user", title: "Fiduciary First", desc: "We are legally and ethically bound to act in your best interest. No commissions, no kickbacks — ever." },
  { icon: "handshake", title: "Transparency", desc: "Every recommendation is documented, every fee disclosed. You always know what you pay and why." },
  { icon: "psychology", title: "Evidence-Based", desc: "Our strategies are grounded in academic research and decades of market data — not hunches or tips." },
  { icon: "diversity_3", title: "Long-Term Partnership", desc: "We're in this for decades, not quarters. Our success is measured by your financial wellbeing." },
];

const team = [
  { name: "Aarav Shah", role: "Founder & Chief Investment Officer", desc: "15+ years in wealth management. CFA, SEBI RIA. Specializes in portfolio strategy and NRI advisory.", initials: "AS" },
  { name: "Priya Mehta", role: "Head of Financial Planning", desc: "CFP with 12 years in goal-based planning. Leads retirement and estate planning practice.", initials: "PM" },
  { name: "Rohan Desai", role: "NRI Advisory Lead", desc: "FEMA and cross-border taxation specialist. Helps NRIs navigate Indian investment regulations.", initials: "RD" },
  { name: "Sneha Iyer", role: "Research Analyst", desc: "Equity and debt research. Builds and maintains our model portfolios and investment framework.", initials: "SI" },
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
              A firm built on <em className="text-secondary-container not-italic">trust</em> and <em className="text-secondary-container not-italic">discipline</em>.
            </h1>
            <p className="text-body-lg text-primary-fixed-dim max-w-xl leading-relaxed">
              Shah Financial was founded with one belief: financial advice should be honest,
              transparent, and always in the client's interest. We're a fiduciary advisory —
              not a product seller.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-surface">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Reveal><StatCard value="2011" label="Founded" /></Reveal>
            <Reveal delay={100}><StatCard value="₹500Cr+" label="Assets Advised" /></Reveal>
            <Reveal delay={200}><StatCard value="250+" label="Families Served" /></Reveal>
            <Reveal delay={300}><StatCard value="98%" label="Client Retention" /></Reveal>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader eyebrow="Our Story" title={<>From a single client to <em className="text-secondary not-italic">hundreds of families</em></>} />
            <div className="mt-6 space-y-4 text-body-lg text-on-surface-variant leading-relaxed">
              <p>
                Shah Financial began in 2011 when our founder, Aarav Shah, left a large bank's
                wealth management division. He was frustrated by a simple truth: most "advisors"
                were salespeople, paid to sell products — not to give honest advice.
              </p>
              <p>
                He started with one client, one desk, and one principle: always act in the
                client's best interest. That meant becoming a SEBI-registered investment adviser,
                working on a fee-only model, and refusing all commissions.
              </p>
              <p>
                Fifteen years later, we manage wealth for over 250 families across India and
                the globe. The principle hasn't changed — only the number of people who trust us.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="What We Stand For"
              title={<>Values that <em className="text-secondary not-italic">guide every decision</em></>}
              align="center"
            />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="card-lift bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-7 flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-2xl">{v.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-headline-sm text-primary mb-2">{v.title}</h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="Our Team"
              title={<>The people behind your <em className="text-secondary not-italic">wealth plan</em></>}
              align="center"
            />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 100}>
                <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-6 text-center card-lift">
                  <div className="w-20 h-20 rounded-full bg-primary-container mx-auto mb-4 flex items-center justify-center">
                    <span className="font-headline text-2xl text-primary-fixed font-semibold">{member.initials}</span>
                  </div>
                  <h3 className="font-headline text-headline-sm text-primary">{member.name}</h3>
                  <div className="text-body-sm text-secondary font-medium mb-3">{member.role}</div>
                  <p className="text-body-sm text-on-surface-variant leading-relaxed">{member.desc}</p>
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
              Want to work with a fiduciary?
            </h2>
            <p className="text-body-lg text-primary-fixed-dim mb-8">
              Experience the difference of advice that's truly on your side.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-container text-primary font-semibold rounded-full hover:bg-secondary-fixed-dim transition-all hover:shadow-xl">
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              Book a Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
