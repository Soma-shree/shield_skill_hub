// Structured Data for the Master Architecture 3D Ecosystem
// Represents the mentor's flowchart as the single source of truth

export interface StudentDisciplinePath {
  id: string
  name: string
  shortLabel: string
  iconType: "code" | "cpu" | "gear" | "chart" | "flask" | "ai"
  primaryDomainId: string
  stepStudent: string
  stepTech: string
  stepCourse: string
  stepCourseId: string
  stepProject: string
  stepProjectId: string
  stepInternship: string
  stepInternshipRoute: string
  stepIndustry: string
}

export interface TechnologyDomainNode {
  id: string
  slug: string
  name: string
  flowchartTitle: string
  branchId: "emerging-tech" | "non-tech"
  studentDisciplines: string[]
  recommendedCourseIds: string[]
  recommendedProjectIds: string[]
  recommendedInternshipIds: string[]
  partnerOrg?: string
  tagline: string
  route: string
}

export interface ArchitectureBranch {
  id: string
  name: string
  flowchartTitle: string
  tagline: string
  iconName: "compass" | "cpu" | "trending" | "building" | "briefcase" | "graduation"
  badge: string
  description: string
  route: string
  domains?: TechnologyDomainNode[]
  subItems?: { label: string route: string description?: string }[]
}

// 6 Major Student Discipline Journeys for the "Where do I fit?" Navigator
export const studentDisciplinePaths: StudentDisciplinePath[] = [
  {
    id: "cse-it",
    name: "Computer Science & IT",
    shortLabel: "CSE / IT",
    iconType: "code",
    primaryDomainId: "golang-erlang",
    stepStudent: "CSE / IT Undergrad",
    stepTech: "Go Lang & High-Concurrency Systems",
    stepCourse: "Full-Stack Web Development & Cloud Systems",
    stepCourseId: "course-fullstack-cloud",
    stepProject: "Cloud-Native Microservices Deployment",
    stepProjectId: "proj-5",
    stepInternship: "Commercial Capstone Sprints",
    stepInternshipRoute: "/internships/projects",
    stepIndustry: "High-Growth Tech Startups & Cloud Runtimes",
  },
  {
    id: "ai-ds",
    name: "AI & Data Science",
    shortLabel: "AI/ML / DS",
    iconType: "ai",
    primaryDomainId: "abc-quantum",
    stepStudent: "AI/ML & Data Science Fellow",
    stepTech: "ABC (AI, Blockchain, Cyber) & Quantum",
    stepCourse: "Generative AI, Large Language Models & Deep Learning",
    stepCourseId: "course-ai-mastery",
    stepProject: "Customer Churn Prediction Engine",
    stepProjectId: "proj-1",
    stepInternship: "Research Collaboration & Papers",
    stepInternshipRoute: "/internships/research-collaboration",
    stepIndustry: "Enterprise Applied AI & Research Labs",
  },
  {
    id: "ece-eee",
    name: "Electronics & Electrical",
    shortLabel: "ECE / EEE",
    iconType: "cpu",
    primaryDomainId: "rockwell-automation-iot",
    stepStudent: "ECE / EEE Student",
    stepTech: "Rockwell Automation IoT & Embedded Systems",
    stepCourse: "Data Analytics & Executive Dashboards",
    stepCourseId: "course-powerbi-analytics",
    stepProject: "Autonomous Multi-Sensor Telemetry & Agent System",
    stepProjectId: "proj-6",
    stepInternship: "Departmental Lab Development Rig",
    stepInternshipRoute: "/internships/department-development",
    stepIndustry: "Industrial Automation & Smart Factories",
  },
  {
    id: "mech-civil",
    name: "Mechanical & Civil",
    shortLabel: "MECH / CIVIL",
    iconType: "gear",
    primaryDomainId: "additive-manufacturing-robotics",
    stepStudent: "Mech / Civil Engineer",
    stepTech: "Wipro 3D AM & Epson Robotic Arm",
    stepCourse: "Enterprise BI & Supply Chain Analytics",
    stepCourseId: "course-powerbi-analytics",
    stepProject: "Supply Chain Network & Logistics Intelligence",
    stepProjectId: "proj-3",
    stepInternship: "Industrial 3D Printing CoE Sprints",
    stepInternshipRoute: "/internships/department-development",
    stepIndustry: "Wipro 3D, Saint-Gobain & Robotics Cells",
  },
  {
    id: "commerce-mgmt",
    name: "Commerce & Management",
    shortLabel: "B.COM / BCA / MBA",
    iconType: "chart",
    primaryDomainId: "equity-research",
    stepStudent: "B.Com / BCA / MBA Scholar",
    stepTech: "eCommerce Lab & Equity Research",
    stepCourse: "Business Intelligence, Financial Dashboards & DAX",
    stepCourseId: "course-powerbi-analytics",
    stepProject: "Data Analytics & Executive Reporting Suite",
    stepProjectId: "proj-2",
    stepInternship: "Capital Markets Equity Research Sprints",
    stepInternshipRoute: "/internships/projects",
    stepIndustry: "Stockathon Academy & Institutional Finance",
  },
  {
    id: "biotech",
    name: "Biotechnology & Sciences",
    shortLabel: "BIOTECH",
    iconType: "flask",
    primaryDomainId: "cosmetics-food-safety",
    stepStudent: "B.E / B.Tech / Biotech",
    stepTech: "Cosmetics Formulation & Food Safety QA",
    stepCourse: "Python for Data Science & Bio-Analytics",
    stepCourseId: "course-python-ds",
    stepProject: "Data Analytics & Quality Assurance Telemetry",
    stepProjectId: "proj-2",
    stepInternship: "Life Sciences Regulatory Auditing",
    stepInternshipRoute: "/internships/research-collaboration",
    stepIndustry: "FMCG, Healthcare & Bio-Safety Compliance",
  },
]

