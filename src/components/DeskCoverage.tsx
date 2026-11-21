import { useEffect, useState } from "react";
import { deskCoverage, org } from "@/data/facts";

const istFormatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

export default function DeskCoverage() {
  // Starts blank so the pre-rendered document and the hydrated one agree; the effect fills it immediately.
  const [istNow, setIstNow] = useState("");

  useEffect(() => {
    const tick = () => setIstNow(istFormatter.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="bg-tertiary-container rounded-xl p-6 text-primary-fixed-dim">
      <div className="flex items-center justify-between border-b border-secondary-fixed/20 pb-3 mb-4">
        <span className="text-label-md uppercase tracking-wider text-secondary-fixed font-semibold">
          Active Desk Coverage
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/20 px-2 py-0.5 text-[11px] font-medium text-secondary-fixed">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary-fixed" />
          <span className="tabular-nums">{istNow ? `${istNow} IST` : "Live IST"}</span>
        </span>
      </div>
      <p className="text-body-sm text-primary-fixed-dim mb-4">
        {org.address.addressLocality} advisory hours aligned with global diaspora centres:
      </p>
      <dl className="space-y-3 text-body-sm">
        {deskCoverage.map((row) => (
          <div
            key={row.region}
            className="flex items-center justify-between gap-3 rounded bg-primary-container/60 p-2.5"
          >
            <dt className="flex items-center gap-2 text-primary-fixed-dim">
              <span className="material-symbols-outlined text-[16px] text-secondary-fixed">schedule</span>
              {row.region}
            </dt>
            <dd className="font-medium text-surface">{row.time}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 border-t border-secondary-fixed/20 pt-3 text-center text-regulatory-legal text-primary-fixed-dim">
        {org.hours} · {org.hoursNriNote}
      </p>
    </div>
  );
}
