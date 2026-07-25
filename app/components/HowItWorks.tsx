import Link from "next/link";

const steps = [
  {
    title: "Tell us your goals",
    description:
      "Choose between weight loss, muscle gain, better energy or balanced eating — takes 30 seconds.",
  },
  {
    title: "Get your meal plan",
    description:
      "tomady&apos;s AI builds a custom weekly menu of healthy, tasty meals you&apos;ll actually love.",
  },
  {
    title: "Track & feel better",
    description:
      "Log meals in one tap, follow the plan and watch your energy, mood and health improve.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative overflow-hidden bg-gradient-to-br from-brand-soft/60 via-white to-white"
      aria-label="How it works"
    >
      <span className="blob h-80 w-80 bg-brand top-20 -left-20 opacity-25" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2">
        <div className="mx-auto w-full max-w-sm">
          <div className="absolute -left-6 top-32 hidden h-32 w-32 rotate-12 rounded-2xl bg-warning/20 md:block" />
          <div className="absolute left-10 bottom-20 hidden h-20 w-20 rounded-full bg-error/15 md:block" />

          <div className="relative mx-auto h-[560px] w-[260px] rounded-[44px] border-[10px] border-foreground bg-foreground shadow-2xl">
            <div className="absolute left-1/2 top-3 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
            <div className="h-full w-full overflow-hidden rounded-[34px] bg-white">
              <div className="flex items-center justify-between px-5 pt-12 pb-4">
                <div>
                  <p className="text-xs text-muted">Today&apos;s menu</p>
                  <p className="text-lg font-extrabold text-foreground">
                    Wednesday
                  </p>
                </div>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-soft text-brand text-lg">
                  🥗
                </span>
              </div>

              <div className="space-y-3 px-5">
                {[
                  {
                    label: "Oat & berries bowl",
                    tag: "Breakfast · 380 kcal",
                    color: "bg-brand",
                    done: true,
                  },
                  {
                    label: "Quinoa salad",
                    tag: "Lunch · 450 kcal",
                    color: "bg-brand",
                    done: true,
                  },
                  {
                    label: "Apple & almonds",
                    tag: "Snack · 180 kcal",
                    color: "bg-warning",
                    done: false,
                  },
                  {
                    label: "Grilled salmon",
                    tag: "Dinner · 520 kcal",
                    color: "bg-error",
                    done: false,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-white px-3 py-2.5 shadow-sm"
                  >
                    <span
                      className={`grid h-7 w-7 place-items-center rounded-full ${
                        item.done ? "bg-brand text-white" : "border-2 border-border bg-white text-muted"
                      }`}
                    >
                      {item.done ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3.5 w-3.5"
                          aria-hidden
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      ) : null}
                    </span>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-foreground">
                        {item.label}
                      </p>
                      <p className="text-[10px] text-muted">{item.tag}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mx-5 mt-5 rounded-xl bg-brand p-3 text-center text-xs font-bold text-white shadow-md">
                2 of 4 meals done — keep going! 🍎
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand shadow-sm ring-1 ring-border">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            How it works
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Eat healthy in{" "}
            <span className="gradient-text">3 simple steps</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
            No diets that feel like punishment. tomady makes healthy eating easy,
            enjoyable and adapted to your real life.
          </p>

          <ol className="relative mt-10 space-y-8">
            <span className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-brand via-warning to-error" />
            {steps.map((step, idx) => (
              <li
                key={step.title}
                className="relative flex items-start gap-5 rounded-2xl border border-border bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-sm font-extrabold text-white shadow-md">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#appstore"
              className="inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-white transition-all hover:bg-black hover:-translate-y-0.5 hover:shadow-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden
              >
                <path d="M16.4 12.6c0-2.7 2.2-4 2.3-4.1-1.3-1.9-3.3-2.1-4-2.2-1.7-.2-3.3 1-4.1 1-.9 0-2.2-1-3.6-1-1.9 0-3.6 1.1-4.6 2.7-2 3.4-.5 8.5 1.4 11.3 1 1.4 2.1 2.9 3.6 2.9 1.5-.1 2-1 3.8-1 1.7 0 2.2 1 3.8 1 1.6 0 2.6-1.4 3.5-2.7 1.1-1.6 1.6-3.1 1.6-3.2-.1 0-3.1-1.2-3.1-4.7zM13.7 4.7c.8-1 1.4-2.4 1.2-3.7-1.2.1-2.6.8-3.4 1.8-.7.9-1.4 2.3-1.2 3.6 1.3.1 2.7-.7 3.4-1.7z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[10px] opacity-80">Download on</span>
                <span className="block text-sm font-bold">App Store</span>
              </span>
            </Link>

            <Link
              href="#playstore"
              className="inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-white transition-all hover:bg-black hover:-translate-y-0.5 hover:shadow-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden
              >
                <path d="M3.6 2.3c-.4.4-.6 1-.6 1.7v16c0 .7.2 1.3.6 1.7L13.2 12 3.6 2.3zm10.6 10.5 2.6 2.6-9 5.2 6.4-7.8zm0-1.6L7.8 3.4l9 5.2-2.6 2.6zm6.7-3.4-2.4 1.4-2.9-2.9 2.9-2.9 2.4 1.4c1.2.7 1.2 2.3 0 3z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[10px] opacity-80">Get it on</span>
                <span className="block text-sm font-bold">Google Play</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}