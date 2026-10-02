// Structured configuration data for the Shield Skill Hub Master Architecture and Story-Driven Platform
// Single source of truth for:
// - Flowchart nodes, domain pills, and partner mappings
// - Technology pathways ("Is this for me?", exact eligibility pills, courses, projects, internships)
// - Partner-to-course mappings (Wipro 3D -> AM & Robotics, Rockwell -> IoT, Stockathon -> Equity Lab)
// - Unmapped partner placeholders (Saint-Gobain, ISHRAE, Academic Seals: courses: [])
// - Find My Path rule-based recommendations

export interface FlowchartCourseItem {
  id: string
  label: string
  shortLabel?: string // Concise 1-2 line label for wheel segments
  domainPill: string // Exact text verbatim from mentor flowchart
  partnerId: string | null // Connected partner ID
  targetRoute: string
  todoNote?: string
  tagline: string
  whoCanJoin: string[] // Verbatim branches from domain pill
  overview: string
  skillsCovered: string[]
  technologies: string[]
  careerRoles: string[]
  recommendedCourseIds: string[]
  recommendedProjectIds: string[]
  recommendedInternshipIds: string[]
  subTopics?: { title: string desc: string }[] // For ABC & Quantum
}

export interface FlowchartPartner {
  id: string
  name: string
  shortLabel: string
  partnerRoute: string
  mappedCourseIds: string[]
  courses: string[] // List of courses provided by this partner
  tagline: string
  collaborationFocus: string
  programsOffered: string[]
  todoNote?: string
  isFirstLogoPair?: boolean
  isPlaceholderCourses?: boolean
}

export interface SkillHubBeigeDataConfig {
  center: {
    title: string
    subtitle: string
  }
  emergingTech: {
    id: string
    name: string
    speechBubble: string
    items: FlowchartCourseItem[]
  }
  nonTech: {
    id: string
    name: string
    speechBubble: string
    items: FlowchartCourseItem[]
  }
  partners: FlowchartPartner[]
}

