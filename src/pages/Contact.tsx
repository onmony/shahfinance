import { useState } from "react";
import Reveal from "@/components/Reveal";
import { Pill } from "@/components/ui";

const services = [
  "Wealth Planning", "NRI Investing", "Retirement Planning", "Portfolio Review", "Estate Planning", "Other",
];

const offices = [
  { city: "Mumbai", address: "Nariman Point, Mumbai 400021", phone: "+91 22 4000 0000", icon: "location_city" },
  { city: "Bengaluru", address: "UB City, Vittal Mallya Road, Bengaluru 560001", phone: "+91 80 4000 0000", icon: "apartment" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height)]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-container to-primary text-on-primary py-20 md:py-28">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <Pill icon="contact_support">Contact Us</Pill>
            <h1 className="font-headline text-headline-xl md:text-[56px] leading-[1.1] mt-6 mb-6 max-w-3xl">
              Let's start a <em className="text-secondary-container not-italic">conversation</em>.
            </h1>
            <p className="text-body-lg text-primary-fixed-dim max-w-xl leading-relaxed">
              Book a no-obligation consultation or send us a message. We typically respond
              within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal>
                <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mx-auto mb-6">
                        <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
                      </div>
                      <h3 className="font-headline text-headline-lg text-primary mb-3">Thank you!</h3>
                      <p className="text-body-lg text-on-surface-variant max-w-md mx-auto">
                        Your message has been received. One of our advisors will reach out within
                        one business day to schedule your consultation.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                        className="mt-6 text-secondary font-medium text-body-sm hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-headline text-headline-lg text-primary mb-2">Book a Consultation</h2>
                      <p className="text-body-md text-on-surface-variant mb-6">Fill out the form below and we'll be in touch shortly.</p>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-label-md uppercase text-on-surface-variant mb-2">Full Name</label>
                            <input
                              required
                              type="text"
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              className="w-full px-4 py-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-primary focus:outline-none focus:border-secondary transition-colors"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label className="block text-label-md uppercase text-on-surface-variant mb-2">Phone</label>
                            <input
                              required
                              type="tel"
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              className="w-full px-4 py-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-primary focus:outline-none focus:border-secondary transition-colors"
                              placeholder="+91 ..."
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-label-md uppercase text-on-surface-variant mb-2">Email</label>
                          <input
                            required
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-primary focus:outline-none focus:border-secondary transition-colors"
                            placeholder="you@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-label-md uppercase text-on-surface-variant mb-2">Service Interested In</label>
                          <div className="flex flex-wrap gap-2">
                            {services.map((s) => (
                              <button
                                key={s}
                                type="button"
                                onClick={() => setForm({ ...form, service: s })}
                                className={`px-4 py-2 rounded-full text-body-sm font-medium transition-all ${
                                  form.service === s
                                    ? "bg-primary text-on-primary"
                                    : "bg-surface-container border border-outline-variant/30 text-on-surface-variant hover:border-primary"
                                }`}
                              >
                                {s}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-label-md uppercase text-on-surface-variant mb-2">Message</label>
                          <textarea
                            rows={4}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-primary focus:outline-none focus:border-secondary transition-colors resize-none"
                            placeholder="Tell us a bit about what you're looking for..."
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary font-semibold rounded-full hover:bg-primary-fixed-dim transition-all hover:shadow-xl"
                        >
                          <span className="material-symbols-outlined text-[20px]">send</span>
                          Send Message
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <Reveal delay={100}>
                <div className="bg-primary text-on-primary rounded-2xl p-6">
                  <h3 className="font-headline text-headline-sm mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <a href="mailto:hello@shahfinancial.in" className="flex items-center gap-3 text-primary-fixed-dim hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-secondary-container text-[20px]">email</span>
                      hello@shahfinancial.in
                    </a>
                    <a href="tel:+912240000000" className="flex items-center gap-3 text-primary-fixed-dim hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-secondary-container text-[20px]">call</span>
                      +91 22 4000 0000
                    </a>
                    <div className="flex items-center gap-3 text-primary-fixed-dim">
                      <span className="material-symbols-outlined text-secondary-container text-[20px]">schedule</span>
                      Mon–Fri, 9:30 AM – 6:30 PM IST
                    </div>
                  </div>
                </div>
              </Reveal>

              {offices.map((office, i) => (
                <Reveal key={office.city} delay={200 + i * 100}>
                  <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-secondary text-2xl">{office.icon}</span>
                      <h3 className="font-headline text-headline-sm text-primary">{office.city}</h3>
                    </div>
                    <p className="text-body-md text-on-surface-variant leading-relaxed mb-2">{office.address}</p>
                    <p className="text-body-sm text-secondary">{office.phone}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
