import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Icon } from "../components/Icons"
import { HeroVisual } from "../components/HeroVisual"
import { FeatureCard } from "../components/FeatureCard"
import { FlagshipArt } from "../components/FlagshipArt"
import { StatCounter } from "../components/StatCounter"
import { CourseCard } from "../components/CourseCard"
import { SkillHubFlowchart } from "../components/SkillHubFlowchart"
import { coursesData } from "../data/courses"
import { projectsData } from "../data/projects"
import { skillHubFlowchartData } from "../data/skillHubData"
import { institutionServices } from "../data/institutionData"
import {
  Compass,
  Sparkles,
  Building2,
  Briefcase,
  Award,
  CheckCircle2,
  GraduationCap,
  Users,
  Layers,
  ArrowRight,
  ExternalLink,
} from "lucide-react"
import "../styles/comicEditorial.css"

export function HomePage() {
  const [filter, setFilter] = useState("All")
  const [faq, setFaq] = useState(0)
  const [testimonial, setTestimonial] = useState(0)

  const filters = ["All", "Technology", "Data & AI", "Programming", "Career"]

  const filterCategoryMap: Record<string, string[]> = {
    All: ["*"],
    Technology: ["Technology", "Full-Stack Development", "Cloud & DevOps"],
    "Data & AI": [
      "Data & AI",
      "Data Science",
      "Artificial Intelligence",
      "Machine Learning",
    ],
    Programming: ["Programming", "Python", "Data Science"],
    Career: ["Career", "Career & Interview Preparation"],
  }

  const visibleCourses =
    filter === "All"
      ? coursesData.slice(0, 6)
      : coursesData
          .filter((course) => {
            const allowed = filterCategoryMap[filter] || []
            return allowed.includes(course.category)
          })
          .slice(0, 6)

  const testimonials = [
    {
      quote:
        "Successfully delivered training programs to over 150,000 students across software, IoT and Industry 4.0.",
      name: "Naan Mudhalvan Scheme",
      role: "Training achievement",
      initials: "NM",
    },
    {
      quote:
        "Launched specialized additive manufacturing courses, placing participants at the forefront of 3D printing technology.",
      name: "Partnership with Wipro3D",
      role: "Industry partnership",
      initials: "3D",
    },
    {
      quote:
        "Collaborated with leading financial firms to provide cutting-edge FinTech programs, training over 75,000 students in advanced financial analytics.",
      name: "FinTech Training Initiatives",
      role: "Training achievement",
      initials: "FT",
    },
  ]

  const faqs = [
    [
      "What courses are available on Shield Skill Academy?",
      "Choose from Full Stack Development, Python for Data Science, Generative AI & LLMs, Cloud & DevOps, Cybersecurity, Growth Analytics, and industry-focused career accelerators.",
    ],
    [
      "Who can join Shield Skilling Academy?",
      "Our programs are designed for college students, fresh graduates, working professionals and anyone who wants practical, career-focused skills through hands-on project problem statements.",
    ],
    [
      "Are the courses beginner-friendly?",
      "Yes. Every learning path clearly communicates its level, and beginner programs start with foundational concepts before moving into guided lab exercises and capstone builds.",
    ],
    [
      "Do I receive a verifiable certificate?",
      "Yes. Eligible programs include a verifiable, industry-recognized completion certificate on ChainTrail that demonstrates your tangible learning outcomes.",
    ],
    [
      "Are real-world practical projects included?",
      "Absolutely. Hands-on learning is central to our approach, with guided assignments, real-world use cases and portfolio-ready project problem statements.",
    ],
    [
      "Is mentorship and career support available?",
      "Selected programs include 1-on-1 expert guidance, weekly live sessions, resume audits, technical mock interviews, and internship readiness.",
    ],
  ]

  return (
    <main>
      {/* ================================================================
          CHAPTER 01: THE STARTING POINT (HERO + 3D FLOATING LAPTOP)
      ================================================================ */}
      <section className="hero relative" id="home">
        <div className="hero-grid-pattern" />
        <div className="container hero-inner relative z-10">
          <div className="hero-copy">
            {/* Comic Chapter Badge */}
            <div className="comic-chapter-badge">
              <span className="dot" />
              <span>Chapter 01 // The Starting Point</span>
            </div>

            <div className="eyebrow">
              <span />
              Shield Skill Hub • Powered by Shield Group
            </div>
            <h1>
              Empowering you
              <br />
              to conquer the
              <br />
              <span>career frontier.</span>
            </h1>
            <p>
              Build industry-ready skills, work on real-world projects, and
              prepare yourself for the opportunities ahead with structured
              learning tracks.
            </p>
            <div className="hero-actions">
              <Link to="/courses" className="button button-primary">
                <span>Explore courses</span>
                <Icon name="arrow" size={18} />
              </Link>
              <a href="#master-map" className="watch-link">
                <span>
                  <Compass size={16} className="text-[#f5b82e]" />
                </span>{" "}
                Open Master Map
              </a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack">
                <i>AK</i>
                <i>NP</i>
                <i>RS</i>
                <i>+</i>
              </div>
              <div>
                <div className="shield-proof">
                  <Icon name="shield" size={15} /> Shield Group
                </div>
                <span>Professional learning initiative</span>
              </div>
            </div>
          </div>

          {/* Interactive 3D Floating Laptop Visual with 360 hover rotation */}
          <HeroVisual />
        </div>
      </section>

      {/* Trust Strip with animated counters */}
      <section className="trust-strip" aria-label="Learning outcomes">
        <div className="container trust-inner">
          <p>
            Building skills for the <b>real world</b>
          </p>
          <div className="partner-list" aria-label="Partner ecosystem">
            <StatCounter target={150} suffix="K+" sublabel="Students trained" />
            <StatCounter target={75} suffix="K+" sublabel="FinTech learners" />
            <span>
              <strong>Wipro3D</strong>Industry partnership
            </span>
            <span>
              <strong>Flexible</strong>Online & in-person
            </span>
          </div>
        </div>
      </section>

      {/* ================================================================
          CHAPTER 02: THE CAREER PARADOX (THE CHALLENGE)
      ================================================================ */}
      <section
        className="section py-20 relative bg-[#093535] overflow-hidden border-t-2 border-b-2 border-[#172525]"
        id="challenge"
      >
        <div className="absolute inset-0 comic-halftone-teal pointer-events-none opacity-40" />

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="comic-chapter-badge">
              <span className="dot" />
              <span>Chapter 02 // The Career Paradox</span>
            </div>
            <div className="comic-caption-box mb-3">The Industry Dilemma</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Companies require experience.
              <br />
              <span className="text-[#f5b82e]">Colleges teach theory.</span>
              <br />
              Where do you begin?
            </h2>
            <p className="text-sm sm:text-base text-[#dbe7e4]/85 max-w-2xl mx-auto leading-relaxed">
              Every year, thousands of aspiring engineers and graduates step
              into a crowded tech job market. Without verifiable proof of work
              and hands-on toolchain proficiency, your resume is just another
              flat document.
            </p>
          </div>

          {/* The Three-Way Crossroad Comic Panel Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Dilemma Left: Outdated Theory Loop */}
            <div className="lg:col-span-4 comic-panel-card p-6 sm:p-8 bg-[#FBF8F3] flex flex-col justify-between">
              <div>
                <div className="comic-burst-badge mb-4">⚠️ THE STATUS QUO</div>
                <h3 className="text-xl font-black text-[#172525] mb-2 uppercase tracking-tight">
                  The Tutorial Loop
                </h3>
                <p className="text-xs text-[#536363] leading-relaxed mb-6 font-medium">
                  Copy-pasting syntax from random video playlists and cramming
                  definitions for semester exams. Zero system architecture, no
                  peer code reviews, and no exposure to real production hardware
                  or cloud runtimes.
                </p>
                <div className="space-y-3">
                  {[
                    "Outdated syllabus disconnected from enterprise workflows",
                    "Toy projects with no tests, CI/CD, or production deployments",
                    "Unverifiable claims that crumble in technical interviews",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-[#78350f] font-semibold"
                    >
                      <span className="w-4 h-4 rounded-full bg-[#fef3c7] text-[#b45309] flex items-center justify-center shrink-0 text-[10px] mt-0.5 font-bold">
                        ✕
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#172525]/15 text-[11px] font-bold text-[#c2410c] uppercase">
                Result: Low Hiring Confidence
              </div>
            </div>

            {/* Dilemma Center: The Student at the Crossroad */}
            <div className="lg:col-span-4 comic-panel-teal p-6 sm:p-8 flex flex-col items-center justify-between text-center relative overflow-hidden">
              <div className="w-full flex justify-center mb-4">
                <div className="comic-speech-bubble max-w-xs text-left">
                  "I know I want a career in high-impact tech, but which domain
                  actually fits my branch and strengths?"
                </div>
              </div>

              {/* Tactile Silhouette & Compass Graphic */}
              <div className="my-6 relative flex items-center justify-center">
                <div
                  className="w-24 h-24 rounded-full bg-[#f5b82e]/20 border-2 border-dashed border-[#f5b82e] flex items-center justify-center animate-spin"
                  style={{ animationDuration: "24s" }}
                >
                  <Compass className="w-12 h-12 text-[#f5b82e]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-3xl">🧭</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-black text-white mb-2">
                  The Crossroads
                </h4>
                <p className="text-xs text-[#dbe7e4]/85 leading-relaxed mb-6">
                  Do not gamble on generic tutorials. Choose a structured,
                  industry-anchored pathway aligned with enterprise
                  requirements.
                </p>
                <a href="#master-map" className="comic-btn-gold w-full text-xs">
                  <span>Explore the Master Map ↓</span>
                </a>
              </div>
            </div>

            {/* Dilemma Right: The Shield Skill Hub Blueprint */}
            <div className="lg:col-span-4 comic-panel-card p-6 sm:p-8 bg-[#FAF8F3] border-2 border-[#115b5b] flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0d4545] text-[#f5b82e] text-[10px] font-black uppercase tracking-wider mb-4 border border-[#f5b82e]/30">
                  ✓ THE SHIELD BLUEPRINT
                </div>
                <h3 className="text-xl font-black text-[#172525] mb-2 uppercase tracking-tight">
                  Proof-of-Work Career Track
                </h3>
                <p className="text-xs text-[#536363] leading-relaxed mb-6 font-medium">
                  Learn with industrial toolchains, build audited capstone
                  problem statements, work with Fortune 500 partner
                  technologies, and secure on-chain verifiable credentials.
                </p>
                <div className="space-y-3">
                  {[
                    "Curriculum co-designed with Wipro 3D, Rockwell & global partners",
                    "Production-grade git commits & line-by-line pull request audits",
                    "Permanent verification on ChainTrail for employer confidence",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-[#172525] font-semibold"
                    >
                      <span className="w-4 h-4 rounded-full bg-[#dcfce7] text-[#15803d] flex items-center justify-center shrink-0 text-[10px] mt-0.5 font-bold">
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#172525]/15 text-[11px] font-bold text-[#15803d] uppercase">
                Result: High-Velocity Placement Readiness
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          CHAPTER 03: FIND YOUR DOMAIN (ROULETTE CONCENTRIC WHEEL)
      ================================================================ */}
      <SkillHubFlowchart />

      {/* ================================================================
          CHAPTER 04: BUILD YOUR SKILLS & BUILD SOMETHING REAL
      ================================================================ */}
      {/* Why Shield Section with 3D tilt cards */}
      <section className="section why reveal-section is-visible" id="about">
        <div className="container">
          <div className="section-heading">
            <div className="comic-chapter-badge">
              <span className="dot" />
              <span>Chapter 04 // Build Your Skills</span>
            </div>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <span />
              About Shield Skill Academy
            </div>
            <h2>
              Skills that take
              <br />
              <span>you forward.</span>
            </h2>
            <p>
              Backed by the professional credibility of Shield Group, we connect
              relevant learning, practical experience and career ambition.
            </p>
          </div>

          <div className="feature-grid">
            {[
              [
                "01",
                "code",
                "Industry-relevant learning",
                "Learn what modern teams actually use, with curriculum shaped around evolving industry needs.",
                "/about",
              ],
              [
                "02",
                "cube",
                "Hands-on projects",
                "Move beyond theory through labs, guided exercises and practical problem-solving.",
                "/projects",
              ],
              [
                "03",
                "brain",
                "Expert guidance",
                "Learn with professionals who connect every concept to its real-world context.",
                "/programs",
              ],
              [
                "04",
                "target",
                "Career-focused skills",
                "Connect your learning to stronger resumes, interviews, internships and opportunities.",
                "/internships",
              ],
            ].map(([number, icon, title, copy, link], index) => (
              <FeatureCard
                key={title}
                number={number}
                icon={icon as any}
                title={title}
                copy={copy}
                index={index}
                link={link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section
        className="section courses reveal-section is-visible"
        id="courses"
      >
        <div className="container">
          <div className="courses-top">
            <div className="section-heading section-heading-left">
              <div className="eyebrow">
                <span />
                Explore learning paths
              </div>
              <h2>
                Skills that move
                <br />
                <span>you forward.</span>
              </h2>
              <p>
                Practical learning paths built for the technology and careers
                shaping tomorrow.
              </p>
            </div>
            <Link to="/courses" className="button button-secondary">
              <span>View all programs</span>
              <Icon name="arrow" size={18} />
            </Link>
          </div>

          <div
            className="filter-row"
            role="tablist"
            aria-label="Course categories"
          >
            {filters.map((item) => (
              <button
                role="tab"
                aria-selected={filter === item}
                className={filter === item ? "selected" : ""}
                key={item}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="course-grid">
            {visibleCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Accelerator with 2.8s Rocket Sequence */}
      <section
        className="section flagship reveal-section is-visible"
        id="programs"
      >
        <div className="container">
          <div className="flagship-card">
            <div className="flagship-copy">
              <div className="eyebrow eyebrow-light">
                <span />
                Flagship career accelerator
              </div>
              <h2>
                Build skills. Build projects. <span>Build your career.</span>
              </h2>
              <p>
                A guided, project-first experience combining technical depth,
                mentorship and career readiness in one focused pathway.
              </p>
              <ul>
                <li>
                  <Icon name="check" />
                  Live expert-led sessions
                </li>
                <li>
                  <Icon name="check" />
                  Portfolio-grade capstone projects
                </li>
                <li>
                  <Icon name="check" />
                  Interview and career preparation
                </li>
              </ul>
              <Link to="/programs" className="button button-light">
                <span>Discover the accelerator</span>
                <Icon name="arrow" size={18} />
              </Link>
            </div>
            <FlagshipArt />
          </div>
        </div>
      </section>

      {/* Journey Line Section */}
      <section
        className="section journey reveal-section is-visible"
        id="journey"
      >
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <span />
              Your learning journey
            </div>
            <h2>
              A clear path from <span>idea to impact.</span>
            </h2>
            <p>
              Every stage is designed to keep you moving, building and becoming
              career-ready.
            </p>
          </div>

          <div className="journey-line">
            {[
              [
                "01",
                "compass",
                "Discover",
                "Choose the path that fits your goals",
              ],
              ["02", "brain", "Learn", "Build strong, useful foundations"],
              ["03", "code", "Practice", "Apply concepts with guidance"],
              ["04", "cube", "Build", "Create portfolio-ready work"],
              ["05", "rocket", "Launch", "Turn skill into opportunity"],
            ].map(([step, icon, title, copy]) => (
              <div className="journey-step stagger-card" key={step}>
                <span className="step-num">{step}</span>
                <div className="step-icon">
                  <Icon name={icon as any} size={26} />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="section projects reveal-section is-visible"
        id="projects"
      >
        <div className="container">
          <div className="projects-heading">
            <div className="section-heading section-heading-left">
              <div className="eyebrow">
                <span />
                Project-based learning
              </div>
              <h2>
                Don&apos;t just learn.
                <br />
                <span>Build something real.</span>
              </h2>
              <p>
                Create practical projects that make your skills visible to
                mentors, peers and future employers.
              </p>
            </div>
            <div className="projects-note">
              <Icon name="spark" />
              <span>
                <b>Portfolio-first</b>Every build tells your story.
              </span>
            </div>
          </div>

          <div className="project-grid">
            {projectsData.slice(0, 6).map((project) => (
              <article
                className={`project-card project-${project.color} stagger-card`}
                key={project.id}
              >
                <div className="project-card-image">
                  <img
                    src={project.image}
                    alt={project.alt}
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>
                <div className="project-card-content">
                  <small>{project.tag}</small>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to={`/projects/${project.slug}`}>
                    View project <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CHAPTER 05: ENTER THE INDUSTRY (FLOWCHART PARTNERS ONLY)
      ================================================================ */}
      <section
        className="section py-20 bg-[#0d4545] relative overflow-hidden border-t-2 border-b-2 border-[#172525]"
        id="partners"
      >
        <div className="container relative z-10">
          <div className="section-heading text-center max-w-3xl mx-auto mb-16">
            <div className="comic-chapter-badge">
              <span className="dot" />
              <span>Chapter 05 // Enter the Industry</span>
            </div>
            <h2>
              Where learning meets
              <br />
              <span>enterprise reality.</span>
            </h2>
            <p>
              The Shield Skill Hub Master Architecture anchors each
              technological domain to leading industrial giants and
              institutional accreditation seals. Explore our verified partner
              network below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillHubFlowchartData.partners.map((partner) => (
              <article
                key={partner.id}
                className="comic-panel-card p-6 bg-[#FBF8F3] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-2.5 py-1 rounded bg-[#0d4545] text-[#f5b82e] text-[10px] font-black uppercase tracking-wider border border-[#172525]">
                      {partner.isFirstLogoPair
                        ? "Accreditation"
                        : "Industry Partner"}
                    </span>
                    {partner.isPlaceholderCourses ? (
                      <span className="text-[10px] font-bold text-[#c2410c] bg-[#ffedd5] px-2 py-0.5 rounded border border-[#fdba74]">
                        Track Finalizing
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-[#15803d] bg-[#dcfce7] px-2 py-0.5 rounded border border-[#86efac]">
                        Active Specialization
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-black text-[#172525] group-hover:text-[#115b5b] transition-colors mb-1.5">
                    {partner.name}
                  </h3>

                  <p className="text-xs text-[#8c652e] font-extrabold mb-3">
                    {partner.tagline}
                  </p>

                  <p className="text-xs text-[#536363] font-medium leading-relaxed mb-5 line-clamp-3">
                    {partner.collaborationFocus}
                  </p>

                  <div className="mb-4 pt-3 border-t border-[#172525]/10">
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#172525] mb-2">
                      Offered Programs & Tracks:
                    </div>
                    <div className="space-y-1.5">
                      {partner.programsOffered.slice(0, 2).map((prog, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-[#172525] font-semibold"
                        >
                          <span className="text-[#39a66a] font-bold">▪</span>
                          <span className="line-clamp-1">{prog}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to={partner.partnerRoute}
                  className="comic-btn-teal w-full text-xs mt-2"
                >
                  <span>View Partner Profile</span>
                  <Icon name="arrow" size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CHAPTER 06: BUILDING THE ECOSYSTEM TOGETHER (11 INSTITUTIONS)
      ================================================================ */}
      <section
        className="section py-20 bg-[#0a3838] relative overflow-hidden"
        id="institutions"
      >
        <div className="container relative z-10">
          <div className="section-heading text-center max-w-3xl mx-auto mb-16">
            <div className="comic-chapter-badge">
              <span className="dot" />
              <span>Chapter 06 // Building the Ecosystem Together</span>
            </div>
            <h2>
              Empowering campuses with
              <br />
              <span>11 institutional pathways.</span>
            </h2>
            <p>
              Shield Skill Hub collaborates directly with universities,
              colleges, and academic leadership to transform theoretical
              departments into centers of excellence and continuous innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {institutionServices.map((service, index) => (
              <article
                key={service.id}
                className="comic-panel-card p-5 bg-[#FAF8F3] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#172525] text-[#f5b82e]">
                      Track #{String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-bold text-[#115b5b] bg-[#e6f4f1] px-2 py-0.5 rounded">
                      {service.flowchartGroup === "core"
                        ? "Core Offering"
                        : "Campus Activity"}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-[#172525] group-hover:text-[#115b5b] transition-colors mb-1.5 leading-snug">
                    {service.name}
                  </h3>

                  <p className="text-[11px] text-[#8c652e] font-bold mb-2.5 line-clamp-1">
                    {service.tagline}
                  </p>

                  <p className="text-xs text-[#536363] font-medium leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>
                </div>

                <Link
                  to={`/institutions/${service.slug}`}
                  className="inline-flex items-center justify-between text-xs font-bold text-[#115b5b] hover:text-[#0d4545] pt-3 border-t border-[#172525]/10 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore Track Details</span>
                  <Icon name="arrow" size={14} />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/institutions" className="comic-btn-gold">
              <span>View Full Institutional Prospectus</span>
              <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          CHAPTER 07: THE NEXT CHAPTER IS YOURS (INTERNSHIPS & PLACEMENT)
      ================================================================ */}
      <section
        className="section career reveal-section is-visible"
        id="internships"
      >
        <div className="container">
          <div className="section-heading text-center max-w-3xl mx-auto mb-16">
            <div className="comic-chapter-badge">
              <span className="dot" />
              <span>Chapter 07 // The Next Chapter is Yours</span>
            </div>
            <h2>
              Turn your skills into <span>opportunities.</span>
            </h2>
            <p>
              We help you connect what you learn to the moments that
              matter—projects, interviews, internships and career moves.
            </p>
          </div>

          {/* 5 Internship & Placement Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
            {[
              {
                num: "01",
                title: "Research Collaboration",
                desc: "Peer-reviewed paper co-authorship & algorithmic patents.",
                link: "/internships/research-collaboration",
                isExternal: false,
              },
              {
                num: "02",
                title: "Departmental Lab Builds",
                desc: "Commission hardware/software rigs for university labs.",
                link: "/internships/department-development",
                isExternal: false,
              },
              {
                num: "03",
                title: "Commercial Capstones",
                desc: "Enterprise client problem statements with code reviews.",
                link: "/internships/projects",
                isExternal: false,
              },
              {
                num: "04",
                title: "Career & Interview Clinics",
                desc: "Resume audits, mock interviews, and recruiter referrals.",
                link: "/internships",
                isExternal: false,
              },
              {
                num: "05",
                title: "ChainTrail Credentials",
                desc: "Tamper-proof verifiable on-chain achievement seals.",
                link: "https://chaintrail.com/EnglishVerification/Shield_skillhub",
                isExternal: true,
              },
            ].map((item) => (
              <div
                key={item.num}
                className="comic-panel-card p-5 bg-[#FAF8F3] flex flex-col justify-between"
              >
                <div>
                  <span className="comic-caption-box mb-3">{item.num}</span>
                  <h4 className="text-sm font-black text-[#172525] mb-1.5 uppercase">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#536363] font-medium leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
                {item.isExternal ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-bold text-[#115b5b] inline-flex items-center gap-1 hover:underline"
                  >
                    <span>Verify On-Chain</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <Link
                    to={item.link}
                    className="text-[11px] font-bold text-[#115b5b] inline-flex items-center gap-1 hover:underline"
                  >
                    <span>Explore Track</span>
                    <Icon name="arrow" size={12} />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="career-card">
            <div className="career-art">
              <div className="career-orbit" />
              <div className="career-person">
                <span className="person-head" />
                <span className="person-body" />
                <span className="person-leg one" />
                <span className="person-leg two" />
              </div>
              <div className="career-steps">
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="career-icon ci-one">
                <Icon name="briefcase" />
              </div>
              <div className="career-icon ci-two">
                <Icon name="star" />
              </div>
              <div className="career-icon ci-three">
                <Icon name="chart" />
              </div>
            </div>

            <div className="career-copy">
              <div className="eyebrow">
                <span />
                Career outcomes
              </div>
              <h2>
                Turn your skills into <span>opportunities.</span>
              </h2>
              <p>
                We help you connect what you learn to the moments that
                matter—projects, interviews, internships and career moves.
              </p>
              <div className="outcome-grid">
                {[
                  "Resume building",
                  "Interview preparation",
                  "Portfolio building",
                  "Industry projects",
                  "Internship readiness",
                  "Career guidance",
                ].map((item) => (
                  <span key={item}>
                    <Icon name="check" size={16} />
                    {item}
                  </span>
                ))}
              </div>
              <Link to="/internships" className="button button-primary">
                <span>Explore career support</span>
                <Icon name="arrow" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="section testimonials reveal-section is-visible"
        id="resources"
      >
        <div className="container testimonial-layout">
          <div className="testimonial-intro">
            <div className="section-heading section-heading-left">
              <div className="eyebrow">
                <span />
                Proven impact
              </div>
              <h2>
                Achievements & <span>success stories.</span>
              </h2>
              <p>
                Shield&apos;s legacy is built on meaningful learning initiatives
                and strong industry partnerships.
              </p>
            </div>
            <div className="testimonial-controls">
              <button
                aria-label="Previous testimonial"
                onClick={() =>
                  setTestimonial(
                    (testimonial + testimonials.length - 1) %
                      testimonials.length,
                  )
                }
              >
                <Icon name="arrow" />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={() =>
                  setTestimonial((testimonial + 1) % testimonials.length)
                }
              >
                <Icon name="arrow" />
              </button>
            </div>
          </div>

          <div className="testimonial-stage">
            <div className="testimonial-back one" />
            <div className="testimonial-back two" />
            <article className="testimonial-card">
              <div className="quote-mark">“</div>
              <div className="shield-proof">
                <Icon name="shield" size={15} /> Verified Shield outcome
              </div>
              <blockquote>{testimonials[testimonial].quote}</blockquote>
              <div className="person">
                <div className="person-avatar">
                  {testimonials[testimonial].initials}
                </div>
                <div>
                  <b>{testimonials[testimonial].name}</b>
                  <span>{testimonials[testimonial].role}</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Verified Credentials Section */}
      <section className="section credentials reveal-section is-visible">
        <div className="container credentials-card">
          <div>
            <div className="eyebrow">
              <span />
              Verified achievement
            </div>
            <h2>
              Learning that earns <span>recognition.</span>
            </h2>
            <p>
              Celebrate your progress with certificates built to be shared,
              verified and trusted across LinkedIn and employer portals.
            </p>
            <a
              href="https://chaintrail.com/EnglishVerification/Shield_skillhub"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Verify a certificate <Icon name="arrow" />
            </a>
          </div>

          <div className="certificate">
            <div className="cert-logo">
              <Icon name="shield" size={25} />
            </div>
            <small>Shield Skilling Academy</small>
            <h3>Certificate of Completion</h3>
            <p>Industry-ready learning achievement</p>
            <div className="cert-line" />
            <div className="cert-seal">
              <Icon name="check" size={27} />
            </div>
          </div>

          <div className="badge-stack">
            <span>
              <Icon name="star" />
            </span>
            <b>
              Verified
              <br />
              Credential
            </b>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section faq reveal-section is-visible">
        <div className="container faq-layout">
          <div className="faq-intro">
            <div className="section-heading section-heading-left">
              <div className="eyebrow">
                <span />
                Frequently asked
              </div>
              <h2>
                Questions, meet <span>answers.</span>
              </h2>
              <p>Everything you need to take the next step with confidence.</p>
            </div>
            <Link to="/contact" className="button button-secondary">
              <span>Talk to an advisor</span>
              <Icon name="arrow" size={18} />
            </Link>
          </div>

          <div className="accordion">
            {faqs.map(([question, answer], index) => (
              <article
                className={`faq-item ${faq === index ? "faq-open" : ""}`}
                key={question}
              >
                <button
                  onClick={() => setFaq(faq === index ? -1 : index)}
                  aria-expanded={faq === index}
                >
                  <span>{question}</span>
                  <i>
                    <Icon name="chevron" />
                  </i>
                </button>
                <div className="faq-answer">
                  <p>{answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FINAL CTA: START YOUR JOURNEY
      ================================================================ */}
      <section className="final-cta reveal-section is-visible" id="contact">
        <div className="container final-card">
          <div className="final-copy">
            <div className="comic-chapter-badge">
              <span className="dot" />
              <span>The Next Chapter Is Yours</span>
            </div>
            <div className="eyebrow eyebrow-light">
              <span />
              Your next chapter
            </div>
            <h2>
              Your career frontier
              <br />
              <span>starts here.</span>
            </h2>
            <p>Learn the skills. Build the experience. Create your future.</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="#master-map" className="button button-light">
                <span>START YOUR JOURNEY</span>
                <Icon name="arrow" size={18} />
              </a>
              <Link to="/contact" className="button button-ghost">
                <span>Talk to us</span>
              </Link>
            </div>
          </div>
          <div className="final-art">
            <div className="final-planet">
              <Icon name="rocket" size={72} />
            </div>
            <span className="final-orbit" />
            <div className="final-float ff-one">
              <Icon name="code" />
            </div>
            <div className="final-float ff-two">
              <Icon name="brain" />
            </div>
            <div className="final-float ff-three">
              <Icon name="star" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
