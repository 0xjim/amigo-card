import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/DashboardPaynow2.module.css'

const Dashboard_PayNow2: NextPage = () => {
  const router = useRouter()

  const handleClose = () => {
    router.push('/dashboard')
  }

  return (
    <div className={styles.page}>
      <Head>
        <title>Connect Wallet - Amigo</title>
      </Head>

      <div className={styles.overlay} onClick={handleClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeBtn} onClick={handleClose} aria-label="Close">
            &times;
          </button>

          <h1 className={styles.heading}>Connect your wallet</h1>

          <div className={styles.walletList}>
            <button className={styles.walletOption}>
              <div className={styles.walletIcon}>M</div>
              <span className={styles.walletName}>MetaMask</span>
            </button>

            <button className={styles.walletOption}>
              <div className={styles.walletIcon}>W</div>
              <span className={styles.walletName}>WalletConnect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard_PayNow2
