import { Mail, ArrowUpRight } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp"
import { CONTACT_EMAIL, LINKEDIN_URL, getWhatsAppUrl } from "@/lib/contact"

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-28">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 md:p-16">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
            <div>
              <h2
                id="contact-heading"
                className="text-balance text-3xl font-extrabold tracking-tight text-navy sm:text-4xl md:text-5xl"
              >
                Let&apos;s stay connected.
              </h2>
              <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-navy/70">
                Interested in what we&apos;re building? We&apos;d be happy to
                hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Primary: WhatsApp */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl bg-green px-6 py-5 text-cream transition-all hover:bg-green/90 hover:shadow-[0_18px_40px_-20px_rgba(27,94,74,0.9)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green motion-reduce:transition-none"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-cream/15">
                  <WhatsAppIcon className="size-6" />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-wider text-cream/70">
                    Preferred
                  </span>
                  <span className="text-base font-semibold">
                    Chat on WhatsApp
                  </span>
                </span>
                <ArrowUpRight className="ml-auto size-5 text-cream/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
              </a>

              {/* Secondary: Email + LinkedIn */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group inline-flex items-center gap-3 rounded-xl border border-navy/15 bg-background px-4 py-3.5 text-navy transition-colors hover:border-navy/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                >
                  <Mail className="size-5 text-navy/70" strokeWidth={1.75} />
                  <span className="text-sm font-semibold">Email</span>
                </a>
                <a
                  href={LINKEDIN_URL}
                  className="group inline-flex items-center gap-3 rounded-xl border border-navy/15 bg-background px-4 py-3.5 text-navy transition-colors hover:border-navy/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                >
                  <LinkedInIcon className="size-5 text-navy/70" />
                  <span className="text-sm font-semibold">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
