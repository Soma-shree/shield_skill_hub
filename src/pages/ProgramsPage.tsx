import React from "react"
import { Link } from "react-router-dom"
import { FlagshipArt } from "../components/FlagshipArt"
import { StatCounter } from "../components/StatCounter"
import {
  Rocket,
  CheckCircle2,
  Calendar,
  Clock,
  Award,
  Users,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

export default function ProgramsPage() {
  const phases = [
    {
      phase: "Phase 1: Foundations & Algorithmic Rigor",
      weeks: "Weeks 1 - 8",
      focus:
        "Computer science fundamentals, data structures, and idiomatic coding standards",
      topics: [
        "Memory management, computational complexity & Big-O",
        "Linear data structures, trees, graphs, dynamic programming",
        "Clean coding practices, unit testing, Git branching workflows",
        "Weekly timed problem-solving contests with live editorial analysis",
      ],
    },
    {
      phase: "Phase 2: High-Performance Systems & Microservices",
      weeks: "Weeks 9 - 18",
      focus:
        "Full-scale distributed systems, database scaling, and cloud architecture",
      topics: [
        "Relational schemas (PostgreSQL) & indexing optimization",
        "Distributed caching (Redis), message streaming (Kafka)",
        "Containerization with Docker, Kubernetes pod orchestration",
        "CI/CD pipelines with GitHub Actions and AWS deployment",
      ],
    },
    {
      phase: "Phase 3: Production Capstone & Interview Mastery",
      weeks: "Weeks 19 - 24",
      focus:
        "Real-world commercial sprint, code review, and executive mock interviews",
      topics: [
        "Architecting one of 6 flagship capstone projects with production SLOs",
        "1-on-1 code reviews with staff engineers from FAANG/Tier-1 startups",
        "Behavioral interview framing & STAR technique storytelling",
        "Direct recruiter referrals across 120+ vetted hiring partners",
      ],
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: "1-on-1 Senior Staff Mentorship",
      desc: "Weekly dedicated coaching calls with engineers working at leading tech enterprises.",
    },
    {
      icon: Briefcase,
      title: "Guaranteed Placement Pipeline",
      desc: "Direct referrals to 120+ tech hiring partners with dedicated recruitment coordinators.",
    },
    {
      icon: Clock,
      title: "Live Interactive Weekend Sprints",
      desc: "Optimized for working professionals and university final-year students (Sat-Sun).",
    },
    {
      icon: Award,
      title: "ChainTrail™ Verifiable Credential",
      desc: "Cryptographically verified diploma with embedded capstone proof of execution.",
    },
  ]

  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-24">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#115b5b]/15 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Interactive Rocket Art */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d4545] border border-[#247a62] text-[#f59e0b] text-xs font-bold uppercase tracking-wider">
              <Rocket className="w-4 h-4 text-[#f59e0b]" />
              Flagship Career Accelerator
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              From Junior Aspirant to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5b82e] via-[#818cf8] to-[#f59e0b]">
                High-Impact Senior Engineer
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Our 6-month intensive Career Accelerator is an immersion into
              modern engineering culture. Gain deep systems fluency, build
              verifiable portfolio capstones, and get referred directly to top
              engineering teams.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#183f3f] border border-[#0d4545]">
                <Calendar className="w-4 h-4 text-[#f5b82e]" />
                <span className="text-xs text-slate-300 font-medium">
                  Next Cohort: Nov 15
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#183f3f] border border-[#0d4545]">
                <Clock className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-xs text-slate-300 font-medium">
                  6 Months (Part-Time)
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#183f3f] border border-[#0d4545]">
                <Users className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-slate-300 font-medium">
                  Limited to 35 Fellows
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/checkout/course-ai-mastery"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white font-bold text-sm shadow-lg shadow-[#f59e0b]/25 transition-all duration-200"
              >
                Apply for Next Cohort
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0d4545] hover:bg-[#247a62] text-slate-200 font-bold text-sm border border-[#247a62] transition-colors"
              >
                Download Syllabus &amp; Talk to Advisor
              </Link>
            </div>
          </div>

          {/* Interactive Flagship Rocket Launch Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-[#183f3f]/60 border border-[#247a62]/60 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              <div className="text-center mb-4">
                <span className="text-xs text-[#f5b82e] font-bold uppercase tracking-wider">
                  Interactive Simulation
                </span>
                <p className="text-xs text-slate-400">
                  Watch the career launch trajectory
                </p>
              </div>
              <div className="flex justify-center items-center py-4 overflow-hidden">
                <FlagshipArt />
              </div>
              <div className="mt-4 pt-4 border-t border-[#0d4545] flex items-center justify-between text-xs text-slate-400">
                <span>Phase: Liftoff to Placement</span>
                <span className="text-emerald-400 font-semibold">
                  Ready for Launch
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Accelerator Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl sm:text-4xl font-black text-[#f59e0b] mb-1">
              <StatCounter end={120} suffix="%" />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Average Salary Increase
            </p>
          </div>
          <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl sm:text-4xl font-black text-[#f5b82e] mb-1">
              <StatCounter end={32} suffix=" LPA" />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Top Package Achieved
            </p>
          </div>
          <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 mb-1">
              <StatCounter end={94} suffix="%" />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Placement Within 180 Days
            </p>
          </div>
          <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl sm:text-4xl font-black text-purple-400 mb-1">
              <StatCounter end={1} suffix=":10" />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Fellow-to-Mentor Ratio
            </p>
          </div>
        </div>

        {/* 3-Phase Roadmap */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#f59e0b] uppercase tracking-widest">
              Structured Progression
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              The 24-Week Mastery Architecture
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Carefully staged to transition you from foundational
              problem-solving into production-scale architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phases.map((p, idx) => (
              <div
                key={p.phase}
                className="bg-[#183f3f]/90 border border-[#0d4545] hover:border-[#3b82f6]/40 rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-[#115b5b]/20 text-[#f5b82e] text-xs font-bold flex items-center justify-center border border-[#f5b82e]/40">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-[#f59e0b] bg-[#0d4545] px-2.5 py-1 rounded">
                      {p.weeks}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {p.phase}
                  </h3>
                  <p className="text-xs text-slate-400 italic mb-5">
                    {p.focus}
                  </p>

                  <div className="space-y-3 pt-3 border-t border-[#0d4545]">
                    {p.topics.map((t, tidx) => (
                      <div key={tidx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300 leading-snug">
                          {t}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0d4545] text-right">
                  <span className="text-[11px] text-[#f5b82e] font-semibold">
                    Milestone {idx + 1} Verified Deliverable
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What You Get / Core Benefits */}
        <div className="mb-24 bg-[#183f3f]/70 border border-[#0d4545] rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#f5b82e] uppercase tracking-widest">
              Unmatched Fellow Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Everything Needed to Break Into Elite Tech
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => {
              const IconComp = b.icon
              return (
                <div
                  key={b.title}
                  className="bg-[#0d4545] border border-[#0d4545] rounded-2xl p-6 hover:border-[#f5b82e]/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#115b5b]/20 text-[#f5b82e] flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6 text-[#f59e0b]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Application CTA Banner */}
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#1e1b4b] border border-[#3b82f6]/40 rounded-3xl p-8 sm:p-12 shadow-2xl text-center max-w-4xl mx-auto">
          <Sparkles className="w-10 h-10 text-[#f59e0b] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Admissions Open For The November 2026 Cohort
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Admission is selective and requires passing a basic logic &amp;
            coding assessment followed by a 20-minute mentor fit interview.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/checkout/course-ai-mastery"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white font-bold text-sm shadow-xl shadow-[#f59e0b]/30 transition-all duration-200"
            >
              Start Your Application
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-[#183f3f] hover:bg-[#0d4545] text-slate-200 font-bold text-sm border border-[#247a62] transition-colors"
            >
              Talk to an Academic Advisor
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
