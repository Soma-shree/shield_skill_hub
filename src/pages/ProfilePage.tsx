import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { coursesData } from "../data/courses"
import {
  User,
  Mail,
  Shield,
  Award,
  BookOpen,
  LogOut,
  Save,
  CheckCircle2,
  CheckSquare,
  Square,
  Sparkles,
} from "lucide-react"

export default function ProfilePage() {
  const { user, logout, updateInterests, loginAsDemoUser } = useAuth()
  const navigate = useNavigate()

  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    user?.interests || ["Artificial Intelligence", "Data Science"],
  )
  const [saveFeedback, setSaveFeedback] = useState(false)

  const interestOptions = [
    "Artificial Intelligence",
    "Data Science",
    "Web Development",
    "Cybersecurity",
    "Cloud & DevOps",
    "Programming",
  ]

  if (!user) {
    return (
      <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-32 pb-20 flex items-center justify-center px-4">
        <div className="text-center max-w-md p-8 bg-[#183f3f] border border-[#0d4545] rounded-3xl shadow-xl">
          <User className="w-12 h-12 text-[#f5b82e] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">
            Sign In Required
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Please log in or switch to the demo student account to manage your
            profile and view your learning metrics.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => {
                loginAsDemoUser()
              }}
              className="w-full py-2.5 rounded-xl bg-[#115b5b] text-white text-xs font-bold hover:bg-[#0d4545]"
            >
              Log in as Demo Student
            </button>
            <Link
              to="/login"
              className="block w-full py-2.5 rounded-xl bg-[#0d4545] text-slate-200 text-xs font-semibold hover:bg-[#247a62]"
            >
              Regular Sign In
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const enrolledCourses = coursesData.filter((c) =>
    user.enrolledCourses.includes(c.id),
  )

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest))
    } else {
      setSelectedInterests([...selectedInterests, interest])
    }
  }

  const handleSaveInterests = () => {
    updateInterests(selectedInterests)
    setSaveFeedback(true)
    setTimeout(() => setSaveFeedback(false), 3000)
  }

  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-24">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-1/3 w-[800px] h-[500px] bg-gradient-to-b from-[#115b5b]/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#0d4545]">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Student Profile
            </h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Manage your credentials, academic preferences, and recommendation
              signals
            </p>
          </div>
          <button
            onClick={() => {
              logout()
              navigate("/login")
            }}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0d4545] hover:bg-rose-950/60 hover:text-rose-300 text-slate-300 text-xs font-semibold border border-[#247a62] transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" /> Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Personal info card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-3xl p-6 sm:p-8 shadow-xl text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-[#115b5b] to-[#f5b82e] p-1 shadow-lg">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-[#0d4545] flex items-center justify-center text-white text-2xl font-bold">
                    {user.name.charAt(0)}
                  </div>
                )}
              </div>

              <h2 className="text-xl font-bold text-white mb-1">{user.name}</h2>
              <p className="text-xs text-slate-400 mb-4 flex items-center justify-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> {user.email}
              </p>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold">
                <Shield className="w-3.5 h-3.5" />
                ChainTrail Verified Student
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-[#0d4545]">
                <div className="bg-[#0d4545] p-3 rounded-xl border border-[#0d4545]">
                  <p className="text-xl font-black text-[#f59e0b]">
                    {user.enrolledCourses.length}
                  </p>
                  <p className="text-[11px] text-slate-400">Enrolled Courses</p>
                </div>
                <div className="bg-[#0d4545] p-3 rounded-xl border border-[#0d4545]">
                  <p className="text-xl font-black text-[#f5b82e]">2</p>
                  <p className="text-[11px] text-slate-400">
                    Certificates Earned
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-3xl p-6 shadow-xl space-y-3">
              <Link
                to="/my-courses"
                className="flex items-center justify-between p-3 rounded-xl bg-[#0d4545]/70 hover:bg-[#0d4545] text-slate-200 text-xs font-semibold transition-colors"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#f5b82e]" /> Go to My
                  Learning Portal
                </span>
                <span>&rarr;</span>
              </Link>
              <Link
                to="/courses"
                className="flex items-center justify-between p-3 rounded-xl bg-[#0d4545]/70 hover:bg-[#0d4545] text-slate-200 text-xs font-semibold transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#f59e0b]" /> Explore
                  Recommended Courses
                </span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Learning Interests & Recommendations Control */}
          <div className="lg:col-span-8 space-y-8">
            {/* Interests Customization Box */}
            <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#0d4545]">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#f59e0b]" />
                    Learning Interests &amp; Recommendation Engine
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Select the topics you want our recommendation system to
                    surface on the Course Platform.
                  </p>
                </div>
                {saveFeedback && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-emerald-500/40 animate-fade-in">
                    <CheckCircle2 className="w-4 h-4" /> Preferences Updated!
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {interestOptions.map((opt) => {
                  const isChecked = selectedInterests.includes(opt)
                  return (
                    <button
                      key={opt}
                      onClick={() => toggleInterest(opt)}
                      className={`flex items-center gap-3 p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                        isChecked
                          ? "bg-[#115b5b]/20 border-[#f5b82e]/50 text-white"
                          : "bg-[#0d4545]/60 border-[#0d4545] text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-[#f5b82e] shrink-0" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-500 shrink-0" />
                      )}
                      <span className="text-xs sm:text-sm font-semibold">
                        {opt}
                      </span>
                    </button>
                  )
                })}
              </div>

              <button
                onClick={handleSaveInterests}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#115b5b] to-[#0d4545] hover:from-[#0d4545] hover:to-[#1e40af] text-white text-xs font-bold shadow-md shadow-[#115b5b]/20 transition-all duration-200 cursor-pointer"
              >
                <Save className="w-4 h-4" /> Save Learning Interests
              </button>
            </div>

            {/* Enrolled Courses Summary */}
            <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#f5b82e]" />
                  Active Course Enrollments ({enrolledCourses.length})
                </h3>
                <Link
                  to="/my-courses"
                  className="text-xs text-[#f5b82e] hover:underline font-bold"
                >
                  View Full Learning Dashboard &rarr;
                </Link>
              </div>

              <div className="space-y-4">
                {enrolledCourses.map((c) => (
                  <div
                    key={c.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#0d4545]/70 border border-[#0d4545]"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#f59e0b] tracking-wider">
                        {c.category}
                      </span>
                      <h4 className="text-sm font-bold text-white mt-0.5">
                        {c.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        {c.totalDuration} • {c.level}
                      </p>
                    </div>

                    <Link
                      to={`/courses/${c.id}`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#0d4545] hover:bg-[#247a62] text-slate-200 text-xs font-semibold border border-[#247a62] transition-colors"
                    >
                      Resume Learning
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
