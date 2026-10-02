import React from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { technologyPathways } from "../../data/technologyPathways"
import { coursesData } from "../../data/courses"
import { projectsData } from "../../data/projects"
import { internshipTracks } from "../../data/internshipData"
import Breadcrumbs from "../../components/Breadcrumbs"
import {
  Cpu,
  GraduationCap,
  CheckCircle2,
  Code2,
  Layers,
  Briefcase,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookOpen,
  Building2,
} from "lucide-react"

export default function PathwayDetailPage() {
  const { pathwaySlug } = useParams<{ pathwaySlug: string }>()
  const navigate = useNavigate()

  const pathway = technologyPathways.find(
    (p) => p.slug === pathwaySlug || p.id === pathwaySlug,
  )

  if (!pathway) {
    return (
      <div className="min-h-screen bg-[#0d4545] pt-32 pb-20 text-slate-100 flex items-center justify-center">
        <div className="text-center max-w-md p-8 bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">
            Pathway Not Found
          </h2>
          <p className="text-[#e7f1ef]/70 text-sm mb-6">
            The technology pathway you are looking for does not exist in our
            blueprint.
          </p>
          <Link
            to="/emerging-tech"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#dfa51f] to-[#f5b82e] text-[#172525] font-bold text-xs uppercase"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Emerging Tech
          </Link>
        </div>
      </div>
    )
  }

  // Cross-reference data
  const relatedCourses = coursesData.filter((c) =>
    pathway.relatedCourseIds.includes(c.id),
  )
  const relatedProjects = projectsData.filter((p) =>
    pathway.relatedProjectIds.includes(p.id),
  )
  const relatedInternships = internshipTracks.filter((it) =>
    pathway.relatedInternshipIds.includes(it.id),
  )

  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-24">
      {/* Background ambient radial glow using brand teal and gold */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-1/4 w-[850px] h-[500px] bg-gradient-to-b from-[#247a62]/20 via-[#115b5b]/25 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            {
              label:
                pathway.category === "Emerging Tech"
                  ? "Emerging Tech"
                  : "Non Tech",
              to:
                pathway.category === "Emerging Tech"
                  ? "/emerging-tech"
                  : "/non-tech",
            },
            { label: pathway.name },
          ]}
        />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#183f3f] border border-[#dbe7e4]/20 text-[#f5b82e] text-xs font-bold uppercase tracking-wider">
                {pathway.tag}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#0d4545] border border-[#39a66a]/40 text-[#39a66a] text-xs font-bold uppercase">
                {pathway.category}
              </span>
              {pathway.partnerOrg && (
                <span className="px-3 py-1 rounded-full bg-[#183f3f] border border-[#f5b82e]/40 text-white text-xs font-semibold">
                  Partner: {pathway.partnerOrg}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {pathway.name}
            </h1>

            <p className="text-base sm:text-lg text-[#e7f1ef]/85 font-normal leading-relaxed pt-1">
              {pathway.overview}
            </p>

            {/* Who can join box */}
            <div className="p-4 rounded-2xl bg-[#183f3f] border border-[#dbe7e4]/20 flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[#f5b82e] uppercase tracking-wider block mb-1">
                  Who Can Join &amp; Eligibility:
                </span>
                <p className="text-xs sm:text-sm text-white leading-relaxed">
                  {pathway.whoCanJoin}
                </p>
              </div>
            </div>

            {/* Target Disciplines */}
            <div className="pt-2">
              <span className="text-xs font-bold text-[#dbe7e4]/70 uppercase tracking-wider block mb-2">
                Eligible Disciplines (From Blueprint):
              </span>
              <div className="flex flex-wrap gap-2">
                {pathway.disciplines.map((d) => (
                  <span
                    key={d}
                    className="px-3 py-1 rounded-lg bg-[#183f3f] border border-[#dbe7e4]/15 text-[#e7f1ef] text-xs font-mono font-bold"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to={`/courses?pathway=${pathway.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#dfa51f] to-[#f5b82e] hover:from-[#f5b82e] hover:to-[#dfa51f] text-[#172525] font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                Enroll in Related Course <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/internships"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#183f3f] hover:bg-[#115b5b] text-white font-bold text-xs uppercase tracking-wider border border-[#dbe7e4]/20 transition-colors"
              >
                Internship Sprints
              </Link>
            </div>
          </div>

          {/* Right Summary Card */}
          <div className="lg:col-span-4 bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-bold text-[#f5b82e] uppercase tracking-wider block mb-2">
                Technology Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {pathway.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-[#0d4545] border border-[#dbe7e4]/15 text-[#e7f1ef] text-xs font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#dbe7e4]/15">
              <span className="text-xs font-bold text-[#f5b82e] uppercase tracking-wider block mb-2">
                Career &amp; Application Areas:
              </span>
              <div className="space-y-1.5">
                {pathway.careerAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-[#e7f1ef]/90"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#39a66a] shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section: Learning Pathway & Skills Covered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Learning Pathway Roadmap */}
          <div className="bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#f59e0b]" />
              Structured Learning Pathway
            </h3>
            <div className="relative border-l-2 border-[#dbe7e4]/20 ml-3 pl-6 space-y-6">
              {pathway.learningPathway.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#f5b82e] border-2 border-[#0d4545]" />
                  <p className="text-xs font-bold text-[#f5b82e] uppercase">
                    Stage 0{idx + 1}
                  </p>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies & Skills Covered */}
          <div className="bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-[#39a66a]" />
              Skills &amp; Competencies Acquired
            </h3>
            <div className="space-y-3.5">
              {pathway.skillsCovered.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#0d4545]/70 border border-[#dbe7e4]/10"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#39a66a] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-white font-medium">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section: Possible Industry Projects */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#f59e0b] uppercase tracking-widest">
              Tangible Proof of Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Possible Production Capstones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pathway.possibleProjects.map((projTitle, idx) => (
              <div
                key={idx}
                className="bg-[#183f3f] border border-[#dbe7e4]/20 rounded-2xl p-6 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <span className="w-7 h-7 rounded-lg bg-[#0d4545] text-[#f5b82e] text-xs font-black flex items-center justify-center mb-3">
                    0{idx + 1}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-2">
                    {projTitle}
                  </h4>
                  <p className="text-xs text-[#e7f1ef]/70 leading-relaxed mb-4">
                    Simulates authentic commercial constraints, code reviews,
                    and containerized deployment.
                  </p>
                </div>
                <Link
                  to="/projects"
                  className="text-xs text-[#f5b82e] font-bold hover:underline flex items-center gap-1"
                >
                  Inspect Project Problem &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Interconnected Courses, Projects & Internships */}
        <div className="bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl p-8 sm:p-10 shadow-2xl mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#dbe7e4]/15">
            <div>
              <span className="text-xs font-bold text-[#f5b82e] uppercase tracking-wider block">
                Connected Ecosystem
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Courses, Projects &amp; Internships for this Pathway
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Related Courses */}
            <div>
              <h4 className="text-xs font-bold text-[#39a66a] uppercase tracking-wider mb-4 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" /> Recommended Courses
              </h4>
              <div className="space-y-3">
                {relatedCourses.map((c) => (
                  <Link
                    key={c.id}
                    to={`/courses/${c.id}`}
                    className="block p-3.5 rounded-xl bg-[#0d4545] hover:bg-[#115b5b] border border-[#dbe7e4]/10 transition-colors"
                  >
                    <p className="text-xs font-bold text-white mb-1 line-clamp-1">
                      {c.title}
                    </p>
                    <span className="text-[11px] text-[#f5b82e] font-semibold">
                      ₹{c.price.toLocaleString("en-IN")} • {c.duration}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Projects */}
            <div>
              <h4 className="text-xs font-bold text-[#f5b82e] uppercase tracking-wider mb-4 flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> Capstone Specifications
              </h4>
              <div className="space-y-3">
                {relatedProjects.map((p) => (
                  <Link
                    key={p.id}
                    to={`/projects/${p.id}`}
                    className="block p-3.5 rounded-xl bg-[#0d4545] hover:bg-[#115b5b] border border-[#dbe7e4]/10 transition-colors"
                  >
                    <p className="text-xs font-bold text-white mb-1 line-clamp-1">
                      {p.title}
                    </p>
                    <span className="text-[11px] text-[#39a66a] font-semibold">
                      {p.difficulty} • {p.estimatedHours}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Internships */}
            <div>
              <h4 className="text-xs font-bold text-[#39a66a] uppercase tracking-wider mb-4 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" /> Placement &amp; Internships
              </h4>
              <div className="space-y-3">
                {relatedInternships.map((it) => (
                  <Link
                    key={it.id}
                    to={it.route}
                    className="block p-3.5 rounded-xl bg-[#0d4545] hover:bg-[#115b5b] border border-[#dbe7e4]/10 transition-colors"
                  >
                    <p className="text-xs font-bold text-white mb-1 line-clamp-1">
                      {it.name}
                    </p>
                    <span className="text-[11px] text-[#e7f1ef]/70">
                      {it.duration}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-[#dbe7e4]/15 pt-8 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#e7f1ef] hover:text-[#f5b82e] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Previous Page
          </button>
          <Link
            to="/emerging-tech"
            className="text-xs font-bold text-[#f5b82e] hover:underline"
          >
            Explore All 7 Emerging Tech Tracks &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
