import React from 'react'
import Image from 'next/image'
import styles from './CardHero.module.css'

const CardHero = () => {
  return (
    <div className={styles.wrapper}>
      {/* Top-left smiley */}
      <div className={styles.smiley1}>
        <Image src="/images/smiley-1.png" alt="" width={200} height={200} layout="responsive" />
      </div>

      {/* Top-right smiley */}
      <div className={styles.smiley2}>
        <Image src="/images/smiley-3.png" alt="" width={175} height={175} layout="responsive" />
      </div>

      {/* The card */}
      <svg className={styles.card} viewBox="0 0 680 460" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Card outline - hand drawn wobbly, slightly trapezoidal */}
        <path
          d="M58 22 C100 12, 200 6, 340 5 C480 4, 580 9, 635 16
             C652 18, 662 28, 667 52
             C675 110, 678 200, 674 300
             C672 355, 668 400, 660 428
             C656 440, 644 448, 625 450
             C540 458, 360 460, 150 455
             C85 453, 42 449, 26 443
             C14 438, 7 425, 5 405
             C0 340, -1 240, 3 140
             C5 80, 10 42, 22 28
             C30 18, 42 18, 58 22z"
          stroke="#1a1a1a"
          strokeWidth="4.5"
          fill="white"
          strokeLinejoin="round"
        />
        {/* Second wobbly pass for hand-drawn feel */}
        <path
          d="M58 22 C100 12, 200 6, 340 5 C480 4, 580 9, 635 16
             C652 18, 662 28, 667 52
             C675 110, 678 200, 674 300
             C672 355, 668 400, 660 428
             C656 440, 644 448, 625 450
             C540 458, 360 460, 150 455
             C85 453, 42 449, 26 443
             C14 438, 7 425, 5 405
             C0 340, -1 240, 3 140
             C5 80, 10 42, 22 28
             C30 18, 42 18, 58 22z"
          stroke="#1a1a1a"
          strokeWidth="1"
          fill="none"
          strokeLinejoin="round"
          strokeDasharray="3 8"
          opacity="0.3"
        />

        {/* Chip - hand-drawn trapezoid/skewed shape */}
        <g transform="translate(110, 148)">
          {/* Chip body - slightly trapezoidal, wobbly */}
          <path
            d="M8 6 C20 3, 55 2, 78 5 C84 6, 87 10, 88 16
               C89 28, 90 45, 88 56 C87 62, 83 65, 76 66
               C58 68, 25 69, 10 67 C4 66, 1 62, 1 55
               C-1 42, -1 20, 2 12 C3 8, 5 6, 8 6z"
            fill="#c8c3df"
            stroke="#9d97b8"
            strokeWidth="1.8"
          />
          {/* Chip cross lines - slightly wonky */}
          <path d="M44 4 C43 20, 42 45, 43 67" stroke="#9d97b8" strokeWidth="1.8" fill="none"/>
          <path d="M2 34 C25 32, 60 33, 88 35" stroke="#9d97b8" strokeWidth="1.8" fill="none"/>
        </g>

        {/* Lavender squiggly decorative line */}
        <path
          d="M365 105 C390 82, 420 115, 455 90 C485 68, 515 105, 545 88"
          stroke="#c8c3df"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Card number */}
        <text
          x="120"
          y="310"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="52"
          fill="#1a1a1a"
          letterSpacing="2"
        >
          4412 8802 1192 0422
        </text>

        {/* Contactless symbol - hand drawn */}
        <g transform="translate(498, 335)">
          <ellipse cx="16" cy="14" rx="15" ry="13" stroke="#1a1a1a" strokeWidth="2.5" fill="none"/>
          <path d="M9 11 C14 7, 19 10, 24 8" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </g>

        {/* Member since text */}
        <text
          x="120"
          y="395"
          fontFamily="'Space Mono', monospace"
          fontSize="20"
          fill="#999"
          letterSpacing="3"
        >
          MEMBER SINCE 2024
        </text>
      </svg>

      {/* Bottom-right smiley */}
      <div className={styles.smiley3}>
        <Image src="/images/smiley-2.png" alt="" width={250} height={250} layout="responsive" />
      </div>
    </div>
  )
}

export default CardHero
