import React from "react"
import { Link } from "react-router-dom"
import { institutionServices } from "../../data/institutionData"
import Breadcrumbs from "../../components/Breadcrumbs"
import {
  GraduationCap,
  Award,
  BookOpen,
  Cpu,
  Users,
  Building2,
  FileCheck,
  Zap,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react"

export default function InstitutionsHubPage() {
  const coreServices = institutionServices.filter(
    (s) => s.flowchartGroup === "core",
  )
  const activities = institutionServices.filter(
    (s) => s.flowchartGroup === "activity",
  )

  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-24">
      {/* Background ambient radial glow using brand teal and gold */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[950px] h-[550px] bg-gradient-to-b from-[#247a62]/20 via-[#115b5b]/25 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Institutions" }]} />

        {/* Header / Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#183f3f] border border-[#dbe7e4]/20 text-[#f5b82e] text-xs font-bold uppercase tracking-wider mb-5">
            <GraduationCap className="w-4 h-4 text-[#f59e0b]" />
            Academic &amp; University Transformation
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            Institutional Ecosystem &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfa51f] via-[#f5b82e] to-[#39a66a]">
              Campus Partnerships
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#e7f1ef]/85 font-normal leading-relaxed">
            The Institutions branch of our mentor&apos;s blueprint empowers
            universities, engineering colleges, and polytechnics through
            NEP-aligned credit courses, Center of Excellence setup, funded
            project formulation, and nationwide skilling drives.
          </p>
        </div>

        {/* 7 Core Offerings Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#f59e0b] uppercase tracking-widest">
              Core Academic Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              7 Strategic Institutional Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, idx) => (
              <div
                key={service.id}
                className="bg-[#183f3f]/90 border border-[#dbe7e4]/20 hover:border-[#f5b82e]/50 rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-8 h-8 rounded-xl bg-[#0d4545] border border-[#f5b82e]/30 text-[#f5b82e] text-xs font-black flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-[#39a66a] bg-[#0d4545] px-2.5 py-0.5 rounded border border-[#dbe7e4]/15">
                      Core Blueprint
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#f5b82e] transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#f5b82e] font-medium mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-[#e7f1ef]/80 leading-relaxed mb-5 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 mb-5">
                    {service.keyBenefits.slice(0, 2).map((b, bidx) => (
                      <div
                        key={bidx}
                        className="flex items-start gap-2 text-xs text-[#e7f1ef]/90"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#39a66a] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#dbe7e4]/15">
                  <Link
                    to={service.route}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#dfa51f] to-[#f5b82e] hover:from-[#f5b82e] hover:to-[#dfa51f] text-[#172525] text-xs font-bold uppercase tracking-wider shadow-md transition-all duration-200"
                  >
                    View Details &amp; Process
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Institutional Activities Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#39a66a] uppercase tracking-widest">
              Campus Activities &amp; Engagements
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Collaborative Institutional Initiatives
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((act) => (
              <div
                key={act.id}
                className="bg-[#183f3f]/90 border border-[#dbe7e4]/20 hover:border-[#39a66a]/50 rounded-2xl p-6 shadow-xl flex flex-col justify-between transition-colors"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#f5b82e] uppercase tracking-wider block mb-1">
                    Activity
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    {act.name}
                  </h3>
                  <p className="text-xs text-[#e7f1ef]/80 line-clamp-3 mb-4">
                    {act.description}
                  </p>
                </div>
                <Link
                  to={act.route}
                  className="text-xs font-bold text-[#f5b82e] hover:underline flex items-center justify-between pt-3 border-t border-[#dbe7e4]/10"
                >
                  <span>Explore Activity</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Consultation Banner */}
        <div className="bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold text-[#f5b82e] uppercase tracking-widest block mb-2">
              Institutional Partnership Desk
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">
              Are you a College Principal, Dean or HOD?
            </h3>
            <p className="text-xs sm:text-sm text-[#e7f1ef]/80 max-w-xl">
              Schedule an executive consultation with the Shield Skill Hub
              academic council to explore MOU signing, NEP credit electives, or
              Center of Excellence setup on your campus.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#dfa51f] to-[#f5b82e] text-[#172525] font-extrabold text-xs uppercase tracking-wider shadow-lg"
          >
            Request Institutional Proposal <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
