import { org, site } from "@/data/facts";
import type { Faq } from "@/data/facts";

interface GraphNode {
  [key: string]: unknown;
}

interface JsonLdProps {
  path: string;
  breadcrumb: string;
  faqs?: Faq[];
  service?: { name: string; description: string };
}

/**
 * Structured data emitted only for content that is actually rendered on the page.
 * No AggregateRating / Review: the practice's review counts are not verifiable facts.
 */
export default function JsonLd({ path, breadcrumb, faqs, service }: JsonLdProps) {
  const url = path === "/" ? `${site.siteUrl}/` : `${site.siteUrl}/${path.replace(/^\//, "")}`;

  const graph: GraphNode[] = [
    {
      "@type": "Organization",
      "@id": `${site.siteUrl}/#org`,
      name: org.name,
      legalName: org.legalName,
      description: org.shortDescription,
      url: `${site.siteUrl}/`,
      email: org.email,
      telephone: org.phoneTel,
      address: {
        "@type": "PostalAddress",
        streetAddress: org.address.streetAddress,
        addressLocality: org.address.addressLocality,
        addressRegion: org.address.addressRegion,
        postalCode: org.address.postalCode,
        addressCountry: org.address.addressCountry,
      },
      areaServed: org.areaServed,
      knowsAbout: org.knowsAbout,
    },
    {
      "@type": "WebSite",
      "@id": `${site.siteUrl}/#website`,
      url: `${site.siteUrl}/`,
      name: org.name,
      description: org.description,
      publisher: { "@id": `${site.siteUrl}/#org` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site.siteUrl}/` },
        ...(path === "/"
          ? []
          : [{ "@type": "ListItem", position: 2, name: breadcrumb, item: url }]),
      ],
    },
  ];

  if (service) {
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.name,
      description: service.description,
      provider: { "@id": `${site.siteUrl}/#org` },
      areaServed: org.areaServed,
    });
  }

  if (faqs && faqs.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph })
    .replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
