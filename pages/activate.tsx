import { doc, updateDoc } from "@firebase/firestore";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { db } from "../config/firebase";
import styles from "../styles/Activate.module.css";

const Activate: NextPage = () => {
  const router = useRouter()

  const [data, setData] = useState({
    creditCardNumber: '',
    creditCardExpirationDate: '',
    creditCardCcv: '',
  })

  const handleActivate = async (e: React.FormEvent) => {
    e.preventDefault();
    const cardDocRef = doc(db, "cards", data.creditCardNumber);
    try {
      const ccInfo = {
        expirationMonth: data.creditCardExpirationDate.slice(0, 2),
        expirationYear: data.creditCardExpirationDate.slice(-2),
        cvv: data.creditCardCcv,
      }
      await updateDoc(cardDocRef, ccInfo);
      router.push('/activate2')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={styles.page}>
      <Head>
        <title>Activate Your Card - Amigo</title>
      </Head>

      <div className={styles.card}>
        <h1 className={styles.heading}>
          Welcome to Amigo! You&rsquo;re seconds away from using your new card!
        </h1>
        <p className={styles.subheading}>
          Please enter your card&rsquo;s information in the form below.
        </p>

        <form className={styles.form} onSubmit={handleActivate}>
          <input
            className={styles.input}
            type="text"
            value={data.creditCardNumber}
            onChange={(e) =>
              setData({ ...data, creditCardNumber: e.target.value })
            }
            placeholder="16-digit card number"
            required
          />
          <input
            className={styles.input}
            type="text"
            value={data.creditCardExpirationDate}
            onChange={(e) =>
              setData({ ...data, creditCardExpirationDate: e.target.value })
            }
            placeholder="expiration date mm/yy"
            required
          />
          <input
            className={styles.input}
            type="text"
            value={data.creditCardCcv}
            onChange={(e) =>
              setData({ ...data, creditCardCcv: e.target.value })
            }
            placeholder="CVV"
            required
          />
          <button type="submit" className={styles.submitBtn}>
            next
          </button>
        </form>

        <p className={styles.disclaimer}>
          Disclaimer language. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
}

export default Activate;
