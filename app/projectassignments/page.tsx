import type { Metadata } from "next"
import { ArrowUpRight, Code2, Database, GraduationCap, ShieldCheck } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Expanding Our Tech Ecosystem: ProjectAssignments.com | Project GAJ",
  description:
    "Discover ProjectAssignments.com, the technical platform supporting advanced software engineering, cybersecurity advisory, data analytics, cloud systems, and research.",
}

const projectAssignmentsUrl = "https://projectassignments.com"

export default function ProjectAssignmentsPage() {
  return (
    <>
      <SiteNav />

      <main className="bg-background text-navy">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-green">
                Expanding the Project GAJ Ecosystem
              </p>

              <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                From Digital Presence to Advanced Technology.
              </h1>

              <p className="mt-7 max-w-3xl text-pretty text-lg leading-relaxed text-navy/70 sm:text-xl">
                Project GAJ helps small businesses, schools, coaching centres,
                restaurants and startups establish their digital presence.
                As those organisations grow, their technology requirements
                often become more advanced.
              </p>

              <p className="mt-5 max-w-3xl text-pretty text-lg leading-relaxed text-navy/70 sm:text-xl">
                That is where{" "}
                <a
                  href={projectAssignmentsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-green underline decoration-green/30 underline-offset-4 hover:decoration-green"
                >
                  ProjectAssignments.com
                </a>{" "}
                comes in.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section>
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">
                  The idea
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  What is ProjectAssignments.com?
                </h2>
              </div>

              <div className="space-y-5 text-base leading-relaxed text-navy/70 sm:text-lg">
                <p>
                  ProjectAssignments.com is our specialised technical
                  platform for organisations and individuals who require
                  deeper technology expertise beyond a basic digital presence.
                </p>

                <p>
                  It brings together software engineering, cybersecurity,
                  data analytics, cloud technologies and advanced technical
                  research support under a dedicated technical platform.
                </p>

                <p>
                  While Project GAJ focuses on helping organisations get
                  online and build their digital identity, ProjectAssignments
                  focuses on the technology that can power the next stage of
                  their growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem */}
        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">
                One ecosystem
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Two platforms. Different stages of growth.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-border bg-background p-7 sm:p-9">
                <p className="text-sm font-bold uppercase tracking-wider text-green">
                  ProjectGaj.in
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Digital Presence & Brand Building
                </h3>

                <ul className="mt-6 space-y-3 text-navy/70">
                  <li>• Websites for small businesses and institutions</li>
                  <li>• School and coaching centre websites</li>
                  <li>• Restaurant and local business presence</li>
                  <li>• Social media profile creation and management</li>
                  <li>• Local SEO and digital brand building</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-background p-7 sm:p-9">
                <p className="text-sm font-bold uppercase tracking-wider text-green">
                  ProjectAssignments.com
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Advanced Technology & Engineering
                </h3>

                <ul className="mt-6 space-y-3 text-navy/70">
                  <li>• Custom software engineering</li>
                  <li>• Cybersecurity and vulnerability advisory</li>
                  <li>• Data mining and advanced analytics</li>
                  <li>• Cloud and application architecture</li>
                  <li>• Advanced technical research advisory</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How they work together */}
        <section>
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">
                Growing with you
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                How the two platforms work together
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-navy/70">
                A business does not need the same technology on day one that
                it may need after years of growth. Our ecosystem is designed
                around that journey.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-border p-7">
                <h3 className="text-xl font-bold">01. Start</h3>
                <p className="mt-3 leading-relaxed text-navy/70">
                  Establish a professional website, digital identity and
                  social presence through Project GAJ.
                </p>
              </div>

              <div className="rounded-2xl border border-border p-7">
                <h3 className="text-xl font-bold">02. Grow</h3>
                <p className="mt-3 leading-relaxed text-navy/70">
                  Build visibility, reach more customers and strengthen your
                  digital brand.
                </p>
              </div>

              <div className="rounded-2xl border border-border p-7">
                <h3 className="text-xl font-bold">03. Scale</h3>
                <p className="mt-3 leading-relaxed text-navy/70">
                  When technology becomes more complex, access specialised
                  engineering and technical advisory through
                  ProjectAssignments.com.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialisations */}
        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">
                Technical capabilities
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Core areas of ProjectAssignments.com
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background p-7">
                <ShieldCheck className="size-8 text-green" />
                <h3 className="mt-5 text-xl font-bold">
                  Cybersecurity Advisory
                </h3>
                <p className="mt-3 leading-relaxed text-navy/70">
                  Vulnerability assessment, web security reviews, OWASP-focused
                  audits and security reporting.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-7">
                <Code2 className="size-8 text-green" />
                <h3 className="mt-5 text-xl font-bold">
                  Software Engineering
                </h3>
                <p className="mt-3 leading-relaxed text-navy/70">
                  Full-stack applications, databases, custom systems,
                  application architecture and modern web technologies.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-7">
                <Database className="size-8 text-green" />
                <h3 className="mt-5 text-xl font-bold">
                  Data Mining & Analytics
                </h3>
                <p className="mt-3 leading-relaxed text-navy/70">
                  Data processing, statistical analysis, predictive modelling
                  and technical analytics using tools such as Python, R and
                  WEKA.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-7">
                <GraduationCap className="size-8 text-green" />
                <h3 className="mt-5 text-xl font-bold">
                  Technical Research Advisory
                </h3>
                <p className="mt-3 leading-relaxed text-navy/70">
                  Technical and methodological advisory for advanced academic,
                  executive and institutional research projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <div className="rounded-3xl bg-navy p-8 text-cream sm:p-12 md:p-16">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cream/60">
                  The next step
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Need more than a digital presence?
                </h2>

                <p className="mt-5 text-lg leading-relaxed text-cream/70">
                  Project GAJ is here to help you establish your digital
                  identity. For advanced software engineering, cybersecurity,
                  data analytics and technical advisory, explore
                  ProjectAssignments.com.
                </p>

                <a
                  href={projectAssignmentsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cream px-6 py-3.5 font-bold text-navy transition-transform hover:-translate-y-0.5"
                >
                  Visit ProjectAssignments.com
                  <ArrowUpRight className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}