export const skillHubFlowchartData: SkillHubBeigeDataConfig = {
  center: {
    title: "SHIELD SKILL HUB",
    subtitle: "Powered by SHIELD GROUP",
  },

  // 1. EMERGING TECH (Left Top) - 7 sub-items paired with domain pills
  emergingTech: {
    id: "emerging-tech",
    name: "EMERGING TECH",
    speechBubble:
      "7 specialized technology pathways for high-concurrency, hardware, automation, and intelligent systems.",
    items: [
      {
        id: "go-lang-erlang",
        label: "Go Lang – Erlang",
        shortLabel: "Go Lang – Erlang",
        domainPill: "AI & ML / DS / CS / IT",
        partnerId: null, // TODO: assign partner (no industry partner specified in reference diagram)
        targetRoute: "/technology/go-lang-erlang",
        todoNote: "No industry partner assigned in reference diagram",
        tagline:
          "High-Concurrency Distributed Systems & Resilient Telemetry Brokers",
        whoCanJoin: ["AI & ML", "DS", "CS", "IT"],
        overview:
          "Master modern concurrent backends, actor-model concurrency, and hyper-scale distributed services using Go and Erlang/OTP. Engineered for telemetry streams, real-time message brokers, and low-latency financial systems.",
        skillsCovered: [
          "Goroutines, Channels & Synchronization Primitives",
          "Actor-Model Concurrency in Erlang/BEAM",
          "High-Performance Microservices with gRPC & Protobuf",
          "Fault-Tolerant Supervision Trees (OTP)",
          "Zero-Allocation Memory Optimization",
        ],
        technologies: [
          "Go (Golang)",
          "Erlang/OTP",
          "gRPC",
          "Docker",
          "Kafka",
          "PostgreSQL",
          "Redis",
        ],
        careerRoles: [
          "Distributed Systems Engineer",
          "Backend Platform Architect",
          "High-Frequency Trading Infra Developer",
          "Cloud Core Engineer",
        ],
        recommendedCourseIds: ["full-stack-dev", "python-programming"],
        recommendedProjectIds: ["proj-4", "proj-5"],
        recommendedInternshipIds: ["research-collaboration", "projects"],
      },
      {
        id: "wipro-3d-additive-manufacturing",
        label: "Wipro 3D Additive Manufacturing, Epson Robotic Arm",
        shortLabel: "Wipro 3D / Epson Robotic Arm",
        domainPill: "MECH / CIVIL / ECE / EEE / IT",
        partnerId: "wipro-3d", // Mapped directly to Wipro 3D partner node
        targetRoute: "/technology/wipro-3d-additive-manufacturing",
        tagline:
          "Industrial 3D Printing, Metrology & 6-Axis Robotics Kinematics",
        whoCanJoin: ["MECH", "CIVIL", "ECE", "EEE", "IT"],
        overview:
          "Bridge digital CAD design with precision metal/polymer additive manufacturing workflows and 6-axis Epson robotic arm kinematics, path planning, and automated factory cells in partnership with Wipro 3D.",
        skillsCovered: [
          "Design for Additive Manufacturing (DfAM)",
          "Selective Laser Melting (SLM) & Polymer Slicing",
          "Epson 6-Axis Robotic Kinematics & Trajectory Control",
          "Industrial Optical Metrology & Quality Inspection",
          "PLC-Robotic Cell Interfacing & Safety Protocols",
        ],
        technologies: [
          "Wipro 3D SLM",
          "Epson RC+ 7.0",
          "Siemens NX CAD",
          "Industrial PLC",
          "Materialise Magics",
        ],
        careerRoles: [
          "Additive Manufacturing Specialist",
          "Robotics Automation Engineer",
          "Mechatronics Systems Designer",
          "Industry 4.0 Integration Consultant",
        ],
        recommendedCourseIds: ["full-stack-dev", "automation-ai"],
        recommendedProjectIds: ["proj-2", "proj-6"],
        recommendedInternshipIds: ["projects", "department-development"],
      },
      {
        id: "rockwell-automation-iot",
        label: "Rockwell Automation IoT",
        shortLabel: "Rockwell Automation IoT",
        domainPill: "ECE / EEE / IT",
        partnerId: "rockwell-automation", // Mapped directly to Rockwell Automation partner node
        targetRoute: "/technology/rockwell-automation-iot",
        tagline:
          "Connected Enterprise Edge Runtimes, SCADA & Industrial Smart Sensors",
        whoCanJoin: ["ECE", "EEE", "IT"],
        overview:
          "Develop enterprise industrial telemetry fabrics using Rockwell FactoryTalk, Allen-Bradley PLCs, MQTT edge micro-gateways, and machine vision telemetry for connected factory operations.",
        skillsCovered: [
          "Rockwell FactoryTalk Edge & ThingWorx Architectures",
          "Allen-Bradley ControlLogix Ladder Logic & Structured Text",
          "Modbus TCP, EtherNet/IP & OPC-UA Industrial Protocols",
          "Edge Cloud Telemetry Synchronization with Azure IoT",
          "Real-Time SCADA Dashboard Instrumentation",
        ],
        technologies: [
          "Rockwell FactoryTalk",
          "Allen-Bradley Studio 5000",
          "OPC-UA",
          "MQTT",
          "Azure IoT Edge",
          "Grafana",
        ],
        careerRoles: [
          "Industrial IoT Solutions Architect",
          "Automation & SCADA Engineer",
          "OT/IT Convergence Specialist",
          "Smart Factory Controls Developer",
        ],
        recommendedCourseIds: ["automation-ai", "cloud-devops"],
        recommendedProjectIds: ["proj-2", "proj-3"],
        recommendedInternshipIds: ["projects", "research-collaboration"],
      },
      {
        id: "embedded-iot",
        label: "Embedded / IoT",
        shortLabel: "Embedded / IoT",
        domainPill: "ECE / EEE / IT",
        partnerId: null, // TODO: assign partner (no partner in diagram)
        targetRoute: "/technology/embedded-iot",
        todoNote: "No industry partner assigned in reference diagram",
        tagline:
          "Bare-Metal Firmware, RTOS Internals & Low-Power Mesh Networks",
        whoCanJoin: ["ECE", "EEE", "IT"],
        overview:
          "Engineer real-time embedded firmware on ARM Cortex-M processors, FreeRTOS kernel task synchronization, low-power BLE/LoRaWAN sensor nodes, and hardware-level cybersecurity protections.",
        skillsCovered: [
          "Embedded C & Modern Bare-Metal Microcontroller Architecture",
          "FreeRTOS Preemptive Multitasking & Inter-Task Semaphores",
          "I2C, SPI, UART & CAN Bus Hardware Protocol Debugging",
          "Low-Power LoRaWAN & BLE 5.3 Sensor Mesh Networks",
          "Secure Bootloaders & Hardware Root-of-Trust Implementation",
        ],
        technologies: [
          "STM32 (ARM Cortex-M4)",
          "ESP32-S3",
          "FreeRTOS",
          "Zephyr RTOS",
          "Logic Analyzers",
          "KiCAD",
        ],
        careerRoles: [
          "Embedded Firmware Engineer",
          "IoT Hardware Device Architect",
          "RTOS Systems Developer",
          "Automotive Electronics Engineer",
        ],
        recommendedCourseIds: ["automation-ai", "cybersecurity"],
        recommendedProjectIds: ["proj-2", "proj-5"],
        recommendedInternshipIds: ["projects", "department-development"],
      },
      {
        id: "ar-vr-mr",
        label: "AR / VR / MR",
        shortLabel: "AR / VR / MR",
        domainPill: "AI/ML / DS / MECH / CSE / IT / ECE / EEE",
        partnerId: null, // TODO: assign partner (no partner in diagram)
        targetRoute: "/technology/ar-vr-mr",
        todoNote: "No industry partner assigned in reference diagram",
        tagline:
          "Spatial Computing, Industrial Digital Twins & Immersive Simulators",
        whoCanJoin: ["AI/ML", "DS", "MECH", "CSE", "IT", "ECE", "EEE"],
        overview:
          "Architect spatial digital twins, real-time 3D telemetry overlays, and photorealistic simulation environments using Unity, Unreal Engine 5, OpenXR, and LiDAR spatial reconstruction.",
        skillsCovered: [
          "Spatial Computing & OpenXR Headset SDK Interfacing",
          "Unity & Unreal Engine 5 Real-Time Rendering Pipelines",
          "Industrial CAD-to-Spatial Telemetry Data Ingestion",
          "Shader Graph Shading & Real-Time Performance Profiling",
          "Haptic Feedback & Multi-User Collaborative VR Workspaces",
        ],
        technologies: [
          "Unity 6",
          "Unreal Engine 5",
          "OpenXR",
          "Meta Quest 3 SDK",
          "WebXR",
          "Blender",
        ],
        careerRoles: [
          "Spatial Computing Developer",
          "Industrial Simulation Architect",
          "XR Software Engineer",
          "Digital Twin Systems Specialist",
        ],
        recommendedCourseIds: ["ai-machine-learning", "full-stack-dev"],
        recommendedProjectIds: ["proj-1", "proj-6"],
        recommendedInternshipIds: ["research-collaboration", "projects"],
      },
      {
        id: "ev",
        label: "EV",
        shortLabel: "EV",
        domainPill: "AI/ML / ECE / EEE / DS / MECH",
        partnerId: null, // TODO: assign partner (no partner in diagram)
        targetRoute: "/technology/ev",
        todoNote: "No industry partner assigned in reference diagram",
        tagline:
          "Battery Management Systems, Power Electronics & Telemetry Analytics",
        whoCanJoin: ["AI/ML", "ECE", "EEE", "DS", "MECH"],
        overview:
          "Design electric vehicle powertrain electronics, Battery Management Systems (BMS) with state-of-charge Kalman filtering, regenerative braking inverters, and predictive battery fleet analytics.",
        skillsCovered: [
          "Lithium-Ion Cell Electrochemical Chemistry & Thermal Runaway",
          "BMS Hardware Architecture, Cell Balancing & CAN Bus Telemetry",
          "Three-Phase Inverter Control & Field-Oriented Motor Driving",
          "Predictive AI Degradation Modeling & Battery Life Estimation",
          "Automotive Functional Safety (ISO 26262 ASIL Compliance)",
        ],
        technologies: [
          "MATLAB / Simulink",
          "CANalyzer",
          "TI C2000 DSP",
          "Python Battery AI",
          "Thermal CAD",
        ],
        careerRoles: [
          "BMS Firmware Architect",
          "EV Power Electronics Engineer",
          "Powertrain Telemetry Specialist",
          "Electric Mobility Systems Lead",
        ],
        recommendedCourseIds: ["data-sciences", "automation-ai"],
        recommendedProjectIds: ["proj-2", "proj-6"],
        recommendedInternshipIds: ["research-collaboration", "projects"],
      },
      {
        id: "abc-quantum",
        label: "ABC (AI, Blockchain, Cyber Security), Quantum",
        shortLabel: "ABC + Quantum",
        domainPill: "AI/ML / DS / CS / IT / EEE / ECE / ME…",
        partnerId: null, // TODO: assign partner (no partner in diagram)
        targetRoute: "/technology/abc-quantum",
        todoNote:
          "No industry partner assigned in reference diagram; domain pill ends with 'ME…' in source diagram (truncated)",
        tagline:
          "Foundational Convergence of Artificial Intelligence, Cryptographic Ledgers, Threat Defense & Quantum Qubits",
        whoCanJoin: ["AI/ML", "DS", "CS", "IT", "EEE", "ECE", "ME"],
        overview:
          "The flagship frontier convergence track covering Artificial Intelligence models, decentralized cryptographic consensus, zero-trust security fabrics, and quantum circuit simulation.",
        skillsCovered: [
          "Deep Neural Architectures & Transformer Attention Math",
          "Smart Contract Bytecode Execution, EVM & Zero-Knowledge Proofs",
          "Threat Intelligence, Reverse Engineering & Penetration Testing",
          "Qiskit Quantum Circuit Simulation & Grover/Shor Quantum Algorithms",
          "Hardware Security Modules & Post-Quantum Cryptography (PQC)",
        ],
        technologies: [
          "PyTorch",
          "Qiskit",
          "Solidity",
          "Rust",
          "Ghidra",
          "Kubernetes",
          "Docker",
        ],
        careerRoles: [
          "Frontier Research Engineer",
          "Cryptographic Systems Specialist",
          "Enterprise AI Security Architect",
          "Quantum Algorithm Researcher",
        ],
        recommendedCourseIds: [
          "ai-machine-learning",
          "cybersecurity",
          "generative-ai",
        ],
        recommendedProjectIds: ["proj-1", "proj-3", "proj-5"],
        recommendedInternshipIds: ["research-collaboration", "projects"],
        subTopics: [
          {
            title: "A — Artificial Intelligence & Deep Learning",
            desc: "Neural network backpropagation, transformers, reinforcement learning, and enterprise LLM fine-tuning.",
          },
          {
            title: "B — Blockchain & Distributed Ledgers",
            desc: "Byzantine fault tolerance, EVM consensus, smart contract auditing, and zero-knowledge cryptographic rollups.",
          },
          {
            title: "C — Cyber Security & Threat Defense",
            desc: "Offensive red teaming, automated SIEM detection, memory exploitation defense, and post-quantum encryption standards.",
          },
          {
            title: "Quantum — Quantum Computing Foundations",
            desc: "Qubit superposition, entanglement states, gate-level algorithms in IBM Qiskit, and variational quantum eigensolvers.",
          },
        ],
      },
    ],
  },

  // 2. NON TECH (Left Bottom) - 2 sub-items paired with domain pills
  nonTech: {
    id: "non-tech",
    name: "NON TECH",
    speechBubble:
      "Applied analytics, quantitative capital markets, regulatory compliance, and biosafety protocols.",
    items: [
      {
        id: "commerce-equity-lab",
        label: "Commerce Lab, Equity Lab / Stock Research Analytics",
        shortLabel: "Commerce & Equity Lab",
        domainPill: "B.COM / BCA / MBA",
        partnerId: "stockathon-academy", // Mapped directly to Stockathon Academy partner node
        targetRoute: "/technology/commerce-equity-lab",
        tagline:
          "Institutional Financial Modeling, DCF Valuation & Algorithmic Market Analytics",
        whoCanJoin: ["B.COM", "BCA", "MBA"],
        overview:
          "Master institutional capital market workflows with Stockathon Academy. Build Bloomberg-grade discounted cash flow models, sector alpha research, and automated Python algorithmic trading strategies.",
        skillsCovered: [
          "Discounted Cash Flow (DCF) & LBO Financial Modeling",
          "Financial Statement Telemetry & Forensic Accounting",
          "Quantitative Factor Screener Construction in Python",
          "Options Greek Delta-Neutral Hedging Strategies",
          "SEBI Equity Research Compliance & Reporting Guidelines",
        ],
        technologies: [
          "Python (Pandas/NumPy)",
          "Excel Financial Engineering",
          "NSE/BSE Feeds",
          "Power BI",
          "SQL",
        ],
        careerRoles: [
          "Equity Research Associate",
          "Quantitative Portfolio Analyst",
          "Investment Banking Analyst",
          "Corporate Financial Strategist",
        ],
        recommendedCourseIds: ["business-intelligence", "data-analytics"],
        recommendedProjectIds: ["proj-3", "proj-4"],
        recommendedInternshipIds: ["projects", "department-development"],
      },
      {
        id: "cosmetics-food-safety",
        label: "Cosmetics / Food Safety",
        shortLabel: "Cosmetics / Food Safety",
        domainPill: "B.E / B.TECH / BIOTECH",
        partnerId: null, // TODO: assign partner (no partner in diagram)
        targetRoute: "/technology/cosmetics-food-safety",
        todoNote: "No industry partner assigned in reference diagram",
        tagline:
          "GMP Formulations, Microbial Bioburden & Regulatory Compliance Standards",
        whoCanJoin: ["B.E", "B.TECH", "BIOTECH"],
        overview:
          "Prepare for QA/QC roles in pharmaceutical, consumer cosmetic, and food processing plants. Master ISO 22000, FSSAI, stability testing, and toxicological assay design.",
        skillsCovered: [
          "Good Manufacturing Practices (GMP) & Cleanroom Classification",
          "Microbial Bioburden Assay & Accelerated Shelf-Life Testing",
          "FSSAI & FDA Cosmetic Regulatory Dossier Preparation",
          "Chromatographic HPLC/GC-MS Analysis of Active Compounds",
          "Hazard Analysis Critical Control Point (HACCP) Implementation",
        ],
        technologies: [
          "HPLC Instruments",
          "Microbial Incubators",
          "LIMS Software",
          "Spectrophotometry",
          "HACCP Sheets",
        ],
        careerRoles: [
          "Quality Assurance Lead (QA/QC)",
          "Formulation Scientist",
          "Regulatory Compliance Officer",
          "Food & Biosafety Auditor",
        ],
        recommendedCourseIds: ["data-analytics", "automation-ai"],
        recommendedProjectIds: ["proj-3", "proj-6"],
        recommendedInternshipIds: ["research-collaboration", "projects"],
      },
    ],
  },

  // 3. INDUSTRY / PARTNERS SOLUTIONS (Right Side) - 6 partner logo nodes
  partners: [
    {
      id: "academic-seals",
      name: "[Academic / University Seals]",
      shortLabel: "Academic Seals",
      isFirstLogoPair: true,
      partnerRoute: "/partners/academic-seals",
      mappedCourseIds: [],
      courses: [], // TODO: confirm courses & confirm first logo pair from hi-res diagram
      todoNote:
        "First logo pair is not legible in original diagram; courses unassigned",
      isPlaceholderCourses: true,
      tagline: "Accredited University Partnerships & Academic Seals",
      collaborationFocus:
        "Joint degree credit transfers, university faculty advisory boards, and institutional credit courses across affiliated universities.",
      programsOffered: [
        "Academic Credit Courses Across Engineering Branches",
        "Faculty Continuous Pedagogical Upskilling",
        "Co-Sponsored Academic Research Sprints",
      ],
    },
    {
      id: "saint-gobain",
      name: "Saint-Gobain",
      shortLabel: "Saint-Gobain",
      partnerRoute: "/partners/saint-gobain",
      mappedCourseIds: [],
      courses: [], // TODO: confirm courses (not specified in diagram)
      todoNote: "Courses not specified in reference diagram",
      isPlaceholderCourses: true,
      tagline: "Worldwide Leader in Light & Sustainable Construction Materials",
      collaborationFocus:
        "Joint technical workshops and industry problem statements addressing energy-efficient building envelopes, advanced glass formulations, and sustainable materials.",
      programsOffered: [
        "Sustainable Habitat Capstone Project Evaluations",
        "Thermal Insulation & Acoustic Design Industry Masterclasses",
        "Departmental Development Sessions for Civil & Mechanical Engineering",
      ],
    },
    {
      id: "wipro-3d",
      name: "Wipro 3D",
      shortLabel: "Wipro 3D",
      partnerRoute: "/partners/wipro-3d",
      mappedCourseIds: ["wipro-3d-additive-manufacturing"],
      courses: ["Wipro 3D Additive Manufacturing, Epson Robotic Arm"],
      tagline:
        "Industrial Additive Manufacturing & Advanced Robotics Solutions",
      collaborationFocus:
        "Curriculum alignment and capstone project design for students in Mechanical, ECE, EEE, and IT in metal additive manufacturing and Epson robotics integration.",
      programsOffered: [
        "Wipro 3D AM & Epson Robotic Arm Specialization Track",
        "Industrial Additive Manufacturing Center of Excellence (CoE) Blueprint",
        "Generative CAD Design & Part Topology Optimization Clinics",
      ],
    },
    {
      id: "rockwell-automation",
      name: "Rockwell Automation",
      shortLabel: "Rockwell Automation",
      partnerRoute: "/partners/rockwell-automation",
      mappedCourseIds: ["rockwell-automation-iot"],
      courses: ["Rockwell Automation IoT"],
      tagline:
        "Global Leader in Industrial Automation & Digital Transformation",
      collaborationFocus:
        "Enterprise industrial IoT architectures, PLC programming, SCADA telemetry, and digital twin automation for ECE, EEE, and IT graduates.",
      programsOffered: [
        "Rockwell Connected Enterprise & Industrial IoT Specialization",
        "Allen-Bradley Studio 5000 Hands-On Certification Workshops",
        "OT/IT Convergence Sprints with Live PLC Runtimes",
      ],
    },
    {
      id: "ishrae",
      name: "ISHRAE",
      shortLabel: "ISHRAE",
      partnerRoute: "/partners/ishrae",
      mappedCourseIds: [],
      courses: [], // TODO: confirm courses (not specified in diagram)
      todoNote: "Courses not specified in reference diagram",
      isPlaceholderCourses: true,
      tagline:
        "Indian Society of Heating, Refrigerating & Air Conditioning Engineers",
      collaborationFocus:
        "HVAC&R engineering, building energy efficiency, refrigeration cycles, and green thermal systems for mechanical, electrical, and civil engineers.",
      programsOffered: [
        "Green Building HVAC Design Masterclasses",
        "Smart Cold Chain Logistics Capstones",
        "Energy Audit & Thermal Comfort Certification Sprints",
      ],
    },
    {
      id: "stockathon-academy",
      name: "Stockathon Academy",
      shortLabel: "Stockathon Academy",
      partnerRoute: "/partners/stockathon-academy",
      mappedCourseIds: ["commerce-equity-lab"],
      courses: ["Commerce Lab, Equity Lab / Stock Research Analytics"],
      tagline: "Premier Capital Markets & Quantitative Trading Academy",
      collaborationFocus:
        "Institutional equity research, DCF financial valuation, algorithmic Python market analytics, and SEBI compliance guidelines for B.COM, BCA, and MBA graduates.",
      programsOffered: [
        "Institutional Equity Lab & Stock Research Analyst Track",
        "Bloomberg-Grade DCF Financial Valuation Bootcamps",
        "Algorithmic Trading & Quantitative Factor Modeling Clinics",
      ],
    },
  ],
}

