import React from "react"
import { useParams, Link } from "react-router-dom"
import { institutionServices } from "../../data/institutionData"
import Breadcrumbs from "../../components/Breadcrumbs"
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  GraduationCap,
  Layers,
  Sparkles,
} from "lucide-react"
import "../../styles/comicEditorial.css"

export default function InstitutionDetailPage() {
  const { institutionId } = useParams<{ institutionId: string }>()

  const service = institutionServices.find(
    (s) =>
      s.id === institutionId ||
      s.slug === institutionId ||
      s.id.replace(/-/g, "") === (institutionId || "").replace(/-/g, ""),
  )

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0d4545] pt-32 pb-20 text-slate-100 flex items-center justify-center">
        <div className="comic-panel-card p-8 max-w-md text-center bg-[#FAF8F3]">
          <div className="w-12 h-12 rounded-full bg-[#f5b82e] border-2 border-[#172525] flex items-center justify-center mx-auto mb-4 text-xl">
            🏛️
          </div>
          <h2 className="text-xl font-black text-[#172525] mb-2 uppercase">
            Institutional Track Not Found
          </h2>
          <p className="text-xs text-[#536363] font-medium mb-6">
            The requested institutional engagement model does not exist in our
            directory.
          </p>
          <Link to="/#institutions" className="comic-btn-gold">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Institutional Ecosystem</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0d4545] text-slate-100 font-['Manrope',sans-serif] pt-28 pb-24">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Institutions", href: "/#institutions" },
            { label: service.name },
          ]}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Editorial Panel */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FBF8F3] text-[#172525] border-3 border-[#172525] shadow-[6px_6px_0_#172525] mb-10 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="comic-chapter-badge">
              <span className="dot" />
              <span>CHAPTER 06 / INSTITUTIONAL EXCELLENCE</span>
            </div>

            <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-[#ECE5DA] border-2 border-[#172525] text-[#172525]">
              Category: {service.flowchartGroup.toUpperCase()}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#172525] tracking-tight leading-tight mb-4">
            {service.name}
          </h1>

          <p className="text-base sm:text-lg text-[#536363] font-medium max-w-3xl leading-relaxed mb-6">
            {service.tagline}
          </p>

          <p className="text-xs sm:text-sm text-[#172525] font-semibold max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Benefits & Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Key Benefits */}
          <div className="comic-panel-card p-6 sm:p-8 bg-[#FAF8F5]">
            <h3 className="text-lg font-black text-[#172525] mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#f5b82e]" />
              Key Strategic Outcomes
            </h3>
            <div className="space-y-3">
              {service.keyBenefits.map((benefit, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-[#ffffff] border border-[#172525]/20 flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-[#f5b82e] text-[#172525] font-black text-xs flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-xs font-bold text-[#172525] leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement Process */}
          <div className="comic-panel-card p-6 sm:p-8 bg-[#FAF8F5]">
            <h3 className="text-lg font-black text-[#172525] mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#8C652E]" />
              Institutional Rollout Phases
            </h3>
            <div className="space-y-3">
              {service.engagementProcess.map((step, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-[#ffffff] border border-[#172525]/20 flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-[#0d4545] text-white font-black text-xs flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-xs font-bold text-[#172525] leading-relaxed">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Eligible Departments */}
        <div className="comic-panel-card p-6 sm:p-8 bg-[#FAF8F5] mb-12">
          <h3 className="text-lg font-black text-[#172525] mb-3 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#8C652E]" />
            Eligible Academic Departments
          </h3>
          <div className="flex flex-wrap gap-2">
            {service.eligibleDepartments.map((dept) => (
              <span
                key={dept}
                className="px-3.5 py-1 rounded-full text-xs font-black bg-[#ECE5DA] border border-[#172525]/20 text-[#172525]"
              >
                {dept}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation Return */}
        <div className="text-center pt-8 border-t border-[#dbe7e4]/20">
          <Link
            to="/#institutions"
            className="comic-btn-gold inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Institutional Ecosystem</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
