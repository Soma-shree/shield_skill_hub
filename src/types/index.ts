export type IconName = "arrow" | "play" | "star" | "shield" | "code" | "cloud" | "brain" | "users" | "clock" | "compass" | "check" | "rocket" | "chart" | "briefcase" | "target" | "cube" | "spark" | "chevron" | "x" | "menu" | "search" | "filter" | "book" | "lock" | "award" | "download" | "external" | "user" | "mail" | "phone" | "map-pin"

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  interests: string[]
  enrolledCourseIds: string[]
  completedCourseIds: string[]
  createdAt: string
}

export interface Lesson {
  id: string
  title: string
  duration: string
  isFreePreview?: boolean
}

export interface CourseModule {
  id: string
  number: number
  title: string
  duration: string
  lessonCount: number
  lessons: Lesson[]
}

export interface CourseProject {
  id: string
  projectId?: string
  title: string
  problemStatement: string
  technologies: string[]
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  expectedOutcome: string
}

export interface CourseReview {
  id: string
  courseId: string
  userName: string
  userInitials: string
  rating: number
  date: string
  comment: string
  verifiedBuyer?: boolean
}

export interface RatingDistribution {
  5: number
  4: number
  3: number
  2: number
  1: number
}

export interface Course {
  id: string
  slug: string
  title: string
  subtitle: string
  category: string
  level: "Beginner" | "Intermediate" | "Advanced" | "All levels"
  duration: string
  rating: number
  reviewCount: number
  studentCount: number
  price: number
  originalPrice: number
  image: string
  icon: IconName
  badgeText?: string
  color: string
  description: string
  whatYouWillLearn: string[]
  whoIsThisFor: string[]
  prerequisites: string[]
  learningOutcomes: string[]
  modules: CourseModule[]
  projects: CourseProject[]
  relatedPathwayId?: string
  relatedPartnerId?: string
  relatedInternshipId?: string
  eligibleDisciplines?: string[]
}

export interface ProjectDetail {
  id: string
  slug: string
  title: string
  tag: string
  description: string
  problemStatement: string
  image: string
  alt: string
  color: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  estimatedHours: string
  technologies: string[]
  expectedOutcome: string
  skillsLearned: string[]
  requirements: string[]
  solutionApproach: string[]
  relatedCourseId?: string
  relatedPathwayId?: string
  relatedInternshipId?: string
  eligibleDisciplines?: string[]
}

export interface ResourceItem {
  id: string
  title: string
  category: "DSA" | "Python" | "Machine Learning" | "Data Science" | "Web Development" | "Interview Preparation"
  type: "Article" | "Cheat Sheet" | "Practice Problems" | "Roadmap" | "Tutorial"
  description: string
  readTime: string
  level: "Beginner" | "Intermediate" | "Advanced"
  downloadable?: boolean
  link: string
}

export interface EnrolledCourseProgress {
  courseId: string
  course: Course
  progressPercentage: number
  completedLessons: number
  totalLessons: number
  lastAccessed: string
}

// ==========================================
// FLOWCHART DATA MODELS
// ==========================================

export interface TechnologyPathway {
  id: string
  slug: string
  name: string
  flowchartTitle: string
  category: "Emerging Tech" | "Non Tech"
  disciplines: string[]
  tag: string
  overview: string
  whoCanJoin: string
  skillsCovered: string[]
  technologies: string[]
  learningPathway: string[]
  possibleProjects: string[]
  careerAreas: string[]
  partnerOrg?: string
  relatedCourseIds: string[]
  relatedProjectIds: string[]
  relatedInternshipIds: string[]
  route: string
}

export interface PartnerOrg {
  id: string
  slug: string
  name: string
  tagline: string
  domain: string
  technologies: string[]
  collaborationFocus: string
  programsOffered: string[]
  opportunities: string[]
  relatedPathwayIds: string[]
  relatedCourseIds: string[]
}

export interface InstitutionService {
  id: string
  slug: string
  name: string
  flowchartGroup: "core" | "activity"
  tagline: string
  description: string
  keyBenefits: string[]
  engagementProcess: string[]
  eligibleDepartments: string[]
  relatedPathwayIds: string[]
  route: string
}

export interface InternshipTrack {
  id: string
  slug: string
  name: string
  category: "Research Collaboration" | "Departmental Development" | "Project" | "Industry Specialization"
  description: string
  disciplines: string[]
  duration: string
  stipendOrCredit: string
  deliverables: string[]
  skills: string[]
  prerequisites: string[]
  relatedCourseIds: string[]
  relatedProjectIds: string[]
  relatedPathwayIds: string[]
  route: string
}

export interface GeneralTopic {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  pillars: { title: string desc: string iconName?: string }[]
  keyTakeaways: string[]
  practicalExercises: string[]
  route: string
}
