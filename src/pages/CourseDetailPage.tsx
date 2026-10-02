import React, { useState, useMemo } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { courseService } from "../services/courseService"
import { reviewService } from "../services/reviewService"
import { useAuth } from "../context/AuthContext"
import { Icon } from "../components/Icons"
import { ReviewModal } from "../components/ReviewModal"
import "../styles/comicEditorial.css"

export function CourseDetailPage() {
  const { courseId } = useParams<{ courseId: string }>()
  const navigate = useNavigate()
  const { user } = useAuth()

  const [expandedModules, setExpandedModules] =
    useState<Record<string, boolean>>({
      "mod-1": true,
      "gmod-1": true,
      "fs-1": true,
      "cd-1": true,
      "ds-1": true,
      "cs-1": true,
      "dm-1": true,
      "mlo-1": true,
    })
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
  const [reviewRefreshTrigger, setReviewRefreshTrigger] = useState(0)

  // Look up course
  const course = useMemo(() => {
    if (!courseId) return undefined
    return courseService.getCourseBySlug(courseId)
  }, [courseId])

  // Get live reviews & rating stats
  const ratingStats = useMemo(() => {
    if (!course) return null
    return reviewService.getCourseRatingStats(course.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course, reviewRefreshTrigger])

  const reviewsList = useMemo(() => {
    if (!course) return []
    return reviewService.getReviewsForCourse(course.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course, reviewRefreshTrigger])

  const hasReviewed = useMemo(() => {
    if (!course || !user) return false
    return reviewService.hasUserReviewedCourse(course.id, user.email)
  }, [course, user, reviewRefreshTrigger])

  const isEnrolled = useMemo(() => {
    if (!course || !user) return false
    return user.enrolledCourseIds.includes(course.id)
  }, [course, user])

  if (!course) {
    return (
      <main
        style={{ paddingTop: "140px", minHeight: "80vh", textAlign: "center" }}
      >
        <div className="container">
          <h2>Course Not Found</h2>
          <p style={{ color: "var(--muted)", margin: "16px 0 24px" }}>
            The requested course could not be located in our learning catalog.
          </p>
          <Link to="/courses" className="button button-primary">
            <span>Browse All Courses</span>
            <Icon name="arrow" size={16} />
          </Link>
        </div>
      </main>
    )
  }

  const toggleModule = (modId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [modId]: !prev[modId],
    }))
  }

  const toggleAllModules = () => {
    const allExpanded = course.modules.every((m) => expandedModules[m.id])
    const nextState: Record<string, boolean> = {}
    course.modules.forEach((m) => {
      nextState[m.id] = !allExpanded
    })
    setExpandedModules(nextState)
  }

  const handleEnrollClick = () => {
    if (!user) {
      navigate(`/login?redirect=/checkout/${course.slug}`)
    } else if (isEnrolled) {
      navigate("/my-courses")
    } else {
      navigate(`/checkout/${course.slug}`)
    }
  }

  return (
    <main
      style={{
        paddingTop: "90px",
        backgroundColor: "var(--canvas)",
        minHeight: "100vh",
      }}
    >
      {/* 1. Course Hero */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #172525 0%, #115b5b 60%, #183f3f 100%)",
          color: "var(--white)",
          padding: "60px 0 75px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="hero-grid-pattern" style={{ opacity: 0.12 }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          {/* Breadcrumbs */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              fontSize: "12px",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "20px",
            }}
          >
            <Link to="/courses" style={{ color: "var(--orange)" }}>
              Courses
            </Link>
            <span>/</span>
            <span>{course.category}</span>
            <span>/</span>
            <span style={{ color: "var(--white)" }}>{course.title}</span>
          </div>

          {/* Comic Progression Track */}
          <div
            className="comic-progression-track"
            style={{ marginBottom: "24px" }}
          >
            <div className="comic-level-badge">Level 01: Foundations</div>
            <span className="comic-level-arrow">→</span>
            <div className="comic-level-badge is-active">
              Level 02: Core Curriculum
            </div>
            <span className="comic-level-arrow">→</span>
            <div className="comic-level-badge">Level 03: Capstone Build</div>
            <span className="comic-level-arrow">→</span>
            <div className="comic-level-badge">Level 04: Industry Review</div>
            <span className="comic-level-arrow">→</span>
            <div className="comic-level-badge">Level 05: Placement</div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 380px",
              gap: "45px",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(6px)",
                  fontSize: "12px",
                  fontWeight: 700,
                  marginBottom: "16px",
                  color: "var(--orange)",
                }}
              >
                <Icon name="shield" size={14} /> Shield Certified Track ·{" "}
                {course.category}
              </div>

              <h1
                style={{
                  fontSize: "clamp(32px, 3.8vw, 48px)",
                  fontWeight: 800,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.15,
                  margin: "0 0 16px",
                }}
              >
                {course.title}
              </h1>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: "680px",
                  margin: "0 0 24px",
                }}
              >
                {course.subtitle}
              </p>

              {/* Course Meta Pills */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  flexWrap: "wrap",
                  alignItems: "center",
                  marginBottom: "32px",
                  fontSize: "13px",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "var(--orange)",
                    fontWeight: 800,
                  }}
                >
                  <Icon name="star" size={16} />{" "}
                  {ratingStats?.averageRating.toFixed(1)}
                  <span
                    style={{ color: "rgba(255,255,255,0.7)", fontWeight: 500 }}
                  >
                    ({ratingStats?.totalReviews.toLocaleString()} ratings)
                  </span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  <Icon name="users" size={16} />{" "}
                  {course.studentCount.toLocaleString()}+ students enrolled
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  <Icon name="clock" size={16} /> {course.duration}
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  <Icon name="compass" size={16} /> {course.level}
                </span>
              </div>
            </div>

            {/* Sticky Card Sidebar */}
            <div>
              <div
                style={{
                  backgroundColor: "var(--white)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 25px 60px rgba(0, 0, 0, 0.28)",
                  color: "var(--ink)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "190px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
                      display: "flex",
                      alignItems: "flex-end",
                      padding: "16px",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--white)",
                        fontSize: "12px",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Icon name="play" size={14} /> Guided Video Labs & Real
                      Projects
                    </span>
                  </div>
                </div>

                <div style={{ padding: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "10px",
                      marginBottom: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "28px",
                        fontWeight: 800,
                        color: "var(--ink)",
                      }}
                    >
                      ₹{course.price.toLocaleString("en-IN")}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "var(--muted)",
                        textDecoration: "line-through",
                      }}
                    >
                      ₹{course.originalPrice.toLocaleString("en-IN")}
                    </span>
                    <span
                      style={{
                        marginLeft: "auto",
                        fontSize: "11px",
                        fontWeight: 800,
                        color: "#15803d",
                        backgroundColor: "#dcfce7",
                        padding: "3px 8px",
                        borderRadius: "6px",
                      }}
                    >
                      Save{" "}
                      {Math.round(
                        ((course.originalPrice - course.price) /
                          course.originalPrice) *
                          100,
                      )}
                      %
                    </span>
                  </div>

                  <button
                    onClick={handleEnrollClick}
                    className="button button-primary"
                    style={{
                      width: "100%",
                      minHeight: "48px",
                      marginBottom: "14px",
                    }}
                  >
                    <span>
                      {isEnrolled ? "Continue Learning" : "Enroll Now"}
                    </span>
                    <Icon name="arrow" size={18} />
                  </button>

                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--muted)",
                      textAlign: "center",
                      lineHeight: "1.5",
                    }}
                  >
                    ✓ 30-Day Money-Back Guarantee <br />✓ Verifiable Certificate
                    on ChainTrail <br />✓ Full Lifetime Access to Project
                    Repositories
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Course Overview */}
      <section style={{ padding: "60px 0 40px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 380px",
              gap: "45px",
            }}
          >
            <div>
              {/* What you'll learn */}
              <div
                style={{
                  backgroundColor: "var(--white)",
                  borderRadius: "24px",
                  padding: "36px",
                  border: "1px solid var(--line)",
                  marginBottom: "40px",
                }}
              >
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    margin: "0 0 20px",
                    color: "var(--ink)",
                  }}
                >
                  What You Will Learn
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}
                >
                  {course.whatYouWillLearn.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "flex-start",
                        fontSize: "13px",
                        lineHeight: "1.6",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--blue)",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        <Icon name="check" size={16} />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Demo Course Structure / Expandable Curriculum */}
              <div
                style={{
                  backgroundColor: "var(--white)",
                  borderRadius: "24px",
                  padding: "36px",
                  border: "1px solid var(--line)",
                  marginBottom: "40px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                    flexWrap: "wrap",
                    gap: "10px",
                  }}
                >
                  <div>
                    <h2
                      style={{
                        fontSize: "22px",
                        fontWeight: 800,
                        margin: 0,
                        color: "var(--ink)",
                      }}
                    >
                      Course Curriculum
                    </h2>
                    <span style={{ fontSize: "13px", color: "var(--muted)" }}>
                      {course.modules.length} Modules •{" "}
                      {course.modules.reduce(
                        (acc, m) => acc + m.lessonCount,
                        0,
                      )}{" "}
                      Lessons
                    </span>
                  </div>
                  <button
                    onClick={toggleAllModules}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--blue)",
                      fontWeight: 700,
                      fontSize: "12px",
                      cursor: "pointer",
                    }}
                  >
                    {course.modules.every((m) => expandedModules[m.id])
                      ? "Collapse All Modules"
                      : "Expand All Modules"}
                  </button>
                </div>

                <div style={{ display: "grid", gap: "12px" }}>
                  {course.modules.map((mod) => {
                    const isExpanded = !!expandedModules[mod.id]
                    return (
                      <div
                        key={mod.id}
                        style={{
                          border: "1px solid var(--line)",
                          borderRadius: "16px",
                          overflow: "hidden",
                        }}
                      >
                        <button
                          onClick={() => toggleModule(mod.id)}
                          style={{
                            width: "100%",
                            padding: "16px 20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            background: isExpanded ? "#f8fbfa" : "var(--white)",
                            border: "none",
                            cursor: "pointer",
                            textAlign: "left",
                          }}
                          aria-expanded={isExpanded}
                        >
                          <div>
                            <span
                              style={{
                                fontSize: "10px",
                                fontWeight: 800,
                                color: "var(--blue)",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                              }}
                            >
                              Module {mod.number}
                            </span>
                            <div
                              style={{
                                fontSize: "15px",
                                fontWeight: 800,
                                color: "var(--ink)",
                                marginTop: "2px",
                              }}
                            >
                              {mod.title}
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "14px",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "12px",
                                color: "var(--muted)",
                              }}
                            >
                              {mod.lessonCount} lessons • {mod.duration}
                            </span>
                            <span
                              style={{
                                transform: isExpanded
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                                transition: "transform 0.2s ease",
                              }}
                            >
                              <Icon name="chevron" size={18} />
                            </span>
                          </div>
                        </button>

                        {isExpanded && (
                          <div
                            style={{
                              borderTop: "1px solid var(--line)",
                              backgroundColor: "var(--white)",
                            }}
                          >
                            {mod.lessons.map((lesson) => (
                              <div
                                key={lesson.id}
                                style={{
                                  padding: "12px 20px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  borderBottom: "1px solid #f3f7f6",
                                  fontSize: "13px",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                  }}
                                >
                                  <span style={{ color: "var(--muted)" }}>
                                    <Icon name="play" size={14} />
                                  </span>
                                  <span
                                    style={{
                                      color: "var(--ink)",
                                      fontWeight: 500,
                                    }}
                                  >
                                    {lesson.title}
                                  </span>
                                  {lesson.isFreePreview && (
                                    <span
                                      style={{
                                        fontSize: "9px",
                                        fontWeight: 800,
                                        padding: "2px 6px",
                                        borderRadius: "4px",
                                        backgroundColor: "#e0f2fe",
                                        color: "#0369a1",
                                      }}
                                    >
                                      FREE PREVIEW
                                    </span>
                                  )}
                                </div>
                                <span
                                  style={{
                                    fontSize: "12px",
                                    color: "var(--muted)",
                                  }}
                                >
                                  {lesson.duration}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* 4. Hands-On Project Problem Statements */}
              <div
                style={{
                  backgroundColor: "var(--white)",
                  borderRadius: "24px",
                  padding: "36px",
                  border: "1px solid var(--line)",
                  marginBottom: "40px",
                }}
              >
                <div className="eyebrow" style={{ marginBottom: "8px" }}>
                  <span />
                  Applied Engineering
                </div>
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    margin: "0 0 10px",
                    color: "var(--ink)",
                  }}
                >
                  Hands-On Projects
                </h2>
                <p
                  style={{
                    margin: "0 0 24px",
                    fontSize: "13px",
                    color: "var(--muted)",
                    lineHeight: "1.6",
                  }}
                >
                  Theory without problem statements is quickly forgotten. Here
                  are the practical enterprise use-cases you will build and
                  showcase in your GitHub portfolio:
                </p>

                <div style={{ display: "grid", gap: "20px" }}>
                  {course.projects.map((proj) => (
                    <div
                      key={proj.id}
                      style={{
                        padding: "24px",
                        borderRadius: "18px",
                        border: "1px solid var(--line)",
                        backgroundColor: "#f9fbfa",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "8px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "10px",
                            fontWeight: 800,
                            color: "var(--blue)",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                          }}
                        >
                          Practical Problem Statement
                        </span>
                        <span
                          style={{
                            fontSize: "10px",
                            fontWeight: 700,
                            padding: "3px 8px",
                            borderRadius: "6px",
                            backgroundColor: "var(--soft-blue)",
                            color: "var(--navy)",
                          }}
                        >
                          {proj.difficulty}
                        </span>
                      </div>

                      <h3
                        style={{
                          margin: "0 0 8px",
                          fontSize: "18px",
                          fontWeight: 800,
                          color: "var(--ink)",
                        }}
                      >
                        {proj.title}
                      </h3>

                      <p
                        style={{
                          margin: "0 0 14px",
                          fontSize: "13px",
                          color: "var(--muted)",
                          lineHeight: "1.6",
                        }}
                      >
                        &ldquo;{proj.problemStatement}&rdquo;
                      </p>

                      <div
                        style={{
                          display: "flex",
                          gap: "6px",
                          flexWrap: "wrap",
                          marginBottom: "14px",
                        }}
                      >
                        {proj.technologies.map((tech) => (
                          <span
                            key={tech}
                            style={{
                              fontSize: "11px",
                              fontWeight: 700,
                              padding: "3px 8px",
                              borderRadius: "6px",
                              backgroundColor: "var(--white)",
                              border: "1px solid var(--line)",
                              color: "var(--ink)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexWrap: "wrap",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "12px",
                            color: "var(--navy)",
                            fontWeight: 600,
                          }}
                        >
                          <b>Expected Outcome:</b> {proj.expectedOutcome}
                        </div>
                        {proj.projectId && (
                          <Link
                            to={`/projects/${proj.projectId}`}
                            style={{
                              fontSize: "12px",
                              fontWeight: 800,
                              color: "var(--blue)",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <span>View Full Problem</span>
                            <Icon name="arrow" size={14} />
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Course Rating & Reviews System */}
              <div
                style={{
                  backgroundColor: "var(--white)",
                  borderRadius: "24px",
                  padding: "36px",
                  border: "1px solid var(--line)",
                  marginBottom: "40px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "24px",
                    flexWrap: "wrap",
                    gap: "14px",
                  }}
                >
                  <div>
                    <h2
                      style={{
                        fontSize: "22px",
                        fontWeight: 800,
                        margin: 0,
                        color: "var(--ink)",
                      }}
                    >
                      Student Reviews & Ratings
                    </h2>
                    <span style={{ fontSize: "13px", color: "var(--muted)" }}>
                      Verified learner feedback & evaluations
                    </span>
                  </div>
                  <button
                    onClick={() => setIsReviewModalOpen(true)}
                    disabled={hasReviewed}
                    className="button button-secondary"
                    style={{ minHeight: "38px", padding: "0 16px" }}
                  >
                    <span>
                      {hasReviewed ? "Review Submitted ✓" : "Rate This Course"}
                    </span>
                    <Icon name="star" size={15} />
                  </button>
                </div>

                {/* Rating Distribution Breakdown */}
                {ratingStats && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "180px 1fr",
                      gap: "30px",
                      alignItems: "center",
                      padding: "24px",
                      backgroundColor: "#f9fbfa",
                      borderRadius: "18px",
                      marginBottom: "28px",
                    }}
                  >
                    <div
                      style={{
                        textAlign: "center",
                        borderRight: "1px solid var(--line)",
                        paddingRight: "20px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "48px",
                          fontWeight: 800,
                          color: "var(--ink)",
                          lineHeight: 1,
                        }}
                      >
                        {ratingStats.averageRating.toFixed(1)}
                      </div>
                      <div
                        style={{
                          display: "inline-flex",
                          gap: "2px",
                          color: "var(--orange)",
                          margin: "8px 0 4px",
                        }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} name="star" size={16} />
                        ))}
                      </div>
                      <div style={{ fontSize: "11px", color: "var(--muted)" }}>
                        Course Rating ·{" "}
                        {ratingStats.totalReviews.toLocaleString()} reviews
                      </div>
                    </div>

                    <div style={{ display: "grid", gap: "6px" }}>
                      {[5, 4, 3, 2, 1].map((stars) => {
                        const pct =
                          ratingStats.distribution[
                            (stars as keyof typeof ratingStats.distribution)
                          ] || 0
                        return (
                          <div
                            key={stars}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              fontSize: "12px",
                            }}
                          >
                            <span
                              style={{
                                width: "45px",
                                color: "var(--muted)",
                                fontWeight: 700,
                              }}
                            >
                              {stars} stars
                            </span>
                            <div
                              style={{
                                flex: 1,
                                height: "8px",
                                backgroundColor: "#e2e8f0",
                                borderRadius: "4px",
                                overflow: "hidden",
                              }}
                            >
                              <div
                                style={{
                                  width: `${pct}%`,
                                  height: "100%",
                                  backgroundColor: "var(--orange)",
                                  borderRadius: "4px",
                                }}
                              />
                            </div>
                            <span
                              style={{
                                width: "35px",
                                textAlign: "right",
                                color: "var(--muted)",
                                fontWeight: 600,
                              }}
                            >
                              {pct}%
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Reviews List */}
                <div style={{ display: "grid", gap: "16px" }}>
                  {reviewsList.map((rev) => (
                    <div
                      key={rev.id}
                      style={{
                        padding: "18px",
                        borderRadius: "14px",
                        border: "1px solid var(--line)",
                        backgroundColor: "var(--white)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "8px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <span
                            style={{
                              width: "32px",
                              height: "32px",
                              borderRadius: "50%",
                              backgroundColor: "var(--soft-blue)",
                              color: "var(--blue)",
                              display: "grid",
                              placeItems: "center",
                              fontSize: "11px",
                              fontWeight: 800,
                            }}
                          >
                            {rev.userInitials}
                          </span>
                          <div>
                            <span
                              style={{
                                fontSize: "13px",
                                fontWeight: 800,
                                color: "var(--ink)",
                                display: "block",
                              }}
                            >
                              {rev.userName}
                            </span>
                            <span
                              style={{
                                fontSize: "10px",
                                color: "var(--muted)",
                              }}
                            >
                              {rev.date}
                            </span>
                          </div>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            gap: "2px",
                            color: "var(--orange)",
                          }}
                        >
                          {[...Array(rev.rating)].map((_, i) => (
                            <Icon key={i} name="star" size={13} />
                          ))}
                        </div>
                      </div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "13px",
                          color: "var(--muted)",
                          lineHeight: "1.6",
                        }}
                      >
                        {rev.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar info */}
            <div>
              <div
                style={{
                  backgroundColor: "var(--white)",
                  borderRadius: "20px",
                  padding: "28px",
                  border: "1px solid var(--line)",
                  marginBottom: "24px",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 14px",
                    fontSize: "17px",
                    fontWeight: 800,
                    color: "var(--ink)",
                  }}
                >
                  Who is this course for?
                </h3>
                <ul
                  style={{
                    paddingLeft: "18px",
                    margin: 0,
                    display: "grid",
                    gap: "10px",
                    fontSize: "13px",
                    color: "var(--muted)",
                    lineHeight: "1.6",
                  }}
                >
                  {course.whoIsThisFor.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <hr
                  style={{
                    border: "none",
                    borderTop: "1px solid var(--line)",
                    margin: "20px 0",
                  }}
                />

                <h3
                  style={{
                    margin: "0 0 14px",
                    fontSize: "17px",
                    fontWeight: 800,
                    color: "var(--ink)",
                  }}
                >
                  Prerequisites
                </h3>
                <ul
                  style={{
                    paddingLeft: "18px",
                    margin: 0,
                    display: "grid",
                    gap: "10px",
                    fontSize: "13px",
                    color: "var(--muted)",
                    lineHeight: "1.6",
                  }}
                >
                  {course.prerequisites.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  backgroundColor: "var(--soft-blue)",
                  borderRadius: "20px",
                  padding: "24px",
                  border: "1px solid var(--blue)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginBottom: "10px",
                    color: "var(--blue)",
                  }}
                >
                  <Icon name="shield" size={20} />
                  <b style={{ fontSize: "15px" }}>Shield Academy Assurance</b>
                </div>
                <p
                  style={{
                    margin: "0 0 16px",
                    fontSize: "12px",
                    color: "var(--navy)",
                    lineHeight: "1.6",
                  }}
                >
                  All learning programs are curated by senior industry mentors
                  and aligned with corporate hiring benchmarks.
                </p>
                <Link
                  to="/contact"
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "var(--blue)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Talk to an admissions advisor <Icon name="arrow" size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Modal Dialog */}
      <ReviewModal
        courseId={course.id}
        courseTitle={course.title}
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onReviewSubmitted={() => setReviewRefreshTrigger((v) => v + 1)}
      />
    </main>
  )
}
export default CourseDetailPage
