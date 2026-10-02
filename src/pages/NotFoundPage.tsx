import React from "react"
import { Link } from "react-router-dom"
import { Compass, ArrowLeft, Home, Sparkles } from "lucide-react"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#0d4545] text-slate-100 font-['Manrope',sans-serif] pt-32 pb-24 flex items-center justify-center px-4">
      <div className="comic-panel-card p-8 sm:p-12 max-w-lg w-full text-center bg-[#FBF8F3] relative overflow-hidden">
        {/* Halftone Header */}
        <div className="w-16 h-16 rounded-full bg-[#f5b82e] border-3 border-[#172525] flex items-center justify-center mx-auto mb-6 text-2xl shadow-[4px_4px_0_#172525]">
          🧭
        </div>

        <div className="comic-chapter-badge mb-3">
          <span className="dot" />
          <span>CHAPTER ERROR • UNCHARTED PATH</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-[#172525] tracking-tight mb-3">
          404 / PANEL NOT FOUND
        </h1>

        <p className="text-xs sm:text-sm text-[#536363] font-semibold leading-relaxed mb-8 max-w-sm mx-auto">
          It looks like this panel has not been penned yet. The route you are
          seeking does not exist in the Shield Skill Hub ecosystem blueprint.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/" className="comic-btn-gold w-full sm:w-auto">
            <Home className="w-4 h-4" />
            <span>Return to Story</span>
          </Link>
          <Link to="/#master-map" className="comic-btn-teal w-full sm:w-auto">
            <Compass className="w-4 h-4 text-[#f5b82e]" />
            <span>Open Master Map</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
