import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { auth } from '../config/firebase'
import styles from '../styles/Login.module.css'

const Signup = () => {
  const router = useRouter()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password)
      router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.page}>
      <Head>
        <title>Sign Up - Amigo</title>
      </Head>

      <div className={styles.card}>
        <h1 className={styles.heading}>Sign Up</h1>
        <p className={styles.subheading}>
          Already have an account? <Link href="/login"><a>Login</a></Link>
        </p>

        <form className={styles.form} onSubmit={handleSignup}>
          <div>
            <p className={styles.fieldLabel}>Email</p>
            <input
              className={styles.input}
              type="email"
              value={data.email}
              onChange={(e) =>
                setData({ ...data, email: e.target.value })
              }
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <p className={styles.fieldLabel}>Password</p>
            <input
              className={styles.input}
              type="password"
              value={data.password}
              onChange={(e) =>
                setData({ ...data, password: e.target.value })
              }
              placeholder="Password"
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
