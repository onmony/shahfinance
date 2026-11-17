import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height)] min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-gutter-mobile">
        <div className="font-headline text-8xl font-semibold text-secondary/30 mb-4">404</div>
        <h1 className="font-headline text-headline-lg text-primary mb-3">Page not found</h1>
        <p className="text-body-lg text-on-surface-variant mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-medium rounded-full hover:bg-primary-fixed-dim transition-all">
          <span className="material-symbols-outlined text-[20px]">home</span>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
