import { Course, User } from "../types"
import { coursesData } from "../data/courses"

export interface RecommendationResult {
  courses: Course[]
  reason: string
  matchedInterests: string[]
}

export const recommendationService = {
  /**
   * Rule-based recommendation engine matching user interests and learning trajectory.
   *
   * RECOMMENDATION ALGORITHM / ML INTEGRATION POINT:
   * This is currently a transparent, rule-based recommendation system designed to match
   * user-selected interest vectors and prerequisite graphs. In production, this service can
   * be replaced by an ML recommendation endpoint (e.g. collaborative filtering, embeddings similarity
   * via pgvector or Pinecone, or a dedicated recommendation API).
   */
  getRecommendationsForUser(user: User | null): RecommendationResult | null {
    if (!user) return null

    const interests = user.interests || []
    if (interests.length === 0) {
      return {
        courses: coursesData.slice(0, 3),
        reason: "Recommended based on trending industry pathways",
        matchedInterests: [],
      }
    }

    // Map user interest strings to course category keywords
    const interestKeywords = interests.map((i) => i.toLowerCase())

    // Score courses based on relevance to interests
    const scoredCourses = coursesData.map((course) => {
      let score = 0
      const catLower = course.category.toLowerCase()
      const titleLower = course.title.toLowerCase()
      const descLower = course.description.toLowerCase()

      // Match against interest terms
      interestKeywords.forEach((interest) => {
        if (catLower.includes(interest) || interest.includes(catLower))
          score += 5
        if (titleLower.includes(interest)) score += 3
        if (descLower.includes(interest)) score += 1
      })

      // Bonus for high student ratings
      score += (course.rating - 4.0) * 2

      // Prioritize courses not yet completed
      if (user.completedCourseIds?.includes(course.id)) {
        score -= 10
      }

      return { course, score }
    })

    // Sort by score descending and take top 3
    const topPicks = scoredCourses
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.course)
      .slice(0, 3)

    const finalCourses =
      topPicks.length > 0 ? topPicks : coursesData.slice(0, 3)
    const reason = `Personalized for you based on your interests in ${interests.join(" & ")}`

    return {
      courses: finalCourses,
      reason,
      matchedInterests: interests,
    }
  },
}
