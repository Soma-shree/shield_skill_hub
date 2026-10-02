import React, { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { Icon } from "../components/Icons"
import { CourseCard } from "../components/CourseCard"
import { courseService, CourseFilterOptions } from "../services/courseService"
import { recommendationService } from "../services/recommendationService"
import { useAuth } from "../context/AuthContext"

export function CoursesPage() {
  const { user } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLevel, setSelectedLevel] = useState("All Levels")
  const [sortBy, setSortBy] =
    useState<CourseFilterOptions["sortBy"]>("top-rated")

  const categories = courseService.getCategories()
  const topRatedCourses = useMemo(() => courseService.getTopRatedCourses(3), [])

  // Recommendation engine output
  const recommendations = useMemo(() => {
    return recommendationService.getRecommendationsForUser(user)
  }, [user])

  // Filtered courses
  const filteredCourses = useMemo(() => {
    return courseService.getCourses({
      searchQuery,
      category: selectedCategory,
      level: selectedLevel,
      sortBy,
    })
  }, [searchQuery, selectedCategory, selectedLevel, sortBy])

  return (
    <main
      style={{
        paddingTop: "110px",
        backgroundColor: "var(--canvas)",
        minHeight: "100vh",
      }}
    >
      {/* 1. Hero Section */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #172525 0%, #115b5b 60%, #183f3f 100%)",
          color: "var(--white)",
          padding: "70px 0 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="hero-grid-pattern" style={{ opacity: 0.15 }} />
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          <div
            className="eyebrow"
            style={{
              justifyContent: "center",
              color: "var(--orange)",
              marginBottom: "16px",
            }}
          >
            <span style={{ background: "var(--orange)" }} />
            Future-Ready Learning Catalog
          </div>
          <h1
            style={{
              fontSize: "clamp(38px, 4.5vw, 56px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              margin: "0 0 18px",
            }}
          >
            Learn Skills That <br />
            <span style={{ color: "var(--orange)" }}>Build Your Career</span>
          </h1>
          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.7",
              color: "rgba(255, 255, 255, 0.78)",
              maxWidth: "620px",
              margin: "0 auto 32px",
            }}
          >
            Master industry-relevant technology skills through structured
            curricula, guided labs, and real-world portfolio projects mentored
            by experienced practitioners.
          </p>

          {/* Search bar inside hero */}
          <div
            style={{
              maxWidth: "580px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              backgroundColor: "var(--white)",
              borderRadius: "16px",
              padding: "6px 8px 6px 18px",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.28)",
            }}
          >
            <Icon name="search" size={20} className="text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, skills, or topics (e.g. Python, AI, React)..."
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                padding: "10px 14px",
                fontSize: "14px",
                color: "var(--ink)",
                background: "transparent",
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--muted)",
                  cursor: "pointer",
                  padding: "4px 8px",
                }}
                aria-label="Clear search"
              >
                <Icon name="x" size={16} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. Interactive Category Filters & Sorting Row */}
      <section
        style={{
          backgroundColor: "var(--white)",
          borderBottom: "1px solid var(--line)",
          padding: "20px 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {/* Scrollable category pills */}
            <div
              className="filter-row"
              style={{
                margin: 0,
                overflowX: "auto",
                flex: 1,
                minWidth: "280px",
              }}
              role="tablist"
              aria-label="Course categories"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  className={selectedCategory === cat ? "selected" : ""}
                  onClick={() => setSelectedCategory(cat)}
                  style={{ whiteSpace: "nowrap" }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Dropdown filters for level & sort */}
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                style={{
                  padding: "8px 14px",
                  borderRadius: "10px",
                  border: "1px solid var(--line)",
                  backgroundColor: "var(--white)",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "var(--ink)",
                  cursor: "pointer",
                }}
                aria-label="Filter by difficulty"
              >
                <option value="All Levels">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                style={{
                  padding: "8px 14px",
                  borderRadius: "10px",
                  border: "1px solid var(--line)",
                  backgroundColor: "var(--white)",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "var(--ink)",
                  cursor: "pointer",
                }}
                aria-label="Sort courses"
              >
                <option value="top-rated">Top Rated ⭐</option>
                <option value="most-popular">Most Popular</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Recommended For You Section */}
      <section style={{ padding: "50px 0 20px" }}>
        <div className="container">
          {user ? (
            <div
              style={{
                backgroundColor: "var(--white)",
                borderRadius: "24px",
                padding: "32px",
                border: "1px solid var(--line)",
                boxShadow: "0 10px 30px rgba(17, 91, 91, 0.06)",
                marginBottom: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "var(--blue)",
                      fontWeight: 800,
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    <Icon name="spark" size={16} /> Recommended For You
                  </div>
                  <h2
                    style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      margin: "4px 0 0",
                      color: "var(--ink)",
                    }}
                  >
                    Personalized Picks for {user.name.split(" ")[0]}
                  </h2>
                  <p
                    style={{
                      margin: "4px 0 0",
                      fontSize: "13px",
                      color: "var(--muted)",
                    }}
                  >
                    {recommendations?.reason}
                  </p>
                </div>
                <Link
                  to="/profile"
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--blue)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Adjust your interests <Icon name="arrow" size={14} />
                </Link>
              </div>

              <div className="course-grid">
                {recommendations?.courses.map((course) => (
                  <CourseCard key={`rec-${course.id}`} course={course} />
                ))}
              </div>
            </div>
          ) : (
            <div
              style={{
                backgroundColor: "linear-gradient(145deg, #f0f7f5, #e4f1ed)",
                borderRadius: "20px",
                padding: "24px 30px",
                border: "1px dashed var(--blue)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                flexWrap: "wrap",
                marginBottom: "40px",
                background: "#f0f7f5",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "14px" }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: "var(--soft-blue)",
                    color: "var(--blue)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Icon name="spark" size={22} />
                </div>
                <div>
                  <b
                    style={{
                      color: "var(--ink)",
                      fontSize: "15px",
                      display: "block",
                    }}
                  >
                    Looking for personalized recommendations?
                  </b>
                  <span style={{ color: "var(--muted)", fontSize: "12px" }}>
                    Log in to receive curated course suggestions tailored to
                    your career goals and interests.
                  </span>
                </div>
              </div>
              <Link
                to="/login?redirect=/courses"
                className="button button-primary"
                style={{ minHeight: "40px" }}
              >
                <span>Login for Recommendations</span>
                <Icon name="arrow" size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 4. Top Rated Courses Section */}
      {!searchQuery &&
        selectedCategory === "All" &&
        selectedLevel === "All Levels" && (
          <section style={{ padding: "20px 0 50px" }}>
            <div className="container">
              <div
                className="section-heading section-heading-left"
                style={{ marginBottom: "30px" }}
              >
                <div className="eyebrow">
                  <span />
                  Student Favorites
                </div>
                <h2>
                  Top Rated <span>Courses</span>
                </h2>
                <p>
                  Highly reviewed learning paths recognized for practical
                  mentorship, depth of labs, and verifiable career outcomes.
                </p>
              </div>

              <div className="course-grid">
                {topRatedCourses.map((course) => (
                  <CourseCard key={`top-${course.id}`} course={course} />
                ))}
              </div>
            </div>
          </section>
        )}

      {/* 5. All Filtered Courses Section */}
      <section style={{ padding: "20px 0 70px" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "28px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "26px",
                  fontWeight: 800,
                  margin: 0,
                  color: "var(--ink)",
                }}
              >
                {searchQuery
                  ? `Search results for "${searchQuery}"`
                  : selectedCategory === "All"
                    ? "Explore All Learning Paths"
                    : `${selectedCategory} Courses`}
              </h2>
              <span style={{ fontSize: "13px", color: "var(--muted)" }}>
                Showing {filteredCourses.length} course
                {filteredCourses.length === 1 ? "" : "s"}
              </span>
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="course-grid">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "60px 20px",
                backgroundColor: "var(--white)",
                borderRadius: "20px",
                border: "1px solid var(--line)",
              }}
            >
              <Icon name="search" size={40} className="text-gray-300" />
              <h3
                style={{
                  margin: "16px 0 8px",
                  fontSize: "20px",
                  color: "var(--ink)",
                }}
              >
                No matching courses found
              </h3>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "14px",
                  maxWidth: "420px",
                  margin: "0 auto 20px",
                }}
              >
                We couldn&apos;t find courses matching &ldquo;{searchQuery}
                &rdquo;. Try adjusting your keywords or clearing selected
                filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                  setSelectedLevel("All Levels")
                }}
                className="button button-secondary"
              >
                <span>Reset all filters</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 6. Hands-On Projects Preview Banner */}
      <section style={{ padding: "0 0 80px" }}>
        <div className="container">
          <div
            style={{
              background: "linear-gradient(135deg, #183f3f, #115b5b)",
              borderRadius: "32px",
              padding: "45px 50px",
              color: "var(--white)",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
              gap: "30px",
              boxShadow: "0 20px 45px rgba(17, 91, 91, 0.2)",
            }}
          >
            <div>
              <div
                className="eyebrow eyebrow-light"
                style={{ marginBottom: "12px" }}
              >
                <span />
                Project-First Pedagogy
              </div>
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  margin: "0 0 10px",
                  letterSpacing: "-0.03em",
                }}
              >
                Don&apos;t just watch lectures. Solve real problem statements.
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "15px",
                  maxWidth: "600px",
                  lineHeight: "1.6",
                }}
              >
                Every course is paired with industry problem statements—from
                telecom churn prediction to full-stack cloud applications. Build
                your GitHub portfolio and prove your skills to recruiters.
              </p>
            </div>
            <Link
              to="/projects"
              className="button button-light"
              style={{ whiteSpace: "nowrap" }}
            >
              <span>Explore Hands-On Projects</span>
              <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
export default CoursesPage