// ==========================================
// FIND MY PATH RULE-BASED ENGINE
// ==========================================

export interface StudentBranchOption {
  id: string
  label: string
  category: "tech" | "non-tech"
}

export const eligibleStudentBranches: StudentBranchOption[] = [
  {
    id: "AI & ML",
    label: "Artificial Intelligence & Machine Learning (AI & ML)",
    category: "tech",
  },
  { id: "DS", label: "Data Science (DS)", category: "tech" },
  {
    id: "CS",
    label: "Computer Science & Engineering (CS/CSE)",
    category: "tech",
  },
  { id: "IT", label: "Information Technology (IT)", category: "tech" },
  { id: "MECH", label: "Mechanical Engineering (MECH)", category: "tech" },
  { id: "CIVIL", label: "Civil Engineering (CIVIL)", category: "tech" },
  { id: "ECE", label: "Electronics & Communication (ECE)", category: "tech" },
  { id: "EEE", label: "Electrical & Electronics (EEE)", category: "tech" },
  { id: "B.COM", label: "Bachelor of Commerce (B.COM)", category: "non-tech" },
  {
    id: "BCA",
    label: "Bachelor of Computer Applications (BCA)",
    category: "non-tech",
  },
  {
    id: "MBA",
    label: "Master of Business Administration (MBA)",
    category: "non-tech",
  },
  {
    id: "BIOTECH",
    label: "Biotechnology & Bioengineering (B.E/B.TECH/Biotech)",
    category: "non-tech",
  },
]

