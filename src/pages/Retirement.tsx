import { useState } from "react";
import Reveal from "@/components/Reveal";
import { SectionHeader, Pill } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { Link } from "react-router-dom";
import { cta, regulatory } from "@/data/facts";

const retirementStages = [
  { icon: "rocket_launch", title: "Accumulation (25–45)", desc: "Longest horizon. A higher equity weight usually suits this phase — build the emergency cushion and start SIPs early." },
  { icon: "trending_up", title: "Transition (45–55)", desc: "Begin de-risking. Shift toward balanced funds, increase retirement contributions, plan healthcare." },
  { icon: "savings", title: "Pre-Retirement (55–60)", desc: "Capital preservation. Move to debt-heavy allocation, finalize withdrawal strategy, optimize pension." },
  { icon: "beach_access", title: "Retirement (60+)", desc: "Income generation. Systematic withdrawals, annuity laddering, inflation-protected income streams." },
];

const incomeSources = [
  "Pension / Annuity", "Mutual Fund SWP", "Senior Citizen Savings Scheme", "Post Office Monthly Income",
  "Rental Income", "Dividend Yield Funds", "PPF Maturity", "Reverse Mortgage",
];

export default function Retirement() {
  const [currentAge, setCurrentAge] = useState(35);
  const [retireAge, setRetireAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(80000);
  const [currentCorpus, setCurrentCorpus] = useState(5000000);

  const yearsToRetire = Math.max(0, retireAge - currentAge);
  const yearsInRetirement = 30;
  const inflation = 6;
  const preRetReturn = 11;
  const postRetReturn = 7;

  const futureMonthlyExpense = monthlyExpense * Math.pow(1 + inflation / 100, yearsToRetire);
  const annualExpenseAtRetire = futureMonthlyExpense * 12;
  const requiredCorpus = (annualExpenseAtRetire * (1 - Math.pow(1 + postRetReturn / 100, -yearsInRetirement))) / (postRetReturn / 100);
  const futureCorpus = currentCorpus * Math.pow(1 + preRetReturn / 100, yearsToRetire);
  const shortfall = Math.max(0, requiredCorpus - futureCorpus);
  const monthlySIPNeeded = shortfall > 0
    ? (shortfall * (preRetReturn / 100 / 12)) / (Math.pow(1 + preRetReturn / 100 / 12, yearsToRetire * 12) - 1)
    : 0;

  const fmt = (n: number) => {
    if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
    if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
    return `₹${Math.round(n).toLocaleString("en-IN")}`;
  };

  return (
    <div className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height)]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-container to-primary text-on-primary py-20 md:py-28">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <Pill icon="savings">Retirement Planning</Pill>
            <h1 className="font-headline text-headline-xl md:text-[56px] leading-[1.1] mt-6 mb-6 max-w-3xl">
              Retire with <em className="text-secondary-container not-italic">confidence</em>, not guesswork.
            </h1>
            <p className="text-body-lg text-primary-fixed-dim max-w-xl leading-relaxed">
              A retirement corpus that lasts as long as you do — with inflation-protected income,
              healthcare buffers, and a withdrawal strategy that adapts to your lifestyle.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-16 md:py-24 bg-surface scroll-mt-[var(--header-height)]">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="Retirement Calculator"
              title={<>See your <em className="text-secondary not-italic">retirement numbers</em></>}
              subtitle="Adjust the sliders to estimate how much corpus you'll need and how much to invest monthly."
              align="center"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 grid lg:grid-cols-2 gap-8">
              {/* Inputs */}
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-8">
                <h3 className="font-headline text-headline-sm text-primary mb-6">Your Details</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-body-sm text-on-surface-variant mb-2">
                      <span id="calc-age-label">Current Age</span><span className="font-semibold text-primary">{currentAge} years</span>
                    </div>
                    <input type="range" min={25} max={55} value={currentAge} onChange={(e) => setCurrentAge(+e.target.value)}
                      aria-labelledby="calc-age-label" aria-valuetext={`${currentAge} years`}
                      className="w-full accent-secondary" />
                  </div>
                  <div>
                    <div className="flex justify-between text-body-sm text-on-surface-variant mb-2">
                      <span id="calc-retire-label">Retirement Age</span><span className="font-semibold text-primary">{retireAge} years</span>
                    </div>
                    <input type="range" min={50} max={65} value={retireAge} onChange={(e) => setRetireAge(+e.target.value)}
                      aria-labelledby="calc-retire-label" aria-valuetext={`${retireAge} years`}
                      className="w-full accent-secondary" />
                  </div>
                  <div>
                    <div className="flex justify-between text-body-sm text-on-surface-variant mb-2">
                      <span id="calc-expense-label">Monthly Expenses Today</span><span className="font-semibold text-primary">{fmt(monthlyExpense)}</span>
                    </div>
                    <input type="range" min={20000} max={300000} step={5000} value={monthlyExpense} onChange={(e) => setMonthlyExpense(+e.target.value)}
                      aria-labelledby="calc-expense-label" aria-valuetext={fmt(monthlyExpense) + " per month"}
                      className="w-full accent-secondary" />
                  </div>
                  <div>
                    <div className="flex justify-between text-body-sm text-on-surface-variant mb-2">
                      <span id="calc-corpus-label">Current Retirement Corpus</span><span className="font-semibold text-primary">{fmt(currentCorpus)}</span>
                    </div>
                    <input type="range" min={0} max={50000000} step={500000} value={currentCorpus} onChange={(e) => setCurrentCorpus(+e.target.value)}
                      aria-labelledby="calc-corpus-label" aria-valuetext={fmt(currentCorpus)}
                      className="w-full accent-secondary" />
                  </div>
                  <div className="text-regulatory-legal text-on-surface-variant pt-2">
                    Assumptions: {inflation}% inflation, {preRetReturn}% pre-retirement returns,{" "}
                    {postRetReturn}% post-retirement returns, {yearsInRetirement}-year retirement.
                    These are the same rates every Indian retirement planner publishes; they are
                    assumptions, not forecasts of any scheme. The output is an illustration, not
                    advice.
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-primary-container to-tertiary rounded-2xl p-8 text-on-primary">
                <h3 className="font-headline text-headline-sm mb-6">Your Projection</h3>
                <div className="space-y-5">
                  <div className="bg-primary/30 backdrop-blur rounded-xl p-5">
                    <div className="text-body-sm text-primary-fixed-dim mb-1">Corpus Needed at Retirement</div>
                    <div className="font-headline text-3xl font-semibold">{fmt(requiredCorpus)}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/20 backdrop-blur rounded-xl p-4">
                      <div className="text-body-sm text-primary-fixed-dim mb-1">Future Expenses/yr</div>
                      <div className="font-headline text-xl font-semibold">{fmt(annualExpenseAtRetire)}</div>
                    </div>
                    <div className="bg-primary/20 backdrop-blur rounded-xl p-4">
                      <div className="text-body-sm text-primary-fixed-dim mb-1">Current Corpus Grows To</div>
                      <div className="font-headline text-xl font-semibold">{fmt(futureCorpus)}</div>
                    </div>
                  </div>
                  <div className="bg-secondary-container text-primary rounded-xl p-5">
                    <div className="text-body-sm text-on-secondary-container mb-1">Monthly SIP Needed</div>
                    <div className="font-headline text-3xl font-bold">{monthlySIPNeeded > 0 ? fmt(monthlySIPNeeded) : "Goal Met!"}</div>
                    {monthlySIPNeeded > 0 && <div className="text-body-sm text-on-secondary-container mt-1">for {yearsToRetire} years</div>}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stages */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="Life Stages"
              title={<>Retirement planning through <em className="text-secondary not-italic">every decade</em></>}
              align="center"
            />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {retirementStages.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-6 h-full card-lift">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-primary text-2xl">{s.icon}</span>
                  </div>
                  <h3 className="font-headline text-headline-sm text-primary mb-2">{s.title}</h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Income Sources */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-page mx-auto px-gutter-mobile md:px-gutter">
          <Reveal>
            <SectionHeader
              eyebrow="Post-Retirement Income"
              title={<>Diversified <em className="text-secondary not-italic">income streams</em></>}
              subtitle="A withdrawal plan drawn from one instrument fails on one bad decade. Several of the streams below sit outside mutual funds; we size the fund-based part of the plan and tell you plainly which streams need a bank, an annuity provider, or a property instead."
              align="center"
            />
          </Reveal>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {incomeSources.map((src, i) => (
              <Reveal key={src} delay={i * 50}>
                <span className="px-5 py-3 bg-surface-container-lowest border border-outline-variant/20 rounded-full text-body-sm text-primary font-medium card-lift">
                  {src}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-gutter-mobile md:px-gutter text-center">
          <Reveal>
            <h2 className="font-headline text-headline-lg md:text-headline-xl text-primary mb-4">
              Check the number before you commit the money.
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-8">
              Bring the output of the calculator to the call and we will test it against your
              actual statements and withdrawal timeline.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary font-semibold rounded-full hover:bg-primary-fixed-dim transition-all hover:shadow-xl">
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              {cta.primary}
            </Link>
            <p className="text-regulatory-legal text-on-surface-variant mt-6">
              {regulatory.disclaimer}
            </p>
          </Reveal>
        </div>
      </section>

      <JsonLd
        path="/retirement"
        breadcrumb="Retirement Planning"
        service={{
          name: "Retirement corpus and withdrawal planning",
          description:
            "Corpus and systematic withdrawal planning for Indian households and NRIs: inflation-adjusted expense projection, required corpus, monthly SIP sizing, healthcare buffers, and a withdrawal sequence drawn from mutual fund SWPs.",
        }}
      />
    </div>
  );
}
