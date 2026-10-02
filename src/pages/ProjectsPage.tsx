import React, { useState } from "react"
import { Link } from "react-router-dom"
import { projectsData } from "../data/projects"
import { ArrowRight, Code, Clock, Layers, CheckCircle2 } from "lucide-react"

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string>("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All")

  const tags = ["All", ...Array.from(new Set(projectsData.map((p) => p.tag)))]
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

  const filteredProjects = projectsData.filter((project) => {
    const matchesTag = selectedTag === "All" || project.tag === selectedTag
    const matchesDiff =
      selectedDifficulty === "All" || project.difficulty === selectedDifficulty
    return matchesTag && matchesDiff
  })

  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-20">
      {/* Background radial glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#115b5b]/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header / Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d4545]/80 border border-[#247a62] text-[#f5b82e] text-xs font-semibold uppercase tracking-wider mb-5">
            <Code className="w-3.5 h-3.5 text-[#f59e0b]" />
            Production-Ready Capstones
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            Real Industry Projects. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5b82e] via-[#818cf8] to-[#f59e0b]">
              Not Toy Tutorials.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Every project solves an actual business bottleneck with real
            constraints, dirty datasets, and industry-standard architecture.
            Build a verified portfolio that proves your readiness to hiring
            managers.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-2xl p-5 mb-12 shadow-xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            {/* Tag Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
                Domain:
              </span>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                    selectedTag === tag
                      ? "bg-[#115b5b] text-white shadow-md shadow-[#115b5b]/30"
                      : "bg-[#0d4545]/70 text-slate-300 hover:bg-[#247a62]/60 hover:text-white"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Difficulty Dropdown */}
            <div className="flex items-center gap-3 self-end md:self-auto">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Difficulty:
              </span>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="bg-[#0d4545] border border-[#247a62] text-slate-200 text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#f5b82e] cursor-pointer"
              >
                {difficulties.map((d) => (
                  <option key={d} value={d}>
                    {d === "All" ? "All Levels" : d}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#183f3f]/90 border border-[#0d4545] hover:border-[#3b82f6]/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#115b5b]/10 transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Zoom Animation */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183f3f] via-transparent to-black/30" />

                {/* Tag Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-[#0f172a]/90 backdrop-blur-md border border-[#f5b82e]/40 text-[#f5b82e] text-[11px] font-bold tracking-wide uppercase">
                    {project.tag}
                  </span>
                </div>

                {/* Difficulty & Time Badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[11px] text-slate-300 font-medium">
                    <Clock className="w-3 h-3 text-[#f59e0b]" />
                    {project.estimatedHours}
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded text-[11px] font-semibold backdrop-blur-md ${
                      project.difficulty === "Beginner"
                        ? "bg-emerald-950/80 text-emerald-400 border border-emerald-500/40"
                        : project.difficulty === "Intermediate"
                          ? "bg-amber-950/80 text-amber-400 border border-amber-500/40"
                          : "bg-rose-950/80 text-rose-400 border border-rose-500/40"
                    }`}
                  >
                    {project.difficulty}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#f5b82e] transition-colors mb-3 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.problemStatement}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[#0d4545]/80 border border-[#247a62]/60 text-slate-300 text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded bg-[#0d4545]/40 text-slate-400 text-[11px]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer action buttons */}
                <div className="pt-4 border-t border-[#0d4545] flex items-center justify-between gap-3">
                  <Link
                    to={`/projects/${project.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#115b5b] to-[#0d4545] hover:from-[#0d4545] hover:to-[#1e40af] text-white text-xs font-semibold tracking-wide shadow-md shadow-[#115b5b]/20 hover:shadow-[#115b5b]/40 transition-all duration-200"
                  >
                    View Problem Statement
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  {project.relatedCourseId && (
                    <Link
                      to={`/courses/${project.relatedCourseId}`}
                      title="Learn in Related Course"
                      className="p-2.5 rounded-xl bg-[#0d4545] hover:bg-[#247a62] text-slate-300 hover:text-white transition-colors"
                    >
                      <Layers className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Projects Matter Banner */}
        <div className="mt-20 bg-gradient-to-br from-[#183f3f] to-[#0d4545] border border-[#247a62]/60 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[#f59e0b] font-bold text-xs uppercase tracking-widest">
                Portfolio Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
                Recruiters Don&apos;t Hire Certificates. They Hire Proof.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Generic to-do lists and cloned weather apps end up in candidate
                trash folders. Shield Academy capstones simulate real
                engineering sprints: PR reviews, edge-case testing, Dockerized
                deployments, and executive presentations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm text-slate-200">
                    Industry datasets with missing values and realistic business
                    noise
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm text-slate-200">
                    Live 1-on-1 code reviews by senior engineering mentors
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm text-slate-200">
                    Deployable production artifacts hosted with live demo URLs
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-[#0d4545]/80 border border-[#247a62] rounded-2xl p-6 sm:p-8 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#115b5b]/20 border border-[#f5b82e]/40 flex items-center justify-center text-[#f5b82e] mb-4">
                <Layers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Want to build all 6 capstones?
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6 max-w-sm">
                Enroll in our Flagship Career Accelerator program and build
                these under direct guidance of top tech mentors.
              </p>
              <Link
                to="/programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white font-bold text-sm shadow-lg shadow-[#f59e0b]/20 transition-all duration-200"
              >
                Explore Flagship Accelerator
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
