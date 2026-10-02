import React from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { projectsData } from "../data/projects"
import { coursesData } from "../data/courses"
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Code,
  CheckCircle2,
  Terminal,
  Layers,
  Sparkles,
  Share2,
} from "lucide-react"
import "../styles/comicEditorial.css"

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const navigate = useNavigate()

  const project = projectsData.find(
    (p) => p.id === projectId || p.slug === projectId,
  )

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0d4545] pt-32 pb-20 text-slate-100 flex items-center justify-center">
        <div className="text-center max-w-md p-8 bg-[#183f3f] border border-[#0d4545] rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">
            Project Not Found
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            The project problem statement you are looking for does not exist or
            has been relocated.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#115b5b] text-white text-sm font-semibold hover:bg-[#0d4545]"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Projects
          </Link>
        </div>
      </div>
    )
  }

  const relatedCourse = project.relatedCourseId
    ? coursesData.find((c) => c.id === project.relatedCourseId)
    : null

  const otherProjects = projectsData
    .filter((p) => p.id !== project.id)
    .slice(0, 3)

  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-24">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-1/4 w-[600px] h-[400px] bg-gradient-to-b from-[#115b5b]/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-[#f5b82e] truncate max-w-xs">
              {project.title}
            </span>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors bg-[#183f3f] px-3 py-1.5 rounded-lg border border-[#0d4545]"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </button>
        </div>

        {/* Comic Progression Track */}
        <div className="comic-progression-track mb-8">
          <div className="comic-level-badge">Level 01: Foundations</div>
          <span className="comic-level-arrow">→</span>
          <div className="comic-level-badge">Level 02: Core Skills</div>
          <span className="comic-level-arrow">→</span>
          <div className="comic-level-badge is-active">
            Level 03: Capstone Build
          </div>
          <span className="comic-level-arrow">→</span>
          <div className="comic-level-badge">Level 04: Industry Review</div>
          <span className="comic-level-arrow">→</span>
          <div className="comic-level-badge">Level 05: Placement</div>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-[#0d4545] border border-[#f5b82e]/40 text-[#f5b82e] text-xs font-bold uppercase tracking-wider">
                {project.tag}
              </span>
              <span
                className={`px-3 py-1 rounded-md text-xs font-semibold ${
                  project.difficulty === "Beginner"
                    ? "bg-emerald-950/80 text-emerald-400 border border-emerald-500/40"
                    : project.difficulty === "Intermediate"
                      ? "bg-amber-950/80 text-amber-400 border border-amber-500/40"
                      : "bg-rose-950/80 text-rose-400 border border-rose-500/40"
                }`}
              >
                {project.difficulty} Level
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#183f3f] border border-[#247a62] text-slate-300 text-xs font-medium">
                <Clock className="w-3.5 h-3.5 text-[#f59e0b]" />
                {project.estimatedHours}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2.5">
                Target Technology Stack:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-[#183f3f] border border-[#247a62] text-slate-200 text-xs font-mono font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {relatedCourse && (
                <Link
                  to={`/courses/${relatedCourse.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#115b5b] to-[#0d4545] hover:from-[#0d4545] hover:to-[#1e40af] text-white font-bold text-sm shadow-lg shadow-[#115b5b]/25 transition-all duration-200"
                >
                  <Sparkles className="w-4 h-4 text-[#f59e0b]" />
                  Build in &ldquo;{relatedCourse.title}&rdquo;
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: project.title,
                      text: project.description,
                      url: window.location.href,
                    })
                  } else {
                    navigator.clipboard.writeText(window.location.href)
                    alert("Project link copied to clipboard!")
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0d4545] hover:bg-[#247a62] text-slate-300 hover:text-white text-xs font-medium border border-[#247a62] transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" /> Share Problem
              </button>
            </div>
          </div>

          {/* Project Featured Image Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#247a62]/80 shadow-2xl bg-[#183f3f]">
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-72 sm:h-80 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d4545] via-transparent to-transparent" />
              <div className="p-6 relative">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Capstone Deliverable
                </span>
                <p className="text-sm font-semibold text-white mt-1">
                  Live Production Deployment + GitHub Repository + Technical
                  Design Doc
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main content column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Problem Statement */}
            <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#115b5b]/20 border border-[#f5b82e]/40 flex items-center justify-center text-[#f5b82e]">
                  <Terminal className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  The Problem Statement
                </h2>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-[#0d4545]/60 p-5 rounded-xl border border-[#0d4545]">
                {project.problemStatement}
              </p>
            </div>

            {/* Expected Outcome */}
            <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Expected Technical Outcome
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.expectedOutcome}
              </p>
            </div>

            {/* Technical Requirements */}
            <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-5 flex items-center gap-2">
                <Code className="w-5 h-5 text-[#f59e0b]" />
                Project Specifications &amp; Requirements
              </h3>
              <div className="space-y-3.5">
                {project.requirements.map((req, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0d4545]/50 border border-[#0d4545]"
                  >
                    <span className="w-6 h-6 rounded-md bg-[#0d4545] text-[#f5b82e] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-slate-200 leading-snug">
                      {req}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Solution Approach */}
            <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-5 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#f5b82e]" />
                Recommended Architecture &amp; Execution Roadmap
              </h3>
              <div className="relative border-l-2 border-[#0d4545] ml-3 pl-6 space-y-6">
                {project.solutionApproach.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#115b5b] border-2 border-[#0d4545]" />
                    <p className="text-sm font-semibold text-white mb-1">
                      {step}
                    </p>
                    <p className="text-xs text-slate-400">
                      Phase {idx + 1} verification milestone
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Skills Acquired Card */}
            <div className="bg-[#183f3f] border border-[#0d4545] rounded-2xl p-6 shadow-xl">
              <h3 className="text-base font-bold text-white mb-4">
                Competencies You Gain
              </h3>
              <div className="space-y-3">
                {project.skillsLearned.map((skill, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-tight">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Course Banner */}
            {relatedCourse && (
              <div className="bg-gradient-to-br from-[#0d4545] to-[#183f3f] border border-[#247a62] rounded-2xl p-6 shadow-xl">
                <span className="text-xs font-bold text-[#f59e0b] uppercase tracking-wider">
                  Guided Learning Path
                </span>
                <h4 className="text-lg font-bold text-white mt-1 mb-2">
                  {relatedCourse.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2 mb-4">
                  {relatedCourse.description}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-5">
                  <span>{relatedCourse.totalDuration}</span>
                  <span className="text-emerald-400 font-bold">
                    ₹{relatedCourse.price.toLocaleString("en-IN")}
                  </span>
                </div>
                <Link
                  to={`/courses/${relatedCourse.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#115b5b] hover:bg-[#0d4545] text-white text-xs font-semibold shadow-md transition-all duration-200"
                >
                  View Course Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {/* Mentorship Support Box */}
            <div className="bg-[#0f172a] border border-[#0d4545] rounded-2xl p-6">
              <h4 className="text-sm font-bold text-white mb-2">
                Stuck during implementation?
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Shield Academy students get access to private Discord channels
                and daily mentor office hours to resolve blockers and code bugs.
              </p>
              <Link
                to="/contact"
                className="text-xs text-[#f5b82e] hover:text-[#7dd3fc] font-semibold flex items-center gap-1"
              >
                Talk to an academic advisor <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Other Projects Preview */}
        <div className="mt-20 pt-12 border-t border-[#0d4545]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Explore More Capstones
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Diversify your engineering portfolio across domains
              </p>
            </div>
            <Link
              to="/projects"
              className="text-xs sm:text-sm font-semibold text-[#f5b82e] hover:text-white flex items-center gap-1 transition-colors"
            >
              All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                className="group bg-[#183f3f] border border-[#0d4545] hover:border-[#3b82f6]/40 rounded-xl overflow-hidden shadow-lg transition-all duration-200 flex flex-col"
              >
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[#f5b82e] text-[10px] font-bold uppercase">
                    {p.tag}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h4 className="text-sm font-bold text-white group-hover:text-[#f5b82e] transition-colors line-clamp-1 mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                    {p.problemStatement}
                  </p>
                  <div className="text-[11px] text-[#f59e0b] font-semibold flex items-center gap-1">
                    Inspect Requirements <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
