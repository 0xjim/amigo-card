import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({children} : {children: React.ReactNode}) => {
  const router = useRouter()
  const { user, loadingUser } = useAuth()

  useEffect(() => {
    if (loadingUser) {
      // If we are loading the user still, we do not yet know whether we should
      // display the page or reroute to /login.
      return;
    }
    if (!user) {
      router.push('/login')
    }
  }, [router, user, loadingUser])

  return <>{user ? children : null}</>
}

export default ProtectedRoute