export interface InterestDomainOption {
  id: string
  label: string
  desc: string
  category: "tech" | "non-tech"
}

export const interestDomainOptions: InterestDomainOption[] = [
  {
    id: "ai-data",
    label: "Artificial Intelligence & Data Systems",
    desc: "Neural architectures, predictive modeling, and concurrent telemetry data pipelines.",
    category: "tech",
  },
  {
    id: "robotics-am",
    label: "Robotics & Additive Manufacturing",
    desc: "Industrial 3D metal printing, robotic kinematics, and factory cell automation.",
    category: "tech",
  },
  {
    id: "iot-automation",
    label: "Industrial IoT & Connected Automation",
    desc: "SCADA systems, PLC ladder logic, smart sensor telemetry, and edge computing.",
    category: "tech",
  },
  {
    id: "embedded-systems",
    label: "Embedded Systems & Firmware",
    desc: "Bare-metal C on ARM Cortex, FreeRTOS, BLE/LoRaWAN, and hardware protocols.",
    category: "tech",
  },
  {
    id: "spatial-computing",
    label: "Spatial Computing, AR/VR & Digital Twins",
    desc: "Real-time 3D spatial simulations, Unreal/Unity engines, and industrial twins.",
    category: "tech",
  },
  {
    id: "ev-mobility",
    label: "Electric Vehicles & Clean Mobility",
    desc: "Battery Management Systems (BMS), power inverters, and EV fleet analytics.",
    category: "tech",
  },
  {
    id: "quantum-cyber",
    label: "Quantum Computing, AI & Cyber Security",
    desc: "Frontier convergence of cryptographic ledgers, threat defense, and qubits.",
    category: "tech",
  },
  {
    id: "finance-markets",
    label: "Capital Markets & Equity Analytics",
    desc: "DCF valuations, forensic accounting, quantitative screening, and stock research.",
    category: "non-tech",
  },
  {
    id: "biosafety-cosmetics",
    label: "Cosmetics Formulations & Biosafety",
    desc: "GMP cleanroom standards, microbial assays, HACCP, and product quality testing.",
    category: "non-tech",
  },
]

