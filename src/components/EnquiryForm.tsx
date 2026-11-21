import { useRef, useState } from "react";
import { cta, org, regulatory } from "@/data/facts";

const topics = ["Wealth Planning", "NRI Investing", "Retirement Planning", "Portfolio Health Check", "Other"];

type Status = "idle" | "sending" | "sent" | "drafted" | "failed";

interface Values {
  fullName: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  consent: boolean;
}

type Errors = Partial<Record<"fullName" | "email" | "phone" | "topic" | "consent", string>>;

const empty: Values = { fullName: "", email: "", phone: "", topic: "", message: "", consent: false };

// Checked in this order so the first failure is the one that receives focus.
const ERROR_ORDER: (keyof Errors)[] = ["fullName", "phone", "email", "topic", "consent"];
const ERROR_IDS: Record<Exclude<keyof Errors, "topic">, string> = {
  fullName: "enq-name",
  phone: "enq-phone",
  email: "enq-email",
  consent: "enq-consent",
};

function validate(v: Values): Errors {
  const errors: Errors = {};
  if (v.fullName.trim().length < 2) errors.fullName = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) errors.email = "Please enter a valid email address.";
  const digits = v.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) errors.phone = "Please enter a phone number with its country code, e.g. +91 98492 80280.";
  if (!v.topic) errors.topic = "Please choose what the call should cover.";
  if (!v.consent) errors.consent = "Please confirm you agree to be contacted.";
  return errors;
}

function buildMailto(v: Values): string {
  const body = [
    `Name: ${v.fullName}`,
    `Phone: ${v.phone}`,
    `Email: ${v.email}`,
    `Topic: ${v.topic}`,
    "",
    v.message || "(no further detail)",
    "",
    "---",
    "Sent from the Shah Financial website enquiry form.",
  ].join("\n");
  return `mailto:${org.email}?subject=${encodeURIComponent(`Website enquiry: ${v.topic}`)}&body=${encodeURIComponent(body)}`;
}

