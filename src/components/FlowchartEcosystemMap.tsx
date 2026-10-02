import React, { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/shield-logo.png"
import {
  studentDisciplinePaths,
  masterArchitectureBranches,
  emergingTechDomains,
  nonTechDomains,
  StudentDisciplinePath,
  TechnologyDomainNode,
  ArchitectureBranch,
} from "../data/masterArchitectureData"
import { coursesData } from "../data/courses"
import { projectsData } from "../data/projects"
import {
  Compass,
  Cpu,
  TrendingUp,
  Building2,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Sparkles,
  Shield,
  Layers,
  CheckCircle2,
  BookOpen,
  Code2,
  ExternalLink,
  ChevronRight,
  Zap,
  RotateCw,
} from "lucide-react"

export function FlowchartEcosystemMap() {
  // Selected state
  const [selectedBranchId, setSelectedBranchId] =
    useState<string>("emerging-tech")
  const [selectedDomainId, setSelectedDomainId] =
    useState<string>("golang-erlang")
  const [selectedDisciplineId, setSelectedDisciplineId] =
    useState<string>("cse-it")
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null)

  // 3D Parallax state
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse Parallax Effect (subtle, non-disorienting)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({
      x: Math.max(-4, Math.min(4, y * -8)), // rotateX
      y: Math.max(-4, Math.min(4, x * 8)), // rotateY
    })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHoveredNodeId(null)
  }

  // Active discipline journey
  const activeDiscipline =
    studentDisciplinePaths.find((d) => d.id === selectedDisciplineId) ||
    studentDisciplinePaths[0]

  // Active branch
  const activeBranch =
    masterArchitectureBranches.find((b) => b.id === selectedBranchId) ||
    masterArchitectureBranches[1]

  // Active domain (if emerging-tech or non-tech)
  const allDomains = [...emergingTechDomains, ...nonTechDomains]
  const activeDomain =
    allDomains.find((d) => d.id === selectedDomainId) || emergingTechDomains[0]

  // Related course objects for active domain
  const activeDomainCourses = coursesData.filter((c) =>
    activeDomain.recommendedCourseIds.includes(c.id),
  )

  // Related project object for active domain
  const activeDomainProject = projectsData.find((p) =>
    activeDomain.recommendedProjectIds.includes(p.id),
  )

  // When a student discipline is selected, automatically activate its primary technology domain
  const handleSelectDiscipline = (disc: StudentDisciplinePath) => {
    setSelectedDisciplineId(disc.id)
    setSelectedDomainId(disc.primaryDomainId)
    // Check if domain is in emerging tech or non-tech
    const inEmerging = emergingTechDomains.some(
      (d) => d.id === disc.primaryDomainId,
    )
    setSelectedBranchId(inEmerging ? "emerging-tech" : "non-tech")
  }

  const getBranchIcon = (iconName: string) => {
    switch (iconName) {
      case "compass":
        return <Compass className="w-5 h-5 text-[#f5b82e]" />
      case "cpu":
        return <Cpu className="w-5 h-5 text-[#39a66a]" />
      case "trending":
        return <TrendingUp className="w-5 h-5 text-[#f5b82e]" />
      case "building":
        return <Building2 className="w-5 h-5 text-[#39a66a]" />
      case "briefcase":
        return <Briefcase className="w-5 h-5 text-[#f5b82e]" />
      case "graduation":
        return <GraduationCap className="w-5 h-5 text-[#39a66a]" />
      default:
        return <Layers className="w-5 h-5 text-[#f5b82e]" />
    }
  }

  return (
    <section
      id="master-architecture"
      className="relative py-24 bg-[#0d4545] border-y border-[#dbe7e4]/15 overflow-hidden text-slate-100"
      aria-label="Master Architecture Interactive 3D Ecosystem"
    >
      {/* Background ambient radial glow using exact brand teal and gold */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#247a62]/20 via-[#115b5b]/30 to-[#f5b82e]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#39a66a]/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Introduction (Requirement 22) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#183f3f] border border-[#dbe7e4]/20 text-[#f5b82e] text-xs font-black uppercase tracking-widest mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
            MASTER ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Explore the <span className="text-[#f5b82e]">Shield Skill Hub</span>{" "}
            Ecosystem
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#e7f1ef]/85 max-w-2xl mx-auto leading-relaxed">
            Discover how students, technology domains, courses, projects,
            internships, institutions and industry opportunities connect within
            the Shield Skill Hub ecosystem.
          </p>
        </div>

        {/* 1. "WHERE DO I FIT?" STUDENT DISCIPLINE NAVIGATOR (Requirement 8) */}
        <div className="mb-12 bg-[#183f3f]/90 border border-[#dbe7e4]/20 rounded-3xl p-5 sm:p-7 shadow-xl backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5 pb-4 border-b border-[#dbe7e4]/15">
            <div>
              <span className="text-xs font-bold text-[#f5b82e] uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#f59e0b]" />
                Personalized Learning Path Navigator
              </span>
              <h3 className="text-lg font-extrabold text-white mt-0.5">
                Where Do You Fit Into Shield Skill Hub?
              </h3>
            </div>
            <div className="text-xs text-[#e7f1ef]/70">
              Select your academic discipline to illuminate your tailored
              pathway:
            </div>
          </div>

          {/* Discipline Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
            {studentDisciplinePaths.map((disc) => {
              const isSelected = selectedDisciplineId === disc.id
              return (
                <button
                  key={disc.id}
                  onClick={() => handleSelectDiscipline(disc)}
                  className={`p-3 rounded-2xl text-left transition-all duration-200 cursor-pointer border flex flex-col justify-between ${
                    isSelected
                      ? "bg-gradient-to-br from-[#dfa51f] to-[#f5b82e] text-[#172525] border-[#f5b82e] font-extrabold shadow-lg shadow-[#0d4545] scale-102"
                      : "bg-[#0d4545] text-[#e7f1ef] border-[#dbe7e4]/15 hover:border-[#f5b82e]/50 hover:bg-[#115b5b]"
                  }`}
                  aria-pressed={isSelected}
                >
                  <span className="text-xs font-black uppercase tracking-wider">
                    {disc.shortLabel}
                  </span>
                  <span
                    className={`text-[10px] mt-1 line-clamp-1 ${
                      isSelected ? "text-[#172525]/80" : "text-[#dbe7e4]/70"
                    }`}
                  >
                    {disc.name}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Connected Step-by-Step Flow Banner */}
          <div className="bg-[#0d4545]/90 border border-[#dbe7e4]/15 rounded-2xl p-4 sm:p-5">
            <span className="text-[10px] font-bold uppercase text-[#f5b82e] tracking-wider block mb-2">
              Your Recommended Pathway ({activeDiscipline.name}):
            </span>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
              {/* Step 1: Discipline */}
              <div className="flex-1 p-2.5 rounded-xl bg-[#183f3f] border border-[#dbe7e4]/15 flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-[#f5b82e] text-[#172525] font-black text-[10px] flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <span className="text-[10px] uppercase text-[#dbe7e4]/70 block">
                    Student Domain
                  </span>
                  <span className="font-bold text-white truncate block">
                    {activeDiscipline.stepStudent}
                  </span>
                </div>
              </div>

              <ChevronRight className="w-4 h-4 text-[#f5b82e] shrink-0 hidden sm:block" />

              {/* Step 2: Tech Pathway */}
              <div className="flex-1 p-2.5 rounded-xl bg-[#183f3f] border border-[#f5b82e]/40 flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-[#39a66a] text-white font-black text-[10px] flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <span className="text-[10px] uppercase text-[#dbe7e4]/70 block">
                    Technology Domain
                  </span>
                  <span className="font-bold text-[#f5b82e] truncate block">
                    {activeDiscipline.stepTech}
                  </span>
                </div>
              </div>

              <ChevronRight className="w-4 h-4 text-[#f5b82e] shrink-0 hidden sm:block" />

              {/* Step 3: Course */}
              <div className="flex-1 p-2.5 rounded-xl bg-[#183f3f] border border-[#dbe7e4]/15 flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-[#115b5b] text-white font-black text-[10px] flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <span className="text-[10px] uppercase text-[#dbe7e4]/70 block">
                    Recommended Course
                  </span>
                  <span className="font-bold text-white truncate block">
                    {activeDiscipline.stepCourse}
                  </span>
                </div>
              </div>

              <ChevronRight className="w-4 h-4 text-[#f5b82e] shrink-0 hidden sm:block" />

              {/* Step 4: Project */}
              <div className="flex-1 p-2.5 rounded-xl bg-[#183f3f] border border-[#dbe7e4]/15 flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-[#247a62] text-white font-black text-[10px] flex items-center justify-center shrink-0">
                  4
                </span>
                <div>
                  <span className="text-[10px] uppercase text-[#dbe7e4]/70 block">
                    Hands-on Capstone
                  </span>
                  <span className="font-bold text-white truncate block">
                    {activeDiscipline.stepProject}
                  </span>
                </div>
              </div>

              <ChevronRight className="w-4 h-4 text-[#f5b82e] shrink-0 hidden sm:block" />

              {/* Step 5: Internship / Industry */}
              <div className="flex-1 p-2.5 rounded-xl bg-[#183f3f] border border-[#dbe7e4]/15 flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-[#f5b82e] text-[#172525] font-black text-[10px] flex items-center justify-center shrink-0">
                  5
                </span>
                <div>
                  <span className="text-[10px] uppercase text-[#dbe7e4]/70 block">
                    Internship &amp; Placement
                  </span>
                  <span className="font-bold text-white truncate block">
                    {activeDiscipline.stepInternship}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. MAIN 3D ECOSYSTEM WORKSPACE (Requirements 1, 2, 3, 11, 17) */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative rounded-3xl p-6 sm:p-10 mb-14 bg-gradient-to-b from-[#183f3f]/80 to-[#0d4545]/90 border border-[#dbe7e4]/20 shadow-2xl transition-transform duration-300 ease-out"
          style={{
            perspective: "1200px",
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          {/* Animated Connecting Lines Layer (SVG Canvas) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <svg
              className="w-full h-full opacity-60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="linePulseGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#f5b82e" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#39a66a" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {/* Flowing animated lines connecting center to branches */}
              <line
                x1="50%"
                y1="50%"
                x2="18%"
                y2="20%"
                stroke="url(#linePulseGrad)"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-[pulse_3s_ease-in-out_infinite]"
              />
              <line
                x1="50%"
                y1="50%"
                x2="50%"
                y2="15%"
                stroke="url(#linePulseGrad)"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="animate-[pulse_2.5s_ease-in-out_infinite]"
              />
              <line
                x1="50%"
                y1="50%"
                x2="82%"
                y2="20%"
                stroke="url(#linePulseGrad)"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-[pulse_3.2s_ease-in-out_infinite]"
              />
              <line
                x1="50%"
                y1="50%"
                x2="18%"
                y2="80%"
                stroke="url(#linePulseGrad)"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-[pulse_2.8s_ease-in-out_infinite]"
              />
              <line
                x1="50%"
                y1="50%"
                x2="50%"
                y2="85%"
                stroke="url(#linePulseGrad)"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="animate-[pulse_2.2s_ease-in-out_infinite]"
              />
              <line
                x1="50%"
                y1="50%"
                x2="82%"
                y2="80%"
                stroke="url(#linePulseGrad)"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-[pulse_3s_ease-in-out_infinite]"
              />
            </svg>
          </div>

          {/* Central 3D Hub & 6 Branches Layout */}
          <div className="relative z-10">
            {/* Top Row: General, Emerging Tech, Non Tech */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Branch: General */}
              {renderBranchCard(masterArchitectureBranches[0])}

              {/* Branch: Emerging Tech (Highlighted) */}
              {renderBranchCard(masterArchitectureBranches[1])}

              {/* Branch: Non Tech */}
              {renderBranchCard(masterArchitectureBranches[2])}
            </div>

            {/* Central 3D Core Node (Requirement 1) */}
            <div className="flex justify-center my-6">
              <div
                className="w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#183f3f] via-[#115b5b] to-[#0d4545] border-2 border-[#f5b82e]/80 shadow-[0_25px_60px_rgba(245,184,46,0.22)] text-center relative overflow-hidden transition-all duration-300 hover:scale-102 hover:shadow-[0_30px_70px_rgba(245,184,46,0.35)]"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(30px)",
                }}
              >
                {/* Rotating orbital glow ring */}
                <div className="absolute -inset-10 opacity-30 bg-gradient-to-r from-[#f5b82e] via-transparent to-[#39a66a] blur-xl rounded-full pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#0d4545] border-2 border-[#f5b82e] flex items-center justify-center text-[#f5b82e] shadow-xl mb-4 p-2 transition-transform duration-500 hover:rotate-6">
                    <img
                      src={logo}
                      alt="Shield Skill Hub Emblem"
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  <span className="px-3.5 py-1 rounded-full bg-[#0d4545] border border-[#f5b82e]/40 text-[#f5b82e] text-[10px] font-black uppercase tracking-widest mb-2">
                    Ecosystem Brain &amp; Core
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-wider uppercase">
                    SHIELD SKILL HUB
                  </h3>
                  <p className="text-xs sm:text-sm font-extrabold text-[#f5b82e] mt-1 tracking-wide">
                    Powered by Shield Group
                  </p>

                  <p className="text-xs text-[#e7f1ef]/80 max-w-md mx-auto mt-3 leading-relaxed">
                    The unifying platform connecting student ambitions,
                    accredited universities, industrial testbeds, and verified
                    corporate placement pipelines.
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-[11px] text-[#39a66a] font-semibold bg-[#0d4545]/80 px-3 py-1 rounded-full border border-[#dbe7e4]/15">
                    <span className="w-2 h-2 rounded-full bg-[#39a66a] animate-pulse" />
                    6 Connected Flowchart Branches • 10 Technology Labs
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Industry Partners, Internship / Placement, Institutions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Branch: Industry Partners */}
              {renderBranchCard(masterArchitectureBranches[3])}

              {/* Branch: Internship / Placement */}
              {renderBranchCard(masterArchitectureBranches[4])}

              {/* Branch: Institutions */}
              {renderBranchCard(masterArchitectureBranches[5])}
            </div>
          </div>
        </div>

        {/* 3. EXPANDED DOMAINS & ACTIONABLE COURSE DETAILS (Requirements 4, 5, 6, 7, 20) */}
        <div className="bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl p-6 sm:p-10 shadow-2xl mb-12">
          {/* Header of Selection Panel */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#dbe7e4]/15">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d4545] border border-[#f5b82e]/40 text-[#f5b82e] text-xs font-bold uppercase mb-2">
                {activeBranch.name} • Master Blueprint Detail
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {activeBranch.flowchartTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#e7f1ef]/80 mt-1 max-w-2xl">
                {activeBranch.description}
              </p>
            </div>

            <Link
              to={activeBranch.route}
              className="self-start lg:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#dfa51f] to-[#f5b82e] hover:from-[#f5b82e] hover:to-[#dfa51f] text-[#172525] font-extrabold text-xs uppercase tracking-wider shadow-md transition-all"
            >
              Open Full {activeBranch.name} Page{" "}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* If Emerging Tech or Non Tech: Render Interactive Domain Nodes */}
          {activeBranch.domains && (
            <div className="mb-10">
              <span className="text-xs font-bold text-[#f5b82e] uppercase tracking-wider block mb-3">
                Select a Technology Domain to Inspect (From Flowchart):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {activeBranch.domains.map((domain) => {
                  const isDomainSelected = selectedDomainId === domain.id
                  return (
                    <button
                      key={domain.id}
                      onClick={() => setSelectedDomainId(domain.id)}
                      className={`p-4 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                        isDomainSelected
                          ? "bg-[#0d4545] border-[#f5b82e] shadow-lg shadow-[#0d4545] scale-102"
                          : "bg-[#183f3f]/70 border-[#dbe7e4]/15 hover:border-[#f5b82e]/40 hover:bg-[#0d4545]"
                      }`}
                    >
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#39a66a] block mb-1">
                          {domain.flowchartTitle}
                        </span>
                        <h4 className="text-sm font-bold text-white line-clamp-1 mb-2">
                          {domain.name}
                        </h4>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {domain.studentDisciplines.slice(0, 3).map((sd) => (
                            <span
                              key={sd}
                              className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#183f3f] text-[#e7f1ef]"
                            >
                              {sd}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#dbe7e4]/10 flex items-center justify-between text-[11px]">
                        <span
                          className={`font-bold ${
                            isDomainSelected
                              ? "text-[#f5b82e]"
                              : "text-[#dbe7e4]/70"
                          }`}
                        >
                          {isDomainSelected ? "Selected ●" : "Inspect"}
                        </span>
                        <ArrowRight className="w-3 h-3 text-[#f5b82e]" />
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* If SubItems (General, Industry, Internships, Institutions) */}
          {activeBranch.subItems && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {activeBranch.subItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.route}
                  className="p-5 rounded-2xl bg-[#0d4545] border border-[#dbe7e4]/15 hover:border-[#f5b82e]/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="w-6 h-6 rounded-md bg-[#183f3f] text-[#f5b82e] font-black text-xs flex items-center justify-center mb-2">
                      0{idx + 1}
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-[#f5b82e] transition-colors mb-1">
                      {item.label}
                    </h4>
                    {item.description && (
                      <p className="text-xs text-[#e7f1ef]/70 leading-relaxed mb-3">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-[#f5b82e] font-bold flex items-center gap-1">
                    Explore Blueprint Route &rarr;
                  </span>
                </Link>
              ))}
            </div>
          )}

          {/* DOMAIN → STUDENT → COURSE → PROJECT JOURNEY CARD (Requirement 7 & 20) */}
          {activeBranch.domains && (
            <div className="bg-[#0d4545] border-2 border-[#f5b82e]/40 rounded-3xl p-6 sm:p-8 shadow-2xl">
              {/* Discipline Mapping Verification */}
              <div className="mb-6 p-4 rounded-2xl bg-[#183f3f] border border-[#dbe7e4]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#f5b82e] uppercase tracking-wider block mb-1">
                    Recommended For Students From (Source of Truth):
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {activeDomain.studentDisciplines.map((sd) => (
                      <span
                        key={sd}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#0d4545] text-[#39a66a] text-xs font-bold font-mono border border-[#39a66a]/30"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {sd}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={activeDomain.route}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#115b5b] hover:bg-[#247a62] text-white text-xs font-bold uppercase transition-colors shrink-0"
                >
                  Domain Syllabus &amp; Lab Specs &rarr;
                </Link>
              </div>

              {/* Recommended Courses Grid */}
              <div className="mb-8">
                <span className="text-xs font-bold text-[#39a66a] uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#39a66a]" />
                  Recommended Courses for {activeDomain.name}:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeDomainCourses.map((c) => (
                    <div
                      key={c.id}
                      className="p-5 rounded-2xl bg-[#183f3f] border border-[#dbe7e4]/15 flex flex-col justify-between"
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={c.image}
                          alt={c.title}
                          className="w-20 h-20 rounded-xl object-cover shrink-0 border border-[#dbe7e4]/10"
                        />
                        <div>
                          <span className="text-[10px] font-bold uppercase text-[#f5b82e] tracking-wider">
                            {c.category} • {c.level}
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-white mt-0.5 line-clamp-1">
                            {c.title}
                          </h4>
                          <p className="text-xs text-[#e7f1ef]/70 line-clamp-2 mt-1">
                            {c.subtitle}
                          </p>
                          <div className="mt-2 flex items-center gap-3 text-xs text-[#dbe7e4]/80">
                            <span>{c.duration}</span>
                            <span className="text-[#f5b82e] font-bold">
                              ★ {c.rating}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#dbe7e4]/10 flex items-center justify-between">
                        <span className="text-xs font-bold text-white">
                          ₹{c.price.toLocaleString("en-IN")}
                        </span>
                        <Link
                          to={`/courses/${c.id}`}
                          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#dfa51f] to-[#f5b82e] text-[#172525] text-xs font-black uppercase shadow-sm hover:opacity-90 transition-opacity"
                        >
                          View Course
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hands-On Project & Internship Cross-Reference */}
              {activeDomainProject && (
                <div className="pt-6 border-t border-[#dbe7e4]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold text-[#f5b82e] uppercase tracking-wider block">
                      Hands-On Capstone Project Requirement:
                    </span>
                    <h5 className="text-sm font-bold text-white mt-0.5">
                      {activeDomainProject.title}
                    </h5>
                    <p className="text-xs text-[#e7f1ef]/70 line-clamp-1">
                      {activeDomainProject.problemStatement}
                    </p>
                  </div>
                  <Link
                    to={`/projects/${activeDomainProject.id}`}
                    className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#f5b82e] hover:underline"
                  >
                    View Capstone Requirements &rarr;
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )

  // Helper renderer for 3D Branch Card
  function renderBranchCard(branch: ArchitectureBranch) {
    const isSelected = selectedBranchId === branch.id
    const isHovered = hoveredNodeId === branch.id

    return (
      <div
        key={branch.id}
        onMouseEnter={() => setHoveredNodeId(branch.id)}
        onClick={() => setSelectedBranchId(branch.id)}
        className={`p-6 rounded-3xl cursor-pointer border transition-all duration-300 flex flex-col justify-between min-h-[190px] ${
          isSelected
            ? "bg-[#183f3f] border-2 border-[#f5b82e] shadow-[0_15px_40px_rgba(245,184,46,0.18)] translate-y-[-4px]"
            : isHovered
              ? "bg-[#183f3f]/95 border-[#f5b82e]/60 shadow-xl translate-y-[-2px]"
              : "bg-[#183f3f]/85 border-[#dbe7e4]/15 hover:border-[#f5b82e]/40"
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isSelected ? "translateZ(20px)" : "translateZ(0px)",
        }}
      >
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <span
              className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md transition-colors ${
                isSelected
                  ? "bg-[#0d4545] border border-[#f5b82e]"
                  : "bg-[#0d4545] border border-[#dbe7e4]/15"
              }`}
            >
              {getBranchIcon(branch.iconName)}
            </span>
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                isSelected
                  ? "bg-[#f5b82e] text-[#172525]"
                  : "bg-[#0d4545] text-[#39a66a] border border-[#dbe7e4]/15"
              }`}
            >
              {branch.badge}
            </span>
          </div>

          <h4 className="text-base font-extrabold text-white mb-1 tracking-wide">
            {branch.name}
          </h4>
          <p className="text-xs text-[#f5b82e] font-semibold mb-2">
            {branch.tagline}
          </p>
          <p className="text-xs text-[#e7f1ef]/75 line-clamp-2 leading-relaxed">
            {branch.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#dbe7e4]/10 flex items-center justify-between text-xs">
          <span
            className={`font-bold ${
              isSelected ? "text-[#f5b82e]" : "text-[#e7f1ef]/80"
            }`}
          >
            {isSelected ? "Active Branch ●" : "Inspect Branch"}
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#f5b82e]" />
        </div>
      </div>
    )
  }
}

export default FlowchartEcosystemMap
