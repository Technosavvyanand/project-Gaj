export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`flex flex-col leading-none ${className ?? ""}`}>
      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-navy/55">
        Project
      </span>
      <span className="text-lg font-extrabold tracking-tight text-navy md:text-xl">
        GAJ
      </span>
    </span>
  )
}
