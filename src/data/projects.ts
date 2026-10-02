import { ProjectDetail } from "../types"
import aiMachineLearning from "../assets/projects/ai-machine-learning.jpg"
import dataAnalytics from "../assets/projects/data-analytics.jpg"
import businessIntelligence from "../assets/projects/business-intelligence.jpg"
import fullStackDevelopment from "../assets/projects/full-stack-development.jpg"
import cloudDevops from "../assets/projects/cloud-devops.jpg"
import automationAi from "../assets/projects/automation-ai.jpg"

export const projectsData: ProjectDetail[] = [
  {
    id: "proj-1",
    slug: "customer-churn",
    title: "Customer Churn Prediction Engine",
    tag: "Applied Intelligence",
    description:
      "Build deep neural networks and predictive machine learning pipelines to detect telecom and subscription customer churn before it occurs.",
    problemStatement:
      "Subscription businesses lose 15-25% of annual revenue through preventable customer attrition. Your objective is to build an end-to-end predictive machine learning model using 100,000+ historical telecom subscriber records, identify top attrition risk indicators, and output an automated risk scoring system for customer success teams.",
    image: aiMachineLearning,
    alt: "AI and machine learning neural network visualization",
    color: "purple",
    difficulty: "Intermediate",
    estimatedHours: "24-30 hours",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "XGBoost",
      "FastAPI",
      "Seaborn",
    ],
    expectedOutcome:
      "A trained and benchmarked ensemble model achieving >86% ROC-AUC score, complete with an interactive feature importance dashboard and an automated inference API endpoint.",
    skillsLearned: [
      "Exploratory Data Analysis (EDA) on imbalanced datasets",
      "SMOTE and cost-sensitive classification techniques",
      "Gradient boosted tree tuning with Optuna",
      "SHAP value explainability for executive stakeholders",
      "Model packaging and REST API serving with FastAPI",
    ],
    requirements: [
      "Cleanse raw subscriber logs containing missing tenure and billing records",
      "Perform feature engineering including contract tenure ratio and payment failure counts",
      "Train baseline Logistic Regression, Random Forest, and XGBoost classifiers",
      "Benchmark precision, recall, and false positive rates against commercial KPIs",
      "Expose the finalized model as a REST API accepting JSON subscriber payloads",
    ],
    solutionApproach: [
      "Step 1: Data Ingestion & Missing Value Imputation using median grouping",
      "Step 2: Feature Transformation: One-hot encoding categorical contract features & scaling numerical bills",
      "Step 3: Training & 5-Fold Stratified Cross-Validation",
      "Step 4: Model Explainability: Extracting global and local SHAP feature impact plots",
      "Step 5: Deployment: Containerizing the FastAPI prediction service using Docker",
    ],
    relatedCourseId: "course-python-ds",
  },
  {
    id: "proj-2",
    slug: "sales-analytics",
    title: "Data Analytics & Executive Visualization Suite",
    tag: "Actionable Insights",
    description:
      "Transform complex multi-channel enterprise transaction records into luminous interactive dashboards, trend visualizations, and strategic financial reports.",
    problemStatement:
      "An omnichannel retailer with 120 store locations and 4 online storefronts lacks unified visibility into seasonal demand spikes, margin erosion, and regional supplier bottlenecks. Your goal is to build an executive reporting suite that reconciles disparate sales datasets into interactive visual insights.",
    image: dataAnalytics,
    alt: "Data analytics and interactive visualization charts",
    color: "blue",
    difficulty: "Beginner",
    estimatedHours: "16-20 hours",
    technologies: [
      "Python",
      "SQL",
      "Pandas",
      "Plotly",
      "Streamlit",
      "PostgreSQL",
    ],
    expectedOutcome:
      "An interactive web dashboard visualizing revenue trends, margin health, customer cohorts, and automated anomaly alerts across business units.",
    skillsLearned: [
      "Complex SQL aggregation, window functions, and CTEs",
      "Cohort analysis and customer retention matrices",
      "Multi-dimensional interactive charting with Plotly",
      "Building reactive executive dashboards with Streamlit",
    ],
    requirements: [
      "Write optimized SQL queries joining customer, order, and supplier tables",
      "Calculate Key Performance Indicators: CAC, LTV, AOV, and Gross Margin Return on Investment (GMROI)",
      "Build dynamic date range selectors and regional geographic filter maps",
      "Implement automated outlier detection highlighting abnormal inventory return rates",
    ],
    solutionApproach: [
      "Step 1: Ingest CSV and SQL dumps into structured PostgreSQL schemas",
      "Step 2: Compute retention cohorts and month-over-month revenue growth metrics",
      "Step 3: Build modular Plotly visualizations with brand-aligned color palettes",
      "Step 4: Package into a reactive Streamlit application with CSV/PDF export capability",
    ],
    relatedCourseId: "course-data-sciences",
  },
  {
    id: "proj-3",
    slug: "business-intelligence",
    title: "Executive Business Intelligence Platform",
    tag: "Executive Analytics",
    description:
      "Deliver high-impact KPI tracking systems, operational dashboards, and data-driven insights tailored for strategic leadership.",
    problemStatement:
      "Corporate leadership needs real-time visibility into quarterly revenue targets, product profit margins, and sales rep quota achievements across international branches. Construct an enterprise-grade Business Intelligence system that aggregates fragmented ERP and CRM feeds.",
    image: businessIntelligence,
    alt: "Business intelligence dashboard displayed on laptop",
    color: "cyan",
    difficulty: "Intermediate",
    estimatedHours: "20-25 hours",
    technologies: ["Power BI", "SQL", "DAX", "Data Modeling", "Excel Advanced"],
    expectedOutcome:
      "A published Power BI / web reporting model featuring star-schema architecture, dynamic drill-throughs, and automated executive email summaries.",
    skillsLearned: [
      "Star-schema and snowflake relational data modeling",
      "Advanced DAX formulas: Time Intelligence, CALCULATE, and conditional filters",
      "Role-level security (RLS) configuration for regional managers",
      "User-centric dashboard visual hierarchy and UX principles",
    ],
    requirements: [
      "Normalize messy transactional extracts into clean Fact and Dimension tables",
      "Create DAX measures for Year-to-Date (YTD) and Same-Period-Last-Year (SPLY) variances",
      "Design clean drill-down hierarchies from Global region to individual SKU items",
      "Configure Row-Level Security ensuring managers only inspect their designated territories",
    ],
    solutionApproach: [
      "Step 1: Extract, Transform, and Load (ETL) using Power Query",
      "Step 2: Define 1-to-many relationships and date tables in Data Model view",
      "Step 3: Author parameterized DAX measures for real-time KPI evaluations",
      "Step 4: Design executive layout adhering to cognitive load best practices",
    ],
    relatedCourseId: "course-data-sciences",
  },
  {
    id: "proj-4",
    slug: "full-stack-workstation",
    title: "Full-Stack EdTech Collaborative Platform",
    tag: "End-to-End Engineering",
    description:
      "Architect complete web applications from modern reactive user interfaces to scalable APIs and secure cloud-backed data layers.",
    problemStatement:
      "Design, build, and deploy a responsive learning platform featuring student authentication, course catalogs, interactive code exercises, progress tracking, and coupon-discounted checkout workflows.",
    image: fullStackDevelopment,
    alt: "Full-stack developer workstation with code editor",
    color: "navy",
    difficulty: "Advanced",
    estimatedHours: "35-45 hours",
    technologies: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    expectedOutcome:
      "A fully functional, responsive full-stack application deployed on cloud servers with JWT authentication, role-based dashboards, and interactive user state.",
    skillsLearned: [
      "Single-page application (SPA) architecture with React Router",
      "RESTful API design and controller-service-repository patterns",
      "JWT authentication and HTTP-only cookie security",
      "Responsive UI styling with modern utility classes",
      "Database schema indexing and optimistic concurrency",
    ],
    requirements: [
      "Develop responsive UI components matching high-fidelity design specifications",
      "Create authenticated routes for student profiles and course learning portals",
      "Implement client-side course search, filtering, and rating submission",
      "Build a simulated checkout flow validating coupon codes and tax calculation",
    ],
    solutionApproach: [
      "Step 1: Frontend UI scaffolding with Vite, React 19, and Tailwind CSS",
      "Step 2: Backend API modeling with Express, Prisma/Mongoose, and JWT tokens",
      "Step 3: State synchronization using Context API and custom hooks",
      "Step 4: End-to-end integration testing and production cloud deployment",
    ],
    relatedCourseId: "course-full-stack",
  },
  {
    id: "proj-5",
    slug: "cloud-devops-infra",
    title: "Cloud Infrastructure & Zero-Downtime Deployment",
    tag: "Cloud Infrastructure",
    description:
      "Design resilient cloud infrastructure, automated CI/CD deployment pipelines, and enterprise-grade container orchestration.",
    problemStatement:
      "A high-traffic e-commerce application experiences service outages and slow manual release cycles during peak promotional events. Build an automated Infrastructure-as-Code pipeline provisioning AWS VPCs, containerized Docker microservices, and Kubernetes auto-scaling.",
    image: cloudDevops,
    alt: "Cloud computing and DevOps server rack infrastructure",
    color: "orange",
    difficulty: "Advanced",
    estimatedHours: "28-35 hours",
    technologies: [
      "AWS",
      "Terraform",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Prometheus",
    ],
    expectedOutcome:
      "Reproducible Terraform blueprints provisioning a multi-AZ AWS cluster, managed by a continuous integration pipeline that automatically deploys tested containers upon git push.",
    skillsLearned: [
      "Declarative cloud provisioning with Terraform modules and remote S3 state",
      "Multi-stage Docker builds minimizing production image footprint",
      "Kubernetes Horizontal Pod Autoscalers (HPA) and ingress controllers",
      "GitHub Actions workflow automation with secrets management",
    ],
    requirements: [
      "Write Terraform scripts for VPC, public/private subnets, and security groups",
      "Containerize frontend and backend microservices using multi-stage Dockerfiles",
      "Configure Kubernetes deployment manifests with readiness and liveness probes",
      "Build a GitHub Actions workflow with automated unit testing and container scanning",
    ],
    solutionApproach: [
      "Step 1: Provision cloud infrastructure with Terraform apply",
      "Step 2: Optimize Docker containers and push to container registry",
      "Step 3: Deploy to Kubernetes with rolling update strategy",
      "Step 4: Verify auto-scaling under simulated traffic load using k6",
    ],
    relatedCourseId: "course-cloud-devops",
  },
  {
    id: "proj-6",
    slug: "automation-ai-flow",
    title: "Autonomous AI Agent & Workflow Orchestration",
    tag: "Intelligent Workflows",
    description:
      "Implement node-based process automation, workflow triggers, and autonomous AI agents to streamline mission-critical business systems.",
    problemStatement:
      "Support and operations teams spend over 40 hours weekly triaging user bug tickets, summarizing logs, and notifying on-call engineers. Build an autonomous multi-step AI workflow that reads incoming tickets, analyzes error severity via LLM function calling, and triggers automated remediation scripts.",
    image: automationAi,
    alt: "Modern automation workflow and AI agent pipelines",
    color: "indigo",
    difficulty: "Intermediate",
    estimatedHours: "22-28 hours",
    technologies: [
      "Python",
      "LangChain",
      "FastAPI",
      "Webhooks",
      "Redis",
      "Vector DB",
    ],
    expectedOutcome:
      "An automated agentic pipeline that triages incoming webhook events, categorizes incidents with zero human intervention, and posts resolution summaries.",
    skillsLearned: [
      "Asynchronous webhook receivers and event queues with Redis",
      "LLM Function Calling and JSON schema validation",
      "Cyclic agent decision loops and fallbacks",
      "Secure API integration with Slack, Jira, and GitHub webhooks",
    ],
    requirements: [
      "Create a webhook receiver ingesting structured error alerts",
      "Connect an LLM agent that inspects error logs against past incident knowledge bases",
      "Execute automated remediation actions through secure tool calls",
      "Generate an executive post-mortem summary document automatically",
    ],
    solutionApproach: [
      "Step 1: Build FastAPI webhook receiver and Redis message queue",
      "Step 2: Vectorize past incident post-mortems for semantic reference",
      "Step 3: Author agent decision prompt with structured tool definitions",
      "Step 4: Connect automated notification dispatchers with fallback mechanisms",
    ],
    relatedCourseId: "course-gen-ai",
  },
]
