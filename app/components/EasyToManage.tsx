export default function EasyToManage() {
  return (
    <section id="manage" className="relative bg-white" aria-label="Easy to manage">
      <span className="blob h-72 w-72 bg-warning -bottom-10 -right-20 opacity-20" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-dark" />
            Your dashboard
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            All your nutrition
            <br />
            <span className="gradient-text">in one place</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Track meals, monitor macros and visualize your weekly progress in a
            single elegant dashboard. Export reports and share with your coach.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              {
                title: "Real-time macro tracking",
                desc: "Carbs, protein, fat & fiber — updated instantly.",
                color: "bg-brand",
              },
              {
                title: "Smart grocery lists",
                desc: "Auto-generated from your weekly meal plan.",
                color: "bg-warning",
              },
              {
                title: "Share with your coach",
                desc: "Send weekly reports to your nutritionist in one click.",
                color: "bg-error",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span
                  className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full text-white ${item.color}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">{item.title}</p>
                  <p className="mt-0.5 text-xs text-muted">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-soft to-white" />

          <div className="relative rounded-3xl border border-border bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-muted">This week</p>
                <p className="text-base font-extrabold text-foreground">
                  Nutrition overview
                </p>
              </div>
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-dark">
                -2.4 kg
              </span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { label: "Carbs", value: "62%", color: "bg-warning" },
                { label: "Protein", value: "78%", color: "bg-brand" },
                { label: "Fat", value: "45%", color: "bg-error" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-border bg-white p-3 text-center"
                >
                  <div className="mx-auto h-16 w-16">
                    <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                      <circle
                        cx="18"
                        cy="18"
                        r="15.9"
                        fill="none"
                        stroke="#E8F8F1"
                        strokeWidth="3"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="15.9"
                        fill="none"
                        className={`${m.color.replace("bg-", "stroke-")}`}
                        strokeWidth="3"
                        strokeDasharray={`${m.value}, 100`}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p className="mt-1 text-sm font-bold text-foreground">
                    {m.value}
                  </p>
                  <p className="text-[10px] text-muted">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-border pt-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-muted">
                Today&apos;s meals
              </p>
              <ul className="space-y-3">
                {[
                  {
                    name: "Avocado toast",
                    time: "08:30",
                    kcal: "320 kcal",
                    color: "bg-brand",
                    emoji: "🥑",
                  },
                  {
                    name: "Quinoa salad",
                    time: "12:45",
                    kcal: "450 kcal",
                    color: "bg-warning",
                    emoji: "🥗",
                  },
                  {
                    name: "Grilled salmon",
                    time: "19:30",
                    kcal: "520 kcal",
                    color: "bg-error",
                    emoji: "🐟",
                  },
                ].map((m) => (
                  <li
                    key={m.name}
                    className="flex items-center justify-between rounded-xl border border-border px-3 py-2.5 transition-all hover:border-brand/40 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`grid h-10 w-10 place-items-center rounded-full text-lg ${m.color}`}
                      >
                        {m.emoji}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-foreground">
                          {m.name}
                        </p>
                        <p className="text-xs text-muted">
                          {m.time} · {m.kcal}
                        </p>
                      </div>
                    </div>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-soft text-brand transition-all hover:bg-brand hover:text-white">
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
                        <path d="M9 12l2 2 4-4" />
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <span className="absolute -bottom-4 -left-4 grid h-14 w-14 place-items-center rounded-2xl bg-warning text-white shadow-lg animate-bounce-slow text-2xl">
            🥦
          </span>
          <span className="absolute -right-4 top-16 grid h-12 w-12 place-items-center rounded-full bg-error text-white shadow-lg text-2xl">
            ❤️
          </span>
        </div>
      </div>
    </section>
  );
}