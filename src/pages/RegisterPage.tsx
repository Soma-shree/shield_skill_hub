import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import {
  Shield,
  User,
  Mail,
  Lock,
  CheckSquare,
  Square,
  ArrowRight,
  AlertCircle,
} from "lucide-react"

export default function RegisterPage() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "Artificial Intelligence",
    "Data Science",
  ])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const interestOptions = [
    "Artificial Intelligence",
    "Data Science",
    "Web Development",
    "Cybersecurity",
    "Cloud & DevOps",
    "Programming",
  ]

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest))
    } else {
      setSelectedInterests([...selectedInterests, interest])
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.")
      return
    }

    setLoading(true)
    try {
      const res = await register(name, email, password, selectedInterests)
      if (res.success) {
        navigate("/my-courses")
      } else {
        setError(res.error || "Registration failed.")
      }
    } catch (err) {
      setError("An unexpected error occurred during account creation.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-24 flex items-center justify-center px-4">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-gradient-to-b from-[#115b5b]/15 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-lg">
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
            <h1 className="text-2xl font-bold text-white mt-1">
              Create Student Profile
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Select your learning interests to personalize your course
              recommendations
            </p>
          </div>

          {error && (
            <div className="mb-5 p-3 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Priya Sundaram"
                  className="w-full bg-[#0d4545] border border-[#247a62] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b82e]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="priya@example.com"
                  className="w-full bg-[#0d4545] border border-[#247a62] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b82e]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min 6 characters"
                    className="w-full bg-[#0d4545] border border-[#247a62] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b82e]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Confirm Password *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repeat password"
                    className="w-full bg-[#0d4545] border border-[#247a62] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b82e]"
                  />
                </div>
              </div>
            </div>

            {/* Interest Selection Checkboxes */}
            <div className="pt-2">
              <label className="block text-xs font-semibold text-[#f5b82e] uppercase tracking-wider mb-2">
                Select Your Learning Tracks (Personalizes Recommendations)
              </label>
              <div className="grid grid-cols-2 gap-2 bg-[#0d4545] p-3 rounded-2xl border border-[#0d4545]">
                {interestOptions.map((opt) => {
                  const isChecked = selectedInterests.includes(opt)
                  return (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => toggleInterest(opt)}
                      className={`flex items-center gap-2 p-2 rounded-xl text-xs text-left transition-colors cursor-pointer ${
                        isChecked
                          ? "bg-[#115b5b]/20 text-[#f5b82e] border border-[#f5b82e]/40"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-[#f5b82e] shrink-0" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                      <span className="truncate">{opt}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#115b5b] to-[#0d4545] hover:from-[#0d4545] hover:to-[#1e40af] text-white text-xs font-bold shadow-lg shadow-[#115b5b]/25 transition-all duration-200 cursor-pointer disabled:opacity-60 mt-4"
            >
              {loading
                ? "Creating Profile..."
                : "Create Account & Start Learning"}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          <div className="mt-8 text-center text-xs text-slate-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#f5b82e] font-bold hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
