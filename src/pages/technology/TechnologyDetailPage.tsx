import React from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import {
  skillHubFlowchartData,
  FlowchartCourseItem,
} from "../../data/skillHubData"
import { coursesData } from "../../data/courses"
import { projectsData } from "../../data/projects"
import Breadcrumbs from "../../components/Breadcrumbs"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Layers,
  Code2,
  Briefcase,
  Sparkles,
  Building2,
  AlertCircle,
} from "lucide-react"
import "../../styles/comicEditorial.css"

export default function TechnologyDetailPage() {
  const { technologyId } = useParams<{ technologyId: string }>()
  const navigate = useNavigate()

  // Find technology in skillHubFlowchartData (Emerging Tech or Non Tech)
  const allTechnologies: FlowchartCourseItem[] = [
    ...skillHubFlowchartData.emergingTech.items,
    ...skillHubFlowchartData.nonTech.items,
  ]

  // Allow lookup by ID or slug variants
  const technology = allTechnologies.find(
    (t) =>
      t.id === technologyId ||
      t.targetRoute.endsWith(`/${technologyId}`) ||
      t.id.replace(/-/g, "") === (technologyId || "").replace(/-/g, ""),
  )

  if (!technology) {
    return (
      <div className="min-h-screen bg-[#0d4545] pt-32 pb-20 text-slate-100 flex items-center justify-center">
        <div className="comic-panel-card p-8 max-w-md text-center bg-[#FAF8F3]">
          <div className="w-12 h-12 rounded-full bg-[#f5b82e] border-2 border-[#172525] flex items-center justify-center mx-auto mb-4 text-xl">
            🧭
          </div>
          <h2 className="text-xl font-black text-[#172525] mb-2 uppercase">
            Technology Track Not Found
          </h2>
          <p className="text-xs text-[#536363] font-medium mb-6">
            The requested specialization pathway does not exist in our
            curriculum blueprint.
          </p>
          <Link to="/#master-map" className="comic-btn-gold">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Master Architecture</span>
          </Link>
        </div>
      </div>
    )
  }

  // Cross-reference mapped partner
  const partner = technology.partnerId
    ? skillHubFlowchartData.partners.find((p) => p.id === technology.partnerId)
    : null

  // Cross-reference courses and projects
  const matchedCourses = coursesData.filter((c) =>
    technology.recommendedCourseIds.includes(c.id),
  )

  const matchedProjects = projectsData.filter((p) =>
    technology.recommendedProjectIds.includes(p.id),
  )

  return (
    <div className="min-h-screen bg-[#0d4545] text-slate-100 font-['Manrope',sans-serif] pt-28 pb-24">
      {/* Breadcrumbs Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Master Architecture", href: "/#master-map" },
            { label: technology.label },
          ]}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hero Editorial Panel */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FBF8F3] text-[#172525] border-3 border-[#172525] shadow-[6px_6px_0_#172525] mb-10 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="comic-chapter-badge">
              <span className="dot" />
              <span>SPECIALIZED DOMAIN PATHWAY</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-[#ECE5DA] border-2 border-[#172525] text-[#172525]">
                Domain Eligibility: {technology.domainPill}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#172525] tracking-tight leading-tight mb-4">
            {technology.label}
          </h1>

          <p className="text-base sm:text-lg text-[#536363] font-medium max-w-3xl leading-relaxed mb-8">
            {technology.tagline}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t-2 border-[#172525]/20">
            <div className="p-3.5 rounded-2xl bg-[#ffffff] border-2 border-[#172525]">
              <div className="text-[10px] font-black uppercase text-[#8C652E]">
                TRACK TYPE
              </div>
              <div className="text-sm font-extrabold text-[#172525]">
                Industry Specialization
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#ffffff] border-2 border-[#172525]">
              <div className="text-[10px] font-black uppercase text-[#8C652E]">
                ACCREDITATION
              </div>
              <div className="text-sm font-extrabold text-[#172525]">
                {partner
                  ? `Corporate Partner: ${partner.name}`
                  : "Shield Academy Open Track"}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#ffffff] border-2 border-[#172525]">
              <div className="text-[10px] font-black uppercase text-[#8C652E]">
                COMPLETION TIME
              </div>
              <div className="text-sm font-extrabold text-[#172525]">
                12-16 Weeks Project-First
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Who is this for + Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Column 1: "IS THIS FOR ME?" (Recommended For) */}
          <div className="comic-panel-card p-6 sm:p-8 bg-[#FAF8F5]">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-[#0d4545] text-[#f5b82e]">
                <GraduationCap className="w-4 h-4" />
              </span>
              <h2 className="text-sm font-black uppercase tracking-wider text-[#172525]">
                IS THIS FOR ME?
              </h2>
            </div>

            <p className="text-xs text-[#536363] font-semibold mb-4">
              Students and graduates from the following branches are eligible to
              enroll:
            </p>

            {/* Checkmarked list taken VERBATIM from that item's domain pill */}
            <div className="space-y-2 mb-6">
              {technology.whoCanJoin.map((branch) => (
                <div
                  key={branch}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#ffffff] border border-[#172525]/20 shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span className="text-xs font-black text-[#172525]">
                    {branch}
                  </span>
                </div>
              ))}
            </div>

            {/* Partner Connection Box */}
            {partner ? (
              <div className="p-4 rounded-2xl bg-[#f5b82e]/20 border-2 border-[#172525] mb-4">
                <div className="text-[10px] font-black uppercase text-[#8C652E] mb-1">
                  INDUSTRY PARTNER CO-DESIGNED
                </div>
                <div className="text-xs font-black text-[#172525]">
                  {partner.name}
                </div>
                <p className="text-[11px] text-[#536363] font-medium mt-1">
                  {partner.collaborationFocus}
                </p>
                <Link
                  to={partner.partnerRoute}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#0d4545] hover:text-[#f5b82e] mt-3"
                >
                  <span>View Partner Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#C9A978] mb-4">
                <div className="flex items-center gap-1.5 text-[10px] font-black uppercase text-[#8C652E]">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>INDUSTRY SPONSOR STATUS</span>
                </div>
                <p className="text-[11px] text-[#536363] font-medium mt-1">
                  {/* TODO: assign partner */}
                  This pathway is currently led by Shield Enterprise Labs while
                  dedicated partner sponsorship is finalizing.
                </p>
              </div>
            )}

            <Link
              to="/internships"
              className="comic-btn-gold w-full text-center"
            >
              <span>EXPLORE INTERNSHIPS</span>
              <Briefcase className="w-4 h-4" />
            </Link>
          </div>

          {/* Column 2: Overview & Sub-topics (2 Columns wide) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview & Core Skills */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#183f3f] border-2 border-[#dbe7e4]/20 text-slate-100">
              <h3 className="text-xl font-black text-white mb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#f5b82e]" />
                Domain Overview & Practical Skills
              </h3>
              <p className="text-sm text-[#e7f1ef]/85 leading-relaxed mb-6">
                {technology.overview}
              </p>

              <h4 className="text-xs font-black uppercase tracking-wider text-[#f5b82e] mb-3">
                KEY COMPETENCIES COVERED
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {technology.skillsCovered.map((skill) => (
                  <div
                    key={skill}
                    className="p-3 rounded-xl bg-[#0d4545] border border-[#dbe7e4]/15 flex items-start gap-2"
                  >
                    <span className="text-[#f5b82e] font-black text-sm">✓</span>
                    <span className="text-xs font-semibold text-white">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              <h4 className="text-xs font-black uppercase tracking-wider text-[#f5b82e] mb-3">
                TECHNOLOGY STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {technology.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-bold bg-[#115b5b] text-white border border-[#dbe7e4]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Special Sub-Topics for ABC & Quantum */}
            {technology.subTopics && (
              <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] text-[#172525] border-3 border-[#172525] shadow-[5px_5px_0_#172525]">
                <div className="comic-chapter-badge">
                  <span className="dot" />
                  <span>FRONTIER CONVERGENCE PILLARS</span>
                </div>
                <h3 className="text-xl font-black text-[#172525] mb-2">
                  Integrated Frontier Sub-Topics
                </h3>
                <p className="text-xs text-[#536363] font-medium mb-6">
                  The ABC & Quantum curriculum synthesizes four cornerstone
                  domains into one mastery track:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {technology.subTopics.map((sub) => (
                    <div
                      key={sub.title}
                      className="p-4 rounded-2xl bg-[#ffffff] border-2 border-[#172525] shadow-xs"
                    >
                      <h4 className="text-xs font-black text-[#0d4545] mb-1.5 uppercase">
                        {sub.title}
                      </h4>
                      <p className="text-[11px] text-[#536363] font-medium leading-relaxed">
                        {sub.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Career & Industry Applications */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] text-[#172525] border-3 border-[#172525] shadow-[5px_5px_0_#172525]">
              <h3 className="text-lg font-black text-[#172525] mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#8C652E]" />
                Industry Roles & Career Trajectories
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {technology.careerRoles.map((role) => (
                  <div
                    key={role}
                    className="p-3.5 rounded-xl bg-[#ffffff] border border-[#172525]/20 flex items-center gap-2.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#f5b82e]" />
                    <span className="text-xs font-extrabold text-[#172525]">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Courses & Projects Section */}
        <div className="mb-14">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl font-black text-white">
              Recommended Courses in this Pathway
            </h3>
            <p className="text-xs text-[#e7f1ef]/70 mt-1">
              Curriculum progression linking foundational theory to capstone
              builds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {matchedCourses.map((c) => (
              <div
                key={c.id}
                className="comic-panel-card p-6 bg-[#FAF8F5] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#0d4545] text-[#f5b82e]">
                      {c.category}
                    </span>
                    <span className="text-xs font-bold text-[#536363]">
                      {c.duration}
                    </span>
                  </div>
                  <h4 className="text-base font-black text-[#172525] mb-2">
                    {c.title}
                  </h4>
                  <p className="text-xs text-[#536363] leading-relaxed mb-4">
                    {c.description}
                  </p>
                </div>
                <Link
                  to={`/courses/${c.id}`}
                  className="comic-btn-gold text-xs self-start"
                >
                  <span>Explore Course Curriculum</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Return Button */}
        <div className="text-center pt-8 border-t border-[#dbe7e4]/20">
          <Link
            to="/#master-map"
            className="comic-btn-gold inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Master Architecture Map</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
