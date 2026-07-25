import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    desc: "Start eating better today.",
    cta: "Get Started",
    features: [
      "Log up to 5 meals / day",
      "Basic macro tracking",
      "500+ free recipes",
      "Community support",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$7",
    period: "/month",
    desc: "Best for healthy lifestyles.",
    cta: "Start Free Trial",
    features: [
      "Unlimited meal logging",
      "AI-powered meal plans",
      "10,000+ premium recipes",
      "Smart grocery lists",
      "Coach sharing",
    ],
    highlight: true,
  },
  {
    name: "Family",
    price: "$19",
    period: "/month",
    desc: "For the whole family.",
    cta: "Contact Sales",
    features: [
      "Everything in Pro",
      "Up to 6 family members",
      "Kids meal plans",
      "Family grocery lists",
      "Priority nutritionist chat",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-white" aria-label="Pricing">
      <span className="blob h-72 w-72 bg-brand top-20 left-1/4 opacity-15" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-dark" />
            Pricing
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Eat healthy,{" "}
            <span className="gradient-text">pay what&apos;s fair</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg">
            No hidden fees. Cancel anytime. Pick the plan that fits your
            lifestyle.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all hover:-translate-y-1 ${
                plan.highlight
                  ? "border-brand bg-gradient-to-br from-brand to-brand-dark text-white shadow-2xl shadow-brand/30 md:scale-105"
                  : "border-border bg-white shadow-sm hover:shadow-xl"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-warning px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                  Most popular
                </span>
              )}

              <h3
                className={`text-sm font-bold uppercase tracking-wider ${
                  plan.highlight ? "text-white/90" : "text-brand"
                }`}
              >
                {plan.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={`text-5xl font-extrabold ${
                    plan.highlight ? "text-white" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm font-medium ${
                    plan.highlight ? "text-white/80" : "text-muted"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`mt-2 text-sm ${
                  plan.highlight ? "text-white/85" : "text-muted"
                }`}
              >
                {plan.desc}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-3 text-sm ${
                      plan.highlight ? "text-white" : "text-foreground"
                    }`}
                  >
                    <span
                      className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        plan.highlight
                          ? "bg-white text-brand-dark"
                          : "bg-brand text-white"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                        aria-hidden
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="#signup"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                  plan.highlight
                    ? "bg-white text-brand-dark hover:bg-brand-soft"
                    : "bg-brand text-white hover:bg-brand-dark"
                }`}
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}