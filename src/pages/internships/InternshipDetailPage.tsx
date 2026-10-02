import React from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { internshipTracks } from "../../data/internshipData"
import { coursesData } from "../../data/courses"
import { projectsData } from "../../data/projects"
import Breadcrumbs from "../../components/Breadcrumbs"
import {
  Briefcase,
  GraduationCap,
  Clock,
  Award,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Layers,
  BookOpen,
} from "lucide-react"

export default function InternshipDetailPage() {
  const { trackSlug } = useParams<{ trackSlug: string }>()
  const navigate = useNavigate()

  const track = internshipTracks.find(
    (it) => it.slug === trackSlug || it.id === trackSlug,
  )

  if (!track) {
    return (
      <div className="min-h-screen bg-[#0d4545] pt-32 pb-20 text-slate-100 flex items-center justify-center">
        <div className="text-center max-w-md p-8 bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">
            Track Not Found
          </h2>
          <p className="text-[#e7f1ef]/70 text-sm mb-6">
            The internship or placement track you requested could not be located
            in our blueprint repository.
          </p>
          <Link
            to="/internships"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#dfa51f] to-[#f5b82e] text-[#172525] font-bold text-xs uppercase"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Internships
          </Link>
        </div>
      </div>
    )
  }

  const relatedCourses = coursesData.filter((c) =>
    track.relatedCourseIds.includes(c.id),
  )
  const relatedProjects = projectsData.filter((p) =>
    track.relatedProjectIds.includes(p.id),
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
            { label: "Internships & Placement", to: "/internships" },
            { label: track.name },
          ]}
        />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#183f3f] border border-[#dbe7e4]/20 text-[#f5b82e] text-xs font-bold uppercase tracking-wider">
                {track.category}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d4545] border border-[#39a66a]/40 text-[#39a66a] text-xs font-medium">
                <Clock className="w-3.5 h-3.5" /> {track.duration}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {track.name}
            </h1>

            <p className="text-base sm:text-lg text-[#e7f1ef]/85 font-normal leading-relaxed pt-1">
              {track.description}
            </p>

            <div className="p-4 rounded-2xl bg-[#183f3f] border border-[#dbe7e4]/20">
              <span className="text-xs font-bold text-[#f5b82e] uppercase tracking-wider block mb-1">
                Stipend / Academic Credit Model:
              </span>
              <p className="text-sm font-semibold text-white">
                {track.stipendOrCredit}
              </p>
            </div>

            {/* Target Disciplines */}
            <div className="pt-2">
              <span className="text-xs font-bold text-[#dbe7e4]/70 uppercase tracking-wider block mb-2">
                Eligible Disciplines (From Blueprint):
              </span>
              <div className="flex flex-wrap gap-2">
                {track.disciplines.map((d) => (
                  <span
                    key={d}
                    className="px-3 py-1 rounded-lg bg-[#183f3f] border border-[#dbe7e4]/15 text-[#e7f1ef] text-xs font-mono font-bold"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#dfa51f] to-[#f5b82e] hover:from-[#f5b82e] hover:to-[#dfa51f] text-[#172525] font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                Submit Track Application <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#183f3f] hover:bg-[#115b5b] text-white font-bold text-xs uppercase tracking-wider border border-[#dbe7e4]/20 transition-colors"
              >
                View Capstone Requirements
              </Link>
            </div>
          </div>

          {/* Right Summary Card */}
          <div className="lg:col-span-4 bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-bold text-[#f5b82e] uppercase tracking-wider block mb-2">
                Key Skills Developed:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {track.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-lg bg-[#0d4545] border border-[#dbe7e4]/15 text-[#e7f1ef] text-xs font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#dbe7e4]/15">
              <span className="text-xs font-bold text-[#39a66a] uppercase tracking-wider block mb-2">
                Candidate Prerequisites:
              </span>
              <div className="space-y-1.5">
                {track.prerequisites.map((p, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-[#e7f1ef]/90"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#39a66a] shrink-0" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl p-8 sm:p-10 shadow-2xl mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-[#f59e0b]" /> Core Track Deliverables
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {track.deliverables.map((deliv, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0d4545]/80 border border-[#dbe7e4]/15 flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-md bg-[#183f3f] text-[#f5b82e] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-white leading-relaxed">
                  {deliv}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-Link Courses & Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Related Courses */}
          <div className="bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h4 className="text-xs font-bold text-[#39a66a] uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> Recommended Prep Courses
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
          <div className="bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h4 className="text-xs font-bold text-[#f5b82e] uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Capstones for this Track
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
            to="/internships"
            className="text-xs font-bold text-[#f5b82e] hover:underline"
          >
            Back to Internships Overview &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
