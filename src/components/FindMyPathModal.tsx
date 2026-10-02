import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  eligibleStudentBranches,
  interestDomainOptions,
  calculateStudentPathway,
  RecommendedPathwayResult,
} from "../data/skillHubData"
import {
  Sparkles,
  Compass,
  ArrowRight,
  ArrowLeft,
  X,
  CheckCircle2,
  GraduationCap,
  Layers,
  Code2,
  Briefcase,
  Building2,
} from "lucide-react"

interface FindMyPathModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectPathway?: (pathwayId: string) => void
}

export function FindMyPathModal({
  isOpen,
  onClose,
  onSelectPathway,
}: FindMyPathModalProps) {
  const navigate = useNavigate()
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [selectedBranch, setSelectedBranch] = useState<string>("AI & ML")
  const [selectedInterest, setSelectedInterest] = useState<string>("ai-data")
  const [result, setResult] = useState<RecommendedPathwayResult | null>(null)

  if (!isOpen) return null

  const handleCalculate = () => {
    const pathway = calculateStudentPathway(selectedBranch, selectedInterest)
    setResult(pathway)
    setStep(3)
  }

  const handleNavigateToTechnology = () => {
    if (!result) return
    if (onSelectPathway) {
      onSelectPathway(result.technology.id)
      onClose()
    } else {
      onClose()
      navigate(result.technology.targetRoute)
    }
  }

  const handleReset = () => {
    setStep(1)
    setResult(null)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#172525]/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#FBF8F3] text-[#172525] border-3 border-[#172525] rounded-3xl shadow-[8px_8px_0_#172525] overflow-hidden">
        {/* Halftone Top Bar */}
        <div className="comic-halftone-gold p-4 border-b-2 border-[#172525] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#172525] text-[#f5b82e]">
              <Compass className="w-4 h-4" />
            </span>
            <span className="text-xs font-black uppercase tracking-widest text-[#172525]">
              CHAPTER 03 GUIDE • FIND MY PATH
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full border-2 border-[#172525] bg-[#ffffff] hover:bg-[#f5b82e] flex items-center justify-center text-[#172525] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {/* STEP 1: Branch of Study */}
          {step === 1 && (
            <div>
              <div className="mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#0d4545] text-[#f5b82e] border border-[#172525]">
                  STEP 01 OF 02
                </span>
                <h3
                  id="modal-title"
                  className="text-2xl font-black text-[#172525] mt-3"
                >
                  What are you currently studying?
                </h3>
                <p className="text-xs text-[#536363] mt-1 font-semibold">
                  Choose your engineering, science, or commerce degree to filter
                  eligible domain specializations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {eligibleStudentBranches.map((branch) => {
                  const isSelected = selectedBranch === branch.id
                  return (
                    <button
                      key={branch.id}
                      type="button"
                      onClick={() => setSelectedBranch(branch.id)}
                      className={`text-left p-3.5 rounded-xl border-2 transition-all flex items-center justify-between ${
                        isSelected
                          ? "border-[#172525] bg-[#f5b82e] shadow-[3px_3px_0_#172525] -translate-y-0.5"
                          : "border-[#172525]/30 bg-[#ffffff] hover:border-[#172525] hover:bg-[#FAF6EE]"
                      }`}
                    >
                      <span className="text-xs font-black text-[#172525]">
                        {branch.label}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-[#172525] shrink-0" />
                      )}
                    </button>
                  )
                })}
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="comic-btn-gold"
                >
                  <span>Next: Choose Interest</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Domain of Interest */}
          {step === 2 && (
            <div>
              <div className="mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#0d4545] text-[#f5b82e] border border-[#172525]">
                  STEP 02 OF 02
                </span>
                <h3 className="text-2xl font-black text-[#172525] mt-3">
                  What domain excites you most?
                </h3>
                <p className="text-xs text-[#536363] mt-1 font-semibold">
                  Select your preferred technical or capital-market
                  specialization area.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2.5 mb-8">
                {interestDomainOptions.map((interest) => {
                  const isSelected = selectedInterest === interest.id
                  return (
                    <button
                      key={interest.id}
                      type="button"
                      onClick={() => setSelectedInterest(interest.id)}
                      className={`text-left p-3.5 rounded-xl border-2 transition-all flex items-start justify-between ${
                        isSelected
                          ? "border-[#172525] bg-[#f5b82e] shadow-[3px_3px_0_#172525] -translate-y-0.5"
                          : "border-[#172525]/30 bg-[#ffffff] hover:border-[#172525] hover:bg-[#FAF6EE]"
                      }`}
                    >
                      <div>
                        <div className="text-xs font-black text-[#172525]">
                          {interest.label}
                        </div>
                        <div className="text-[11px] text-[#536363] font-medium mt-0.5">
                          {interest.desc}
                        </div>
                      </div>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-[#172525] shrink-0 mt-0.5" />
                      )}
                    </button>
                  )
                })}
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 text-xs font-extrabold text-[#536363] hover:text-[#172525]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Degrees</span>
                </button>

                <button
                  type="button"
                  onClick={handleCalculate}
                  className="comic-btn-gold"
                >
                  <span>Reveal My Path</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Result & Journey Chain */}
          {step === 3 && result && (
            <div>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10b981]/20 border border-[#10b981] text-[#0d4545] text-[10px] font-black uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                  ELIGIBLE MATCH FOUND
                </div>
                <h3 className="text-2xl font-black text-[#172525]">
                  Your Shield Skill Hub Path
                </h3>
                <p className="text-xs text-[#536363] mt-1 font-semibold max-w-md mx-auto">
                  Tailored based on your branch ({result.branchId}) and interest
                  area.
                </p>
              </div>

              {/* Matched Pathway Hero Card */}
              <div className="p-5 rounded-2xl border-2 border-[#172525] bg-[#ffffff] shadow-[4px_4px_0_#172525] mb-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-[#8C652E] tracking-wider">
                      RECOMMENDED PATHWAY
                    </span>
                    <h4 className="text-lg font-black text-[#172525] leading-tight">
                      {result.technology.label}
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[9px] font-extrabold bg-[#ECE5DA] border border-[#C9A978] text-[#172525] shrink-0">
                    {result.technology.domainPill}
                  </span>
                </div>

                <p className="text-xs text-[#536363] font-medium leading-relaxed mb-4">
                  {result.technology.tagline}
                </p>

                {/* Visual Career Progression Chain */}
                <div className="bg-[#FBF8F3] p-3.5 rounded-xl border border-[#172525]/20">
                  <div className="text-[9.5px] font-black uppercase text-[#8C652E] mb-2 tracking-widest">
                    CAREER PROGRESSION CHAIN
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    <div className="p-2 rounded-lg bg-[#ffffff] border border-[#172525]/15">
                      <div className="text-[9px] text-[#536363] font-bold">
                        1. STUDY
                      </div>
                      <div className="font-extrabold text-[#172525]">
                        {result.progressionChain.branch}
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-[#ffffff] border border-[#172525]/15">
                      <div className="text-[9px] text-[#536363] font-bold">
                        2. DOMAIN
                      </div>
                      <div className="font-extrabold text-[#172525] truncate">
                        {result.progressionChain.domain}
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-[#ffffff] border border-[#172525]/15">
                      <div className="text-[9px] text-[#536363] font-bold">
                        3. SKILL
                      </div>
                      <div className="font-extrabold text-[#172525] truncate">
                        {result.progressionChain.course}
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-[#ffffff] border border-[#172525]/15">
                      <div className="text-[9px] text-[#536363] font-bold">
                        4. PROJECT
                      </div>
                      <div className="font-extrabold text-[#172525] truncate">
                        {result.progressionChain.project}
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-[#ffffff] border border-[#172525]/15">
                      <div className="text-[9px] text-[#536363] font-bold">
                        5. INTERNSHIP
                      </div>
                      <div className="font-extrabold text-[#172525] truncate">
                        {result.progressionChain.internship}
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-[#ffffff] border border-[#172525]/15">
                      <div className="text-[9px] text-[#536363] font-bold">
                        6. INDUSTRY ROLE
                      </div>
                      <div className="font-extrabold text-[#172525] truncate">
                        {result.progressionChain.industryRole}
                      </div>
                    </div>
                  </div>
                </div>

                {result.partner && (
                  <div className="mt-4 flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF6EE] border border-[#C9A978]">
                    <span className="text-xs">🤝</span>
                    <span className="text-xs font-bold text-[#172525]">
                      Accredited Industry Partner: <b>{result.partner.name}</b>
                    </span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#536363] hover:text-[#172525]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Try Another Degree</span>
                </button>

                <button
                  type="button"
                  onClick={handleNavigateToTechnology}
                  className="comic-btn-gold w-full sm:w-auto"
                >
                  <span>Explore Your Pathway</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FindMyPathModal
