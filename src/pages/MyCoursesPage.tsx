import React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { coursesData } from "../data/courses"
import {
  BookOpen,
  PlayCircle,
  Award,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  UserCheck,
} from "lucide-react"

export default function MyCoursesPage() {
  const { user, loginAsDemoUser } = useAuth()

  // Deterministic mock progress based on courseId for realistic feel
  const getCourseProgress = (courseId: string) => {
    switch (courseId) {
      case "course-ai-mastery":
        return {
          percent: 68,
          completedLessons: 18,
          totalLessons: 26,
          lastLesson: "Module 3: Fine-Tuning Llama 3",
        }
      case "course-fullstack-cloud":
        return {
          percent: 35,
          completedLessons: 11,
          totalLessons: 32,
          lastLesson: "Module 2: PostgreSQL Indexing & Prisma",
        }
      case "course-python-ds":
        return {
          percent: 100,
          completedLessons: 28,
          totalLessons: 28,
          lastLesson: "Final Capstone Submitted",
        }
      case "course-powerbi-analytics":
        return {
          percent: 50,
          completedLessons: 10,
          totalLessons: 20,
          lastLesson: "Module 2: DAX Time-Intelligence",
        }
      default:
        return {
          percent: 25,
          completedLessons: 6,
          totalLessons: 24,
          lastLesson: "Module 1: Foundations & Architecture",
        }
    }
  }

  if (!user) {
    return (
      <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-32 pb-20 flex items-center justify-center px-4">
        <div className="text-center max-w-md p-8 bg-[#183f3f] border border-[#0d4545] rounded-3xl shadow-xl">
          <BookOpen className="w-12 h-12 text-[#f5b82e] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">
            Student Learning Portal
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Sign in to access your course videos, coding sandboxes, and capstone
            progress.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => loginAsDemoUser()}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#115b5b] to-[#0d4545] text-white text-xs font-bold hover:from-[#0d4545] hover:to-[#1e40af] shadow-md cursor-pointer"
            >
              1-Click Demo Student (Priya)
            </button>
            <Link
              to="/login"
              className="block w-full py-2.5 rounded-xl bg-[#0d4545] text-slate-200 text-xs font-semibold hover:bg-[#247a62] border border-[#247a62]"
            >
              Sign In With Email
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const enrolledCourses = coursesData.filter((c) =>
    user.enrolledCourses.includes(c.id),
  )

  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-24">
      {/* Background radial glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-b from-[#115b5b]/15 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#183f3f] to-[#0d4545] border border-[#247a62] rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#115b5b]/20 border border-[#f5b82e]/40 text-[#f5b82e] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" /> Active
                Student Workspace
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                Welcome back, {user.name}!
              </h1>
              <p className="text-slate-300 text-sm mt-1">
                You have {enrolledCourses.length} active course enrollments.
                Keep your streak going!
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-[#0d4545] border border-[#0d4545] rounded-2xl p-4 text-center min-w-[110px]">
                <span className="text-2xl font-black text-[#f59e0b]">48h</span>
                <p className="text-[11px] text-slate-400">Hours Watched</p>
              </div>
              <div className="bg-[#0d4545] border border-[#0d4545] rounded-2xl p-4 text-center min-w-[110px]">
                <span className="text-2xl font-black text-emerald-400">1</span>
                <p className="text-[11px] text-slate-400">Certificates</p>
              </div>
              <div className="bg-[#0d4545] border border-[#0d4545] rounded-2xl p-4 text-center min-w-[110px]">
                <span className="text-2xl font-black text-[#f5b82e]">6</span>
                <p className="text-[11px] text-slate-400">PRs Merged</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enrolled Courses Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#f5b82e]" />
              In-Progress Courses
            </h2>
            <Link
              to="/courses"
              className="text-xs sm:text-sm font-semibold text-[#f5b82e] hover:text-[#7dd3fc] flex items-center gap-1 transition-colors"
            >
              Browse More Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {enrolledCourses.length === 0 ? (
            <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-3xl p-12 text-center max-w-xl mx-auto shadow-xl">
              <BookOpen className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">
                No Active Enrollments
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                You have not enrolled in any courses yet. Explore our
                practitioner curriculum and pick your first track!
              </p>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#115b5b] text-white text-xs font-bold hover:bg-[#0d4545]"
              >
                Explore Courses Catalog <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enrolledCourses.map((course) => {
                const progress = getCourseProgress(course.id)
                return (
                  <div
                    key={course.id}
                    className="bg-[#183f3f]/90 border border-[#0d4545] hover:border-[#3b82f6]/40 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-200"
                  >
                    <div>
                      {/* Image header */}
                      <div className="relative h-44 overflow-hidden bg-slate-900">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#183f3f] via-transparent to-black/30" />
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-bold text-[#f5b82e] uppercase tracking-wider">
                          {course.category}
                        </span>
                      </div>

                      {/* Body */}
                      <div className="p-6">
                        <h3 className="text-base font-bold text-white mb-2 line-clamp-1">
                          {course.title}
                        </h3>
                        <p className="text-xs text-slate-400 mb-4 line-clamp-1">
                          Next: {progress.lastLesson}
                        </p>

                        {/* Progress Bar Component */}
                        <div className="space-y-1.5 mb-5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-300 font-semibold">
                              {progress.percent}% Completed
                            </span>
                            <span className="text-slate-400 text-[11px]">
                              {progress.completedLessons}/
                              {progress.totalLessons} Lessons
                            </span>
                          </div>
                          <div className="w-full h-2.5 rounded-full bg-[#0d4545] overflow-hidden border border-[#0d4545]">
                            <div
                              className={`h-full rounded-full transition-all duration-700 ${
                                progress.percent === 100
                                  ? "bg-emerald-400"
                                  : "bg-gradient-to-r from-[#115b5b] to-[#f5b82e]"
                              }`}
                              style={{ width: `${progress.percent}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="px-6 pb-6 pt-2 border-t border-[#0d4545]/60 flex items-center justify-between gap-3">
                      <Link
                        to={`/courses/${course.id}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#115b5b] hover:bg-[#0d4545] text-white text-xs font-semibold shadow-md transition-colors"
                      >
                        <PlayCircle className="w-4 h-4" />
                        {progress.percent === 100
                          ? "Review Material"
                          : "Continue Learning"}
                      </Link>

                      {progress.percent === 100 && (
                        <button
                          onClick={() =>
                            alert(
                              "Downloading ChainTrail Verified Certificate PDF...",
                            )
                          }
                          title="Download Certificate"
                          className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-900 transition-colors cursor-pointer"
                        >
                          <Award className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
