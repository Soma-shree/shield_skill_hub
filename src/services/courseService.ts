import { Course } from "../types"
import { coursesData, courseCategories } from "../data/courses"

export interface CourseFilterOptions {
  searchQuery?: string
  category?: string
  level?: string
  sortBy?: "top-rated" | "most-popular" | "newest" | "price-asc" | "price-desc"
}

export const courseService = {
  /**
   * Retrieves all courses with optional search, category, difficulty, and sort filters.
   * BACKEND INTEGRATION POINT:
   * Replace with:
   * const params = new URLSearchParams({ search, category, level, sort })
   * const res = await fetch(`/api/courses?${params.toString()}`)
   */
  getCourses(filters?: CourseFilterOptions): Course[] {
    let result = [...coursesData]

    if (!filters) return result

    // 1. Search Query
    if (filters.searchQuery && filters.searchQuery.trim() !== "") {
      const q = filters.searchQuery.toLowerCase().trim()
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.subtitle.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.whatYouWillLearn.some((s) => s.toLowerCase().includes(q)),
      )
    }

    // 2. Category Filter
    if (filters.category && filters.category !== "All") {
      result = result.filter(
        (c) => c.category.toLowerCase() === filters.category!.toLowerCase(),
      )
    }

    // 3. Difficulty Level Filter
    if (
      filters.level &&
      filters.level !== "All levels" &&
      filters.level !== "All Levels"
    ) {
      result = result.filter(
        (c) => c.level.toLowerCase() === filters.level!.toLowerCase(),
      )
    }

    // 4. Deterministic Sorting
    if (filters.sortBy) {
      switch (filters.sortBy) {
        case "top-rated":
          result.sort(
            (a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount,
          )
          break
        case "most-popular":
          result.sort((a, b) => b.studentCount - a.studentCount)
          break
        case "price-asc":
          result.sort((a, b) => a.price - b.price)
          break
        case "price-desc":
          result.sort((a, b) => b.price - a.price)
          break
        default:
          break
      }
    }

    return result
  },

  /**
   * Retrieves top rated courses strictly ordered by student ratings and review count.
   */
  getTopRatedCourses(limit = 4): Course[] {
    return [...coursesData]
      .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
      .slice(0, limit)
  },

  /**
   * Retrieves a course by its unique slug identifier.
   */
  getCourseBySlug(slug: string): Course | undefined {
    return coursesData.find((c) => c.slug === slug || c.id === slug)
  },

  /**
   * Retrieves a course by its ID.
   */
  getCourseById(id: string): Course | undefined {
    return coursesData.find((c) => c.id === id)
  },

  /**
   * Returns list of unique course categories.
   */
  getCategories(): string[] {
    return courseCategories
  },
}