// The 7 Emerging Tech domains from the mentor's flowchart
export const emergingTechDomains: TechnologyDomainNode[] = [
  {
    id: "golang-erlang",
    slug: "golang-erlang",
    name: "Go Lang & Erlang Systems Architecture",
    flowchartTitle: "GO LANG - ER LANG",
    branchId: "emerging-tech",
    studentDisciplines: ["AI & ML", "Data Science", "Computer Science", "IT"],
    recommendedCourseIds: ["course-fullstack-cloud", "course-python-ds"],
    recommendedProjectIds: ["proj-4", "proj-5"],
    recommendedInternshipIds: ["intern-research-collab", "intern-projects"],
    tagline:
      "Actor-model concurrency, high-throughput network brokers & microservices",
    route: "/emerging-tech/golang-erlang",
  },
  {
    id: "additive-manufacturing-robotics",
    slug: "additive-manufacturing-robotics",
    name: "Wipro 3D AM & Epson Robotic Arm",
    flowchartTitle:
      "WIPRO 3D AM - ADDITIVE MANUFACTURING / EPSON - ROBOTIC ARM",
    branchId: "emerging-tech",
    studentDisciplines: ["Mechanical", "Civil", "ECE", "EEE", "IT"],
    partnerOrg: "Wipro 3D / Epson",
    recommendedCourseIds: [
      "course-powerbi-analytics",
      "course-fullstack-cloud",
    ],
    recommendedProjectIds: ["proj-6", "proj-2"],
    recommendedInternshipIds: ["intern-dept-dev", "intern-projects"],
    tagline:
      "Industrial 3D metal printing, DfAM generative CAD & 6-axis robotic kinematic cells",
    route: "/emerging-tech/additive-manufacturing-robotics",
  },
  {
    id: "rockwell-automation-iot",
    slug: "rockwell-automation-iot",
    name: "Rockwell Automation IoT",
    flowchartTitle: "ROCKWELL AUTOMATION IOT",
    branchId: "emerging-tech",
    studentDisciplines: ["ECE", "EEE", "IT"],
    partnerOrg: "Rockwell Automation",
    recommendedCourseIds: ["course-powerbi-analytics", "course-ai-mastery"],
    recommendedProjectIds: ["proj-3", "proj-6"],
    recommendedInternshipIds: ["intern-research-collab", "intern-projects"],
    tagline:
      "Allen-Bradley PLCs, Studio 5000, SCADA & OT-to-cloud industrial telemetry",
    route: "/emerging-tech/rockwell-automation-iot",
  },
  {
    id: "embedded-iot",
    slug: "embedded-iot",
    name: "Embedded Systems & Edge IoT",
    flowchartTitle: "EMBEDDED / IOT",
    branchId: "emerging-tech",
    studentDisciplines: ["ECE", "EEE", "IT"],
    recommendedCourseIds: ["course-python-ds", "course-fullstack-cloud"],
    recommendedProjectIds: ["proj-6", "proj-5"],
    recommendedInternshipIds: ["intern-dept-dev", "intern-projects"],
    tagline:
      "FreeRTOS, ARM Cortex, ESP32 firmware, LoRaWAN mesh & KiCAD hardware design",
    route: "/emerging-tech/embedded-iot",
  },
  {
    id: "ar-vr-mr",
    slug: "ar-vr-mr",
    name: "AR / VR / MR Spatial Computing",
    flowchartTitle: "AR / VR / MR",
    branchId: "emerging-tech",
    studentDisciplines: [
      "AI & ML",
      "Data Science",
      "Mechanical",
      "CSE",
      "IT",
      "ECE",
      "EEE",
    ],
    recommendedCourseIds: ["course-fullstack-cloud", "course-ai-mastery"],
    recommendedProjectIds: ["proj-4", "proj-1"],
    recommendedInternshipIds: ["intern-research-collab", "intern-projects"],
    tagline:
      "Unity 6, Unreal Engine 5, OpenXR, digital twin machinery & WebXR headsets",
    route: "/emerging-tech/ar-vr-mr",
  },
  {
    id: "ev",
    slug: "ev",
    name: "EV (Electric Vehicles & Clean Mobility)",
    flowchartTitle: "EV",
    branchId: "emerging-tech",
    studentDisciplines: ["AI & ML", "ECE", "EEE", "Data Science", "Mechanical"],
    recommendedCourseIds: ["course-python-ds", "course-powerbi-analytics"],
    recommendedProjectIds: ["proj-1", "proj-2"],
    recommendedInternshipIds: ["intern-dept-dev", "intern-projects"],
    tagline:
      "Battery Management Systems (BMS), thermal runaway modeling & motor drive FOC",
    route: "/emerging-tech/ev",
  },
  {
    id: "abc-quantum",
    slug: "abc-quantum",
    name: "ABC (AI, Blockchain, Cyber Security) & Quantum",
    flowchartTitle: "ABC (AI BLK CHAIN, CYBER SECURITY) & QUANTUM",
    branchId: "emerging-tech",
    studentDisciplines: [
      "AI & ML",
      "Data Science",
      "Computer Science",
      "IT",
      "EEE",
      "ECE",
      "Mechanical",
    ],
    recommendedCourseIds: ["course-ai-mastery", "course-cybersecurity-defense"],
    recommendedProjectIds: ["proj-1", "proj-5"],
    recommendedInternshipIds: ["intern-research-collab", "intern-projects"],
    tagline:
      "LLM fine-tuning, Solidity smart contracts, zero-trust SecOps & Qiskit circuits",
    route: "/emerging-tech/abc-quantum",
  },
]

