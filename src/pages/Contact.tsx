import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import EnquiryForm from "@/components/EnquiryForm";
import DeskCoverage from "@/components/DeskCoverage";
import { Pill } from "@/components/ui";
import { org, regulatory } from "@/data/facts";

const mapsUrl = "https://maps.google.com/?q=Durga+Towers+Begumpet+Hyderabad";

const gettingHere = [
  { icon: "subway", label: "By metro", desc: "Opposite Begumpet Metro Station (Blue Line), directly at Pillar No C1315." },
  { icon: "directions_car", label: "By car and parking", desc: "Dedicated visitor parking is available in the Durga Towers basements." },
  { icon: "flight", label: "From the airport", desc: "Approximately 45 minutes from Rajiv Gandhi International Airport via the PVNR Expressway and Inner Ring Road." },
];

const nextSteps = [
  { num: "01", title: "We acknowledge", desc: `Your enquiry reaches the Begumpet desk and we confirm it within ${regulatory.responseSla}.` },
  { num: "02", title: "20-minute call", desc: "You describe the situation; we ask for your Consolidated Account Statement by email so the review is based on what you actually hold." },
  { num: "03", title: "Written diagnostic", desc: "You get the findings in writing: overlaps, expense drag, and what needs changing. Whether to transact through us is a separate decision you make later." },
];

export default function Contact() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height)]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-container to-primary text-on-primary py-20 md:py-28">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <Pill icon="contact_support">Contact Us</Pill>
            <h1 className="font-headline text-headline-xl md:text-[56px] leading-[1.1] mt-6 mb-6 max-w-3xl">
              Let&rsquo;s start a <em className="text-secondary-container not-italic">conversation</em>.
            </h1>
            <p className="text-body-lg text-primary-fixed-dim max-w-xl leading-relaxed">
              Book a no-obligation call or send us a message. The desk is in Begumpet, Hyderabad,
              and we hold early-morning and late-evening slots for NRIs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <Reveal>
                <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-8">
                  <EnquiryForm />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Reveal delay={100}>
                <div className="bg-primary text-on-primary rounded-2xl p-6">
                  <h2 className="font-headline text-headline-sm mb-4">Reach the desk directly</h2>
                  <div className="space-y-4">
                    <a href={`mailto:${org.email}`} className="flex items-center gap-3 text-primary-fixed-dim hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-secondary-container text-[20px]">email</span>
                      {org.email}
                    </a>
                    <a href={`tel:${org.phoneTel}`} className="flex items-center gap-3 text-primary-fixed-dim hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-secondary-container text-[20px]">call</span>
                      {org.phoneDisplay}
                    </a>
                    <a
                      href={`https://wa.me/${org.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary-fixed-dim hover:text-on-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-secondary-container text-[20px]">chat_bubble</span>
                      WhatsApp {org.phoneDisplay}
                    </a>
                    <div className="flex items-start gap-3 text-primary-fixed-dim">
                      <span className="material-symbols-outlined text-secondary-container text-[20px]">schedule</span>
                      <span>
                        {org.hours}
                        <span className="block text-body-sm">{org.hoursNriNote}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-secondary text-2xl">location_on</span>
                    <h2 className="font-headline text-headline-sm text-primary">Begumpet advisory chambers</h2>
                  </div>
                  <address className="not-italic text-body-md text-on-surface-variant leading-relaxed">
                    {org.address.display}
                  </address>
                  <p className="text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                    The 4th floor of Durga Towers faces Begumpet&rsquo;s historic core, and the metro
                    pillar is at the corner of the same block.
                  </p>
                  <dl className="mt-4 space-y-3">
                    {gettingHere.map((row) => (
                      <div key={row.label} className="flex gap-3">
                        <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5 flex-shrink-0">
                          {row.icon}
                        </span>
                        <div>
                          <dt className="text-body-sm font-semibold text-primary">{row.label}</dt>
                          <dd className="text-body-sm text-on-surface-variant leading-relaxed">{row.desc}</dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-secondary font-medium text-body-sm hover:gap-2.5 transition-all"
                  >
                    Open in Google Maps
                    <span className="material-symbols-outlined text-[18px]">map</span>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <DeskCoverage />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <h2 className="font-headline text-headline-lg md:text-headline-xl text-primary mb-12 max-w-2xl">
              What happens <em className="text-secondary not-italic">after you send it</em>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {nextSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <div className="relative pl-5 border-l-2 border-secondary/30 h-full">
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
          <p className="text-regulatory-legal text-on-surface-variant mt-10 max-w-3xl">
            {regulatory.disclaimer} Shah Financial is an AMFI-registered mutual fund distributor
            (ARN-{regulatory.arn1}, ARN-{regulatory.arn2}, EUIN {regulatory.euin}). Grievances:{" "}
            {regulatory.grievanceEmail}.
          </p>
        </div>
      </section>

      <JsonLd path="/contact" breadcrumb="Contact" />
    </div>
  );
}
