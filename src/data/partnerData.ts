import { PartnerOrg } from "../types"

export const partnerOrganizations: PartnerOrg[] = [
  {
    id: "saint-gobain",
    slug: "saint-gobain",
    name: "Saint-Gobain",
    tagline: "Worldwide Leader in Light and Sustainable Construction",
    domain: "Advanced Habitat & Material Sciences",
    technologies: [
      "Sustainable Materials",
      "Acoustic Engineering",
      "Thermal Glazing",
      "Green Building Physics",
    ],
    collaborationFocus:
      "Joint technical workshops and industry problem statements addressing energy-efficient building envelopes, advanced glass formulations, and sustainable materials.",
    programsOffered: [
      "Sustainable Habitat Capstone Project Evaluations",
      "Thermal Insulation & Acoustic Design Industry Masterclasses",
      "Departmental Development Sessions for Civil & Mechanical Engineering",
    ],
    opportunities: [
      "Materials Engineering Capstone Mentorship",
      "Green Building Research Sponsorships",
      "Industrial Plant Technology Visits",
    ],
    relatedPathwayIds: ["additive-manufacturing-robotics", "ev"],
    relatedCourseIds: ["course-powerbi-analytics", "course-fullstack-cloud"],
  },
  {
    id: "wipro-3d",
    slug: "wipro-3d",
    name: "Wipro 3D",
    tagline: "Industrial Additive Manufacturing & Advanced Solutions",
    domain: "Metal & Polymer 3D Printing & Precision Prototyping",
    technologies: [
      "Selective Laser Melting (SLM)",
      "Additive Design (DfAM)",
      "Metrology",
      "Industrial Slicing",
    ],
    collaborationFocus:
      "Curriculum alignment and capstone project design for students in Mechanical, ECE, EEE, and IT in metal additive manufacturing and Epson robotics integration.",
    programsOffered: [
      "Wipro 3D AM & Epson Robotic Arm Specialization",
      "Industrial Additive Manufacturing Center of Excellence (CoE) Blueprint",
      "Generative CAD Design & Part Topology Optimization Clinics",
    ],
    opportunities: [
      "Design for Additive Manufacturing Capstone Verification",
      "Hardware Sprints with 6-Axis Robotic Arm Automation",
      "Summer Industry Technical Internships",
    ],
    relatedPathwayIds: ["additive-manufacturing-robotics"],
    relatedCourseIds: ["course-powerbi-analytics", "course-fullstack-cloud"],
  },
  {
    id: "rockwell-automation",
    slug: "rockwell-automation",
    name: "Rockwell Automation",
    tagline: "Expanding Human Possibility Through Industrial Automation",
    domain: "Connected Enterprise, PLC/SCADA & Industrial IoT",
    technologies: [
      "Allen-Bradley PLCs",
      "Studio 5000",
      "FactoryTalk SCADA",
      "EtherNet/IP",
      "Industrial Edge IoT",
    ],
    collaborationFocus:
      "Empowering ECE, EEE, and IT students with industry-standard control systems, OT cybersecurity, and smart factory edge telemetry pipelines.",
    programsOffered: [
      "Rockwell Automation IoT Hands-on Simulation Track",
      "Smart Factory Center of Excellence Integration",
      "Faculty Development Programs on Studio 5000 & PLC Architecture",
    ],
    opportunities: [
      "Industrial SCADA & Fault Injection Sprints",
      "Edge-to-Cloud Factory Telemetry Capstones",
      "Corporate Automation Certification Prep",
    ],
    relatedPathwayIds: ["rockwell-automation-iot", "embedded-iot"],
    relatedCourseIds: ["course-powerbi-analytics", "course-python-ds"],
  },
  {
    id: "ishrae",
    slug: "ishrae",
    name: "ISHRAE",
    tagline:
      "Indian Society of Heating, Refrigerating and Air Conditioning Engineers",
    domain: "Thermal Engineering, HVAC&R & Energy Conservation",
    technologies: [
      "Building Energy Simulation",
      "Refrigerant Cycles",
      "Smart HVAC Controls",
      "Indoor Air Quality",
    ],
    collaborationFocus:
      "Technical knowledge transfer in green refrigeration, heat pump thermodynamics, energy auditing, and sustainable built environments.",
    programsOffered: [
      "Student Chapter Workshops on Modern HVAC Optimization",
      "Energy Conservation & Indoor Air Quality (IAQ) Research Studies",
      "Annual Design Competitions for Sustainable Refrigeration Systems",
    ],
    opportunities: [
      "HVAC Telemetry & Energy Auditing Projects",
      "Technical Paper Presentation Sponsorships",
      "Industry Networking with 28,000+ HVAC Professionals",
    ],
    relatedPathwayIds: ["ev", "additive-manufacturing-robotics"],
    relatedCourseIds: ["course-powerbi-analytics"],
  },
  {
    id: "stockathon-academy",
    slug: "stockathon-academy",
    name: "Stockathon Academy",
    tagline: "Premier Capital Markets & Algorithmic Trading Lab",
    domain: "Financial Markets, Equity Analytics & Quantitative Trading",
    technologies: [
      "Equity Screening",
      "DCF Valuation Models",
      "Technical Indicators",
      "Quantitative Risk Tools",
    ],
    collaborationFocus:
      "Providing real-time capital markets simulation labs, quantitative research frameworks, and fundamental financial analytics for B.Com, BCA, and MBA fellows.",
    programsOffered: [
      "Equity Lab & Stock Research Certification",
      "Campus Trading Floor Simulation Hackathons",
      "Financial Modeling & Valuation Masterclasses",
    ],
    opportunities: [
      "Initiation of Coverage Equity Research Mentorship",
      "Live Capital Market Analytics Internships",
      "Portfolio Management Sprints",
    ],
    relatedPathwayIds: ["equity-research", "ecommerce-lab"],
    relatedCourseIds: ["course-powerbi-analytics", "course-python-ds"],
  },
]
