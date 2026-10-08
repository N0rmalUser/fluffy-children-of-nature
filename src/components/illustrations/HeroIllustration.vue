<template>
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" class="h-auto w-full drop-shadow-xl" aria-hidden="true">
    <defs>
      <radialGradient id="bg-grad" cx="50%" cy="50%">
        <stop offset="0%" stop-color="var(--hero-bg-start)" />
        <stop offset="100%" stop-color="var(--hero-bg-end)" />
      </radialGradient>
    </defs>
    <circle cx="200" cy="200" r="180" fill="url(#bg-grad)" />
    <path d="M 120 140 L 100 60 L 160 120 Z" fill="#ff8fab" />
    <path d="M 280 140 L 300 60 L 240 120 Z" fill="#ff8fab" />
    <path d="M 125 130 L 115 85 L 150 120 Z" fill="var(--hero-face)" />
    <path d="M 275 130 L 285 85 L 250 120 Z" fill="var(--hero-face)" />
    <ellipse cx="200" cy="210" rx="110" ry="100" fill="#ffb3c6" />
    <ellipse cx="200" cy="260" rx="80" ry="50" fill="var(--hero-face)" />
    <ellipse cx="165" cy="200" rx="12" ry="16" fill="#3d3450" />
    <ellipse cx="235" cy="200" rx="12" ry="16" fill="#3d3450" />
    <circle cx="169" cy="195" r="4" fill="white" />
    <circle cx="239" cy="195" r="4" fill="white" />
    <ellipse cx="200" cy="240" rx="10" ry="7" fill="#3d3450" />
    <path d="M 200 247 Q 190 260 180 255" stroke="#3d3450" stroke-width="3" fill="none" stroke-linecap="round" />
    <path d="M 200 247 Q 210 260 220 255" stroke="#3d3450" stroke-width="3" fill="none" stroke-linecap="round" />
    <ellipse cx="140" cy="235" rx="15" ry="10" fill="#ff8fab" opacity="0.5" />
    <ellipse cx="260" cy="235" rx="15" ry="10" fill="#ff8fab" opacity="0.5" />
    <path d="M 200 110 Q 185 90 195 75 Q 215 85 200 110" fill="#4a7c59" />
    <path d="M 200 110 L 198 85" stroke="#3d6b4a" stroke-width="1.5" />
    <g transform="translate(60, 300)">
      <circle cx="0" cy="0" r="8" fill="#cdb4db" /><circle cx="-8" cy="-5" r="5" fill="#cdb4db" /><circle cx="8" cy="-5" r="5" fill="#cdb4db" /><circle cx="-8" cy="5" r="5" fill="#cdb4db" /><circle cx="8" cy="5" r="5" fill="#cdb4db" /><circle cx="0" cy="0" r="3" fill="#ffd6a5" />
    </g>
    <g transform="translate(340, 310)">
      <circle cx="0" cy="0" r="8" fill="#b5ead7" /><circle cx="-8" cy="-5" r="5" fill="#b5ead7" /><circle cx="8" cy="-5" r="5" fill="#b5ead7" /><circle cx="-8" cy="5" r="5" fill="#b5ead7" /><circle cx="8" cy="5" r="5" fill="#b5ead7" /><circle cx="0" cy="0" r="3" fill="#ffd6a5" />
    </g>
  </svg>
</template>
