import React, { useState } from "react"
import { Link } from "react-router-dom"
import { resourcesData } from "../data/resources"
import {
  BookOpen,
  Download,
  ExternalLink,
  Search,
  FileText,
  Code2,
  CheckCircle,
  Sparkles,
} from "lucide-react"

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null)

  const categories = [
    "All",
    "DSA",
    "Python",
    "Machine Learning",
    "Web Dev",
    "Interview Prep",
  ]

  const filteredResources = resourcesData.filter((r) => {
    const matchesCat = activeCategory === "All" || r.category === activeCategory
    const matchesSearch =
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  const handleDownload = (title: string) => {
    setDownloadNotice(`Generating PDF download for "${title}"...`)
    setTimeout(() => {
      setDownloadNotice(`Downloaded: "${title}" (Sample Preview)`)
      setTimeout(() => setDownloadNotice(null), 4000)
    }, 1200)
  }

  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-24">
      {/* Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-1/3 w-[800px] h-[500px] bg-gradient-to-b from-[#115b5b]/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d4545] border border-[#247a62] text-[#f5b82e] text-xs font-semibold uppercase tracking-wider mb-5">
            <BookOpen className="w-4 h-4 text-[#f59e0b]" />
            Knowledge Repository
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            Engineering Handbooks, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5b82e] via-[#818cf8] to-[#f59e0b]">
              Roadmaps &amp; Cheat Sheets
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Free, practitioner-authored study guides, LeetCode curated
            collections, interview frameworks, and system architecture
            blueprints.
          </p>
        </div>

        {/* Download notification toast */}
        {downloadNotice && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#0d4545] border border-emerald-500/50 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm font-medium">
              {downloadNotice}
            </span>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-2xl p-5 mb-12 shadow-xl backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#115b5b] text-white shadow-md shadow-[#115b5b]/30"
                      : "bg-[#0d4545]/80 text-slate-300 hover:bg-[#247a62]/60 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search roadmaps, topics, guides..."
                className="w-full bg-[#0d4545] border border-[#247a62] rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#f5b82e]"
              />
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-[#183f3f]/90 border border-[#0d4545] hover:border-[#3b82f6]/40 rounded-2xl p-6 shadow-xl flex flex-col justify-between transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded bg-[#0d4545] text-[#f5b82e] text-[11px] font-bold uppercase tracking-wider">
                    {res.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {res.type}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 line-clamp-2">
                  {res.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                  {res.description}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-[#0d4545] mb-4">
                  <span>{res.readTime}</span>
                  <span className="text-slate-300 font-medium">
                    {res.level}
                  </span>
                </div>

                {res.downloadable ? (
                  <button
                    onClick={() => handleDownload(res.title)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#115b5b]/20 hover:bg-[#115b5b] text-[#f5b82e] hover:text-white text-xs font-semibold border border-[#f5b82e]/30 hover:border-transparent transition-all duration-200 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Free PDF Guide
                  </button>
                ) : (
                  <button
                    onClick={() => handleDownload(res.title)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0d4545] hover:bg-[#247a62] text-slate-200 text-xs font-semibold border border-[#247a62] transition-all duration-200 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#f59e0b]" />
                    Read Guide
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Free Assessment Lead Magnet */}
        <div className="bg-gradient-to-br from-[#183f3f] to-[#0d4545] border border-[#247a62] rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#f59e0b] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" /> Free Diagnostic Test
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Unsure Where Your Skills Stand?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Take our 20-minute adaptive tech diagnostic to pinpoint gaps in
              your algorithms, system design, or machine learning intuition.
              Receive a personalized roadmap upon completion.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#115b5b] to-[#0d4545] hover:from-[#0d4545] hover:to-[#1e40af] text-white font-bold text-sm shadow-xl shadow-[#115b5b]/25 transition-all duration-200"
            >
              Start Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
