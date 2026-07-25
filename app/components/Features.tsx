const features = [
  {
    title: "Meal Tracker",
    description:
      "Snap a photo or scan a barcode — tomady instantly logs calories, macros and nutrients for every meal.",
    color: "bg-brand-soft text-brand",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden
      >
        <path d="M3 11h18M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
        <path d="M3 16h18M5 16v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" />
      </svg>
    ),
  },
  {
    title: "AI Meal Plans",
    description:
      "Personalized weekly menus based on your goals, allergies, taste and budget — generated in seconds.",
    color: "bg-[#FEE2E2] text-error",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden
      >
        <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    title: "Healthy Recipes",
    description:
      "Over 10,000 nutritionist-approved recipes with smart filters for vegan, keto, gluten-free and more.",
    color: "bg-[#FEF3C7] text-warning",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden
      >
        <path d="M12 2C8 6 6 10 6 14a6 6 0 0 0 12 0c0-4-2-8-6-12z" />
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </svg>
    ),
  },
];

function Arrow({
  direction,
  label,
}: {
  direction: "left" | "right";
  label: string;
}) {
  const isLeft = direction === "left";
  return (
    <button
      type="button"
      aria-label={label}
      className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-border text-brand transition-all hover:border-brand hover:bg-brand hover:text-white hover:shadow-lg hover:-translate-y-0.5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden
      >
        {isLeft ? (
          <path d="M19 12H5M12 19l-7-7 7-7" />
        ) : (
          <path d="M5 12h14M12 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative bg-white" aria-label="Features">
      <span className="blob h-72 w-72 bg-brand top-20 -right-20 opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-dark" />
            Core features
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Everything you need to{" "}
            <span className="gradient-text">eat smarter</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg">
            From quick meal logging to AI-powered weekly plans, tomady helps you
            build healthy habits that actually stick.
          </p>
        </div>

        <div className="mt-16 flex items-center gap-6">
          <div className="hidden md:block">
            <Arrow direction="left" label="Previous" />
          </div>

          <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((f, idx) => (
              <article
                key={f.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <span className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-soft/50 transition-transform group-hover:scale-150" />
                <span className="absolute right-4 top-4 text-xs font-bold text-muted">
                  0{idx + 1}
                </span>

                <div
                  className={`relative grid h-16 w-16 place-items-center rounded-2xl ${f.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}
                >
                  {f.icon}
                </div>

                <h3 className="relative mt-6 text-xl font-bold text-foreground">
                  {f.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted">
                  {f.description}
                </p>

                <span className="relative mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </article>
            ))}
          </div>

          <div className="hidden md:block">
            <Arrow direction="right" label="Next" />
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-xs items-center justify-center gap-2">
          <span className="h-1.5 flex-1 rounded-full bg-brand" />
          <span className="h-1.5 flex-1 rounded-full bg-border" />
          <span className="h-1.5 flex-1 rounded-full bg-border" />
        </div>
      </div>
    </section>
  );
}