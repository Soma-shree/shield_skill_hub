import React, { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import {
  Shield,
  Mail,
  Lock,
  ArrowRight,
  UserCheck,
  AlertCircle,
} from "lucide-react"

export default function LoginPage() {
  const { login, loginAsDemoUser, user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  // Redirect target if previously navigated from a protected page
  const from =
    (location.state as { from?: { pathname: string } })?.from?.pathname ||
    "/my-courses"

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const res = await login(email, password)
      if (res.success) {
        navigate(from, { replace: true })
      } else {
        setError(res.error || "Invalid email or password.")
      }
    } catch (err) {
      setError("An unexpected error occurred during login.")
    } finally {
      setLoading(false)
    }
  }

  const handleDemoLogin = () => {
    loginAsDemoUser()
    navigate(from, { replace: true })
  }

  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-20 flex items-center justify-center px-4">
      {/* Background radial glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#115b5b]/15 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
          {/* Logo & Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#115b5b] to-[#1e40af] flex items-center justify-center text-white shadow-md">
                <Shield className="w-5 h-5 text-[#f59e0b]" />
              </div>
              <span className="text-lg font-black text-white tracking-wide">
                SHIELD<span className="text-[#f5b82e]"> ACADEMY</span>
              </span>
            </Link>
            <h1 className="text-2xl font-bold text-white mt-1">Welcome Back</h1>
            <p className="text-xs text-slate-400 mt-1">
              Sign in to resume your learning and capstones
            </p>
          </div>

          {/* Quick Demo Login Option */}
          <div className="mb-6 p-4 rounded-2xl bg-[#0d4545]/80 border border-[#f5b82e]/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#f5b82e] uppercase tracking-wider flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-[#f59e0b]" />
                Demo Student Mode
              </span>
              <span className="text-[10px] bg-[#0d4545] text-slate-300 px-2 py-0.5 rounded font-mono">
                Priya Sundaram
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug mb-3">
              Test-drive the full student portal with pre-enrolled courses,
              recommendations, and progress tracking with zero registration.
            </p>
            <button
              type="button"
              onClick={handleDemoLogin}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#115b5b] to-[#0d4545] hover:from-[#0d4545] hover:to-[#1e40af] text-white text-xs font-bold shadow-md transition-all duration-200 cursor-pointer"
            >
              1-Click Instant Demo Login &rarr;
            </button>
          </div>

          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#0d4545]" />
            </div>
            <span className="relative bg-[#183f3f] px-3 text-[11px] text-slate-400 uppercase tracking-widest font-semibold">
              Or Sign In With Email
            </span>
          </div>

          {error && (
            <div className="mb-5 p-3 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@example.com"
                  className="w-full bg-[#0d4545] border border-[#247a62] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b82e]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-[11px] text-[#f5b82e] hover:text-[#7dd3fc] font-medium"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#0d4545] border border-[#247a62] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b82e]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white text-xs font-bold shadow-lg shadow-[#f59e0b]/20 transition-all duration-200 cursor-pointer disabled:opacity-60"
            >
              {loading ? "Authenticating..." : "Sign In to Academy"}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Footer Link */}
          <div className="mt-8 text-center text-xs text-slate-400">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-[#f5b82e] font-bold hover:underline"
            >
              Create student account
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
