import React, { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  MessageSquare,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    track: "Artificial Intelligence & ML",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: "What are the laptop / hardware requirements to join the courses?",
      a: "A standard modern laptop with at least 8GB RAM (16GB recommended for local LLM workloads) and 50GB free disk space running Windows 10/11, macOS, or Linux. For heavy machine learning and GPU training, Shield Academy provides free hosted cloud GPU instances via Google Colab / AWS.",
    },
    {
      q: "Are the classes live or pre-recorded?",
      a: "Our programs blend high-production on-demand masterclasses with live interactive weekend workshops, real-time code reviews, and weekly 1-on-1 mentor office hours.",
    },
    {
      q: "Do you offer job placement support?",
      a: "Yes. Fellows who successfully complete all module capstones and pass our technical exit diagnostic receive dedicated recruitment manager support, resume revamping, and direct referrals across our 120+ partner companies.",
    },
    {
      q: "What is your refund policy?",
      a: "We offer a 100% no-questions-asked refund within the first 7 days of course commencement if you feel the curriculum or pedagogical approach does not suit your learning style.",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="bg-[#0d4545] min-h-screen text-slate-100 pt-28 pb-24">
      {/* Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-1/4 w-[800px] h-[500px] bg-gradient-to-b from-[#115b5b]/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d4545] border border-[#247a62] text-[#f5b82e] text-xs font-semibold uppercase tracking-wider mb-5">
            <MessageSquare className="w-4 h-4 text-[#f59e0b]" />
            Academic Advisory
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            Speak With Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5b82e] via-[#818cf8] to-[#f59e0b]">
              Engineering Advisors
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Need guidance choosing between AI, Data Science, or Full-Stack
            Engineering? Schedule a personalized 1-on-1 evaluation with our
            career mentors.
          </p>
        </div>

        {/* Contact Form & Direct Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-[#183f3f]/90 border border-[#0d4545] rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Book a Free Counseling Session
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-8">
              Fill out the form below and an advisor will contact you within 24
              hours.
            </p>

            {isSubmitted ? (
              <div className="bg-[#0d4545] border border-emerald-500/40 rounded-2xl p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto">
                  Your advising request has been logged. Senior Advisor Rohan
                  Patel will reach out to you via email (
                  <span className="text-[#f5b82e]">{formData.email}</span>) and
                  WhatsApp shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#0d4545] hover:bg-[#247a62] text-xs font-semibold text-slate-200 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="e.g. Priya Sundaram"
                    className="w-full bg-[#0d4545] border border-[#247a62] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f5b82e]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="priya@example.com"
                      className="w-full bg-[#0d4545] border border-[#247a62] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f5b82e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#0d4545] border border-[#247a62] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f5b82e]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Primary Area of Interest
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) =>
                      setFormData({ ...formData, track: e.target.value })
                    }
                    className="w-full bg-[#0d4545] border border-[#247a62] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f5b82e]"
                  >
                    <option value="Artificial Intelligence & ML">
                      Artificial Intelligence &amp; Generative AI
                    </option>
                    <option value="Data Science & Analytics">
                      Data Science &amp; Business Intelligence
                    </option>
                    <option value="Full-Stack Web Development">
                      Full-Stack Cloud &amp; Web Development
                    </option>
                    <option value="Cybersecurity">
                      Cybersecurity &amp; Network Defense
                    </option>
                    <option value="Flagship Career Accelerator">
                      Flagship 6-Month Accelerator
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Questions or Current Career Background
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your current role, coding experience, and career goals..."
                    className="w-full bg-[#0d4545] border border-[#247a62] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f5b82e]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#115b5b] to-[#0d4545] hover:from-[#0d4545] hover:to-[#1e40af] text-white font-bold text-sm shadow-xl shadow-[#115b5b]/25 transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Submit Advisory Request
                </button>
              </form>
            )}
          </div>

          {/* Direct Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#183f3f]/90 border border-[#0d4545] rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-6">
                Academy Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#115b5b]/20 text-[#f5b82e] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#f5b82e]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Academy Headquarters
                    </h4>
                    <p className="text-sm font-semibold text-white mt-1">
                      Shield Skill Academy Campus, Tech Innovation Corridor,
                      Whitefield, Bengaluru, Karnataka 560066
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Admissions &amp; Queries
                    </h4>
                    <p className="text-sm font-semibold text-white mt-1">
                      admissions@shieldacademy.org
                    </p>
                    <p className="text-xs text-slate-400">
                      Response within 4 business hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#f59e0b]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Student Helpline
                    </h4>
                    <p className="text-sm font-semibold text-white mt-1">
                      +91 98765 43210
                    </p>
                    <p className="text-xs text-slate-400">
                      Available Mon - Sat, 9 AM - 7 PM IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Advisory Office Hours
                    </h4>
                    <p className="text-sm font-semibold text-white mt-1">
                      Monday to Saturday: 09:00 AM – 07:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Demo Student Pass Card */}
            <div className="bg-gradient-to-br from-[#0d4545] to-[#183f3f] border border-[#247a62] rounded-3xl p-6 sm:p-8">
              <h4 className="text-sm font-bold text-white mb-2">
                Want to experience the portal?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                You can explore real course progress, enrollments, and
                recommendations right now using our 1-click student demo
                account.
              </p>
              <a
                href="/login"
                className="inline-flex items-center gap-1.5 text-xs text-[#f59e0b] hover:text-[#fbbf24] font-bold"
              >
                Log in as Demo Student &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#f59e0b] uppercase tracking-widest">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="bg-[#183f3f]/90 border border-[#0d4545] rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-white flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#f5b82e] shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-[#f5b82e]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#0d4545]">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
