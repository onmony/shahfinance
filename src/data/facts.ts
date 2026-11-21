import siteData from "@/data/site.json";
import faqData from "@/data/faqs.json";

export interface Faq {
  question: string;
  answer: string;
}

export interface PageMeta {
  file: string;
  title: string;
  description: string;
  breadcrumb: string;
}

export const site = siteData;
export const org = siteData.org;
export const cta = siteData.cta;
export const regulatory = siteData.regulatory;
export const placeholders = siteData.placeholders;
export const deskCoverage = siteData.deskCoverage;
export const faqs = faqData as { regulatory: Faq[]; nri: Faq[] };

export const ROUTES = Object.keys(siteData.pages).filter((p) => p !== "404");

/** Hosts may serve /about/ as well as /about; one canonical form keeps meta and nav aligned. */
export function canonicalPath(path: string): string {
  return path.replace(/\/+$/, "") || "/";
}

export function pageMeta(path: string): PageMeta {
  const pages = siteData.pages as Record<string, PageMeta>;
  return pages[canonicalPath(path)] ?? pages["404"];
}

export function absolute(path: string): string {
  return `${site.siteUrl.replace(/\/$/, "")}${canonicalPath(path)}`;
}

export const regulatoryLine =
  `AMFI-registered mutual fund distributor. ARN-${regulatory.arn1} (validity: ${regulatory.arnValidity}) | ` +
  `ARN-${regulatory.arn2} (validity: ${regulatory.arnValidity}) | EUIN: ${regulatory.euin} | ` +
  `Grievance Contact: ${regulatory.grievanceOfficer}, ${regulatory.grievanceEmail} | ` +
  `Grievance resolution timeline: ${regulatory.grievanceTimeline}`;