export default function EnquiryForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [detail, setDetail] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT;

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus("idle");
      const first = ERROR_ORDER.find((key) => found[key])!;
      const target =
        first === "topic"
          ? formRef.current?.querySelector<HTMLElement>('input[name="topic"]')
          : document.getElementById(ERROR_IDS[first]);
      target?.focus();
      return;
    }

    setStatus("sending");
    setDetail("");

    if (!endpoint) {
      window.location.assign(buildMailto(values));
      setStatus("drafted");
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, source: "website-enquiry-form" }),
      });
      if (!response.ok) throw new Error(`The enquiry service responded ${response.status}.`);
      setStatus("sent");
    } catch (error) {
      setStatus("failed");
      setDetail(error instanceof Error ? error.message : "The request could not be completed.");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center py-12" role="status">
        <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
        </div>
        <h3 className="font-headline text-headline-lg text-primary mb-3">Enquiry submitted</h3>
        <p className="text-body-lg text-on-surface-variant max-w-md mx-auto">
          We have your request about {values.topic.toLowerCase()}. We acknowledge enquiries within{" "}
          {regulatory.responseSla}. If it is urgent, call {org.phoneDisplay}.
        </p>
        <button
          onClick={() => { setValues(empty); setStatus("idle"); }}
          className="mt-6 text-secondary font-medium text-body-sm hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  if (status === "drafted") {
    return (
      <div className="text-center py-12" role="status">
        <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-primary text-3xl">mail</span>
        </div>
        <h3 className="font-headline text-headline-lg text-primary mb-3">Draft ready in your mail app</h3>
        <p className="text-body-lg text-on-surface-variant max-w-md mx-auto">
          Your email app should have opened with the enquiry written out. Press send there to
          complete it. Nothing has reached us until you do.
        </p>
        <p className="text-body-sm text-on-surface-variant max-w-md mx-auto mt-4">
          Or send it straight to{" "}
          <a href={buildMailto(values)} className="text-secondary font-medium hover:underline">{org.email}</a>.
          Prefer to talk? Call{" "}
          <a href={`tel:${org.phoneTel}`} className="text-secondary font-medium hover:underline">{org.phoneDisplay}</a>
          {" "}or{" "}
          <a
            href={`https://wa.me/${org.whatsapp}?text=${encodeURIComponent(`Hello Shah Financial, I would like to discuss ${values.topic.toLowerCase()}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary font-medium hover:underline"
          >
            WhatsApp us
          </a>.
        </p>
        <button
          onClick={() => { setValues(empty); setStatus("idle"); }}
          className="mt-6 text-secondary font-medium text-body-sm hover:underline"
        >
          Edit the enquiry
        </button>
      </div>
    );
  }

  const failed = status === "failed";

  return (
    <>
      <h2 className="font-headline text-headline-lg text-primary mb-2">{cta.submit}</h2>
      <p className="text-body-md text-on-surface-variant mb-6">
        A 20-minute call with the Begumpet desk. No charge, no obligation to transact with us.
      </p>

      {failed && (
        <div role="alert" className="mb-6 rounded-lg border border-error/40 bg-error-container px-5 py-4">
          <p className="text-body-sm text-on-error-container font-medium">
            Your enquiry was not submitted{detail ? `: ${detail}` : "."}
          </p>
          <p className="text-body-sm text-on-error-container mt-1">
            Nothing was lost &mdash; the text is still here. Try again, or call{" "}
            <a href={`tel:${org.phoneTel}`} className="underline">{org.phoneDisplay}</a> or{" "}
            <a href={`mailto:${org.email}`} className="underline">{org.email}</a>.
          </p>
        </div>
      )}

      <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <Field
            id="enq-name"
            name="fullName"
            label="Full Name"
            error={errors.fullName}
            value={values.fullName}
            onChange={(v) => set("fullName", v)}
            placeholder="Your name"
            autoComplete="name"
          />
          <Field
            id="enq-phone"
            name="phone"
            label="Phone"
            type="tel"
            error={errors.phone}
            value={values.phone}
            onChange={(v) => set("phone", v)}
            placeholder="+91 ..."
            autoComplete="tel"
          />
        </div>

        <Field
          id="enq-email"
          name="email"
          label="Email"
          type="email"
          error={errors.email}
          value={values.email}
          onChange={(v) => set("email", v)}
          placeholder="you@example.com"
          autoComplete="email"
        />

        <fieldset aria-describedby={errors.topic ? "enq-topic-error" : undefined}>
          <legend className="block text-label-md uppercase text-on-surface-variant mb-2">
            What should the call cover?
          </legend>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <label key={topic} className="cursor-pointer">
                <input
                  type="radio"
                  name="topic"
                  value={topic}
                  checked={values.topic === topic}
                  onChange={() => set("topic", topic)}
                  className="sr-only peer"
                />
                <span className="inline-block px-4 py-2 rounded-full text-body-sm font-medium border transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-secondary peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary bg-surface-container border-outline-variant/30 text-on-surface-variant hover:border-primary">
                  {topic}
                </span>
              </label>
            ))}
          </div>
          {errors.topic && (
            <p id="enq-topic-error" role="alert" className="text-body-sm text-error mt-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">error</span>
              {errors.topic}
            </p>
          )}
        </fieldset>

        <div>
          <label htmlFor="enq-message" className="block text-label-md uppercase text-on-surface-variant mb-2">
            Message (optional)
          </label>
          <textarea
            id="enq-message"
            name="message"
            rows={4}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-primary focus:outline-none focus:border-secondary transition-colors resize-none"
            placeholder="Schemes you hold, city or country you live in, best time to call..."
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            id="enq-consent"
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            aria-invalid={errors.consent ? "true" : undefined}
            aria-describedby={errors.consent ? "enq-consent-error" : undefined}
            className="accent-secondary mt-1 rounded shrink-0 cursor-pointer"
          />
          <label htmlFor="enq-consent" className="text-regulatory-legal text-on-surface-variant leading-snug cursor-pointer">
            {regulatory.consent}
          </label>
        </div>
        {errors.consent && (
          <p id="enq-consent-error" role="alert" className="text-body-sm text-error flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">error</span>
            {errors.consent}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary font-semibold rounded-full hover:bg-primary-fixed-dim transition-all hover:shadow-xl disabled:opacity-60"
        >
          <span className="material-symbols-outlined text-[20px]">{status === "sending" ? "hourglass_top" : "send"}</span>
          {status === "sending" ? "Sending..." : cta.submit}
        </button>

        <p className="text-regulatory-legal text-on-surface-variant leading-relaxed">
          {regulatory.disclaimer}
        </p>
      </form>
    </>
  );
}

interface FieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: "text" | "email" | "tel";
  placeholder?: string;
  autoComplete?: string;
}

function Field({ id, name, label, value, onChange, error, type = "text", placeholder, autoComplete }: FieldProps) {
  const describedBy = error ? `${id}-error` : undefined;
  return (
    <div>
      <label htmlFor={id} className="block text-label-md uppercase text-on-surface-variant mb-2">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={describedBy}
        className={`w-full px-4 py-3 rounded-lg border bg-surface-container-lowest text-primary focus:outline-none transition-colors ${
          error ? "border-error focus:border-error" : "border-outline-variant/40 focus:border-secondary"
        }`}
      />
      {error && (
        <p id={describedBy} role="alert" className="text-body-sm text-error mt-2 flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[16px]">error</span>
          {error}
        </p>
      )}
    </div>
  );
}
