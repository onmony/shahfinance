import { Link } from "react-router-dom";
import { cta, org } from "@/data/facts";

export default function NotFound() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height)] min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-gutter-mobile">
        <div className="font-headline text-8xl font-semibold text-secondary/75 mb-4">404</div>
        <h1 className="font-headline text-headline-lg text-primary mb-3">Page not found</h1>
        <p className="text-body-lg text-on-surface-variant mb-8 max-w-md mx-auto">
          This address does not exist on our site. Nothing was charged or submitted.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-medium rounded-full hover:bg-primary-fixed-dim transition-all">
          <span className="material-symbols-outlined text-[20px]">home</span>
          Back to Home
        </Link>
        <p className="text-body-sm text-on-surface-variant mt-8 max-w-md mx-auto leading-relaxed">
          Looking for the {cta.primary.toLowerCase()} desk? Call{" "}
          <a href={`tel:${org.phoneTel}`} className="text-secondary font-medium hover:underline">{org.phoneDisplay}</a>{" "}
          or write to{" "}
          <a href={`mailto:${org.email}`} className="text-secondary font-medium hover:underline">{org.email}</a>.
        </p>
      </div>
    </div>
  );
}