// The 3 Non-Tech domains from the mentor's flowchart
export const nonTechDomains: TechnologyDomainNode[] = [
  {
    id: "ecommerce-lab",
    slug: "ecommerce-lab",
    name: "eCommerce Lab & Retail Analytics",
    flowchartTitle: "eCommerce Lab",
    branchId: "non-tech",
    studentDisciplines: ["B.Com", "BCA", "MBA"],
    recommendedCourseIds: ["course-digital-growth", "course-powerbi-analytics"],
    recommendedProjectIds: ["proj-2", "proj-3"],
    recommendedInternshipIds: ["intern-dept-dev", "intern-projects"],
    tagline:
      "Omni-channel commerce, SKU taxonomy, inventory fulfillment & unit economics",
    route: "/non-tech/ecommerce-lab",
  },
  {
    id: "equity-research",
    slug: "equity-research",
    name: "Equity Lab / Stock Research / Analytics",
    flowchartTitle: "EQUITY LAB / STOCK RESEARCH / ANALYTICS",
    branchId: "non-tech",
    studentDisciplines: ["B.Com", "BCA", "MBA"],
    partnerOrg: "Stockathon Academy",
    recommendedCourseIds: ["course-powerbi-analytics", "course-python-ds"],
    recommendedProjectIds: ["proj-2", "proj-1"],
    recommendedInternshipIds: ["intern-research-collab", "intern-projects"],
    tagline:
      "DCF valuation, institutional equity screening & trading floor simulation",
    route: "/non-tech/equity-research",
  },
  {
    id: "cosmetics-food-safety",
    slug: "cosmetics-food-safety",
    name: "Cosmetics / Food Safety QA",
    flowchartTitle: "COSMETICS / FOOD SAFETY",
    branchId: "non-tech",
    studentDisciplines: ["B.E", "B.Tech", "Biotechnology"],
    recommendedCourseIds: ["course-powerbi-analytics", "course-python-ds"],
    recommendedProjectIds: ["proj-2", "proj-3"],
    recommendedInternshipIds: ["intern-dept-dev", "intern-projects"],
    tagline:
      "HACCP protocols, FSSAI & ISO 22000 regulatory auditing & HPLC testing",
    route: "/non-tech/cosmetics-food-safety",
  },
]

