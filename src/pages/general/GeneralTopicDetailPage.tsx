import React from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { generalTopics } from "../../data/generalData"
import Breadcrumbs from "../../components/Breadcrumbs"
import {
  Compass,
  Brain,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Shield,
  HelpCircle,
} from "lucide-react"

export default function GeneralTopicDetailPage() {
  const { topicSlug } = useParams<{ topicSlug: string }>()
  const navigate = useNavigate()

  const topic = generalTopics.find(
    (t) => t.slug === topicSlug || t.id === topicSlug,
  )

  if (!topic) {
    return (
      <div className="min-h-screen bg-[#0d4545] pt-32 pb-20 text-slate-100 flex items-center justify-center">
        <div className="text-center max-w-md p-8 bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">
            Topic Not Found
          </h2>
          <p className="text-[#e7f1ef]/70 text-sm mb-6">
            The general topic you requested could not be located in our
            blueprint repository.
          </p>
          <Link
            to="/general"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#dfa51f] to-[#f5b82e] text-[#172525] font-bold text-xs uppercase"
          >
            <ArrowLeft className="w-4 h-4" /> Back to General
          </Link>
        </div>
      </div>
    )
  }

  const otherTopic = generalTopics.find((t) => t.id !== topic.id)

  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-24">
      {/* Background ambient radial glow using brand teal and gold */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-1/4 w-[750px] h-[500px] bg-gradient-to-b from-[#247a62]/20 via-[#115b5b]/25 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: "General", to: "/general" }, { label: topic.title }]}
        />

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183f3f] border border-[#dbe7e4]/20 text-[#f5b82e] text-xs font-bold uppercase tracking-wider">
              {topic.id === "embrace-change" ? (
                <Compass className="w-3.5 h-3.5 text-[#f59e0b]" />
              ) : (
                <Brain className="w-3.5 h-3.5 text-[#f59e0b]" />
              )}
              General Blueprint Track
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {topic.title}
            </h1>

            <p className="text-sm sm:text-base font-semibold text-[#f5b82e] uppercase tracking-wider">
              {topic.subtitle}
            </p>

            <p className="text-base sm:text-lg text-[#e7f1ef]/85 font-normal leading-relaxed pt-2">
              {topic.description}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/emerging-tech"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#dfa51f] to-[#f5b82e] hover:from-[#f5b82e] hover:to-[#dfa51f] text-[#172525] font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                Apply to Emerging Tech <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#183f3f] hover:bg-[#115b5b] text-white font-bold text-xs uppercase tracking-wider border border-[#dbe7e4]/20 transition-colors"
              >
                Schedule Student Advisory
              </Link>
            </div>
          </div>

          {/* Quick Context Card */}
          <div className="lg:col-span-4 bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-4 border-b border-[#dbe7e4]/15 pb-4">
              <Shield className="w-6 h-6 text-[#f59e0b]" />
              <div>
                <h3 className="text-sm font-bold text-white">
                  Shield Human Foundation
                </h3>
                <p className="text-[11px] text-[#39a66a] font-medium">
                  Holistic Student Growth
                </p>
              </div>
            </div>
            <div className="space-y-3 text-xs text-[#e7f1ef]/80">
              <p>
                Technical capabilities without cognitive endurance leads to
                premature burnout. Every student at Shield Skill Hub receives
                continuous advisory support.
              </p>
              <div className="pt-3 border-t border-[#dbe7e4]/10">
                <span className="text-[10px] font-bold uppercase text-[#f5b82e] block mb-1">
                  Other Blueprint Area:
                </span>
                {otherTopic && (
                  <Link
                    to={otherTopic.route}
                    className="text-white hover:text-[#f5b82e] font-semibold flex items-center justify-between"
                  >
                    <span>{otherTopic.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#f59e0b] uppercase tracking-widest">
              Core Methodologies
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              The 4 Pillars of {topic.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topic.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#183f3f]/90 border border-[#dbe7e4]/20 rounded-2xl p-6 sm:p-7 shadow-xl hover:border-[#f5b82e]/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-[#0d4545] border border-[#f5b82e]/40 text-[#f5b82e] font-black text-xs flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#e7f1ef]/80 leading-relaxed pl-11">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Exercises & Key Takeaways */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Key Takeaways */}
          <div className="bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#f59e0b]" />
              Core Takeaways for Engineers
            </h3>
            <div className="space-y-4">
              {topic.keyTakeaways.map((takeaway, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#0d4545]/70 border border-[#dbe7e4]/10"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#39a66a] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#e7f1ef]/90 leading-relaxed">
                    {takeaway}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Exercises */}
          <div className="bg-[#183f3f] border border-[#dbe7e4]/20 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#39a66a]" />
              Daily Actionable Protocols
            </h3>
            <div className="space-y-4">
              {topic.practicalExercises.map((exercise, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#0d4545]/70 border border-[#dbe7e4]/10"
                >
                  <span className="w-5 h-5 rounded-full bg-[#f5b82e] text-[#172525] text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-[#e7f1ef]/90 leading-relaxed">
                    {exercise}
                  </span>
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
            to="/general"
            className="text-xs font-bold text-[#f5b82e] hover:underline"
          >
            Back to General Overview &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
