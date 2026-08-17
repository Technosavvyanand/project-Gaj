import { Mail } from "lucide-react"
import { ElephantMark } from "@/components/elephant-mark"
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

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-navy text-cream">
                <ElephantMark className="size-6" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-navy/55">
                  Project
                </span>
                <span className="text-lg font-extrabold tracking-tight text-navy">
                  GAJ
                </span>
              </span>
            </div>
            <p className="mt-4 text-pretty leading-relaxed text-navy/60">
              Technology made simple.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/40">
              Connect
            </span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-navy/70 transition-colors hover:text-green"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </a>
            <a
              href={LINKEDIN_URL}
              className="inline-flex items-center gap-2.5 text-navy/70 transition-colors hover:text-green"
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2.5 text-navy/70 transition-colors hover:text-green"
            >
              <Mail className="size-4" strokeWidth={1.75} />
              Email
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-navy/55 sm:flex-row sm:items-center sm:justify-between">
          <p>projectgaj.in</p>
          <p>&copy; 2026 Project GAJ</p>
        </div>
      </div>
    </footer>
  )
}
