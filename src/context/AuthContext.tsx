import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react"
import { User } from "../types"
import { authService } from "../services/authService"

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (
    email: string,
    password?: string,
  ) => Promise<{ success: boolean error?: string }>
  register: (
    name: string,
    email: string,
    password?: string,
    interests?: string[],
  ) => Promise<{ success: boolean error?: string }>
  loginAsDemoUser: () => void
  logout: () => void
  updateInterests: (interests: string[]) => void
  enrollInCourse: (courseId: string) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Read session on initial mount
    const current = authService.getCurrentUser()
    setUser(current)
    setLoading(false)
  }, [])

  const login = async (email: string, password?: string) => {
    const res = await authService.login(email, password)
    if (res.user) {
      setUser({ ...res.user })
      return { success: true }
    }
    return { success: false, error: res.error || "Login failed" }
  }

  const register = async (
    name: string,
    email: string,
    password?: string,
    interests: string[] = [],
  ) => {
    const res = await authService.register(name, email, password, interests)
    if (res.user) {
      setUser({ ...res.user })
      return { success: true }
    }
    return { success: false, error: res.error || "Registration failed" }
  }

  const loginAsDemoUser = () => {
    const demo = authService.loginAsDemoUser()
    setUser({ ...demo })
  }

  const logout = () => {
    authService.logout()
    setUser(null)
  }

  const updateInterests = (interests: string[]) => {
    const updated = authService.updateInterests(interests)
    if (updated) setUser({ ...updated })
  }

  const enrollInCourse = (courseId: string) => {
    const updated = authService.enrollInCourse(courseId)
    if (updated) setUser({ ...updated })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        loginAsDemoUser,
        logout,
        updateInterests,
        enrollInCourse,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
