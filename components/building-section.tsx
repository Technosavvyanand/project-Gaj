const directions = [
  {
    no: "01",
    title: "Websites & Digital Presence",
    body: "Clean, responsive digital experiences that help schools, institutions and growing businesses establish a professional presence online.",
  },
  {
    no: "02",
    title: "School & Institution Solutions",
    body: "Simple digital tools designed to improve administration, information sharing and communication for educational institutions.",
  },
  {
    no: "03",
    title: "Simple Business Software",
    body: "Focused digital solutions built around everyday operational needs without unnecessary complexity.",
  },
  {
    no: "04",
    title: "Digital Enablement",
    body: "Practical technology support that helps organisations adopt digital tools and work more effectively.",
  },
]

export function BuildingSection() {
  return (
    <section
      id="building"
      aria-labelledby="building-heading"
      className="scroll-mt-24 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-green">
            Where We&apos;re Headed
          </p>
          <h2
            id="building-heading"
            className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-navy sm:text-4xl md:text-5xl"
          >
            What we&apos;re building towards.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-navy/70">
            Project GAJ is at an early stage. These are some of the areas
            we&apos;re exploring as we build the foundation.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
          {directions.map(({ no, title, body }) => (
            <article
              key={no}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-navy/20 hover:shadow-[0_20px_50px_-30px_rgba(13,27,42,0.4)] md:p-8"
            >
              <span
                aria-hidden="true"
                className="text-sm font-bold tracking-widest text-gold"
              >
                {no}
              </span>
              <h3 className="mt-4 text-lg font-bold tracking-tight text-navy md:text-xl">
                {title}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-navy/70">
                {body}
              </p>
              <span
                aria-hidden="true"
                className="absolute right-0 bottom-0 h-px w-0 bg-green transition-all duration-500 group-hover:w-full"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
