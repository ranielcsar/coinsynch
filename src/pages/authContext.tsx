import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { getUser, UserProps } from '@/services/user'

const AuthContext = createContext({} as { user?: UserProps; setUser: any })

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProps>()
  const router = useRouter()

  useEffect(() => {
    const user = getUser()

    if (user) {
      setUser(user)
      router.push('/dashboard')
    } else {
      router.push('/')
    }
  }, [])

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
