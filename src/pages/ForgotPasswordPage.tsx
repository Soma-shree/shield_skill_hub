import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Shield, Mail, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSent, setIsSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsSent(true)
    }, 800)
  }

  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-20 flex items-center justify-center px-4">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#115b5b]/15 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
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
              Reset Password
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Enter your registered student email to receive recovery
              instructions
            </p>
          </div>

          {isSent ? (
            <div className="bg-[#0d4545] border border-emerald-500/40 rounded-2xl p-6 text-center space-y-4">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="text-base font-bold text-white">
                Reset Link Dispatched
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We have sent instructions to{" "}
                <span className="text-[#f5b82e] font-mono">{email}</span>.
                Please check your inbox and follow the steps.
              </p>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#115b5b] text-white text-xs font-semibold hover:bg-[#0d4545] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Return to Sign In
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#115b5b] to-[#0d4545] hover:from-[#0d4545] hover:to-[#1e40af] text-white text-xs font-bold shadow-lg shadow-[#115b5b]/20 transition-all duration-200 cursor-pointer disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Reset Link"}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="pt-4 text-center">
                <Link
                  to="/login"
                  className="text-xs text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Sign In
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
