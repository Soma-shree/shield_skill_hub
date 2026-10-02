import React from "react"
import { Link } from "react-router-dom"
import { generalTopics } from "../../data/generalData"
import Breadcrumbs from "../../components/Breadcrumbs"
import {
  Compass,
  Brain,
  Shield,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react"

export default function GeneralHubPage() {
  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-24">
      {/* Background ambient radial glow using brand teal and gold */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#247a62]/20 via-[#115b5b]/25 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "General" }]} />

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#183f3f] border border-[#dbe7e4]/20 text-[#f5b82e] text-xs font-bold uppercase tracking-wider mb-5">
            <Compass className="w-4 h-4 text-[#f5b82e]" />
            Human Foundations
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            General Mindset &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfa51f] via-[#f5b82e] to-[#39a66a]">
              Mental Wellbeing
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#e7f1ef]/85 font-normal leading-relaxed">
            In our mentor&apos;s blueprint, technical rigor is anchored by human
            resilience. Explore our holistic frameworks for navigating rapid
            technological change and cultivating sustainable mental wellbeing
            throughout your career.
          </p>
        </div>

        {/* 2 Primary General Pathways from Flowchart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {generalTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-[#183f3f]/90 border border-[#dbe7e4]/20 hover:border-[#f5b82e]/60 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="w-12 h-12 rounded-2xl bg-[#0d4545] border border-[#f5b82e]/40 text-[#f5b82e] flex items-center justify-center shadow-md">
                    {topic.id === "embrace-change" ? (
                      <Compass className="w-6 h-6" />
                    ) : (
                      <Brain className="w-6 h-6" />
                    )}
                  </span>
                  <span className="text-xs font-bold text-[#39a66a] uppercase tracking-wider px-3 py-1 rounded-full bg-[#0d4545] border border-[#dbe7e4]/15">
                    Flowchart Topic
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">
                  {topic.title}
                </h2>
                <p className="text-xs font-semibold text-[#f5b82e] mb-4 uppercase tracking-wider">
                  {topic.subtitle}
                </p>
                <p className="text-sm text-[#e7f1ef]/80 leading-relaxed mb-6">
                  {topic.description}
                </p>

                {/* Pillars Preview */}
                <div className="space-y-3 mb-8">
                  {topic.pillars.slice(0, 2).map((p, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#39a66a] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-white block">
                          {p.title}
                        </span>
                        <span className="text-xs text-[#dbe7e4]/70 line-clamp-1">
                          {p.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#dbe7e4]/15 flex items-center justify-between">
                <span className="text-xs text-[#e7f1ef]/70">
                  Interactive Module Guide
                </span>
                <Link
                  to={topic.route}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#dfa51f] to-[#f5b82e] hover:from-[#f5b82e] hover:to-[#dfa51f] text-[#172525] font-bold text-xs uppercase tracking-wider shadow-md transition-all duration-200"
                >
                  Explore Topic <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Connected Ecosystem Banner */}
        <div className="bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-[#f5b82e] uppercase tracking-widest block mb-2">
              Interconnected Ecosystem
            </span>
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Pair Mindset With Emerging Tech?
            </h3>
            <p className="text-sm text-[#e7f1ef]/80 leading-relaxed">
              Once you build a strong foundation of adaptability and focus,
              explore our 7 high-impact Emerging Technology pathways spanning
              AI/ML, Robotics, EV, and IoT.
            </p>
          </div>
          <Link
            to="/emerging-tech"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0d4545] hover:bg-[#115b5b] text-white font-bold text-xs uppercase tracking-wider border border-[#f5b82e]/50 shadow-lg transition-colors"
          >
            Explore Emerging Tech{" "}
            <ArrowRight className="w-4 h-4 text-[#f5b82e]" />
          </Link>
        </div>
      </div>
    </div>
  )
}
