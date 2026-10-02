import React, { useState } from "react"
import { Icon } from "./Icons"
import { reviewService } from "../services/reviewService"
import { useAuth } from "../context/AuthContext"

export function ReviewModal({
  courseId,
  courseTitle,
  isOpen,
  onClose,
  onReviewSubmitted,
}: {
  courseId: string
  courseTitle: string
  isOpen: boolean
  onClose: () => void
  onReviewSubmitted: () => void
}) {
  const { user } = useAuth()
  const [rating, setRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)
  const [comment, setComment] = useState("")
  const [name, setName] = useState(user?.name || "")
  const [email, setEmail] = useState(user?.email || "")
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const reviewerName = user?.name || name
    const reviewerEmail = user?.email || email

    if (!reviewerName) {
      setError("Please enter your name.")
      return
    }
    if (!reviewerEmail || !reviewerEmail.includes("@")) {
      setError("Please provide a valid email.")
      return
    }

    setIsSubmitting(true)

    const result = reviewService.submitReview(
      courseId,
      reviewerName,
      reviewerEmail,
      rating,
      comment,
    )

    setIsSubmitting(false)

    if (result.success) {
      setComment("")
      onReviewSubmitted()
      onClose()
    } else {
      setError(result.error || "Unable to submit review.")
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(10, 30, 30, 0.7)",
        backdropFilter: "blur(6px)",
        display: "grid",
        placeItems: "center",
        zIndex: 1000,
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "min(520px, 100%)",
          backgroundColor: "var(--white)",
          borderRadius: "24px",
          padding: "32px",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.25)",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--muted)",
          }}
          aria-label="Close review dialog"
        >
          <Icon name="x" size={22} />
        </button>

        <h3
          style={{
            margin: "0 0 6px",
            fontSize: "22px",
            color: "var(--ink)",
            fontWeight: 800,
          }}
        >
          Rate & Review Course
        </h3>
        <p
          style={{
            margin: "0 0 20px",
            color: "var(--muted)",
            fontSize: "13px",
          }}
        >
          {courseTitle}
        </p>

        {error && (
          <div
            style={{
              padding: "10px 14px",
              backgroundColor: "#fee2e2",
              color: "#991b1b",
              borderRadius: "10px",
              fontSize: "12px",
              marginBottom: "16px",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Star selector */}
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <label
              style={{
                display: "block",
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--muted)",
                marginBottom: "8px",
              }}
            >
              Your Overall Rating
            </label>
            <div style={{ display: "inline-flex", gap: "8px" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color:
                      (hoverRating || rating) >= star
                        ? "var(--orange)"
                        : "#d1d5db",
                    transition: "transform 0.15s ease",
                    padding: "2px",
                  }}
                >
                  <Icon name="star" size={28} />
                </button>
              ))}
            </div>
          </div>

          {!user && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginBottom: "14px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--muted)",
                    marginBottom: "4px",
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  required
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    border: "1px solid var(--line)",
                    fontSize: "13px",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--muted)",
                    marginBottom: "4px",
                  }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. john@example.com"
                  required
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    border: "1px solid var(--line)",
                    fontSize: "13px",
                  }}
                />
              </div>
            </div>
          )}

          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--muted)",
                marginBottom: "6px",
              }}
            >
              Your Detailed Feedback
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="What did you learn? How were the guided projects and mentor support?"
              rows={4}
              required
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                border: "1px solid var(--line)",
                fontSize: "13px",
                lineHeight: "1.6",
                resize: "vertical",
                fontFamily: "inherit",
              }}
            />
          </div>

          <div
            style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}
          >
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: "10px 18px",
                borderRadius: "12px",
                border: "1px solid var(--line)",
                background: "var(--white)",
                fontWeight: 700,
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="button button-primary"
              style={{ minHeight: "42px", padding: "0 22px" }}
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default ReviewModal
