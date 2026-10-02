import React, { useState } from "react"
import { Link } from "react-router-dom"
import { technologyPathways } from "../../data/technologyPathways"
import Breadcrumbs from "../../components/Breadcrumbs"
import {
  Cpu,
  ArrowRight,
  Sparkles,
  Layers,
  GraduationCap,
  Building2,
  CheckCircle2,
  Filter,
} from "lucide-react"

export default function EmergingTechHubPage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("All")

  const emergingPathways = technologyPathways.filter(
    (p) => p.category === "Emerging Tech",
  )

  const disciplineFilters = [
    "All",
    "AI & ML",
    "DS",
    "CS",
    "IT",
    "ECE",
    "EEE",
    "MECH",
    "CIVIL",
  ]

  const filteredPathways = emergingPathways.filter((p) => {
    if (selectedDiscipline === "All") return true
    return p.disciplines.some((d) =>
      d.toUpperCase().includes(selectedDiscipline.toUpperCase()),
    )
  })

  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-24">
      {/* Background ambient radial glow using brand teal and gold */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[950px] h-[550px] bg-gradient-to-b from-[#247a62]/20 via-[#115b5b]/25 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Emerging Tech" }]} />

        {/* Header / Hero */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#183f3f] border border-[#dbe7e4]/20 text-[#f5b82e] text-xs font-bold uppercase tracking-wider mb-5">
            <Cpu className="w-4 h-4 text-[#f59e0b]" />
            Mentor Flowchart Blueprint
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            Emerging Technology <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfa51f] via-[#f5b82e] to-[#39a66a]">
              Engineering Pathways
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#e7f1ef]/85 font-normal leading-relaxed">
            The 7 core technology tracks specified in our blueprint. Each
            pathway maps directly to eligible student disciplines (Mech, Civil,
            ECE, EEE, CS, IT, AI/ML, DS) and connects with industrial testbeds
            and capstones.
          </p>
        </div>

        {/* Discipline Filter Bar */}
        <div className="bg-[#183f3f]/90 border border-[#dbe7e4]/20 rounded-2xl p-5 mb-12 shadow-xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#f5b82e]" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Filter by Student Discipline:
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {disciplineFilters.map((disc) => (
                <button
                  key={disc}
                  onClick={() => setSelectedDiscipline(disc)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedDiscipline === disc
                      ? "bg-gradient-to-r from-[#dfa51f] to-[#f5b82e] text-[#172525] shadow-md shadow-[#0d4545]"
                      : "bg-[#0d4545] text-[#e7f1ef]/80 hover:bg-[#115b5b] hover:text-white"
                  }`}
                >
                  {disc === "All" ? "All Disciplines" : disc}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 7 Emerging Tech Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPathways.map((pathway) => (
            <div
              key={pathway.id}
              className="bg-[#183f3f]/90 border border-[#dbe7e4]/20 hover:border-[#f5b82e]/60 rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 group"
            >
              <div>
                {/* Header Tag & Partner */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#0d4545] border border-[#f5b82e]/30 text-[#f5b82e] text-[10px] font-bold uppercase tracking-wider">
                    {pathway.tag}
                  </span>
                  {pathway.partnerOrg && (
                    <span className="text-[10px] font-semibold text-[#39a66a] bg-[#0d4545] px-2 py-0.5 rounded border border-[#dbe7e4]/15">
                      Partner: {pathway.partnerOrg}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#f5b82e] transition-colors mb-2">
                  {pathway.name}
                </h3>

                {/* Eligibility Disciplines Pill from Flowchart */}
                <div className="mb-4 p-2.5 rounded-xl bg-[#0d4545] border border-[#dbe7e4]/15">
                  <span className="text-[10px] font-bold text-[#f5b82e] uppercase tracking-wider block mb-1 flex items-center gap-1">
                    <GraduationCap className="w-3 h-3 text-[#f59e0b]" />{" "}
                    Flowchart Eligibility:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {pathway.disciplines.map((d) => (
                      <span
                        key={d}
                        className="px-2 py-0.5 rounded bg-[#183f3f] text-[#e7f1ef] text-[10px] font-mono font-semibold"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-[#e7f1ef]/80 leading-relaxed mb-5 line-clamp-3">
                  {pathway.overview}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {pathway.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#0d4545] border border-[#dbe7e4]/10 text-slate-300 text-[10px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {pathway.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-[#0d4545] text-[#dbe7e4]/60 text-[10px]">
                      +{pathway.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-[#dbe7e4]/15 flex items-center justify-between gap-3">
                <Link
                  to={pathway.route}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#dfa51f] to-[#f5b82e] hover:from-[#f5b82e] hover:to-[#dfa51f] text-[#172525] text-xs font-bold uppercase tracking-wider shadow-md transition-all duration-200"
                >
                  View Pathway Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Cross-Link Banner */}
        <div className="bg-gradient-to-r from-[#183f3f] to-[#0d4545] border border-[#dbe7e4]/20 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Interested in Non-Tech Pathways?
            </h3>
            <p className="text-xs sm:text-sm text-[#e7f1ef]/80">
              Discover eCommerce Labs and Equity Research for B.Com/BCA/MBA,
              plus Cosmetics &amp; Food Safety for Biotech.
            </p>
          </div>
          <Link
            to="/non-tech"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0d4545] hover:bg-[#115b5b] text-white font-bold text-xs uppercase tracking-wider border border-[#f5b82e]/50 transition-colors"
          >
            Explore Non-Tech Pathways &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
