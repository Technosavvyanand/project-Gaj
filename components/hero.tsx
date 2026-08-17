import { ArrowRight } from "lucide-react"
import { HeroElephant } from "@/components/hero-elephant"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* faint background grid + sparse nodes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(13,27,42,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,27,42,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 85% 75% at 60% 40%, black 35%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 60% 40%, black 35%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-4 px-5 pt-14 pb-16 sm:px-8 md:grid-cols-[1.02fr_0.98fr] md:gap-8 md:pt-24 md:pb-28">
        <div className="animate-rise">
          <h1
            id="hero-heading"
            className="text-balance text-5xl font-extrabold leading-[1.02] tracking-tight text-navy sm:text-6xl md:text-7xl"
          >
            Technology
            <br />
            made <span className="text-green">simple.</span>
          </h1>

          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-navy/70 md:text-lg">
            Practical digital solutions for schools, institutions and growing
            businesses — designed to be useful, accessible and easy to live
            with.
          </p>

          <div className="mt-8 md:mt-9">
            <a
              href="#vision"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy px-6 text-sm font-semibold text-cream transition-all hover:bg-navy/90 hover:shadow-[0_10px_30px_-10px_rgba(13,27,42,0.7)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green motion-reduce:transition-none"
            >
              Explore Our Vision
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </a>
          </div>
        </div>

        {/* Desktop: oversized, bleeding off the right edge */}
        <div
          className="animate-rise pointer-events-none hidden md:block [animation-delay:120ms]"
          aria-hidden="true"
        >
          <div className="relative -mr-16 h-[30rem] w-[calc(100%+6rem)] lg:-mr-24 lg:h-[34rem] lg:w-[calc(100%+8rem)]">
            <HeroElephant
              preserveAspectRatio="xMidYMid slice"
              className="h-full w-full text-navy"
            />
          </div>
          <span className="pointer-events-none mt-2 block text-right text-sm font-medium tracking-[0.4em] text-navy/35">
            गज
          </span>
        </div>

        {/* Mobile: composed crop below the copy */}
        <div
          className="animate-rise pointer-events-none relative mt-8 md:hidden [animation-delay:120ms]"
          aria-hidden="true"
        >
          <div className="relative h-44 w-full overflow-hidden">
            <HeroElephant
              preserveAspectRatio="xMidYMid slice"
              className="h-full w-full text-navy"
            />
          </div>
          <span className="mt-2 block text-center text-sm font-medium tracking-[0.4em] text-navy/35">
            गज
          </span>
        </div>
      </div>
    </section>
  )
}
