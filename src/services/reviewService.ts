import { CourseReview, RatingDistribution } from "../types"
import { initialReviews, calculateRatingDistribution } from "../data/reviews"

const REVIEWS_STORAGE_KEY = "shield_academy_course_reviews"
const USER_REVIEWED_KEY = "shield_academy_user_reviewed"

export const reviewService = {
  /**
   * Retrieves all reviews for a course, merging default reviews with any user-submitted ones.
   */
  getReviewsForCourse(courseId: string): CourseReview[] {
    const base = initialReviews[courseId] || []
    try {
      const stored = localStorage.getItem(REVIEWS_STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored) as Record<string, CourseReview[]>
        const userAdded = parsed[courseId] || []
        return [...userAdded, ...base]
      }
    } catch (e) {
      console.warn("Could not read local reviews:", e)
    }
    return base
  },

  /**
   * Calculates the rating distribution percentages and average for a course.
   */
  getCourseRatingStats(courseId: string): {
    averageRating: number
    totalReviews: number
    distribution: RatingDistribution
  } {
    const reviews = this.getReviewsForCourse(courseId)
    const totalReviews = reviews.length
    if (totalReviews === 0) {
      return {
        averageRating: 4.8,
        totalReviews: 420,
        distribution: { 5: 72, 4: 19, 3: 6, 2: 2, 1: 1 },
      }
    }

    const sum = reviews.reduce((acc, curr) => acc + curr.rating, 0)
    const averageRating = Number((sum / totalReviews).toFixed(1))
    const distribution = calculateRatingDistribution(reviews)

    return {
      averageRating,
      totalReviews,
      distribution,
    }
  },

  /**
   * Checks if a user has already reviewed this course to prevent unlimited duplicate reviews.
   */
  hasUserReviewedCourse(courseId: string, userEmail: string): boolean {
    if (!userEmail) return false
    try {
      const reviewedMap = JSON.parse(
        localStorage.getItem(USER_REVIEWED_KEY) || "{}",
      ) as Record<string, string[]>
      const userList = reviewedMap[courseId] || []
      return userList.includes(userEmail.toLowerCase())
    } catch {
      return false
    }
  },

  /**
   * Adds a new student review for a course.
   * BACKEND INTEGRATION POINT:
   * Replace with:
   * const res = await fetch(`/api/courses/${courseId}/reviews`, { method: 'POST', body: JSON.stringify(review) })
   */
  submitReview(
    courseId: string,
    userName: string,
    userEmail: string,
    rating: number,
    comment: string,
  ): { success: boolean review?: CourseReview error?: string } {
    if (this.hasUserReviewedCourse(courseId, userEmail)) {
      return {
        success: false,
        error: "You have already submitted a review for this course.",
      }
    }

    if (rating < 1 || rating > 5) {
      return {
        success: false,
        error: "Please select a rating between 1 and 5 stars.",
      }
    }

    if (!comment || comment.trim().length < 10) {
      return {
        success: false,
        error: "Please provide a review comment with at least 10 characters.",
      }
    }

    const newReview: CourseReview = {
      id: `rev-${Date.now()}`,
      courseId,
      userName: userName.trim(),
      userInitials:
        userName
          .trim()
          .split(" ")
          .map((n) => n[0])
          .slice(0, 2)
          .join("")
          .toUpperCase() || "ST",
      rating,
      date: "Just now",
      comment: comment.trim(),
      verifiedBuyer: true,
    }

    try {
      // 1. Save review in course review storage
      const stored = JSON.parse(
        localStorage.getItem(REVIEWS_STORAGE_KEY) || "{}",
      )
      if (!stored[courseId]) stored[courseId] = []
      stored[courseId].unshift(newReview)
      localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(stored))

      // 2. Mark this user as having reviewed
      const reviewedMap = JSON.parse(
        localStorage.getItem(USER_REVIEWED_KEY) || "{}",
      )
      if (!reviewedMap[courseId]) reviewedMap[courseId] = []
      reviewedMap[courseId].push(userEmail.toLowerCase())
      localStorage.setItem(USER_REVIEWED_KEY, JSON.stringify(reviewedMap))
    } catch (e) {
      console.warn("Could not save review locally:", e)
    }

    return { success: true, review: newReview }
  },
}
