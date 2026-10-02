import { Course } from "../types"
import skillFullStack from "../assets/skills/full-stack-dev.jpg"
import skillGenerativeAi from "../assets/skills/generative-ai.jpg"
import skillDataSciences from "../assets/skills/data-sciences.jpg"
import skillPython from "../assets/skills/python-programming.jpg"
import skillCybersecurity from "../assets/skills/cybersecurity.jpg"
import skillDigitalMarketing from "../assets/skills/digital-marketing.jpg"
import aiMachineLearning from "../assets/projects/ai-machine-learning.jpg"
import cloudDevops from "../assets/projects/cloud-devops.jpg"

export const coursesData: Course[] = [
  {
    id: "course-python-ds",
    slug: "python-data-science",
    title: "Python for Data Science & AI",
    subtitle:
      "Master core Python, data manipulation with Pandas, predictive modeling, and real-world analytics pipelines.",
    category: "Data Science",
    level: "Beginner",
    duration: "8 weeks",
    rating: 4.8,
    reviewCount: 428,
    studentCount: 2340,
    price: 4999,
    originalPrice: 8999,
    image: skillPython,
    icon: "cube",
    color: "navy",
    badgeText: "Best Seller",
    description:
      "A comprehensive, practical foundation in modern Python tailored for Data Science, Machine Learning, and enterprise data automation.",
    whatYouWillLearn: [
      "Python 3 syntax, functional idioms, and OOP architectures",
      "Vectorized operations and linear algebra with NumPy",
      "Tabular data wrangling, cleaning, and indexing with Pandas",
      "Interactive data storytelling using Matplotlib and Seaborn",
      "Building regression, classification, and clustering models with Scikit-learn",
      "Structuring clean data science repos and virtual environments",
    ],
    whoIsThisFor: [
      "Aspiring data scientists and business analysts",
      "Software developers looking to transition into data and machine learning",
      "College students preparing for data-centric technical interviews",
    ],
    prerequisites: [
      "Basic computer literacy",
      "High school mathematics (basic algebra and statistics)",
      "No prior coding experience required",
    ],
    learningOutcomes: [
      "Independently analyze messy real-world datasets with Python",
      "Deliver executive-ready charts and visual dashboards",
      "Train, tune, and evaluate machine learning models",
      "Build a portfolio of 3 deployable data science applications",
    ],
    modules: [
      {
        id: "mod-1",
        number: 1,
        title: "Python Fundamentals & Syntax",
        duration: "2h 30m",
        lessonCount: 8,
        lessons: [
          {
            id: "l1-1",
            title: "Variables, Primitive Types, and Operators",
            duration: "18m",
            isFreePreview: true,
          },
          {
            id: "l1-2",
            title: "Control Flow: If-Else, Loops, and Iterators",
            duration: "22m",
          },
          {
            id: "l1-3",
            title: "Data Structures: Lists, Tuples, Dictionaries, and Sets",
            duration: "25m",
          },
          {
            id: "l1-4",
            title: "Functions, Scope, and Lambda Expressions",
            duration: "20m",
          },
          {
            id: "l1-5",
            title: "Object-Oriented Programming: Classes & Objects",
            duration: "28m",
          },
          {
            id: "l1-6",
            title: "Exception Handling and Defensive Coding",
            duration: "16m",
          },
          { id: "l1-7", title: "File I/O and JSON Parsing", duration: "14m" },
          {
            id: "l1-8",
            title: "Module 1 Hands-On Code Challenge",
            duration: "7m",
          },
        ],
      },
      {
        id: "mod-2",
        number: 2,
        title: "NumPy & Pandas Data Wrangling",
        duration: "3h 15m",
        lessonCount: 6,
        lessons: [
          {
            id: "l2-1",
            title: "NumPy Arrays, Broadcasting, and Vectorization",
            duration: "32m",
            isFreePreview: true,
          },
          {
            id: "l2-2",
            title: "Pandas Series & DataFrames Anatomy",
            duration: "35m",
          },
          {
            id: "l2-3",
            title: "Handling Missing Values, Duplicates, and Outliers",
            duration: "28m",
          },
          {
            id: "l2-4",
            title: "Data Filtering, Grouping, and Aggregations",
            duration: "36m",
          },
          {
            id: "l2-5",
            title: "Merging, Joining, and Reshaping Datasets",
            duration: "34m",
          },
          {
            id: "l2-6",
            title: "Time Series Data Analysis with Pandas",
            duration: "30m",
          },
        ],
      },
      {
        id: "mod-3",
        number: 3,
        title: "Data Visualization & Exploratory Analysis",
        duration: "2h 45m",
        lessonCount: 5,
        lessons: [
          {
            id: "l3-1",
            title: "Principles of Effective Visual Storytelling",
            duration: "20m",
          },
          {
            id: "l3-2",
            title: "Matplotlib: Subplots, Aesthetics, and Custom Styles",
            duration: "35m",
          },
          {
            id: "l3-3",
            title: "Seaborn: Statistical Visualizations & Heatmaps",
            duration: "40m",
          },
          {
            id: "l3-4",
            title: "Plotly Interactive Visual Dashboards",
            duration: "42m",
          },
          {
            id: "l3-5",
            title: "EDA Guided Case Study on Real E-Commerce Data",
            duration: "28m",
          },
        ],
      },
      {
        id: "mod-4",
        number: 4,
        title: "Machine Learning with Scikit-learn",
        duration: "3h 40m",
        lessonCount: 7,
        lessons: [
          {
            id: "l4-1",
            title: "Supervised vs. Unsupervised Learning Overview",
            duration: "22m",
          },
          {
            id: "l4-2",
            title: "Feature Engineering & Preprocessing Pipelines",
            duration: "35m",
          },
          {
            id: "l4-3",
            title: "Linear & Logistic Regression Implementations",
            duration: "40m",
          },
          {
            id: "l4-4",
            title: "Decision Trees & Random Forests",
            duration: "38m",
          },
          {
            id: "l4-5",
            title: "Model Evaluation: Accuracy, Precision, Recall, and ROC",
            duration: "32m",
          },
          {
            id: "l4-6",
            title: "Cross-Validation and Hyperparameter Tuning",
            duration: "28m",
          },
          {
            id: "l4-7",
            title: "Clustering Algorithms: K-Means & Hierarchical",
            duration: "25m",
          },
        ],
      },
      {
        id: "mod-5",
        number: 5,
        title: "Production Deployment & Capstone",
        duration: "2h 10m",
        lessonCount: 4,
        lessons: [
          {
            id: "l5-1",
            title: "Exporting Models with Joblib & Pickle",
            duration: "22m",
          },
          {
            id: "l5-2",
            title: "Building a Lightweight Flask / FastAPI Prediction Endpoint",
            duration: "44m",
          },
          {
            id: "l5-3",
            title: "Streamlit Web App for Interactive Model Testing",
            duration: "40m",
          },
          {
            id: "l5-4",
            title: "Final Capstone Presentation & Defense Guidance",
            duration: "24m",
          },
        ],
      },
    ],
    projects: [
      {
        id: "proj-churn",
        projectId: "customer-churn",
        title: "Customer Churn Prediction Engine",
        problemStatement:
          "Build a machine learning pipeline that predicts whether a telecom customer is likely to cancel their subscription based on historical usage patterns, contract types, and support ticket history.",
        technologies: ["Python", "Pandas", "Scikit-Learn", "Seaborn"],
        difficulty: "Intermediate",
        expectedOutcome:
          "Trained classification model with >86% ROC-AUC score, feature importance plot, and risk scorecard dashboard.",
      },
      {
        id: "proj-sales",
        projectId: "sales-analytics",
        title: "Sales Analytics & Forecasting Dashboard",
        problemStatement:
          "Analyze 5 years of historical retail store sales data to discover revenue bottlenecks, seasonal spikes, and customer lifetime value patterns.",
        technologies: ["Python", "NumPy", "Plotly", "Streamlit"],
        difficulty: "Beginner",
        expectedOutcome:
          "Interactive web dashboard visualizing revenue trends with automated anomaly detection alerts.",
      },
    ],
  },
  {
    id: "course-gen-ai",
    slug: "generative-ai",
    title: "Applied Generative AI & LLM Systems",
    subtitle:
      "Design and implement production-ready LLM agents, retrieval-augmented generation (RAG), and multimodal applications.",
    category: "Artificial Intelligence",
    level: "Intermediate",
    duration: "10 weeks",
    rating: 4.9,
    reviewCount: 312,
    studentCount: 1890,
    price: 6499,
    originalPrice: 11999,
    image: skillGenerativeAi,
    icon: "brain",
    color: "purple",
    badgeText: "High Demand",
    description:
      "Go from prompt fundamentals to architecting enterprise RAG systems, LangChain/LlamaIndex agents, and fine-tuning open-source models.",
    whatYouWillLearn: [
      "Transformer architectures, attention mechanisms, and tokenization",
      "Vector embeddings, semantic search, and Vector DBs (Chroma, Pinecone)",
      "Building Production Retrieval-Augmented Generation (RAG) pipelines",
      "Autonomous AI Agents with tool calling and memory loops",
      "Evaluation techniques: Ragas metrics, latency, and hallucination reduction",
      "Deploying secure, cost-controlled LLM microservices with FastAPI",
    ],
    whoIsThisFor: [
      "Software engineers wanting to integrate generative AI into existing products",
      "Data scientists shifting from classical ML to deep learning & foundational models",
      "Technical architects designing intelligent enterprise workflows",
    ],
    prerequisites: [
      "Intermediate Python programming proficiency",
      "Basic understanding of APIs and HTTP requests",
      "Familiarity with basic vector math and matrix concepts",
    ],
    learningOutcomes: [
      "Architect a production-ready enterprise RAG pipeline over private documents",
      "Implement multi-agent autonomous decision workflows",
      "Manage prompt versioning, token caching, and rate limiting",
      "Deploy a verifiable generative AI portfolio capstone project",
    ],
    modules: [
      {
        id: "gmod-1",
        number: 1,
        title: "Foundations of Generative Models & LLMs",
        duration: "3h 00m",
        lessonCount: 6,
        lessons: [
          {
            id: "gl1-1",
            title: "Evolution of NLP: N-grams to Transformers",
            duration: "25m",
            isFreePreview: true,
          },
          {
            id: "gl1-2",
            title:
              "Self-Attention, Multi-Head Attention, and Positional Encodings",
            duration: "38m",
          },
          {
            id: "gl1-3",
            title:
              "Tokenization, Context Windows, and Temperature/Top-P Parameters",
            duration: "26m",
          },
          {
            id: "gl1-4",
            title:
              "Prompt Engineering Patterns: CoT, ReAct, and Few-Shot Prompting",
            duration: "32m",
          },
          {
            id: "gl1-5",
            title: "Structured Outputs and JSON Schema Enforcement",
            duration: "30m",
          },
          {
            id: "gl1-6",
            title: "Lab: Benchmarking Open vs. Proprietary Foundation Models",
            duration: "29m",
          },
        ],
      },
      {
        id: "gmod-2",
        number: 2,
        title: "Vector Embeddings & Semantic Search",
        duration: "3h 30m",
        lessonCount: 6,
        lessons: [
          {
            id: "gl2-1",
            title: "Mathematical Foundations of Vector Embeddings",
            duration: "30m",
          },
          {
            id: "gl2-2",
            title: "Cosine Similarity, Euclidean Distance, and Dot Product",
            duration: "24m",
          },
          {
            id: "gl2-3",
            title: "Document Ingestion, Chunking Strategies, and Overlaps",
            duration: "42m",
          },
          {
            id: "gl2-4",
            title: "Vector Databases: Chroma, FAISS, and Qdrant in Action",
            duration: "45m",
          },
          {
            id: "gl2-5",
            title:
              "Hybrid Search: Combining Dense Vectors and BM25 Sparse Search",
            duration: "35m",
          },
          {
            id: "gl2-6",
            title: "Lab: Semantic Search Engine over Corporate Technical Docs",
            duration: "34m",
          },
        ],
      },
      {
        id: "gmod-3",
        number: 3,
        title: "Production Retrieval-Augmented Generation (RAG)",
        duration: "4h 10m",
        lessonCount: 7,
        lessons: [
          {
            id: "gl3-1",
            title: "The Classical RAG Triad: Context, Query, and Response",
            duration: "28m",
          },
          {
            id: "gl3-2",
            title: "Advanced Chunking: Semantic and Hierarchical Parsing",
            duration: "36m",
          },
          {
            id: "gl3-3",
            title: "Rerankers: Improving Precision with Cross-Encoders",
            duration: "32m",
          },
          {
            id: "gl3-4",
            title:
              "Query Expansion and Hypothetical Document Embeddings (HyDE)",
            duration: "38m",
          },
          {
            id: "gl3-5",
            title:
              "Evaluating RAG Quality with Ragas (Faithfulness, Relevance)",
            duration: "42m",
          },
          {
            id: "gl3-6",
            title: "Handling Multi-Turn Conversations with Memory Stores",
            duration: "34m",
          },
          {
            id: "gl3-7",
            title: "Hands-On Lab: Multi-Document Policy QA Assistant",
            duration: "40m",
          },
        ],
      },
      {
        id: "gmod-4",
        number: 4,
        title: "Autonomous Agents & Tool Calling",
        duration: "3h 45m",
        lessonCount: 5,
        lessons: [
          {
            id: "gl4-1",
            title: "Autonomous Agent Architecture & Cognitive Loops",
            duration: "35m",
          },
          {
            id: "gl4-2",
            title: "Function Calling and External API Orchestration",
            duration: "44m",
          },
          {
            id: "gl4-3",
            title: "LangGraph: Cyclic State Machines for Complex Agents",
            duration: "52m",
          },
          {
            id: "gl4-4",
            title: "Human-in-the-Loop Safeguards & Guardrails AI",
            duration: "34m",
          },
          {
            id: "gl4-5",
            title: "Building a Self-Reflective Code Generation Agent",
            duration: "40m",
          },
        ],
      },
    ],
    projects: [
      {
        id: "proj-rag-kb",
        projectId: "rag-knowledge-base",
        title: "Enterprise Knowledge Base RAG Assistant",
        problemStatement:
          "Develop a secure RAG chatbot that indexes 500+ pages of technical company policies, performs semantic search, and provides verifiable cited answers with zero hallucinations.",
        technologies: ["Python", "LangChain", "ChromaDB", "FastAPI", "React"],
        difficulty: "Advanced",
        expectedOutcome:
          "Full-stack AI assistant with streaming answers, citation highlights, and real-time hallucination evaluation.",
      },
    ],
  },
  {
    id: "course-full-stack",
    slug: "full-stack-web-dev",
    title: "Full-Stack Web Development (React & Node.js)",
    subtitle:
      "Architect scalable, responsive web applications from modern reactive frontends to high-throughput backend APIs.",
    category: "Full-Stack Development",
    level: "All levels",
    duration: "12 weeks",
    rating: 4.8,
    reviewCount: 540,
    studentCount: 3120,
    price: 5499,
    originalPrice: 9999,
    image: skillFullStack,
    icon: "code",
    color: "blue",
    badgeText: "Career Track",
    description:
      "A complete roadmap covering modern HTML5/CSS3, TypeScript, React 19, Tailwind CSS, Node.js, Express, MongoDB, and cloud deployment.",
    whatYouWillLearn: [
      "Modern TypeScript, DOM manipulation, and asynchronous JavaScript",
      "React 19 architecture: Hooks, context, state management, and routing",
      "Tailwind CSS v4 for pixel-perfect, responsive UI design",
      "RESTful API design and authentication with JWT & bcrypt",
      "MongoDB & PostgreSQL database modeling and migrations",
      "CI/CD pipelines, Docker containerization, and cloud deployment",
    ],
    whoIsThisFor: [
      "Beginners wanting to launch a high-paying software engineering career",
      "Frontend developers looking to master full-stack and backend systems",
      "Students preparing for coding bootcamps and enterprise tech roles",
    ],
    prerequisites: [
      "Basic understanding of how the web works",
      "A computer with a modern browser and internet connection",
    ],
    learningOutcomes: [
      "Build production-grade web applications from scratch",
      "Implement secure authentication, role-based authorization, and payment flows",
      "Deploy dockerized applications to cloud platforms with CI/CD",
      "Demonstrate 4 complete full-stack projects in portfolio",
    ],
    modules: [
      {
        id: "fs-1",
        number: 1,
        title: "Modern Frontend Foundations & TypeScript",
        duration: "3h 20m",
        lessonCount: 6,
        lessons: [
          {
            id: "fsl1-1",
            title: "HTML5 Semantic Web & Accessibility (a11y)",
            duration: "25m",
            isFreePreview: true,
          },
          {
            id: "fsl1-2",
            title: "Tailwind CSS Architecture & Modern Layouts",
            duration: "35m",
          },
          {
            id: "fsl1-3",
            title: "ES6+ JavaScript: Promises, Async/Await, and Modules",
            duration: "32m",
          },
          {
            id: "fsl1-4",
            title: "TypeScript Core: Types, Interfaces, and Generics",
            duration: "38m",
          },
          {
            id: "fsl1-5",
            title: "DOM Manipulation and Event-Driven Architectures",
            duration: "30m",
          },
          {
            id: "fsl1-6",
            title: "Lab: Building an Interactive Portfolio Dashboard",
            duration: "40m",
          },
        ],
      },
      {
        id: "fs-2",
        number: 2,
        title: "React 19 Deep Dive",
        duration: "4h 30m",
        lessonCount: 8,
        lessons: [
          {
            id: "fsl2-1",
            title: "React Core Concepts: Virtual DOM & JSX",
            duration: "28m",
            isFreePreview: true,
          },
          {
            id: "fsl2-2",
            title: "State Management: useState, useReducer, and Custom Hooks",
            duration: "42m",
          },
          {
            id: "fsl2-3",
            title: "Component Lifecycle & useEffect Mastery",
            duration: "36m",
          },
          {
            id: "fsl2-4",
            title: "React Router v7: Multi-Page Architectures & Loaders",
            duration: "35m",
          },
          {
            id: "fsl2-5",
            title: "Context API & Global State Optimization",
            duration: "30m",
          },
          {
            id: "fsl2-6",
            title: "Optimistic UI Updates and React 19 Actions",
            duration: "32m",
          },
          {
            id: "fsl2-7",
            title: "Performance: useMemo, useCallback, and Code Splitting",
            duration: "35m",
          },
          {
            id: "fsl2-8",
            title: "Lab: E-Commerce Catalog with Real-Time Filtering",
            duration: "32m",
          },
        ],
      },
      {
        id: "fs-3",
        number: 3,
        title: "Backend Engineering with Node.js & Express",
        duration: "4h 00m",
        lessonCount: 7,
        lessons: [
          {
            id: "fsl3-1",
            title: "Node.js Event Loop and Non-Blocking I/O",
            duration: "30m",
          },
          {
            id: "fsl3-2",
            title: "Building Scalable Express REST APIs",
            duration: "38m",
          },
          {
            id: "fsl3-3",
            title: "Middleware Architecture: Logging, CORS, and Rate Limiting",
            duration: "32m",
          },
          {
            id: "fsl3-4",
            title: "Authentication: JWT, Refresh Tokens, and Password Hashing",
            duration: "45m",
          },
          {
            id: "fsl3-5",
            title: "Database Modeling with MongoDB & Mongoose",
            duration: "40m",
          },
          {
            id: "fsl3-6",
            title: "Relational Queries with PostgreSQL & Prisma ORM",
            duration: "35m",
          },
          {
            id: "fsl3-7",
            title: "Error Handling and Centralized Logging",
            duration: "20m",
          },
        ],
      },
    ],
    projects: [
      {
        id: "proj-saas",
        projectId: "full-stack-workstation",
        title: "Full-Stack EdTech Learning Portal",
        problemStatement:
          "Design and develop a complete multi-tier educational platform with student enrollment, course progress tracking, interactive quiz engine, and secure payment processing.",
        technologies: [
          "React",
          "TypeScript",
          "Node.js",
          "Express",
          "MongoDB",
          "Tailwind CSS",
        ],
        difficulty: "Advanced",
        expectedOutcome:
          "Live deployed responsive web application with authenticated role-based dashboards.",
      },
    ],
  },
  {
    id: "course-cloud-devops",
    slug: "cloud-devops",
    title: "Cloud Engineering & DevOps Infrastructure",
    subtitle:
      "Design resilient cloud infrastructure, automated CI/CD deployment pipelines, and enterprise-grade container orchestration.",
    category: "Cloud & DevOps",
    level: "Intermediate",
    duration: "9 weeks",
    rating: 4.7,
    reviewCount: 218,
    studentCount: 1450,
    price: 5999,
    originalPrice: 10999,
    image: cloudDevops,
    icon: "cloud",
    color: "orange",
    badgeText: "Enterprise Ready",
    description:
      "Master cloud architecture fundamentals on AWS, infrastructure-as-code with Terraform, Docker containers, Kubernetes, and automated GitHub Actions pipelines.",
    whatYouWillLearn: [
      "Core AWS infrastructure: EC2, VPC, S3, RDS, IAM, and CloudWatch",
      "Containerizing multi-service microservices with Docker & Compose",
      "Kubernetes orchestration: Pods, Deployments, Services, and Ingress",
      "Infrastructure as Code (IaC) using Terraform",
      "Building automated CI/CD pipelines with GitHub Actions",
      "Cloud security, compliance, and disaster recovery strategies",
    ],
    whoIsThisFor: [
      "System administrators and developers looking to transition into DevOps",
      "Cloud architects wanting hands-on infrastructure-as-code experience",
      "Engineers preparing for AWS Certified Solutions Architect exams",
    ],
    prerequisites: [
      "Basic Linux CLI and bash scripting skills",
      "Basic understanding of networking (IP, DNS, ports, HTTP)",
    ],
    learningOutcomes: [
      "Deploy fault-tolerant multi-region web applications on AWS",
      "Automate zero-downtime rolling updates with Kubernetes",
      "Provision reproducible cloud environments with Terraform",
    ],
    modules: [
      {
        id: "cd-1",
        number: 1,
        title: "Linux & AWS Core Infrastructure",
        duration: "3h 10m",
        lessonCount: 6,
        lessons: [
          {
            id: "cdl1-1",
            title: "Linux SysAdmin Essentials for Cloud Engineers",
            duration: "28m",
            isFreePreview: true,
          },
          {
            id: "cdl1-2",
            title: "AWS IAM: Policies, Roles, and Least Privilege",
            duration: "32m",
          },
          {
            id: "cdl1-3",
            title: "Networking on AWS: VPCs, Subnets, and Gateways",
            duration: "40m",
          },
          {
            id: "cdl1-4",
            title: "EC2 Auto Scaling and Elastic Load Balancing",
            duration: "34m",
          },
          {
            id: "cdl1-5",
            title: "S3 Storage Classes and Managed Databases (RDS)",
            duration: "30m",
          },
          {
            id: "cdl1-6",
            title: "Lab: Highly Available Multi-AZ Architecture Setup",
            duration: "26m",
          },
        ],
      },
      {
        id: "cd-2",
        number: 2,
        title: "Containers & Kubernetes Orchestration",
        duration: "4h 00m",
        lessonCount: 6,
        lessons: [
          {
            id: "cdl2-1",
            title: "Docker Deep Dive: Image Layers and Multi-Stage Builds",
            duration: "35m",
          },
          {
            id: "cdl2-2",
            title: "Docker Compose for Local Microservices Development",
            duration: "30m",
          },
          {
            id: "cdl2-3",
            title: "Kubernetes Core Architecture: Master & Node Components",
            duration: "42m",
          },
          {
            id: "cdl2-4",
            title: "Deployments, ConfigMaps, Secrets, and Health Probes",
            duration: "48m",
          },
          {
            id: "cdl2-5",
            title: "Ingress Controllers and TLS Certificate Automation",
            duration: "35m",
          },
          {
            id: "cdl2-6",
            title: "Hands-on Lab: Deploying Microservices on Amazon EKS",
            duration: "30m",
          },
        ],
      },
    ],
    projects: [
      {
        id: "proj-cicd",
        projectId: "cloud-devops-infra",
        title: "Automated Enterprise CI/CD & K8s Pipeline",
        problemStatement:
          "Design a zero-downtime deployment pipeline that triggers automated test suites, builds multi-platform Docker images, pushes to Amazon ECR, and deploys to an EKS Kubernetes cluster using Helm charts.",
        technologies: [
          "Docker",
          "Kubernetes",
          "AWS EKS",
          "Terraform",
          "GitHub Actions",
        ],
        difficulty: "Advanced",
        expectedOutcome:
          "Production-grade automated pipeline with automated rollbacks on health check failures.",
      },
    ],
  },
  {
    id: "course-data-sciences",
    slug: "data-sciences",
    title: "Data Science & Advanced Analytics",
    subtitle:
      "Turn high-dimensional data into decisive business value through statistical modeling, feature pipelines, and predictive algorithms.",
    category: "Data Science",
    level: "Intermediate",
    duration: "10 weeks",
    rating: 4.8,
    reviewCount: 389,
    studentCount: 2150,
    price: 5299,
    originalPrice: 9499,
    image: skillDataSciences,
    icon: "chart",
    color: "cyan",
    badgeText: "High Rating",
    description:
      "Dive into hypothesis testing, statistical inference, feature selection, time-series forecasting, and unsupervised machine learning algorithms.",
    whatYouWillLearn: [
      "Probability distributions, statistical hypothesis testing, and A/B test design",
      "Advanced Pandas: Window functions, pivoting, and vectorized performance",
      "Dimensionality reduction using PCA and t-SNE",
      "Ensemble learning: XGBoost, LightGBM, and CatBoost",
      "Time-series modeling with ARIMA and Prophet",
      "Creating interactive enterprise decision dashboards",
    ],
    whoIsThisFor: [
      "Analysts wanting to transition from spreadsheet reporting to predictive modeling",
      "Software developers looking to add quantitative data chops",
      "Stem graduates preparing for corporate Data Science roles",
    ],
    prerequisites: [
      "Fundamental Python experience",
      "Basic understanding of statistics and calculus",
    ],
    learningOutcomes: [
      "Formulate and test data-driven hypotheses for business decisions",
      "Engineer predictive ML models with industry-standard gradient boosting",
      "Design clean A/B test experiments with statistical power analysis",
    ],
    modules: [
      {
        id: "ds-1",
        number: 1,
        title: "Applied Business Statistics & A/B Testing",
        duration: "3h 15m",
        lessonCount: 6,
        lessons: [
          {
            id: "dsl1-1",
            title: "Probability & Probability Distributions in Real Life",
            duration: "25m",
            isFreePreview: true,
          },
          {
            id: "dsl1-2",
            title: "Central Limit Theorem and Confidence Intervals",
            duration: "30m",
          },
          {
            id: "dsl1-3",
            title: "Parametric vs. Non-Parametric Hypothesis Tests",
            duration: "35m",
          },
          {
            id: "dsl1-4",
            title: "Designing Robust A/B Tests: Sample Size & Power",
            duration: "40m",
          },
          {
            id: "dsl1-5",
            title: "Avoiding Common Pitfalls: P-Hacking and Multiple Testing",
            duration: "32m",
          },
          {
            id: "dsl1-6",
            title: "Case Study: Landing Page Conversion Optimization",
            duration: "33m",
          },
        ],
      },
    ],
    projects: [
      {
        id: "proj-ab-test",
        projectId: "data-analytics-vis",
        title: "End-to-End E-Commerce A/B Experimentation Engine",
        problemStatement:
          "Analyze clickstream logs from 100,000+ customer sessions to determine the revenue uplift of a new checkout UX using Bayesian and Frequentist hypothesis frameworks.",
        technologies: ["Python", "SciPy", "Statsmodels", "Seaborn"],
        difficulty: "Intermediate",
        expectedOutcome:
          "Interactive statistical report with confidence bounds and automated decision recommendations.",
      },
    ],
  },
  {
    id: "course-cybersecurity",
    slug: "cybersecurity-defense",
    title: "Cybersecurity & Defensive Operations",
    subtitle:
      "Explore digital security fundamentals, vulnerability assessment, threat intelligence, and modern defensive system hardening.",
    category: "Technology",
    level: "Beginner",
    duration: "8 weeks",
    rating: 4.7,
    reviewCount: 195,
    studentCount: 1670,
    price: 4799,
    originalPrice: 8499,
    image: skillCybersecurity,
    icon: "shield",
    color: "orange",
    badgeText: "Shield Core",
    description:
      "Backed by the safety-first heritage of Shield Group, understand threat vectors, cryptography, network security, and practical defense.",
    whatYouWillLearn: [
      "Security principles: Confidentiality, Integrity, Availability (CIA triad)",
      "TCP/IP network analysis and packet inspection with Wireshark",
      "Symmetric and asymmetric cryptography, hashing, and PKI",
      "Web application vulnerabilities: OWASP Top 10 hands-on analysis",
      "System hardening, firewalls, and incident response fundamentals",
    ],
    whoIsThisFor: [
      "IT professionals seeking to specialize in cyber defense",
      "Developers wanting to write secure code and protect user data",
      "Students preparing for Security+ and defensive security certifications",
    ],
    prerequisites: [
      "Basic understanding of operating systems and networking",
      "Comfort with command-line interfaces",
    ],
    learningOutcomes: [
      "Audit networks and identify unpatched security vulnerabilities",
      "Mitigate common OWASP web exploits such as SQL Injection & XSS",
      "Construct actionable incident response playbooks for security operations",
    ],
    modules: [
      {
        id: "cs-1",
        number: 1,
        title: "Security Principles & Network Defense",
        duration: "2h 50m",
        lessonCount: 5,
        lessons: [
          {
            id: "csl1-1",
            title: "The Modern Threat Landscape and Threat Actors",
            duration: "22m",
            isFreePreview: true,
          },
          {
            id: "csl1-2",
            title: "Network Protocols and Packet Capture with Wireshark",
            duration: "40m",
          },
          {
            id: "csl1-3",
            title: "Port Scanning and Reconnaissance Defense with Nmap",
            duration: "34m",
          },
          {
            id: "csl1-4",
            title: "Firewalls, IDS/IPS, and Network Segmentation",
            duration: "38m",
          },
          {
            id: "csl1-5",
            title: "Hands-on Lab: Analyzing a Simulated DDoS Attack",
            duration: "36m",
          },
        ],
      },
    ],
    projects: [
      {
        id: "proj-audit",
        projectId: "security-audit",
        title: "Web Application Vulnerability Assessment",
        problemStatement:
          "Perform a structured penetration test against a simulated corporate portal, identify critical OWASP vulnerabilities, and write an executive remediation report.",
        technologies: ["Wireshark", "Burp Suite", "OWASP ZAP", "Linux"],
        difficulty: "Intermediate",
        expectedOutcome:
          "Comprehensive security audit report with proof-of-concept exploits and defensive patches.",
      },
    ],
  },
  {
    id: "course-digital-marketing",
    slug: "digital-marketing-analytics",
    title: "Digital Marketing & Growth Analytics",
    subtitle:
      "Create measurable, high-ROI acquisition campaigns using performance marketing, SEO, and full-funnel analytics.",
    category: "Career & Interview Preparation",
    level: "All levels",
    duration: "6 weeks",
    rating: 4.6,
    reviewCount: 280,
    studentCount: 1980,
    price: 3999,
    originalPrice: 6999,
    image: skillDigitalMarketing,
    icon: "target",
    color: "indigo",
    badgeText: "High Impact",
    description:
      "Bridge marketing creativity with quantitative analytics. Learn search engine marketing, social ad optimization, and customer lifetime value.",
    whatYouWillLearn: [
      "Technical SEO, keyword research, and search algorithm mechanics",
      "Paid advertising: Google Ads, Meta Ads Manager, and bidding strategies",
      "Conversion Rate Optimization (CRO) and user journey mapping",
      "Web analytics with Google Analytics 4 (GA4) and Google Tag Manager",
      "Automating campaign reports using Google Looker Studio",
    ],
    whoIsThisFor: [
      "Marketers wanting to become data-driven performance experts",
      "Entrepreneurs and founders growing online businesses",
      "Career switchers entering digital growth and brand strategy",
    ],
    prerequisites: ["No prior marketing or coding experience required"],
    learningOutcomes: [
      "Launch and optimize profitable multi-channel ad campaigns",
      "Set up custom event tracking and conversion funnels in GA4",
      "Produce executive analytics dashboards showing marketing ROI",
    ],
    modules: [
      {
        id: "dm-1",
        number: 1,
        title: "Growth Strategy & Performance Marketing",
        duration: "2h 40m",
        lessonCount: 5,
        lessons: [
          {
            id: "dml1-1",
            title: "The Pirate Funnel: AARRR Framework Explained",
            duration: "25m",
            isFreePreview: true,
          },
          {
            id: "dml1-2",
            title: "Audience Targeting and Value Proposition Design",
            duration: "30m",
          },
          {
            id: "dml1-3",
            title: "Google Ads Architecture: Search vs. Performance Max",
            duration: "38m",
          },
          {
            id: "dml1-4",
            title: "Meta Ads Optimization: Creative Fatigue and Bidding",
            duration: "35m",
          },
          {
            id: "dml1-5",
            title: "Lab: Designing an Omnichannel Growth Campaign",
            duration: "32m",
          },
        ],
      },
    ],
    projects: [
      {
        id: "proj-growth",
        projectId: "growth-campaign",
        title: "Multi-Channel Growth Campaign & ROI Dashboard",
        problemStatement:
          "Plan, launch, and measure an acquisition strategy for a SaaS launch, setting up UTM tracking, GA4 conversion funnels, and executive ROI reports.",
        technologies: ["GA4", "Looker Studio", "Meta Ads", "Google Ads"],
        difficulty: "Beginner",
        expectedOutcome:
          "Live Looker Studio dashboard tracking CAC, LTV, ROAS, and conversion funnel drop-offs.",
      },
    ],
  },
  {
    id: "course-ml-algorithms",
    slug: "machine-learning-engineering",
    title: "Machine Learning Engineering & MLOps",
    subtitle:
      "Build, evaluate, package, and monitor machine learning models in production cloud environments.",
    category: "Machine Learning",
    level: "Advanced",
    duration: "10 weeks",
    rating: 4.9,
    reviewCount: 260,
    studentCount: 1530,
    price: 6999,
    originalPrice: 12999,
    image: aiMachineLearning,
    icon: "brain",
    color: "purple",
    badgeText: "Advanced",
    description:
      "Move beyond static Jupyter notebooks into building scalable, automated ML pipelines with MLflow, Docker, FastAPI, and model drift monitoring.",
    whatYouWillLearn: [
      "Deep understanding of optimization: Gradient Descent, Adam, Loss functions",
      "Feature stores, data versioning with DVC, and experiment tracking with MLflow",
      "Serving models with low latency via FastAPI, ONNX, and Triton",
      "Continuous Training (CT) and automated evaluation pipelines",
      "Detecting data drift, concept drift, and model performance degradation",
    ],
    whoIsThisFor: [
      "Data scientists wanting to master production deployment and MLOps",
      "Backend engineers scaling AI/ML services in enterprise clusters",
    ],
    prerequisites: [
      "Strong Python knowledge and Scikit-learn experience",
      "Familiarity with Docker and basic cloud concepts",
    ],
    learningOutcomes: [
      "Build automated CI/CD/CT pipelines for machine learning",
      "Deploy scalable REST and gRPC model endpoints",
      "Monitor production models with Prometheus and Grafana",
    ],
    modules: [
      {
        id: "mlo-1",
        number: 1,
        title: "From Notebooks to Production Code",
        duration: "3h 10m",
        lessonCount: 5,
        lessons: [
          {
            id: "mlol1-1",
            title: "Why Most ML Models Never Reach Production",
            duration: "24m",
            isFreePreview: true,
          },
          {
            id: "mlol1-2",
            title: "Modular Code Architecture for Data Pipelines",
            duration: "36m",
          },
          {
            id: "mlol1-3",
            title: "Configuration Management with Hydra and Pydantic",
            duration: "32m",
          },
          {
            id: "mlol1-4",
            title: "Data Validation at Scale with Great Expectations",
            duration: "42m",
          },
          {
            id: "mlol1-5",
            title: "Lab: Converting a Messy Notebook into a Clean Package",
            duration: "46m",
          },
        ],
      },
    ],
    projects: [
      {
        id: "proj-mlops",
        projectId: "mlops-pipeline",
        title: "End-to-End MLOps Pipeline with Automated Retraining",
        problemStatement:
          "Construct a production ML pipeline that monitors incoming streaming data for feature drift, triggers automated retraining when accuracy drops below threshold, and deploys model artifacts with zero downtime.",
        technologies: ["Python", "MLflow", "Docker", "FastAPI", "Prometheus"],
        difficulty: "Advanced",
        expectedOutcome:
          "Deployed automated model monitoring system with drift alerts and rolling updates.",
      },
    ],
  },
]

export const courseCategories = [
  "All",
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Data Analytics",
  "Full-Stack Development",
  "Cloud & DevOps",
  "Programming",
  "Career & Interview Preparation",
]