export interface RecommendedPathwayResult {
  branchId: string
  branchLabel: string
  technology: FlowchartCourseItem
  partner: FlowchartPartner | null
  progressionChain: {
    branch: string
    domain: string
    course: string
    project: string
    internship: string
    industryRole: string
  }
}

// Rule-based recommendation engine matching student discipline to flowchart items
export function calculateStudentPathway(
  branchId: string,
  interestId: string,
): RecommendedPathwayResult {
  const allItems: FlowchartCourseItem[] = [
    ...skillHubFlowchartData.emergingTech.items,
    ...skillHubFlowchartData.nonTech.items,
  ]

  // Branch matching table
  const branchNormalized = branchId.toUpperCase()

  // Find candidate items where chosen branch is verbatim in whoCanJoin
  const matchingByBranch = allItems.filter((item) =>
    item.whoCanJoin.some((b) => b.toUpperCase() === branchNormalized),
  )

  // Match with interest preference
  let chosenItem: FlowchartCourseItem | undefined

  if (interestId === "ai-data") {
    chosenItem = matchingByBranch.find(
      (i) => i.id === "go-lang-erlang" || i.id === "abc-quantum",
    )
  } else if (interestId === "robotics-am") {
    chosenItem = matchingByBranch.find(
      (i) => i.id === "wipro-3d-additive-manufacturing",
    )
  } else if (interestId === "iot-automation") {
    chosenItem = matchingByBranch.find(
      (i) => i.id === "rockwell-automation-iot",
    )
  } else if (interestId === "embedded-systems") {
    chosenItem = matchingByBranch.find((i) => i.id === "embedded-iot")
  } else if (interestId === "spatial-computing") {
    chosenItem = matchingByBranch.find((i) => i.id === "ar-vr-mr")
  } else if (interestId === "ev-mobility") {
    chosenItem = matchingByBranch.find((i) => i.id === "ev")
  } else if (interestId === "quantum-cyber") {
    chosenItem = matchingByBranch.find((i) => i.id === "abc-quantum")
  } else if (interestId === "finance-markets") {
    chosenItem = matchingByBranch.find((i) => i.id === "commerce-equity-lab")
  } else if (interestId === "biosafety-cosmetics") {
    chosenItem = matchingByBranch.find((i) => i.id === "cosmetics-food-safety")
  }

  // Fallback to highest ranked item for this branch if exact interest doesn't map directly
  if (!chosenItem && matchingByBranch.length > 0) {
    chosenItem = matchingByBranch[0]
  }

  // Universal fallback if somehow unmatched
  if (!chosenItem) {
    chosenItem = allItems[0]
  }

  const partner =
    skillHubFlowchartData.partners.find(
      (p) => p.id === chosenItem?.partnerId,
    ) || null
  const branchObj = eligibleStudentBranches.find((b) => b.id === branchId)

  return {
    branchId,
    branchLabel: branchObj?.label || branchId,
    technology: chosenItem,
    partner,
    progressionChain: {
      branch: branchId,
      domain: chosenItem.label,
      course:
        chosenItem.skillsCovered[0] || "Foundational Specialization Track",
      project: `Capstone in ${chosenItem.label}`,
      internship: partner
        ? `${partner.name} Industrial Sprint`
        : "Shield Enterprise Research Track",
      industryRole: chosenItem.careerRoles[0] || "Industry Specialist",
    },
  }
}
