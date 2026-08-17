export function VisionSection() {
  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="scroll-mt-24 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-green">
              Why Project GAJ
            </p>
            <h2
              id="vision-heading"
              className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-navy sm:text-4xl md:text-5xl"
            >
              Our idea is simple.
            </h2>
          </div>

          <div className="max-w-2xl space-y-6 text-pretty text-lg leading-relaxed text-navy/75">
            <p className="text-2xl font-semibold leading-snug text-navy">
              Technology should solve problems, not create new ones.
            </p>
            <p>
              Project GAJ is being built around a simple idea: make useful
              digital tools easier to access, easier to use and easier to
              maintain.
            </p>
            <p>
              We believe smaller institutions and growing businesses should be
              able to benefit from thoughtful technology without unnecessary
              complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
