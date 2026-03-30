import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './LandingNavbar.module.css'

const LandingNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" passHref>
          <a className={styles.brand}>
            <Image
              src="/images/amigo-logo.png"
              alt="Amigo logo"
              width={50}
              height={40}
            />
            <span>amigo</span>
          </a>
        </Link>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>

        <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
          <a href="https://x.com/0xJim" target="_blank" rel="noopener noreferrer" className={styles.navLink}>CONTACT</a>
          <Link href="/login" passHref>
            <a className={styles.navLink}>LOGIN</a>
          </Link>
          <Link href="/signup" passHref>
            <a className={styles.navLink}>SIGN UP</a>
          </Link>
          <Link href="/activate" passHref>
            <a className={styles.applyBtn}>APPLY FOR CARD</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default LandingNavbar
