import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/DashboardPaynow.module.css'

type PaymentOption = 'statement' | 'today' | 'minimum'

const Dashboard_PayNow: NextPage = () => {
  const [selected, setSelected] = useState<PaymentOption>('statement')

  return (
    <div className={styles.page}>
      <Head>
        <title>Pay Now - Amigo</title>
      </Head>

      <div className={styles.card}>
        <h1 className={styles.heading}>Select payment amount</h1>

        <div className={styles.options}>
          <label className={styles.option}>
            <div className={styles.optionLeft}>
              <input
                type="radio"
                name="payment"
                className={styles.radio}
                checked={selected === 'statement'}
                onChange={() => setSelected('statement')}
              />
              <span className={styles.optionLabel}>statement balance</span>
            </div>
            <span className={styles.optionAmount}>$950.00</span>
          </label>

          <label className={styles.option}>
            <div className={styles.optionLeft}>
              <input
                type="radio"
                name="payment"
                className={styles.radio}
                checked={selected === 'today'}
                onChange={() => setSelected('today')}
              />
              <span className={styles.optionLabel}>today&rsquo;s balance</span>
            </div>
            <span className={styles.optionAmount}>$950.00</span>
          </label>

          <label className={styles.option}>
            <div className={styles.optionLeft}>
              <input
                type="radio"
                name="payment"
                className={styles.radio}
                checked={selected === 'minimum'}
                onChange={() => setSelected('minimum')}
              />
              <span className={styles.optionLabel}>minimum payment due</span>
            </div>
            <span className={styles.optionAmount}>$95.00</span>
          </label>
        </div>

        <Link href="/dashboard-paynow2" passHref>
          <a className={styles.payBtn} style={{ display: 'block', textAlign: 'center' }}>
            pay now
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard_PayNow
