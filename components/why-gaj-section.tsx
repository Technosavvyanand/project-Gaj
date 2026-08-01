import { ElephantMark } from "@/components/elephant-mark"

const qualities = ["Strength", "Intelligence", "Reliability", "Memory"]

export function WhyGajSection() {
  return (
    <section
      aria-labelledby="why-gaj-heading"
      className="relative scroll-mt-24 overflow-hidden border-t border-border bg-secondary/40"
    >
      {/* oversized background elephant */}
      <ElephantMark
        aria-hidden="true"
        strokeWidth={0.9}
        className="pointer-events-none absolute -right-16 top-1/2 hidden h-[130%] w-auto -translate-y-1/2 text-navy/[0.05] md:block"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-32">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-green">
            The Name
          </p>
          <h2
            id="why-gaj-heading"
            className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-navy sm:text-5xl md:text-6xl"
          >
            Strength in simplicity.
          </h2>

          <div className="mt-8 space-y-5 text-pretty text-lg leading-relaxed text-navy/75">
            <p>
              GAJ draws inspiration from the Sanskrit and Hindi word{" "}
              <span className="font-semibold text-navy">
                &ldquo;गज&rdquo;
              </span>{" "}
              — elephant.
            </p>
            <p>
              The elephant represents qualities we value in technology:
              strength, intelligence, reliability and memory.
            </p>
            <p>
              These qualities reflect the kind of technology we want to build —
              dependable, thoughtful and built to last.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {qualities.map((q) => (
              <li
                key={q}
                className="rounded-full border border-navy/15 bg-card px-4 py-2 text-sm font-semibold text-navy"
              >
                {q}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
