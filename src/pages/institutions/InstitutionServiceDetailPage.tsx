import React, { useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { institutionServices } from "../../data/institutionData"
import Breadcrumbs from "../../components/Breadcrumbs"
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Layers,
  Building2,
  ArrowRight,
  ArrowLeft,
  Send,
  Sparkles,
} from "lucide-react"

export default function InstitutionServiceDetailPage() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>()
  const navigate = useNavigate()

  const [institutionName, setInstitutionName] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [inquirySent, setInquirySent] = useState(false)

  const service = institutionServices.find(
    (s) => s.slug === serviceSlug || s.id === serviceSlug,
  )

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0d4545] pt-32 pb-20 text-slate-100 flex items-center justify-center">
        <div className="text-center max-w-md p-8 bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">
            Service Not Found
          </h2>
          <p className="text-[#e7f1ef]/70 text-sm mb-6">
            The institutional service or activity requested was not found in our
            blueprint repository.
          </p>
          <Link
            to="/institutions"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#dfa51f] to-[#f5b82e] text-[#172525] font-bold text-xs uppercase"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Institutions
          </Link>
        </div>
      </div>
    )
  }

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault()
    setInquirySent(true)
  }

  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-24">
      {/* Background ambient radial glow using brand teal and gold */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-1/4 w-[850px] h-[500px] bg-gradient-to-b from-[#247a62]/20 via-[#115b5b]/25 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Institutions", to: "/institutions" },
            { label: service.name },
          ]}
        />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#183f3f] border border-[#dbe7e4]/20 text-[#f5b82e] text-xs font-bold uppercase tracking-wider">
                {service.flowchartGroup === "core"
                  ? "Core Institutional Pillar"
                  : "Campus Activity"}
              </span>
              <span className="text-xs text-[#39a66a] font-semibold bg-[#0d4545] px-2.5 py-1 rounded-full border border-[#dbe7e4]/15">
                NEP &amp; NBA Aligned
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {service.name}
            </h1>

            <p className="text-sm sm:text-base font-semibold text-[#f5b82e] uppercase tracking-wider">
              {service.tagline}
            </p>

            <p className="text-base sm:text-lg text-[#e7f1ef]/85 font-normal leading-relaxed pt-2">
              {service.description}
            </p>

            {/* Eligible Departments */}
            <div className="pt-2">
              <span className="text-xs font-bold text-[#dbe7e4]/70 uppercase tracking-wider block mb-2">
                Eligible Campus Departments:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {service.eligibleDepartments.map((dept) => (
                  <span
                    key={dept}
                    className="px-2.5 py-1 rounded-lg bg-[#183f3f] border border-[#dbe7e4]/15 text-[#e7f1ef] text-xs font-mono"
                  >
                    {dept}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Proposal Box */}
          <div className="lg:col-span-4 bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-base font-bold text-white mb-2">
              Request Institutional Deck
            </h3>
            <p className="text-xs text-[#e7f1ef]/70 mb-4">
              Get detailed curriculum syllabi, MOU templates, and CoE
              infrastructure specifications.
            </p>

            {inquirySent ? (
              <div className="p-4 rounded-2xl bg-[#0d4545] border border-[#39a66a]/40 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#39a66a] mx-auto" />
                <p className="text-xs font-bold text-white">Inquiry Received</p>
                <p className="text-[11px] text-[#e7f1ef]/80">
                  Our Academic Director will contact {contactEmail} within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquiry} className="space-y-3">
                <input
                  type="text"
                  required
                  value={institutionName}
                  onChange={(e) => setInstitutionName(e.target.value)}
                  placeholder="College / University Name"
                  className="w-full bg-[#0d4545] border border-[#dbe7e4]/20 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#f5b82e]"
                />
                <input
                  type="email"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="Official Email (e.g. dean@college.edu)"
                  className="w-full bg-[#0d4545] border border-[#dbe7e4]/20 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#f5b82e]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#dfa51f] to-[#f5b82e] text-[#172525] font-extrabold text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition-opacity cursor-pointer"
                >
                  Send Proposal Request
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Benefits & Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Key Benefits */}
          <div className="bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#f59e0b]" /> Key Benefits to
              Institution
            </h3>
            <div className="space-y-3.5">
              {service.keyBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0d4545]/70 border border-[#dbe7e4]/10"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#39a66a] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-white font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement Process */}
          <div className="bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#39a66a]" /> Engagement &amp;
              Execution Process
            </h3>
            <div className="relative border-l-2 border-[#dbe7e4]/20 ml-3 pl-6 space-y-6">
              {service.engagementProcess.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#f5b82e] border-2 border-[#0d4545]" />
                  <p className="text-xs font-bold text-[#f5b82e] uppercase">
                    Step 0{idx + 1}
                  </p>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {step}
                  </p>
                </div>
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
            to="/institutions"
            className="text-xs font-bold text-[#f5b82e] hover:underline"
          >
            Back to Institutions Overview &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
