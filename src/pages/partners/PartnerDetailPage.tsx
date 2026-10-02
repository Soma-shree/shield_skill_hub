import React from "react"
import { useParams, Link } from "react-router-dom"
import {
  skillHubFlowchartData,
  FlowchartPartner,
} from "../../data/skillHubData"
import Breadcrumbs from "../../components/Breadcrumbs"
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  Layers,
  GraduationCap,
} from "lucide-react"
import "../../styles/comicEditorial.css"

export default function PartnerDetailPage() {
  const { partnerId } = useParams<{ partnerId: string }>()

  const partner = skillHubFlowchartData.partners.find(
    (p) =>
      p.id === partnerId ||
      p.partnerRoute.endsWith(`/${partnerId}`) ||
      p.id.replace(/-/g, "") === (partnerId || "").replace(/-/g, ""),
  )

  if (!partner) {
    return (
      <div className="min-h-screen bg-[#0d4545] pt-32 pb-20 text-slate-100 flex items-center justify-center">
        <div className="comic-panel-card p-8 max-w-md text-center bg-[#FAF8F3]">
          <div className="w-12 h-12 rounded-full bg-[#f5b82e] border-2 border-[#172525] flex items-center justify-center mx-auto mb-4 text-xl">
            🏛️
          </div>
          <h2 className="text-xl font-black text-[#172525] mb-2 uppercase">
            Partner Profile Not Found
          </h2>
          <p className="text-xs text-[#536363] font-medium mb-6">
            The requested corporate or university partner does not exist in our
            ecosystem directory.
          </p>
          <Link to="/#master-map" className="comic-btn-gold">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Master Map</span>
          </Link>
        </div>
      </div>
    )
  }

  // Find linked technology courses
  const allTechnologies = [
    ...skillHubFlowchartData.emergingTech.items,
    ...skillHubFlowchartData.nonTech.items,
  ]

  const mappedTechnologies = allTechnologies.filter((t) =>
    partner.mappedCourseIds.includes(t.id),
  )

  return (
    <div className="min-h-screen bg-[#0d4545] text-slate-100 font-['Manrope',sans-serif] pt-28 pb-24">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Master Architecture", href: "/#master-map" },
            { label: "Partners", href: "/#master-map" },
            { label: partner.name },
          ]}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner Hero Editorial Panel */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FBF8F3] text-[#172525] border-3 border-[#172525] shadow-[6px_6px_0_#172525] mb-10 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="comic-chapter-badge">
              <span className="dot" />
              <span>ACCREDITED INDUSTRY PARTNER</span>
            </div>

            <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-[#ECE5DA] border-2 border-[#172525] text-[#172525]">
              {partner.courses.length > 0
                ? "Verified Corporate Pathway"
                : "Ecosystem Partner"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#172525] tracking-tight leading-tight mb-4">
            {partner.name}
          </h1>

          <p className="text-base sm:text-lg text-[#536363] font-medium max-w-3xl leading-relaxed mb-6">
            {partner.tagline}
          </p>

          <div className="p-4 rounded-2xl bg-[#ffffff] border-2 border-[#172525] max-w-3xl">
            <div className="text-[10px] font-black uppercase text-[#8C652E] mb-1">
              COLLABORATION FOCUS
            </div>
            <p className="text-xs text-[#172525] font-semibold leading-relaxed">
              {partner.collaborationFocus}
            </p>
          </div>
        </div>

        {/* Courses Provided by this Partner */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-black text-white">
                Co-Designed Curriculum & Specializations
              </h2>
              <p className="text-xs text-[#e7f1ef]/70 mt-1">
                Courses structured and verified in alignment with {partner.name}{" "}
                industry requirements.
              </p>
            </div>
          </div>

          {partner.courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mappedTechnologies.map((tech) => (
                <div
                  key={tech.id}
                  className="comic-panel-card p-6 sm:p-8 bg-[#FAF8F5] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-black bg-[#0d4545] text-[#f5b82e]">
                        {tech.domainPill}
                      </span>
                      <span className="text-[10px] font-black text-[#10b981] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Accredited Track
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-[#172525] mb-2">
                      {tech.label}
                    </h3>
                    <p className="text-xs text-[#536363] leading-relaxed mb-6">
                      {tech.overview}
                    </p>

                    <div className="text-[10px] font-black uppercase text-[#8C652E] mb-2 tracking-wider">
                      ELIGIBLE BRANCHES:
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {tech.whoCanJoin.map((b) => (
                        <span
                          key={b}
                          className="px-2 py-0.5 rounded-md bg-[#ECE5DA] border border-[#172525]/20 text-[10px] font-bold text-[#172525]"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={tech.targetRoute}
                    className="comic-btn-gold text-xs self-start"
                  >
                    <span>View Specialized Pathway</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            /* Unmapped Partner State (Saint-Gobain, ISHRAE, Academic Seals) */
            <div className="p-8 rounded-3xl bg-[#FAF8F5] text-[#172525] border-3 border-[#172525] shadow-[6px_6px_0_#172525] text-center max-w-2xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-[#f5b82e] border-2 border-[#172525] flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-6 h-6 text-[#172525]" />
              </div>
              <h3 className="text-xl font-black text-[#172525] mb-2 uppercase">
                Courses Coming Soon — Partnership Track Finalizing
              </h3>
              <p className="text-xs text-[#536363] font-medium leading-relaxed mb-6">
                {/* TODO: confirm courses */}
                Direct course offerings for <b>{partner.name}</b> are not
                specified in the original blueprint diagram. Joint technical
                seminars and problem statements are currently in active
                development.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECE5DA] border border-[#C9A978] text-[10px] font-black text-[#8C652E]">
                <span>STATUS:</span>
                <span>
                  // TODO: confirm courses from partner advisory council
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Programs Offered */}
        <div className="comic-panel-card p-6 sm:p-8 bg-[#FAF8F5] mb-12">
          <h3 className="text-lg font-black text-[#172525] mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#8C652E]" />
            Institutional Collaboration Programs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {partner.programsOffered.map((prog) => (
              <div
                key={prog}
                className="p-3.5 rounded-xl bg-[#ffffff] border border-[#172525]/20 flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                <span className="text-xs font-bold text-[#172525]">{prog}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Return */}
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
