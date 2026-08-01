"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { ElephantMark } from "@/components/elephant-mark"
import { Wordmark } from "@/components/wordmark"

const links = [
  { label: "Vision", href: "#vision" },
  { label: "What We're Building", href: "#building" },
  { label: "Principles", href: "#principles" },
  { label: "Contact", href: "#contact" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-cream/80 backdrop-blur-md"
          : "border-b border-transparent bg-cream/0"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 md:h-20"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green"
          aria-label="Project GAJ home"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-navy text-cream md:size-10">
            <ElephantMark className="size-6 md:size-7" />
          </span>
          <Wordmark />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-navy/70 transition-colors hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#vision"
            className="inline-flex h-10 items-center justify-center rounded-full border border-navy/15 bg-navy px-5 text-sm font-semibold text-cream transition-all hover:bg-navy/90 hover:shadow-[0_6px_20px_-8px_rgba(13,27,42,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          >
            Explore Our Vision
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg text-navy transition-colors hover:bg-navy/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-cream md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-navy/80 transition-colors hover:bg-navy/5 hover:text-navy"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#vision"
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center rounded-full bg-navy px-5 text-base font-semibold text-cream"
            >
              Explore Our Vision
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
