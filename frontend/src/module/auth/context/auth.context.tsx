import { createContext, useContext, useEffect, useState } from "react"
import { authApi } from "../api/auth.api"

type AuthContextType = {
  user: any
  setUser: (u: any) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      authApi
        .me()
        .then((res) => setUser(res.data.user))
        .catch(() => localStorage.removeItem("token"))
    }
  }, [])

  const logout = () => {
    setUser(null)
    localStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider")
  return ctx
}
