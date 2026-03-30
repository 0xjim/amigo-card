import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CardHero from '../components/CardHero'
import LandingNavbar from '../components/LandingNavbar'

const Home: NextPage = () => {
  return (
    <div className={styles.page}>
      <LandingNavbar />
      <Head>
        <title>Amigo - The crypto card for how you actually live</title>
        <meta name="description" content="Spend anywhere. Earn back on health, travel, and longevity. Pay back on-chain, from your own wallet." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.tagline}>{'// THE CRYPTO-NATIVE CARD'}</p>

            <h1 className={styles.headline}>
              The crypto card for how you{' '}
              <span className={styles.highlight}>
                <span className={styles.highlightText}>actually live.</span>
              </span>
            </h1>

            <p className={styles.subtitle}>
              Spend anywhere. Earn on health, travel, and delivery.
              Pay back onchain, from your own wallet.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Active Users</span>
                <span className={styles.statValue}>NA</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Volume Transacted</span>
                <span className={styles.statValue}>NA</span>
              </div>
            </div>

            <div className={styles.ctas}>
              <Link href="/activate" passHref>
                <a className={styles.ctaPrimary}>Apply for Card</a>
              </Link>
            </div>
          </div>

          <div className={styles.heroIllustrations}>
            <CardHero />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
