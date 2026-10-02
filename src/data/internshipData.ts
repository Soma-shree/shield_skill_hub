import { InternshipTrack } from "../types"

export const internshipTracks: InternshipTrack[] = [
  {
    id: "intern-research-collab",
    slug: "research-collaboration",
    name: "Research Collaboration Track",
    category: "Research Collaboration",
    description:
      "Join faculty and industrial scientists working on peer-reviewed papers, experimental algorithmic modeling, and novel patent-track prototypes in AI, Clean Mobility, and Quantum Computing.",
    disciplines: [
      "AI & ML",
      "Data Science",
      "Computer Science",
      "ECE",
      "EEE",
      "Mechanical",
      "Biotech",
    ],
    duration: "16 - 24 Weeks (Part-time or Full-time)",
    stipendOrCredit:
      "Research Fellowship Grant / ₹18,000 - ₹25,000 / mo + Academic Credits",
    deliverables: [
      "Literature synthesis and benchmark comparative analysis against SOTA models",
      "Reproducible experimental code repo with automated unit tests and Dockerfile",
      "Co-authorship on a submitted IEEE / Springer research paper or patent filing",
    ],
    skills: [
      "Python",
      "PyTorch",
      "LaTeX",
      "MATLAB",
      "Statistical Modeling",
      "Git",
    ],
    prerequisites: [
      "Strong mathematics/CS fundamentals and prior project experience",
    ],
    relatedCourseIds: ["course-ai-mastery", "course-python-ds"],
    relatedProjectIds: ["proj-1", "proj-6"],
    relatedPathwayIds: ["abc-quantum", "golang-erlang"],
    route: "/internships/research-collaboration",
  },
  {
    id: "intern-dept-dev",
    slug: "department-development",
    name: "Departmental Development Activity (DDA) Track",
    category: "Departmental Development",
    description:
      "Collaborative project engineering where student squads work directly with college departmental laboratories to modernize internal digital infrastructure, laboratory test rigs, and student portals.",
    disciplines: [
      "ECE",
      "EEE",
      "Mechanical",
      "Civil",
      "IT",
      "Computer Science",
    ],
    duration: "12 - 16 Weeks",
    stipendOrCredit:
      "Performance Stipend / ₹12,000 - ₹20,000 / mo + Institutional Commendation",
    deliverables: [
      "Architect and commission dedicated hardware/software rigs for university labs",
      "Develop automated student laboratory submission and grading dashboards",
      "Publish comprehensive technical operating manuals and conduct junior peer training",
    ],
    skills: [
      "IoT Telemetry",
      "Embedded C",
      "Full-Stack Web",
      "CAD Modeling",
      "PLC Logic",
    ],
    prerequisites: [
      "Departmental nomination or minimum 7.5 CGPA in core discipline",
    ],
    relatedCourseIds: ["course-powerbi-analytics", "course-fullstack-cloud"],
    relatedProjectIds: ["proj-3", "proj-2"],
    relatedPathwayIds: [
      "rockwell-automation-iot",
      "additive-manufacturing-robotics",
      "embedded-iot",
    ],
    route: "/internships/department-development",
  },
  {
    id: "intern-projects",
    slug: "projects",
    name: "Commercial Capstone Project Track",
    category: "Project",
    description:
      "Solve authentic, messy problem statements submitted by corporate clients and tech startups. Every project is reviewed line-by-line by senior engineers and deployed with live public URLs.",
    disciplines: ["All Technical & Business Disciplines"],
    duration: "8 - 12 Weeks",
    stipendOrCredit:
      "Performance Bonus upon Milestone Verification + ChainTrail Internship Certificate",
    deliverables: [
      "Production-ready pull requests adhering to clean code and test coverage standards",
      "Containerized deployment on AWS / GCP / DigitalOcean with monitoring",
      "Executive video walkthrough and interactive technical presentation",
    ],
    skills: [
      "TypeScript",
      "Python",
      "Cloud DevOps",
      "Database Design",
      "Agile Sprints",
    ],
    prerequisites: [
      "Completion of any Shield Skill Hub core course or equivalent capstone",
    ],
    relatedCourseIds: [
      "course-fullstack-cloud",
      "course-ai-mastery",
      "course-cybersecurity-defense",
    ],
    relatedProjectIds: ["proj-1", "proj-4", "proj-5"],
    relatedPathwayIds: ["golang-erlang", "ar-vr-mr", "ev", "ecommerce-lab"],
    route: "/internships/projects",
  },
]
