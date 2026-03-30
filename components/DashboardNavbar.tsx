import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import styles from './DashboardNavbar.module.css'

const DashboardNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    await signOut(auth)
    router.push('/login')
  }

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
          <button onClick={handleLogout} className={styles.navLink}>LOG OUT</button>
          <Link href="/dashboard-paynow2" passHref>
            <a className={styles.walletBtn}>CONNECT WALLET</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default DashboardNavbar
