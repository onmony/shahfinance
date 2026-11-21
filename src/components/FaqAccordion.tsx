import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { SectionHeader } from "@/components/ui";
import type { Faq } from "@/data/facts";

interface FaqAccordionProps {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  items: Faq[];
  dark?: boolean;
}

/** Native <details> so every answer is in the served HTML and readable with JavaScript off. */
export default function FaqAccordion({ id, eyebrow, title, subtitle, items, dark = false }: FaqAccordionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${dark ? "bg-primary text-on-primary" : "bg-surface"}`}>
      <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
        <Reveal>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            align="center"
            dark={dark}
          />
        </Reveal>
        <div className="max-w-3xl mx-auto mt-12 space-y-3">
          {items.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 60}>
              <details
                className={`group rounded-xl border transition-colors ${
                  dark
                    ? "border-primary-fixed-dim/25 bg-primary-container/40"
                    : "border-outline-variant/25 bg-surface-container-lowest"
                }`}
              >
                <summary
                  className={`flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-headline text-headline-sm ${
                    dark ? "text-on-primary" : "text-primary"
                  }`}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`material-symbols-outlined flex-shrink-0 transition-transform duration-200 group-open:rotate-180 ${
                      dark ? "text-secondary-fixed" : "text-secondary"
                    }`}
                    aria-hidden="true"
                  >
                    expand_more
                  </span>
                </summary>
                <p
                  className={`px-6 pb-5 text-body-md leading-relaxed ${
                    dark ? "text-primary-fixed-dim" : "text-on-surface-variant"
                  }`}
                >
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
