import React from "react"
import { Link } from "react-router-dom"
import { technologyPathways } from "../../data/technologyPathways"
import Breadcrumbs from "../../components/Breadcrumbs"
import {
  TrendingUp,
  ShoppingBag,
  LineChart,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react"

export default function NonTechHubPage() {
  const nonTechPathways = technologyPathways.filter(
    (p) => p.category === "Non Tech",
  )

  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-24">
      {/* Background ambient radial glow using brand teal and gold */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#247a62]/20 via-[#115b5b]/25 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Non Tech" }]} />

        {/* Header / Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#183f3f] border border-[#dbe7e4]/20 text-[#f5b82e] text-xs font-bold uppercase tracking-wider mb-5">
            <TrendingUp className="w-4 h-4 text-[#f59e0b]" />
            Commercial &amp; Applied Life Sciences
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            Non-Tech Pathways &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfa51f] via-[#f5b82e] to-[#39a66a]">
              Applied Industry Labs
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#e7f1ef]/85 font-normal leading-relaxed">
            The Non-Tech branch of our mentor&apos;s blueprint connects
            business, management, and life sciences disciplines to applied
            commercial sandboxes: eCommerce operations, capital markets equity
            research, and cosmetics &amp; food quality assurance.
          </p>
        </div>

        {/* 2 Main Flowchart Degree Branches */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Branch 1: B.COM / BCA / MBA */}
          <div className="bg-[#183f3f]/90 border-2 border-[#f5b82e]/40 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#0d4545] border border-[#f5b82e]/40 text-[#f5b82e] text-xs font-bold uppercase">
                  Flowchart Branch 1
                </span>
                <span className="text-xs font-mono font-bold text-[#39a66a] bg-[#0d4545] px-2.5 py-1 rounded">
                  B.COM / BCA / MBA
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-2">
                Commerce &amp; Financial Capital Labs
              </h2>
              <p className="text-xs sm:text-sm text-[#e7f1ef]/80 leading-relaxed mb-6">
                Specialized practical tracks for commerce, computing
                applications, and business management graduates seeking
                analytical roles in digital retail and equity investments.
              </p>

              {/* Sub-pathways */}
              <div className="space-y-4 mb-8">
                {nonTechPathways
                  .filter(
                    (p) =>
                      p.id === "ecommerce-lab" || p.id === "equity-research",
                  )
                  .map((sub) => (
                    <div
                      key={sub.id}
                      className="p-5 rounded-2xl bg-[#0d4545]/80 border border-[#dbe7e4]/15 hover:border-[#f5b82e]/50 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-base font-bold text-white flex items-center gap-2">
                          {sub.id === "ecommerce-lab" ? (
                            <ShoppingBag className="w-4 h-4 text-[#f59e0b]" />
                          ) : (
                            <LineChart className="w-4 h-4 text-[#39a66a]" />
                          )}
                          {sub.flowchartTitle}
                        </h3>
                        {sub.partnerOrg && (
                          <span className="text-[10px] text-[#f5b82e] font-semibold">
                            {sub.partnerOrg}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#e7f1ef]/70 line-clamp-2 mb-3">
                        {sub.overview}
                      </p>
                      <Link
                        to={sub.route}
                        className="text-xs font-bold text-[#f5b82e] hover:underline flex items-center gap-1"
                      >
                        Explore Lab Curriculum &rarr;
                      </Link>
                    </div>
                  ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#dbe7e4]/15 text-xs text-[#e7f1ef]/70">
              Direct connection to Stockathon Academy capital markets lab.
            </div>
          </div>

          {/* Branch 2: B.E / B.TECH / BIOTECH */}
          <div className="bg-[#183f3f]/90 border-2 border-[#39a66a]/40 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#0d4545] border border-[#39a66a]/40 text-[#39a66a] text-xs font-bold uppercase">
                  Flowchart Branch 2
                </span>
                <span className="text-xs font-mono font-bold text-[#f5b82e] bg-[#0d4545] px-2.5 py-1 rounded">
                  B.E / B.TECH / BIOTECH
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-2">
                Cosmetics Formulation &amp; Food Safety
              </h2>
              <p className="text-xs sm:text-sm text-[#e7f1ef]/80 leading-relaxed mb-6">
                Bridging biotechnology, chemical engineering, and life sciences
                with regulatory compliance (FSSAI, ISO 22000), laboratory
                assays, and clean formulation chemistry.
              </p>

              {/* Sub-pathway */}
              <div className="space-y-4 mb-8">
                {nonTechPathways
                  .filter((p) => p.id === "cosmetics-food-safety")
                  .map((sub) => (
                    <div
                      key={sub.id}
                      className="p-5 rounded-2xl bg-[#0d4545]/80 border border-[#dbe7e4]/15 hover:border-[#39a66a]/50 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-base font-bold text-white flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#39a66a]" />
                          {sub.flowchartTitle}
                        </h3>
                      </div>
                      <p className="text-xs text-[#e7f1ef]/70 line-clamp-2 mb-3">
                        {sub.overview}
                      </p>

                      <div className="space-y-1.5 mb-4">
                        {sub.skillsCovered.slice(0, 3).map((s, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs text-[#e7f1ef]/80"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#39a66a] shrink-0" />
                            <span className="line-clamp-1">{s}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        to={sub.route}
                        className="text-xs font-bold text-[#f5b82e] hover:underline flex items-center gap-1"
                      >
                        Explore Lab Curriculum &rarr;
                      </Link>
                    </div>
                  ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#dbe7e4]/15 text-xs text-[#e7f1ef]/70">
              Includes FSSAI &amp; ISO 22000 regulatory audit simulation.
            </div>
          </div>
        </div>

        {/* Connected Ecosystem CTA */}
        <div className="bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Cross-Disciplinary Project Sprints
            </h3>
            <p className="text-xs sm:text-sm text-[#e7f1ef]/80 max-w-xl">
              Non-Tech fellows collaborate with Emerging Tech engineering squads
              to build real analytics dashboards, supply-chain IoT trackers, and
              e-commerce systems.
            </p>
          </div>
          <Link
            to="/internships"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#dfa51f] to-[#f5b82e] text-[#172525] font-extrabold text-xs uppercase tracking-wider shadow-lg"
          >
            Explore Internships <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
