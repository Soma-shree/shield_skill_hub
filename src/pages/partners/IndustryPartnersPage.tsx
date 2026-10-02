import React from "react"
import { Link } from "react-router-dom"
import { partnerOrganizations } from "../../data/partnerData"
import Breadcrumbs from "../../components/Breadcrumbs"
import {
  Building2,
  Cpu,
  Layers,
  Award,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Shield,
  Sparkles,
} from "lucide-react"

export default function IndustryPartnersPage() {
  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-24">
      {/* Background ambient radial glow using brand teal and gold */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#247a62]/20 via-[#115b5b]/25 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Industry & Partners" }]} />

        {/* Header / Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#183f3f] border border-[#dbe7e4]/20 text-[#f5b82e] text-xs font-bold uppercase tracking-wider mb-5">
            <Building2 className="w-4 h-4 text-[#f59e0b]" />
            Industry / Partners / Solutions
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            Enterprise Collaborations &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfa51f] via-[#f5b82e] to-[#39a66a]">
              Industrial Testbeds
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#e7f1ef]/85 font-normal leading-relaxed">
            The Industry / Partners branch connects Shield Skill Hub fellows
            directly with verified enterprise partners. From smart manufacturing
            with Rockwell Automation and additive manufacturing with Wipro 3D,
            to sustainable habitats with Saint-Gobain and capital markets with
            Stockathon Academy.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="space-y-8 mb-20">
          {partnerOrganizations.map((partner) => (
            <div
              key={partner.id}
              className="bg-[#183f3f]/90 border border-[#dbe7e4]/20 hover:border-[#f5b82e]/50 rounded-3xl p-6 sm:p-10 shadow-xl transition-all duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Overview Column */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#0d4545] border border-[#f5b82e]/40 text-[#f5b82e] text-xs font-bold uppercase">
                      {partner.domain}
                    </span>
                    <span className="text-xs text-[#39a66a] font-semibold bg-[#0d4545] px-2.5 py-1 rounded-full border border-[#dbe7e4]/15">
                      Verified Blueprint Partner
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-white">
                    {partner.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-[#f5b82e]">
                    {partner.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#e7f1ef]/80 leading-relaxed pt-1">
                    {partner.collaborationFocus}
                  </p>

                  {/* Relevant Technologies */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-[#dbe7e4]/70 uppercase tracking-wider block mb-2">
                      Relevant Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {partner.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-[#0d4545] border border-[#dbe7e4]/15 text-[#e7f1ef] text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Programs & Opportunities Column */}
                <div className="lg:col-span-5 bg-[#0d4545]/80 border border-[#dbe7e4]/15 rounded-2xl p-6 space-y-4">
                  <div>
                    <h3 className="text-xs font-bold text-[#f5b82e] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#f59e0b]" /> Programs
                      &amp; Initiatives:
                    </h3>
                    <div className="space-y-2">
                      {partner.programsOffered.map((prog, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-[#e7f1ef]/90"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#39a66a] shrink-0 mt-0.5" />
                          <span>{prog}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#dbe7e4]/10">
                    <h3 className="text-xs font-bold text-[#39a66a] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#39a66a]" />{" "}
                      Student Opportunities:
                    </h3>
                    <div className="space-y-2">
                      {partner.opportunities.map((opp, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-[#e7f1ef]/80"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f5b82e] shrink-0 mt-1.5" />
                          <span>{opp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Link to Connected Pathway */}
                  <div className="pt-3 border-t border-[#dbe7e4]/10">
                    {partner.relatedPathwayIds.length > 0 && (
                      <Link
                        to={`/emerging-tech`}
                        className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-gradient-to-r from-[#dfa51f] to-[#f5b82e] text-[#172525] text-xs font-bold uppercase tracking-wider shadow-md hover:opacity-95 transition-opacity"
                      >
                        Explore Connected Pathway{" "}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Institution Collaboration Callout */}
        <div className="bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold text-[#f5b82e] uppercase tracking-widest block mb-2">
              For Universities &amp; Colleges
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">
              Want to set up an Industry CoE on Campus?
            </h3>
            <p className="text-xs sm:text-sm text-[#e7f1ef]/80 max-w-xl">
              We help institutions establish Centers of Excellence and sponsored
              research labs with our partner network under formal MOUs and grant
              frameworks.
            </p>
          </div>
          <Link
            to="/institutions/center-of-excellence"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0d4545] hover:bg-[#115b5b] text-white font-bold text-xs uppercase tracking-wider border border-[#f5b82e]/50 shadow-lg transition-colors"
          >
            Explore Center of Excellence Setup &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
