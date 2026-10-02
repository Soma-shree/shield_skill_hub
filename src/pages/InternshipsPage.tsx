import React from "react"
import { Link } from "react-router-dom"
import { internshipTracks } from "../data/internshipData"
import Breadcrumbs from "../components/Breadcrumbs"
import {
  Briefcase,
  CheckCircle2,
  Building2,
  Award,
  Users,
  Code,
  ArrowRight,
  Sparkles,
  FileCheck,
  Send,
  Layers,
  GraduationCap,
} from "lucide-react"

export default function InternshipsPage() {
  const blueprintTracks = internshipTracks

  const hiringPartners = [
    "Saint-Gobain",
    "Wipro 3D",
    "Rockwell Automation",
    "ISHRAE Network",
    "Stockathon Academy",
    "Shield Group Enterprise Partners",
  ]

  const workflow = [
    {
      step: "01",
      title: "Technical Diagnostic",
      desc: "Complete our standard coding and systems assessment to determine your baseline mastery and track alignment.",
    },
    {
      step: "02",
      title: "Supervised Client Sprints",
      desc: "Get assigned to a squad led by a Senior Engineering Mentor working on actual client features or research papers.",
    },
    {
      step: "03",
      title: "Weekly Code Reviews",
      desc: "Submit pull requests, receive line-by-line feedback on test coverage, performance bottlenecks, and design patterns.",
    },
    {
      step: "04",
      title: "ChainTrail Verification & Placement",
      desc: "Receive your tamper-proof internship credential and direct interview intros to our corporate hiring partners.",
    },
  ]

  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-24">
      {/* Background radial glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#247a62]/20 via-[#115b5b]/25 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Internships & Placement" }]} />

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#183f3f] border border-[#dbe7e4]/20 text-[#f5b82e] text-xs font-bold uppercase tracking-wider mb-5">
            <Briefcase className="w-4 h-4 text-[#f59e0b]" />
            Flowchart Blueprint Track
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            Internship &amp; Placement <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfa51f] via-[#f5b82e] to-[#39a66a]">
              Assistance Framework
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#e7f1ef]/85 font-normal leading-relaxed">
            The Internship &amp; Placement Assistance branch of our
            mentor&apos;s blueprint connects student fellows directly to
            Research Collaboration, Departmental Development Activities, and
            Commercial Capstone Projects.
          </p>
        </div>

        {/* 3 Core Blueprint Tracks Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#f59e0b] uppercase tracking-widest">
              Blueprint Engagements
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              3 Primary Internship Pathways
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blueprintTracks.map((track) => (
              <div
                key={track.id}
                className="bg-[#183f3f]/90 border border-[#dbe7e4]/20 hover:border-[#f5b82e]/50 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#0d4545] border border-[#f5b82e]/30 text-[#f5b82e] text-[10px] font-bold uppercase tracking-wider">
                      {track.category}
                    </span>
                    <span className="text-[11px] text-[#39a66a] font-semibold">
                      {track.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#f5b82e] transition-colors mb-2">
                    {track.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#f5b82e] mb-3">
                    {track.stipendOrCredit}
                  </p>

                  <p className="text-xs text-[#e7f1ef]/80 leading-relaxed mb-5 line-clamp-3">
                    {track.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {track.deliverables.slice(0, 2).map((d, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-[#e7f1ef]/90"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#39a66a] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{d}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-6">
                    {track.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded bg-[#0d4545] text-slate-300 text-[10px] font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#dbe7e4]/15">
                  <Link
                    to={track.route}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#dfa51f] to-[#f5b82e] hover:from-[#f5b82e] hover:to-[#dfa51f] text-[#172525] text-xs font-bold uppercase tracking-wider shadow-md transition-all duration-200"
                  >
                    View Track Specifications
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Strip */}
        <div className="bg-[#183f3f]/80 border border-[#dbe7e4]/20 rounded-2xl p-6 mb-20 text-center shadow-xl">
          <p className="text-xs font-bold text-[#f5b82e] uppercase tracking-widest mb-4">
            Industrial Partners Collaborating on Capstone Internships
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {hiringPartners.map((partner) => (
              <span
                key={partner}
                className="text-sm sm:text-base font-bold text-[#e7f1ef]/90 hover:text-white transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* 4-Step Workflow */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#f59e0b] uppercase tracking-widest">
              Execution Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              The 4-Step Internship Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="bg-[#183f3f]/90 border border-[#dbe7e4]/20 rounded-2xl p-6 relative hover:border-[#f5b82e]/40 transition-colors"
              >
                <span className="text-3xl font-black text-[#f5b82e]/40 mb-3 block">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#e7f1ef]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Application Banner */}
        <div className="bg-gradient-to-br from-[#183f3f] to-[#0d4545] border border-[#dbe7e4]/20 rounded-3xl p-8 sm:p-12 shadow-2xl text-center max-w-3xl mx-auto">
          <FileCheck className="w-12 h-12 text-[#f59e0b] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Ready to Build Verifiable Work Experience?
          </h2>
          <p className="text-[#e7f1ef]/85 text-sm max-w-lg mx-auto mb-8">
            Complete the application and let our placement council evaluate your
            current code samples and course completions for track placement.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#dfa51f] to-[#f5b82e] text-[#172525] font-extrabold text-xs uppercase tracking-wider shadow-xl transition-all"
            >
              Submit Application <Send className="w-4 h-4" />
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0d4545] hover:bg-[#115b5b] text-white font-bold text-xs uppercase tracking-wider border border-[#dbe7e4]/20 transition-colors"
            >
              Prepare with Guided Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
