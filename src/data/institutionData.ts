import { InstitutionService } from "../types"

export const institutionServices: InstitutionService[] = [
  // Core Offerings
  {
    id: "funded-projects",
    slug: "funded-projects",
    name: "Funded Projects",
    flowchartGroup: "core",
    tagline:
      "Collaborative Grant Proposals, DST/SERB Sponsorships & Industry Seed Grants",
    description:
      "Assisting academic institutions in drafting high-caliber research grant proposals, securing corporate CSR technology grants, and establishing sponsored industrial innovation testbeds on campus.",
    keyBenefits: [
      "Access to industry matching funds and corporate technical co-sponsorship",
      "Assistance in patent filings and intellectual property licensing agreements",
      "Direct integration of graduate and undergraduate student researchers into funded sprints",
    ],
    engagementProcess: [
      "Identify research domain & faculty expertise alignment",
      "Formulate problem statement with industry partner sponsorship",
      "Submit joint proposal to funding bodies / corporate CSR councils",
      "Quarterly review milestones and prototype demonstration",
    ],
    eligibleDepartments: [
      "CSE",
      "IT",
      "ECE",
      "EEE",
      "Mechanical",
      "Biotech",
      "MBA",
    ],
    relatedPathwayIds: ["abc-quantum", "additive-manufacturing-robotics", "ev"],
    route: "/institutions/funded-projects",
  },
  {
    id: "trained-trainers",
    slug: "trained-trainers",
    name: "Trained Trainers (TTT)",
    flowchartGroup: "core",
    tagline:
      "Continuous Pedagogical & Technical Upskilling for Engineering Faculty",
    description:
      "Transforming professors and lecturers from theoretical instructors into hands-on practitioner mentors who can teach modern Git workflows, Docker deployments, cloud runtimes, and industry design rubrics.",
    keyBenefits: [
      "Certification in modern engineering pedagogy and hands-on lab delivery",
      "Direct curriculum alignment with leading industry standards",
      "Continuous access to updated project repos, slides, and assessment rubrics",
    ],
    engagementProcess: [
      "Institutional faculty diagnostic and track selection",
      "Intensive 2-week hands-on immersion with senior enterprise mentors",
      "Classroom delivery shadowing and pedagogy rubric evaluation",
      "Issuance of ChainTrail Master Trainer credential",
    ],
    eligibleDepartments: [
      "Computer Science",
      "Information Tech",
      "Electronics",
      "Electrical",
      "Mechanical",
    ],
    relatedPathwayIds: [
      "golang-erlang",
      "rockwell-automation-iot",
      "embedded-iot",
    ],
    route: "/institutions/trained-trainers",
  },
  {
    id: "credit-courses",
    slug: "credit-courses",
    name: "Credit Courses",
    flowchartGroup: "core",
    tagline: "NEP-2020 Aligned Academic Credit Electives with Industry Rigor",
    description:
      "Turnkey 2-to-4 credit courses embedded directly into university degree curricula. Covers emerging domains like Full Stack Engineering, AI/ML, Cloud DevOps, and Capital Markets with university-recognized grading rubrics.",
    keyBenefits: [
      "Full compliance with National Education Policy (NEP 2020) multi-disciplinary norms",
      "Automated coding sandboxes and plagiarism-checked automated grading",
      "Industry-verified capstone projects counted toward academic GPA credits",
    ],
    engagementProcess: [
      "Academic Board of Studies (BoS) curriculum review & credit mapping",
      "LMS integration and student cohort batch onboarding",
      "Blended delivery: Expert video lectures + live mentor lab evaluations",
      "Final grade distribution and university transcript endorsement",
    ],
    eligibleDepartments: [
      "All Engineering Branches",
      "BCA",
      "B.Com",
      "MBA",
      "Biotechnology",
    ],
    relatedPathwayIds: ["golang-erlang", "abc-quantum", "ecommerce-lab"],
    route: "/institutions/credit-courses",
  },
  {
    id: "workshops",
    slug: "workshops",
    name: "Technical Workshops",
    flowchartGroup: "core",
    tagline: "High-Energy 2 to 3 Day Practical Bootcamp Sprints",
    description:
      "Intensive hands-on weekend technical workshops bringing real industry software and hardware directly to campus laboratories. Students complete and deploy a tangible project in under 72 hours.",
    keyBenefits: [
      "Instant exposure to enterprise tools: Qiskit, Studio 5000, Unity OpenXR, PyTorch",
      "100% project-based completion with live demonstrations",
      "Certificate of participation with verifiable digital credentials",
    ],
    engagementProcess: [
      "Institution selects topic and schedules student batches",
      "Shield Skill Hub deploys industry instructors and software toolkits",
      "Students participate in intensive code-along sprints and build a deliverable",
      "Project showcase, awards, and digital credential issuance",
    ],
    eligibleDepartments: [
      "CSE",
      "ECE",
      "EEE",
      "Mechanical",
      "Management",
      "Commerce",
    ],
    relatedPathwayIds: [
      "ar-vr-mr",
      "rockwell-automation-iot",
      "equity-research",
    ],
    route: "/institutions/workshops",
  },
  {
    id: "fdp",
    slug: "fdp",
    name: "Faculty Development Programs (FDP)",
    flowchartGroup: "core",
    tagline: "AICTE / UGC Compliant Faculty Skill Enhancement Programs",
    description:
      "Specialized 5-day national-level Faculty Development Programs designed to equip academic leaders with the latest methodologies in Artificial Intelligence, Blockchain, Quantum Computing, and Industry 4.0.",
    keyBenefits: [
      "Compliance with mandatory NBA/NAAC accreditation development criteria",
      "Collaborative research connections with peers from premier technical institutions",
      "Comprehensive digital courseware, code repositories, and laboratory manuals",
    ],
    engagementProcess: [
      "Collaborative FDP schedule announcement with host institution",
      "Daily expert lectures from industry architects and senior academicians",
      "Hands-on lab assignments and mini-project submissions",
      "Formal certificate of completion recognized for academic career advancement (CAS)",
    ],
    eligibleDepartments: [
      "All Engineering & Technology Faculties",
      "Management Studies",
    ],
    relatedPathwayIds: ["abc-quantum", "ev", "additive-manufacturing-robotics"],
    route: "/institutions/fdp",
  },
  {
    id: "center-of-excellence",
    slug: "center-of-excellence",
    name: "Center of Excellence (CoE)",
    flowchartGroup: "core",
    tagline: "Dedicated On-Campus Industry Labs & Incubation Hubs",
    description:
      "Establishing physical, state-of-the-art Centers of Excellence on campus in partnership with global technology leaders (Wipro 3D, Rockwell Automation, and Shield Group) to foster innovation, patents, and startup incubation.",
    keyBenefits: [
      "High-end physical hardware labs: 3D printing cells, industrial PLCs, and GPU compute servers",
      "Direct showcase facility for prospective students, accreditation bodies, and corporate recruiters",
      "Hub for inter-departmental projects, consulting, and student tech venture incubation",
    ],
    engagementProcess: [
      "Campus infrastructure audit and lab space allocation",
      "Hardware and enterprise software procurement and installation",
      "Faculty training and multi-year curriculum integration",
      "Grand launch and commencement of active student research batches",
    ],
    eligibleDepartments: [
      "Mechanical",
      "ECE",
      "EEE",
      "Computer Science",
      "Mechatronics",
    ],
    relatedPathwayIds: [
      "additive-manufacturing-robotics",
      "rockwell-automation-iot",
      "ev",
    ],
    route: "/institutions/center-of-excellence",
  },
  {
    id: "research",
    slug: "research",
    name: "Academic & Industrial Research",
    flowchartGroup: "core",
    tagline:
      "Peer-Reviewed Publications, Joint Patents & Commercial Prototyping",
    description:
      "Bridging university laboratories with commercial R&D. Shield Skill Hub co-authors peer-reviewed IEEE/Springer research papers, files joint utility patents, and validates computational algorithms against real commercial datasets.",
    keyBenefits: [
      "Boosts institutional NIRF, NAAC, and QS university ranking metrics",
      "Access to anonymized enterprise data sets unavailable in public domain",
      "Joint authorship with senior corporate scientists and principal architects",
    ],
    engagementProcess: [
      "Joint research interest formulation and literature review",
      "Experimental design, computational modeling, and empirical data validation",
      "Drafting manuscript following IEEE/ACM/Elsevier rubrics",
      "Publication submission and patent drafting",
    ],
    eligibleDepartments: [
      "All STEM Departments",
      "Data Science",
      "Biotechnology",
      "Electrical Sciences",
    ],
    relatedPathwayIds: [
      "abc-quantum",
      "golang-erlang",
      "cosmetics-food-safety",
    ],
    route: "/institutions/research",
  },

  // Institutional Activities (Flowchart Lower Branch)
  {
    id: "mous",
    slug: "mous",
    name: "Institutional MOUs",
    flowchartGroup: "activity",
    tagline:
      "Formal Strategic Partnerships for Multi-Year Academic Transformation",
    description:
      "Binding institutional Memorandums of Understanding (MOUs) that codify placement commitments, discounted faculty seats, guest lecture allocations, and campus CoE support.",
    keyBenefits: [
      "Official institutional partnership plaque and digital co-branding",
      "Priority access to corporate internships for top 10% batch performers",
      "Structured annual calendar of hackathons, workshops, and expert lectures",
    ],
    engagementProcess: [
      "Leadership meeting between College Principal/Dean and Shield Group Directors",
      "Scope customization across academic years and student cohorts",
      "Formal signing ceremony and student orientation assembly",
      "Annual review of placement, certification, and project metrics",
    ],
    eligibleDepartments: ["All University Departments"],
    relatedPathwayIds: ["abc-quantum", "ecommerce-lab"],
    route: "/institutions/mous",
  },
  {
    id: "skilling",
    slug: "skilling",
    name: "Campus-Wide Skilling Drives",
    flowchartGroup: "activity",
    tagline:
      "Universal Employability Enhancements for Pre-Final & Final Year Batches",
    description:
      "Scalable semester-long skilling bootcamps preparing thousands of students simultaneously with core algorithmic proficiency, full-stack programming, and behavioral interview readiness.",
    keyBenefits: [
      "Measurable surge in campus placement percentages across tier-2 and tier-3 colleges",
      "Automated diagnostic tests pinpointing individual student skill gaps",
      "Dedicated recruitment coordination across 120+ hiring partner companies",
    ],
    engagementProcess: [
      "Baseline skill benchmarking across the graduating cohort",
      "Structured 60-hour modular training delivered in hybrid format",
      "Continuous progress analytics shared weekly with college placement officers",
      "Mega placement drive and corporate campus hiring referrals",
    ],
    eligibleDepartments: [
      "B.E / B.Tech (All Branches)",
      "BCA",
      "MCA",
      "B.Sc CS",
    ],
    relatedPathwayIds: ["golang-erlang", "embedded-iot", "ecommerce-lab"],
    route: "/institutions/skilling",
  },
  {
    id: "hackathons",
    slug: "hackathons",
    name: "Hackathons & Design Challenges",
    flowchartGroup: "activity",
    tagline: "36-Hour Competitive Product Development & Innovation Sprints",
    description:
      "Curating and organizing high-stakes intra-college and national hackathons with real commercial problem statements provided by Shield Group and our industry partners.",
    keyBenefits: [
      "Cash prizes, seed funding, and direct spot-interview offers for winning teams",
      "Fosters inter-disciplinary collaboration between coders, designers, and managers",
      "High visibility on institutional social channels and industry media",
    ],
    engagementProcess: [
      "Problem statement selection across Smart Cities, Clean Energy, HealthTech & Fintech",
      "Campus registration and multi-stage technical screening",
      "36-hour non-stop hackathon with live mentoring checkpoints",
      "Jury evaluation by industry executives and award ceremony",
    ],
    eligibleDepartments: ["All Technical & Business Disciplines"],
    relatedPathwayIds: ["ar-vr-mr", "ev", "abc-quantum"],
    route: "/institutions/hackathons",
  },
  {
    id: "webinars",
    slug: "webinars",
    name: "Probono Lectures & Industry Webinars",
    flowchartGroup: "activity",
    tagline: "Democratizing Tech Insights Through Free Monthly Masterclasses",
    description:
      "Pro bono expert lectures delivered by staff engineers, corporate leaders, and tech founders to demystify emerging technologies, career roadmaps, and industry expectations for college students.",
    keyBenefits: [
      "Zero cost to students and institutions; accessible to all enrolled colleges",
      "Live interactive Q&A directly with staff architects from global technology firms",
      "Free access to session recordings, architecture slides, and reading lists",
    ],
    engagementProcess: [
      "Monthly webinar schedule published across partner campuses",
      "Students register via the Shield Skill Hub portal",
      "Interactive 90-minute live webinar with demonstration and code walkthrough",
      "Digital participation certificate and follow-up study materials distributed",
    ],
    eligibleDepartments: [
      "Open to all students and faculty across disciplines",
    ],
    relatedPathwayIds: ["golang-erlang", "abc-quantum", "equity-research"],
    route: "/institutions/webinars",
  },
]
