import { User } from "../types"

const AUTH_STORAGE_KEY = "shield_academy_user"

// Initial pre-configured demo user so visitors can explore recommendations immediately
const DEFAULT_DEMO_USER: User = {
  id: "user-demo-1",
  name: "Priya Sundaram",
  email: "priya.s@example.com",
  avatar: "PS",
  interests: ["Data Science", "Artificial Intelligence"],
  enrolledCourseIds: ["course-python-ds"],
  completedCourseIds: [],
  createdAt: "2025-01-15T10:00:00.000Z",
}

export const authService = {
  /**
   * Retrieves the currently authenticated user from demo storage.
   * NOTE: This is a frontend demo authentication service.
   * In a production environment, this should validate a secure HTTP-only JWT token
   * against your authentication backend (e.g. Auth0, Firebase, or custom OAuth server).
   */
  getCurrentUser(): User | null {
    try {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY)
      if (stored) {
        return JSON.parse(stored) as User
      }
    } catch (e) {
      console.warn("Unable to access demo localStorage for user:", e)
    }
    return null
  },

  /**
   * Authenticates user using email and password.
   * BACKEND INTEGRATION POINT:
   * Replace this function with:
   * const res = await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) })
   */
  async login(email: string, _password?: string): Promise<{
    user: User
    error?: string
  }> {
    await new Promise((resolve) => setTimeout(resolve, 600)) // Simulated network latency

    if (!email || !email.includes("@")) {
      return {
        user: null as unknown as User,
        error: "Please provide a valid email address.",
      }
    }

    // Check if an account already exists in localStorage or create a session
    let existingUser = this.getCurrentUser()
    if (
      !existingUser ||
      existingUser.email.toLowerCase() !== email.toLowerCase()
    ) {
      existingUser = {
        id: `user-${Date.now()}`,
        name: email
          .split("@")[0]
          .replace(/[\._]/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase()),
        email: email.toLowerCase(),
        avatar: email.substring(0, 2).toUpperCase(),
        interests: ["Data Science", "Artificial Intelligence"],
        enrolledCourseIds: ["course-python-ds"],
        completedCourseIds: [],
        createdAt: new Date().toISOString(),
      }
    }

    try {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(existingUser))
    } catch (e) {
      console.warn("Could not persist user session:", e)
    }

    return { user: existingUser }
  },

  /**
   * Registers a new user with chosen interests.
   * BACKEND INTEGRATION POINT:
   * Replace with:
   * const res = await fetch('/api/auth/register', { method: 'POST', body: JSON.stringify(...) })
   */
  async register(
    name: string,
    email: string,
    _password?: string,
    interests: string[] = [],
  ): Promise<{ user: User error?: string }> {
    await new Promise((resolve) => setTimeout(resolve, 700))

    if (!name || name.trim().length < 2) {
      return {
        user: null as unknown as User,
        error: "Please enter your full name.",
      }
    }
    if (!email || !email.includes("@")) {
      return {
        user: null as unknown as User,
        error: "Please provide a valid email address.",
      }
    }

    const newUser: User = {
      id: `user-${Date.now()}`,
      name: name.trim(),
      email: email.toLowerCase().trim(),
      avatar:
        name
          .trim()
          .split(" ")
          .map((n) => n[0])
          .slice(0, 2)
          .join("")
          .toUpperCase() || "U",
      interests:
        interests.length > 0
          ? interests
          : ["Data Science", "Artificial Intelligence"],
      enrolledCourseIds: [],
      completedCourseIds: [],
      createdAt: new Date().toISOString(),
    }

    try {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newUser))
    } catch (e) {
      console.warn("Could not persist user session:", e)
    }

    return { user: newUser }
  },

  /**
   * Signs in with the predefined demo student profile for quick evaluator testing.
   */
  loginAsDemoUser(): User {
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(DEFAULT_DEMO_USER))
    } catch (e) {
      console.warn("Could not save demo user:", e)
    }
    return DEFAULT_DEMO_USER
  },

  /**
   * Logs out the user and clears the session.
   */
  logout(): void {
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY)
    } catch (e) {
      console.warn("Could not remove user session:", e)
    }
  },

  /**
   * Updates user interests for personalized recommendations.
   */
  updateInterests(interests: string[]): User | null {
    const user = this.getCurrentUser()
    if (!user) return null
    user.interests = interests
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))
    } catch (e) {
      console.warn("Failed to update user interests:", e)
    }
    return user
  },

  /**
   * Records a course enrollment in user profile.
   */
  enrollInCourse(courseId: string): User | null {
    const user = this.getCurrentUser()
    if (!user) return null
    if (!user.enrolledCourseIds.includes(courseId)) {
      user.enrolledCourseIds.push(courseId)
      try {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))
      } catch (e) {
        console.warn("Failed to persist course enrollment:", e)
      }
    }
    return user
  },

  /**
   * Sends password reset link.
   * BACKEND INTEGRATION POINT:
   * Replace with email dispatch service via backend endpoint.
   */
  async forgotPassword(email: string): Promise<{
    success: boolean
    message: string
  }> {
    await new Promise((resolve) => setTimeout(resolve, 800))
    if (!email || !email.includes("@")) {
      return {
        success: false,
        message: "Please provide a valid registered email address.",
      }
    }
    return {
      success: true,
      message: `A password reset link has been dispatched to ${email}. (Demo Simulation: please check inbox)`,
    }
  },
}