// The 6 Master Architecture Branches connected to Central Hub
export const masterArchitectureBranches: ArchitectureBranch[] = [
  {
    id: "general",
    name: "GENERAL",
    flowchartTitle: "GENERAL",
    tagline: "Human Foundations & Mental Agility",
    iconName: "compass",
    badge: "Mindset & Resilience",
    description:
      "Cultivating cognitive agility, imposter syndrome neutralization, and burnout prevention to thrive amid rapid tech disruption.",
    route: "/general",
    subItems: [
      {
        label: "Embrace Change",
        route: "/general/embrace-change",
        description:
          "Adaptive agility, unlearning legacy paradigms & rapid 48-hr prototyping",
      },
      {
        label: "Mental Wellbeing",
        route: "/general/mental-wellbeing",
        description:
          "Cognitive endurance, deep work hygiene & 1-on-1 counselor guidance",
      },
    ],
  },
  {
    id: "emerging-tech",
    name: "EMERGING TECH",
    flowchartTitle: "EMERGING TECH",
    tagline: "7 Frontier Engineering Tracks",
    iconName: "cpu",
    badge: "Discipline-Mapped Labs",
    description:
      "High-impact technology domains matched with student disciplines (Mech, Civil, ECE, EEE, CS, IT, AI/ML, DS) featuring industrial testbeds.",
    route: "/emerging-tech",
    domains: emergingTechDomains,
  },
  {
    id: "non-tech",
    name: "NON TECH",
    flowchartTitle: "NON TECH",
    tagline: "Commerce, Equity & Life Sciences",
    iconName: "trending",
    badge: "Applied Business Labs",
    description:
      "Degree-specific applied labs for B.Com/BCA/MBA in commerce & equity, and B.Tech/Biotech in cosmetics & food safety quality compliance.",
    route: "/non-tech",
    domains: nonTechDomains,
  },
  {
    id: "industry-partners",
    name: "INDUSTRY / PARTNERS",
    flowchartTitle: "INDUSTRY / PARTNERS / SOLUTIONS",
    tagline: "5 Enterprise Collaborations",
    iconName: "building",
    badge: "Industrial Testbeds",
    description:
      "On-campus Centers of Excellence and problem statements powered by Saint-Gobain, Wipro 3D, Rockwell Automation, ISHRAE, and Stockathon Academy.",
    route: "/industry-partners",
    subItems: [
      {
        label: "Saint-Gobain",
        route: "/industry-partners",
        description: "Sustainable habitat & acoustic glass solutions",
      },
      {
        label: "Wipro 3D",
        route: "/industry-partners",
        description: "Metal additive manufacturing & precision robotics",
      },
      {
        label: "Rockwell Automation",
        route: "/industry-partners",
        description: "Industrial PLC/SCADA & connected enterprise IoT",
      },
      {
        label: "ISHRAE",
        route: "/industry-partners",
        description: "HVAC&R, clean energy & building thermal analytics",
      },
      {
        label: "Stockathon Academy",
        route: "/industry-partners",
        description: "Capital markets simulation & algorithmic equity research",
      },
    ],
  },
  {
    id: "internships",
    name: "INTERNSHIP / PLACEMENT",
    flowchartTitle: "INTERNSHIP / PLACEMENT ASSISTANCE",
    tagline: "Production Commits & Research",
    iconName: "briefcase",
    badge: "Career Launchpad",
    description:
      "Direct pathway connecting student coursework to IEEE research papers, departmental hardware testbeds, and commercial corporate placements.",
    route: "/internships",
    subItems: [
      {
        label: "Research Collaboration",
        route: "/internships/research-collaboration",
        description: "Paper co-authorship & algorithmic patents",
      },
      {
        label: "Departmental Development Activity",
        route: "/internships/department-development",
        description: "University lab modernization & telemetry testbeds",
      },
      {
        label: "Project Capstone Sprints",
        route: "/internships/projects",
        description: "Real startup problem statements & senior code reviews",
      },
    ],
  },
  {
    id: "institutions",
    name: "INSTITUTIONS",
    flowchartTitle: "INSTITUTIONS",
    tagline: "University Partnerships & CoE",
    iconName: "graduation",
    badge: "Academic Transformation",
    description:
      "7 Core Pillars (Funded Projects, Credit Courses, CoE, FDP, Research) + 4 Campus Activities (MOUs, Skilling, Hackathons, Webinars).",
    route: "/institutions",
    subItems: [
      {
        label: "Funded Projects",
        route: "/institutions/funded-projects",
        description: "Grant drafting & industry seed funding",
      },
      {
        label: "Center of Excellence (CoE)",
        route: "/institutions/center-of-excellence",
        description: "On-campus physical labs with Wipro 3D & Rockwell",
      },
      {
        label: "Credit Courses",
        route: "/institutions/credit-courses",
        description: "NEP-2020 accredited degree elective integration",
      },
      {
        label: "Trained Trainers (TTT)",
        route: "/institutions/trained-trainers",
        description: "Faculty upskilling in modern engineering pedagogy",
      },
      {
        label: "Workshops & FDP",
        route: "/institutions/workshops",
        description: "Practical bootcamps & AICTE-compliant FDPs",
      },
      {
        label: "MOUs, Skilling & Hackathons",
        route: "/institutions/mous",
        description: "Strategic institutional agreements & design challenges",
      },
    ],
  },
]
