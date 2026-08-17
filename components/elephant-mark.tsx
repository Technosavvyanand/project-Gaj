import type { SVGProps } from "react"

/**
 * Minimal geometric line-art elephant used as the Project GAJ brand mark.
 * Front-facing, single stroke weight — designed to read as a corporate mark
 * rather than an illustration. No fills, no cartoon detail.
 */
export function ElephantMark({
  title,
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {/* Head + ears + trunk as one continuous outline */}
      <path d="M32 11
        C25 11 22 16 22 22
        C13 16 7 23 8 34
        C9 44 18 47 23 42
        C24 48 26 52 28 54
        C27 60 28 66 32 66
        C36 66 37 60 36 54
        C38 52 40 48 41 42
        C46 47 55 44 56 34
        C57 23 51 16 42 22
        C42 16 39 11 32 11 Z" />
      {/* Eyes */}
      <circle cx="26.5" cy="30" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="37.5" cy="30" r="1.4" fill="currentColor" stroke="none" />
      {/* Tusks */}
      <path d="M28.5 52 C26.5 55 26 58 27 60" />
      <path d="M35.5 52 C37.5 55 38 58 37 60" />
    </svg>
  )
}
