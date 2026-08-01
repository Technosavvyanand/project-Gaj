import { Compass, Sparkles, ShieldCheck } from "lucide-react"

const principles = [
  {
    icon: Compass,
    title: "Practical",
    body: "Solutions built around real needs rather than unnecessary complexity.",
  },
  {
    icon: Sparkles,
    title: "Accessible",
    body: "Technology that organisations can confidently understand, adopt and use.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    body: "Simple systems designed to work consistently when people need them.",
  },
]

export function PrinciplesSection() {
  return (
    <section
      id="principles"
      aria-labelledby="principles-heading"
      className="scroll-mt-24 border-t border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-28">
        <h2 id="principles-heading" className="sr-only">
          Our principles
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {principles.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green/30 hover:shadow-[0_20px_50px_-30px_rgba(13,27,42,0.4)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-8"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-navy/5 text-green transition-colors group-hover:bg-green group-hover:text-cream">
                <Icon className="size-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-navy md:mt-6">
                {title}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-navy/70">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
