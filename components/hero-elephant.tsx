/**
 * Bold, architectural geometric elephant used as the Project GAJ hero artwork.
 * Built from confident modular shapes — reads as a brand statement rather than
 * an illustration. Primarily deep navy, with extremely restrained green and
 * gold accents. No concentric circles, no radar/target motifs, no cartoon detail.
 *
 * `preserveAspectRatio="xMidYMid slice"` lets the container crop the artwork
 * differently on desktop and mobile without distorting it.
 */
export function HeroElephant({
  className,
  preserveAspectRatio = "xMidYMid meet",
}: {
  className?: string
  preserveAspectRatio?: string
}) {
  const navy = "#0D1B2A"
  const green = "#1B5E4A"
  const gold = "#D4A017"

  return (
    <svg
      viewBox="0 0 480 420"
      fill="none"
      preserveAspectRatio={preserveAspectRatio}
      aria-hidden="true"
      className={className}
    >
      {/* far legs (recessed depth) */}
      <path
        d="M214 250 h30 a6 6 0 0 1 6 6 v78 a6 6 0 0 1 -6 6 h-30 a6 6 0 0 1 -6 -6 v-78 a6 6 0 0 1 6 -6 Z"
        fill={navy}
        opacity="0.45"
      />
      <path
        d="M300 250 h30 a6 6 0 0 1 6 6 v78 a6 6 0 0 1 -6 6 h-30 a6 6 0 0 1 -6 -6 v-78 a6 6 0 0 1 6 -6 Z"
        fill={navy}
        opacity="0.45"
      />

      {/* body */}
      <path
        d="M150 190
           C150 132, 196 104, 262 104
           C336 104, 388 140, 388 206
           C388 268, 344 300, 268 300
           L168 300
           C156 300, 150 292, 150 280
           Z"
        fill={navy}
      />

      {/* head */}
      <circle cx="150" cy="196" r="82" fill={navy} />

      {/* near legs */}
      <path
        d="M168 250 h32 a6 6 0 0 1 6 6 v86 a6 6 0 0 1 -6 6 h-32 a6 6 0 0 1 -6 -6 v-86 a6 6 0 0 1 6 -6 Z"
        fill={navy}
      />
      <path
        d="M338 250 h32 a6 6 0 0 1 6 6 v86 a6 6 0 0 1 -6 6 h-32 a6 6 0 0 1 -6 -6 v-86 a6 6 0 0 1 6 -6 Z"
        fill={navy}
      />

      {/* trunk */}
      <path
        d="M92 176
           C64 200, 60 244, 66 286
           C69 308, 82 322, 102 322
           C118 322, 128 310, 126 294
           C124 282, 114 280, 106 286
           C100 290, 94 286, 94 278
           C92 250, 100 216, 128 198
           Z"
        fill={navy}
      />

      {/* ear */}
      <path
        d="M150 128
           C196 122, 224 150, 222 196
           C220 236, 192 258, 158 254
           C150 210, 148 168, 150 128 Z"
        fill={navy}
      />
      <path
        d="M164 150
           C192 148, 208 168, 206 196
           C205 220, 188 234, 168 232
           C162 205, 162 176, 164 150 Z"
        fill={green}
        opacity="0.9"
      />

      {/* tusk */}
      <path
        d="M120 250 C110 262, 106 276, 112 288"
        stroke={gold}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* eye */}
      <circle cx="120" cy="176" r="6" fill={gold} />

      {/* tail */}
      <path
        d="M386 200 C398 214, 400 234, 392 250"
        stroke={navy}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="391" cy="252" r="5" fill={green} />
    </svg>
  )
}
