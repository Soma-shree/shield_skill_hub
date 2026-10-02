import React from "react"
import { Link } from "react-router-dom"
import { FeatureCard } from "../components/FeatureCard"
import { StatCounter } from "../components/StatCounter"
import { Icon } from "../components/Icons"
import {
  Shield,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Building,
  Globe,
  Sparkles,
} from "lucide-react"

export default function AboutPage() {
  const pillars = [
    {
      number: "01",
      icon: "target" as const,
      title: "Outcome-Obsessed Pedagogy",
      copy: "We reject memorization. Every syllabus is backward-engineered from senior engineering interview rubrics and actual production repos.",
    },
    {
      number: "02",
      icon: "users" as const,
      title: "Practitioner Mentorship",
      copy: "Zero career coaches with no code commits. Every mentor is an active staff, principal, or senior engineer building production systems.",
    },
    {
      number: "03",
      icon: "code" as const,
      title: "Production Architecture",
      copy: "From day one, students write clean TypeScript, configure Docker containers, design resilient SQL schemas, and write unit tests.",
    },
    {
      number: "04",
      icon: "briefcase" as const,
      title: "Direct Placement Pipelines",
      copy: "We partner directly with high-growth tech startups and Fortune 500 enterprises that hire directly from our graduate portfolios.",
    },
  ]

  const leadership = [
    {
      name: "Dr. Arvind Natarajan",
      role: "Dean of Engineering & Curriculum",
      bio: "Former Principal Architect at AWS; 18+ years designing hyper-scale distributed systems and mentoring engineering leads.",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Meera Subramanian",
      role: "Head of AI & Machine Learning",
      bio: "Ex-Google DeepMind Research Fellow specializing in Generative AI, Retrieval-Augmented Generation (RAG), and model distillation.",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Karthik Verma",
      role: "VP of Enterprise Partnerships",
      bio: "12+ years in technical talent placement across Bangalore, Hyderabad, and Singapore tech ecosystems.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
  ]

  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-24">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-[800px] h-[500px] bg-gradient-to-b from-[#115b5b]/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d4545] border border-[#247a62] text-[#f5b82e] text-xs font-semibold uppercase tracking-wider mb-5">
            <Shield className="w-4 h-4 text-[#f59e0b]" />
            The Shield Skill Academy Heritage
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            Bridging the Chasm Between <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5b82e] via-[#818cf8] to-[#f59e0b]">
              Campus Degrees and Tech Realities
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Shield Skill Academy was founded with a singular conviction:
            engineering education should mirror modern engineering floors. We
            replace obsolete slide decks with Git PRs, CI/CD pipelines, and true
            mentorship from industry veterans.
          </p>
        </div>

        {/* Impact Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl sm:text-4xl font-black text-[#f59e0b] mb-1">
              <StatCounter end={150} suffix="K+" />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Aspiring Engineers Mentored
            </p>
          </div>
          <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl sm:text-4xl font-black text-[#f5b82e] mb-1">
              <StatCounter end={94} suffix="%" />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Placement / Career Pivot Rate
            </p>
          </div>
          <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 mb-1">
              <StatCounter end={120} suffix="+" />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Hiring Partner Companies
            </p>
          </div>
          <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl sm:text-4xl font-black text-purple-400 mb-1">
              <StatCounter end={4} suffix=".9★" />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Average Learner Rating
            </p>
          </div>
        </div>

        {/* 4 Core Pillars using FeatureCard */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#f59e0b] uppercase tracking-widest">
              Foundational Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              How We Re-Engineered Tech Education
            </h2>
          </div>

          <div className="features-grid">
            {pillars.map((pillar, idx) => (
              <FeatureCard
                key={pillar.title}
                number={pillar.number}
                icon={pillar.icon}
                title={pillar.title}
                copy={pillar.copy}
                index={idx}
                link="/courses"
              />
            ))}
          </div>
        </div>

        {/* ChainTrail Verification Section */}
        <div className="mb-24 bg-gradient-to-br from-[#183f3f] to-[#0d4545] border border-[#247a62] rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#115b5b]/20 border border-[#f5b82e]/40 text-[#f5b82e] text-xs font-bold uppercase tracking-wider mb-4">
                <Award className="w-4 h-4 text-[#f59e0b]" />
                Verifiable Credentials
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                ChainTrail™ Cryptographic Certificate Verification
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Every graduate certificate issued by Shield Skill Academy is
                cryptographically signed and anchored to our ChainTrail ledger.
                Recruiters can verify a candidate’s capstone repo, grading
                rubrics, and project commits in 1 click.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm text-slate-200">
                    Tamper-proof hash linked directly to capstone GitHub
                    repository
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm text-slate-200">
                    Instant 1-click LinkedIn Profile &amp; Resume credential
                    integration
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm text-slate-200">
                    Recognized by 120+ top engineering employers across India
                    &amp; APAC
                  </span>
                </div>
              </div>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#115b5b] hover:bg-[#0d4545] text-white text-sm font-bold shadow-lg shadow-[#115b5b]/20 transition-colors"
              >
                Browse Accredited Courses <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-[#0d4545] border border-[#247a62] rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="border border-[#0d4545] rounded-xl p-5 bg-[#183f3f]/60 space-y-4">
                <div className="flex items-center justify-between border-b border-[#0d4545] pb-3">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#f59e0b]" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      ChainTrail Verification Portal
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-bold border border-emerald-500/40">
                    VERIFIED VALID
                  </span>
                </div>

                <div>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider">
                    Recipient Name
                  </p>
                  <p className="text-sm font-bold text-white">Priya Sundaram</p>
                </div>

                <div>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider">
                    Credential Title
                  </p>
                  <p className="text-sm font-semibold text-[#f5b82e]">
                    Applied Artificial Intelligence &amp; Neural Architectures
                  </p>
                </div>

                <div>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider">
                    Ledger Certificate ID
                  </p>
                  <p className="text-xs font-mono text-slate-300 break-all bg-[#0d4545] p-2 rounded border border-[#0d4545]">
                    0x8f2a9e4b6d3c1a8e7f5e9d2b4c6a8f0e1d3b5a7c
                  </p>
                </div>

                <div className="pt-2 text-right">
                  <span className="text-[11px] text-slate-400">
                    Issued by Shield Skill Academy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mentors & Leadership */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#f59e0b] uppercase tracking-widest">
              World-Class Faculty
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Learn From Engineers Who Built What You Use
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="bg-[#183f3f]/90 border border-[#0d4545] rounded-2xl p-6 shadow-xl flex flex-col items-center text-center hover:border-[#f5b82e]/40 transition-colors"
              >
                <img
                  src={leader.avatar}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-[#f5b82e]/40 shadow-lg mb-4"
                />
                <h3 className="text-lg font-bold text-white">{leader.name}</h3>
                <p className="text-xs font-semibold text-[#f5b82e] mb-3">
                  {leader.role}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center bg-[#183f3f] border border-[#0d4545] rounded-3xl p-10 max-w-3xl mx-auto shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-slate-300 text-sm mb-6 max-w-lg mx-auto">
            Join thousands of ambitious learners who transitioned into top
            engineering and analytics roles through Shield Academy.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/courses"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#115b5b] to-[#0d4545] text-white font-bold text-sm shadow-lg shadow-[#115b5b]/25 hover:from-[#0d4545] hover:to-[#1e40af] transition-all duration-200"
            >
              Explore All Courses
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-[#0d4545] hover:bg-[#247a62] text-slate-200 font-bold text-sm border border-[#247a62] transition-colors"
            >
              Schedule an Advising Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
