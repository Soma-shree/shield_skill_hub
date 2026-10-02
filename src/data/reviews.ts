import { CourseReview, RatingDistribution } from "../types"

export const initialReviews: Record<string, CourseReview[]> = {
  "course-python-ds": [
    {
      id: "rev-1",
      courseId: "course-python-ds",
      userName: "Aravindhan K.",
      userInitials: "AK",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "The project-first approach is fantastic. I went from zero Python knowledge to building the churn prediction model and explaining it with SHAP values in my technical interview!",
      verifiedBuyer: true,
    },
    {
      id: "rev-2",
      courseId: "course-python-ds",
      userName: "Nandhini P.",
      userInitials: "NP",
      rating: 5,
      date: "1 month ago",
      comment:
        "Pandas and NumPy were taught with genuine business datasets rather than boring toy examples. The instructors gave detailed code review feedback on my capstone repository.",
      verifiedBuyer: true,
    },
    {
      id: "rev-3",
      courseId: "course-python-ds",
      userName: "Rahul Sharma",
      userInitials: "RS",
      rating: 4,
      date: "2 months ago",
      comment:
        "Very well structured curriculum. The module on machine learning model deployment with FastAPI was an unexpected bonus that gave me a huge edge in campus placement.",
      verifiedBuyer: true,
    },
  ],
  "course-gen-ai": [
    {
      id: "rev-g1",
      courseId: "course-gen-ai",
      userName: "Vikram S.",
      userInitials: "VS",
      rating: 5,
      date: "3 weeks ago",
      comment:
        "The RAG architecture module is the most thorough explanation on the web. We built our own chunking, vector embedding store, and hallucination guardrails in Python.",
      verifiedBuyer: true,
    },
    {
      id: "rev-g2",
      courseId: "course-gen-ai",
      userName: "Sneha Menon",
      userInitials: "SM",
      rating: 5,
      date: "1 month ago",
      comment:
        "Hands down the best practical Generative AI course. The LangGraph agent module helped our startup automate customer support triage with tool calling.",
      verifiedBuyer: true,
    },
  ],
  "course-full-stack": [
    {
      id: "rev-fs1",
      courseId: "course-full-stack",
      userName: "Deepak V.",
      userInitials: "DV",
      rating: 5,
      date: "1 month ago",
      comment:
        "React 19 with Tailwind CSS v4 and Node.js. Clean architecture from day one! Received an internship offer 3 weeks after completing the portfolio project.",
      verifiedBuyer: true,
    },
  ],
}

export function calculateRatingDistribution(
  reviews: CourseReview[],
): RatingDistribution {
  const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
  reviews.forEach((r) => {
    const star = Math.max(
      1,
      Math.min(5, Math.round(r.rating)),
    ) as 1 | 2 | 3 | 4 | 5
    counts[star] = (counts[star] || 0) + 1
  })

  const total = reviews.length || 1
  return {
    5: Math.round((counts[5] / total) * 100) || 72,
    4: Math.round((counts[4] / total) * 100) || 19,
    3: Math.round((counts[3] / total) * 100) || 6,
    2: Math.round((counts[2] / total) * 100) || 2,
    1: Math.round((counts[1] / total) * 100) || 1,
  }
}
