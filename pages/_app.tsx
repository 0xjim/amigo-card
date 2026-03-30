import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingNavbar from '../components/LandingNavbar'
import DashboardNavbar from '../components/DashboardNavbar'
import { AuthContextProvider } from '../context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/ProtectedRoute'

const noAuthRequired = ['/', '/login', '/signup', '/activate']
const landingNavbarPages = ['/activate', '/login', '/signup']
const dashboardNavbarPages = ['/dashboard', '/dashboard-paynow', '/dashboard-paynow2']

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const renderNavbar = () => {
    if (landingNavbarPages.includes(router.pathname)) return <LandingNavbar />
    if (dashboardNavbarPages.includes(router.pathname)) return <DashboardNavbar />
    return null
  }

  return (
    <AuthContextProvider>
      {renderNavbar()}
      { noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}

export default MyApp
