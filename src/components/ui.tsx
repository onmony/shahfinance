import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({ eyebrow, title, subtitle, align = "left", dark = false }: SectionHeaderProps) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
      {eyebrow && (
        <div className={`text-label-md uppercase tracking-widest mb-3 ${dark ? "text-secondary-fixed-dim" : "text-secondary"}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`font-headline text-headline-lg md:text-headline-xl leading-tight ${dark ? "text-on-primary" : "text-primary"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-body-lg mt-4 ${dark ? "text-primary-fixed-dim" : "text-on-surface-variant"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  path?: string;
  linkText?: string;
}

export function ServiceCard({ icon, title, description, path, linkText = "Learn more" }: ServiceCardProps) {
  const content = (
    <div className="card-lift bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-7 h-full flex flex-col">
      <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center mb-5">
        <span className="material-symbols-outlined text-primary-fixed text-2xl">{icon}</span>
      </div>
      <h3 className="font-headline text-headline-sm text-primary mb-3">{title}</h3>
      <p className="text-body-md text-on-surface-variant flex-1 leading-relaxed">{description}</p>
      {path && (
        <div className="mt-5 flex items-center gap-1.5 text-secondary font-medium text-body-sm">
          <span>{linkText}</span>
          <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
        </div>
      )}
    </div>
  );
  return path ? (
    <Link to={path} className="group block h-full">{content}</Link>
  ) : (
    content
  );
}

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="font-headline text-4xl md:text-5xl font-semibold text-primary mb-2">{value}</div>
      <div className="text-body-sm text-on-surface-variant uppercase tracking-wider">{label}</div>
    </div>
  );
}

interface PillProps {
  children: ReactNode;
  icon?: string;
}

export function Pill({ children, icon }: PillProps) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-fixed/70 border border-primary-fixed-dim/30 text-primary text-body-sm font-medium">
      {icon && <span className="material-symbols-outlined text-[18px]">{icon}</span>}
      {children}
    </span>
  );
}
