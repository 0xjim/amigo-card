import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Dashboard.module.css'

const transactions = [
  { date: 'feb 22', from: 'square', amount: '-$350.00', total: '-$950.00' },
  { date: 'feb 18', from: 'gilbert & graber llc', amount: '-$250.00', total: '-$600.00' },
  { date: 'jan 31', from: 'square', amount: '-$200.00', total: '-$350.00' },
  { date: 'jan 27', from: 'gilbert & graber llc', amount: '-$150.00', total: '-$150.00' },
]

const Dashboard: NextPage = () => {
  return (
    <div className={styles.page}>
      <Head>
        <title>Dashboard - Amigo</title>
      </Head>

      {/* Summary card */}
      <div className={styles.card}>
        <div className={styles.summaryGrid}>
          <div className={styles.summaryItem}>
            <p className={styles.summaryLabel}>total spent</p>
            <p className={styles.summaryValue}>$950.00</p>
          </div>
          <div className={styles.summaryItem}>
            <p className={styles.summaryLabel}>next payment due</p>
            <p className={styles.summaryValue}>may 5, 2022</p>
          </div>
          <div className={styles.summaryItem}>
            <p className={styles.summaryLabel}>credit limit</p>
            <p className={styles.summaryValue}>$1,500.00</p>
          </div>
          <div className={styles.summaryItem}>
            <p className={styles.summaryLabel}>statement period</p>
            <p className={styles.summaryValue}>apr 1 - may 1</p>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href="/dashboard-paynow" passHref>
            <a className={styles.actionBtn}>pay now</a>
          </Link>
          <a className={styles.actionBtn} href="#">statements</a>
        </div>
      </div>

      {/* Transaction history */}
      <div className={styles.transactionsCard}>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>date</th>
                <th>to/from</th>
                <th>amount</th>
                <th>total spent</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <tr key={i}>
                  <td>{tx.date}</td>
                  <td>{tx.from}</td>
                  <td>{tx.amount}</td>
                  <td>{tx.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className={styles.seeAll}>see all activity</button>
      </div>
    </div>
  )
}

export default Dashboard
