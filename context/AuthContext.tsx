import { createContext, useContext, useEffect, useState } from 'react'
import { onIdTokenChanged, User } from 'firebase/auth'
import nookies from 'nookies'
import { auth } from '../config/firebase'

const AuthContext = createContext<{ user: User | null, loadingUser: boolean }>({
  user: null,
  loadingUser: true,
});

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<User | null>(null)
  const [loadingUser, setLoadingUser] = useState<boolean>(true);

  useEffect(() => {
    return onIdTokenChanged(auth, async (user) => {
      console.log("In onIdTokenChanged");
      if (!user) {
        console.log("onIdTokenChanged: user is null");
        setUser(null);
        nookies.set(undefined, 'token', '', { path: '/' });
      } else {
        console.log("onIdTokenChanged: user exists");
        const token = await user.getIdToken();
        setUser(user);
        nookies.set(undefined, 'token', token, { path: '/' });
      }
      setLoadingUser(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, loadingUser }}>
      {children}
    </AuthContext.Provider>
  )
}
