import React from "react"
import { Link } from "react-router-dom"
import { Course } from "../types"
import { Icon } from "./Icons"

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card stagger-card">
      <div className="course-art">
        <img
          src={course.image}
          alt={course.title}
          className="course-image"
          loading="lazy"
        />
        <div className="course-category">{course.category}</div>
        {course.badgeText && (
          <span
            style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              background: "var(--orange)",
              color: "var(--ink)",
              fontSize: "9px",
              fontWeight: 800,
              padding: "4px 8px",
              borderRadius: "6px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              zIndex: 4,
            }}
          >
            {course.badgeText}
          </span>
        )}
      </div>

      <div className="course-body">
        <div
          className="course-rating"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              color: "var(--orange)",
              fontWeight: 800,
            }}
          >
            <Icon name="star" size={14} /> {course.rating.toFixed(1)}
            <span
              style={{
                color: "var(--muted)",
                fontWeight: 500,
                fontSize: "11px",
              }}
            >
              ({course.reviewCount.toLocaleString()})
            </span>
          </span>
          <span
            style={{ color: "var(--muted)", fontSize: "11px", fontWeight: 600 }}
          >
            {course.studentCount.toLocaleString()}+ students
          </span>
        </div>

        <h3>{course.title}</h3>
        <p>{course.subtitle || course.description}</p>

        <div className="course-meta">
          <span>
            <Icon name="clock" size={15} />
            {course.duration}
          </span>
          <span>
            <Icon name="compass" size={15} />
            {course.level}
          </span>
        </div>

        <div
          style={{
            marginTop: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "19px",
                fontWeight: 800,
                color: "var(--ink)",
                letterSpacing: "-0.02em",
              }}
            >
              ₹{course.price.toLocaleString("en-IN")}
            </span>
            {course.originalPrice > course.price && (
              <span
                style={{
                  marginLeft: "8px",
                  fontSize: "12px",
                  color: "var(--muted)",
                  textDecoration: "line-through",
                }}
              >
                ₹{course.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          <Link
            to={`/courses/${course.slug}`}
            className="course-link"
            style={{ margin: 0, gap: "6px" }}
          >
            <span>View Course</span>
            <Icon name="arrow" size={16} />
          </Link>
        </div>
      </div>
    </article>
  )
}
export default CourseCard
