import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { auth } from '../config/firebase'
import { useAuth } from '../context/AuthContext'
import styles from '../styles/Login.module.css'

const Login = () => {
  const router = useRouter()
  const { user } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.page}>
      <Head>
        <title>Login - Amigo</title>
      </Head>

      <div className={styles.card}>
        <h1 className={styles.heading}>Login</h1>
        <p className={styles.subheading}>
          Don&rsquo;t have an account? <Link href="/signup"><a>Sign up</a></Link>
        </p>

        <form className={styles.form} onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
