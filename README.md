# Shield Skill Hub — Interactive EdTech Career Ecosystem

> **Powered by Shield Group**  
> *Transforming career discovery, academic degrees, and high-impact industry specializations through an interactive, story-driven learning platform.*

---

## 🌟 Executive Overview & Purpose

**Shield Skill Hub** is a next-generation EdTech platform built to bridge the critical divide between conventional academic curricula and modern enterprise engineering workflows. 

Traditional college education often leaves students facing **"The Fresher Paradox"**:
> *“You cannot get a job without practical experience, and you cannot gain practical experience without a job.”*

Most EdTech platforms exacerbate this issue with passive video courses, trivial tutorials without testing or CI/CD pipelines, and unverifiable claims that fall apart in technical interviews.

**Shield Skill Hub solves this fundamental problem through a structured, multi-dimensional ecosystem:**
1. **Degree-to-Domain Mapping**: Helping students from diverse degree backgrounds (AI & ML, CSE, IT, ECE, EEE, MECH, CIVIL, B.Com, Food Safety, Life Sciences) immediately locate their high-impact industry specializations.
2. **Accredited Co-Delivery Alliances**: Direct curricular and laboratory integration with global industry leaders (including *Wipro 3D*, *Rockwell Automation*, *Saint-Gobain*, *ISHRAE*, *Stockathon Academy*, and *Academic / University Seals*).
3. **Production-Grade Capstone Engineering**: Replacing toy tutorials with real-world project statements featuring microservices, CI/CD, telemetry, and cloud deployments.
4. **Verifiable Blockchain Credentials**: Authentic, employer-verifiable completion certificates anchored via **ChainTrail**.
5. **Corporate Launchpad**: Direct pipelines into industrial internships, faculty development programs, and enterprise roles.

---

## 🎨 Visual Design Language & Aesthetic

Shield Skill Hub abandons generic corporate templates in favor of a bespoke **Vintage Comic-Book + Mid-Century Editorial + Retro Luxury Workspace** aesthetic:

- **Tactile Editorial Layout**: Stamped ink borders (`2.5px solid #172525`), tactile offset drop-shadows (`4px 4px 0 #172525` and `6px 6px 0 #172525`), halftone dot textures, and paper grain overlays.
- **Narrative Storytelling**: Structured like an unfolding graphic novel where the student journeys through Chapters 01 to 07, progressing from uncertainty to domain mastery.
- **Strict Brand Color Palette**:
  | Token | Hex Value | Semantic Role |
  | :--- | :--- | :--- |
  | **Deep Navy / Teal 1** | `#0D4545` | Primary brand background, chapter badges, hero gradient |
  | **Teal 2** | `#183F3F` | Dark panels, partner card backgrounds, alternating ring tracks |
  | **Teal 3** | `#115B5B` | Interactive hover states, active partner sectors |
  | **Electric / Forest** | `#247A62` | Secondary accent highlights, status badges |
  | **Sky / Mint** | `#39A66A` | Positive signals, active indicators |
  | **Gold Accent** | `#F5B82E` | Key interactive buttons, glowing connectors, active roulette pointers |
  | **Vintage Ink** | `#172525` | Hard outlines, borders, primary high-contrast typography |
  | **Muted Slate** | `#536363` | Subtitles, secondary descriptions, meta text |
  | **Warm Cream** | `#FAF8F3` / `#F4EFE6` | Parchment background canvas, card surfaces, hub ceramic texture |
  | **Soft Border** | `#DBE7E4` | Subtle borders, inner dividers, tag borders |

---

## 🧭 The 7-Chapter Narrative Journey (Home Page)

The homepage functions as an episodic career journey guiding students through seven distinct chapters:

### Chapter 01: The Starting Point (Hero + 3D Interactive Laptop)
- Interactive **3D Floating Laptop** visual (`HeroVisual.tsx`) that gently levitates and performs fluid perspective tilts in response to cursor movement.
- Real-time animated counters, value propositions, and direct entry points to exploring the ecosystem.

### Chapter 02: The Fresher Paradox (The Crossroads Dilemma)
- Comic-strip styled juxtaposition comparing outdated university syllabus friction against Shield Skill Hub's placement acceleration tracks.
- Interactive Crossroads Compass focusing student intent toward the master blueprint.

### Chapter 03: Find Your Domain (The Concentric Roulette Career Wheel)
- **Flagship Component** (`SkillHubFlowchart.tsx` & `SkillHubFlowchart.css`): A casino-grade, dual-rotor concentric career wheel reproducing the mentor architecture diagram.
- Complete semicircle visibility across all desktop viewports with slow, continuous rotational inertia and spring snapping.
- Synchronized editorial detail cards connected via a glowing dynamic gold bridge.
- Integrated **FIND MY PATH** wizard (`FindMyPathModal.tsx`) providing tailored recommendations based on degree branch and career interests.

### Chapter 04: Build Your Skills (Curriculum Showcase)
- Interactive 3D tilt cards detailing practical syllabi across modern software development, data intelligence, AI/ML, and cloud engineering.

### Chapter 05: Build Something Real (Project Problem Statements)
- Production-grade capstones requiring real testing, CI/CD, and deployment metrics, backed by ChainTrail verifiable certificates.

### Chapter 06: Institutional & Academic Ecosystem
- Specialized tracks for universities, colleges, and academic institutions, including COE (Center of Excellence) setups and faculty enablement.

### Chapter 07: Career Launchpad & Internships
- Direct industrial internship pathways with corporate mentors, resume audits, and mock interview preparation.

---

## 🎡 Deep-Dive: Chapter 03 Concentric Roulette Wheel

The Chapter 03 wheel is engineered with precision geometry and physics:

```
                                  [OUTER WHEEL RIM: r = 463px]
                               +--------------------------------+
                             /   ZONE 3: OUTER ALLIANCE RING      \
                           /       (6 Industry Partners, 60° ea)    \
                         /     +----------------------------+         \
                       /     /   ZONE 2: MIDDLE COURSE RING   \         \
                      |     |     (9 Career Tracks, 40° ea)    |         |
                      |     |   +------------------------+     |         |
                      |     |  | DEDICATED GROUP-BAND    |     |         |
                      |     |  |  (Emerging vs Non-Tech) |     |         |
                      |     |  |  +--------------------+ |     |         |  ===> [3 O'CLOCK ACTIVE SLOT]
                      |     |  |  | ZONE 1: FIXED HUB  | |     |         |       Gold Bracket & Flapper
                      |     |  |  | (Logo, r = 120px)  | |     |         |       Directs to Detail Cards
                      |     |  |  +--------------------+ |     |         |
                      |     |  +------------------------+      |         |
                       \     \                                /         /
                         \     +----------------------------+         /
                           \                                        /
                             +------------------------------------+
```

### 1. Three Concentric Structural Zones
- **Zone 1: Inner Ceramic Hub ($r = 120\text{px}$)**:
  - Fixed, non-rotating ceramic disc featuring the Shield Skill Hub emblem, upright brand typography, and gold accent badge (`SPIN TO EXPLORE ↺`).
  - Anchored with a $32\text{px}$ left breathing margin so the complete hub is always $100\%$ visible.
- **Dedicated Group-Label Band ($r = 127\text{px} \rightarrow 155\text{px}$)**:
  - Insulated circular sector track housing curved SVG `<textPath>` labels (`✦ EMERGING TECH ✦` and `✦ NON TECH ✦`).
  - Separates category titles from course segment text to guarantee zero text intersection.
- **Zone 2: Middle Course Ring ($r = 162\text{px} \rightarrow 310\text{px}$)**:
  - 9 radial sectors ($40^\circ$ each) representing the 9 career pathways.
  - Three-tier layout per segment: Inner editorial numeral (`01`–`09`), center 2-line title wrap, and outer status dot.
  - **Dynamic $180^\circ$ Text Flipping**: Labels in the left semicircle ($90^\circ < \theta_{\text{vis}} < 270^\circ$) dynamically flip around local centers, eliminating upside-down text. At 3 o'clock ($0^\circ$), text is perfectly horizontal and reads left-to-right.
- **Zone 3: Outer Partner Ring ($r = 317\text{px} \rightarrow 455\text{px}$)**:
  - 6 radial sectors ($60^\circ$ each) housing accredited corporate partners.
  - Raised circular vector emblem tile ($r=345\text{px}$) followed by partner name running outward ($r=370\text{px} \rightarrow 442\text{px}$).
- **Outer Rim & Active Pointer ($r = 463\text{px}$)**:
  - Vintage coin-edge tick marks and drop shadow.
  - SVG active-slot bracket spanning middle and outer rings at 3 o'clock ($0^\circ$) with an inward-pointing gold notch and animated flapper needle that flicks on segment transitions.

### 2. Casino-Roulette Physics Engine
- **Opposite Counter-Rotation (`REVERSE_OUTER_RING: true`)**: Input impulses cause Middle Ring and Outer Ring to rotate in opposite directions simultaneously, creating a dual-rotor roulette feel.
- **Normalized Input Sensitivity**: Mouse wheel delta is normalized and clamped to $\pm 60$. One mouse-wheel notch rotates $\approx 8^\circ$ on the middle ring and $\approx 12^\circ$ on the outer ring.
- **Capped Angular Velocity**: Middle ring velocity is clamped to $\le 60^\circ/\text{s}$; outer ring is clamped to $\le 45^\circ/\text{s}$. Rapid scrolling never spins out of control.
- **Heavy Wheel Coasting**: Exponential decay with a half-life of $t_{1/2} = 600\text{ms}$ (`decay = Math.pow(0.5, dt / 0.60)`).
- **Critically Damped Spring Snap**: Settle time $\sim 700\text{ms}$ ($K = 22, D = 8.5$, damping ratio $\zeta = 0.894$) with maximum overshoot $\le 1.5^\circ$.
- **Eased Button & Keyboard Stepping**: Previous/Next buttons and arrow keys step exactly 1 segment eased over $\sim 900\text{ms}$ ($K = 14, D = 7.0$).
- **1:1 Touch & Drag**: Pointer drag calculates angular movement via `Math.atan2(dy, dx)` with release velocity carry-over.
- **No Page Scroll Hijacking**: Non-passive wheel event listener captures events *only* when the pointer is hovering directly over the interactive rings ($r \in [120\text{px}, 488\text{px}]$). Outside this region, natural page scrolling is untouched.
- **Idle Auto-Advance**:
  - After $4\text{s}$ of user inactivity, Middle Ring auto-advances by 1 segment.
  - $3\text{s}$ later, Outer Ring auto-advances by 1 segment.
  - Repeats on a $6\text{s}$ cycle; immediately pauses on hover, keyboard focus, drag, touch, or tab visibility change (`document.hidden`).
- **Reduced Motion Support**: When `prefers-reduced-motion: reduce` is detected, animations, coasting, and auto-advance are disabled, with instant snapping and smooth card cross-fades.

### 3. Dynamic Full-Semicircle Fitting
The wheel uses an explicit mathematical formula to fit the complete right-facing arc between the header and bottom padding without clipping:
$$\text{visibleH} = 100\text{vh} - \text{navbarHeight}(88\text{px}) - \text{paddingV}(48\text{px})$$
$$\text{outerRadius} = \min\left(\text{clamp}(256\text{px}, 40\text{vh}, 440\text{px}), \frac{\text{visibleH} - 64\text{px}}{2}\right)$$
$$\text{wheelDiameter} = 2 \times \text{outerRadius}$$
$$\text{wheelCenterX} = \text{hubRadius} + 32\text{px}$$

Verified at **1920×1080**, **1440×900**, **1280×720**, and **1024×768** with zero arc clipping at top, bottom, or right.

---

## 🗂️ Complete Multi-Page Information Architecture

Every major navigation item routes to a dedicated, full-detail page powered by **React Router v7**:

```
/
├── /about                               # Company vision, pedagogy, and leadership
├── /courses                             # Full course explorer with multi-domain filters
│   └── /courses/:id                     # Granular syllabus, curriculum modules & enrollment
├── /programs                            # Career acceleration tracks & degree programs
├── /internships                         # Industry internship portal & eligibility
│   └── /internships/:id                 # Detailed internship job descriptions & application form
├── /projects                            # Real-world capstone project laboratory
│   └── /projects/:id                    # Capstone specifications, architecture & rubrics
├── /resources                           # Developer guides, cheat sheets, roadmaps
├── /contact                             # Inquiries, partnerships & campus enablement
├── /login, /register, /forgot-password  # Authentication system
├── /profile                             # Student dashboard & enrolled learning tracks
├── /my-courses                          # Active course progress & milestones
├── /checkout                            # Secure enrollment checkout
│
├── Sub-Hubs & Ecosystem Pathways:
│   ├── /emerging-tech                   # Emerging Technology hub
│   │   └── /emerging-tech/:pathwayId    # Specialized pathway deep-dives
│   ├── /non-tech                        # Non-Tech & Commerce Hub
│   │   └── /non-tech/:topicId           # Specialized commerce & analytics tracks
│   ├── /partners                        # Industry partner registry
│   │   └── /partners/:partnerId         # Corporate partner profiles & co-delivery tracks
│   ├── /institutions                    # Academic & University services
│   │   └── /institutions/:serviceId     # Institution service specifications
│   └── /technology/:id                  # Direct technology pathway routes
```

---

## 🛠️ Technology Stack & Dependencies

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Runtime** | React | `^19.0.0` | Modern component architecture, hooks & memoization |
| **DOM** | React DOM | `^19.0.0` | Client rendering engine |
| **Language** | TypeScript | `^5.7.0` | Strict static typing and interface contracts |
| **Routing** | React Router DOM | `^7.18.4` | Declarative client-side routing and deep-linking |
| **Bundler** | Vite | `^8.0.5` | Fast HMR development server & optimized rollup production builds |
| **Styling** | Tailwind CSS v4 | `^4.0.0` | Modern CSS-first utility classes via `@tailwindcss/vite` |
| **Icons** | Lucide React | `^1.49.0` | Crisp vector iconography |
| **Formatter** | oxfmt | `^0.2.0` | High-speed Rust-based code formatting |

---

## 📁 Repository Directory Structure

```text
├── .figma/                     # Figma Make deployment configurations
├── src/
│   ├── assets/                 # Brand logos, project images, skill illustrations
│   │   ├── projects/           # High-resolution project card photography
│   │   ├── skills/             # Course track cover imagery
│   │   └── shield-logo.png     # Official Shield Skill Hub crest
│   ├── components/             # Reusable UI elements
│   │   ├── Breadcrumbs.tsx     # Deep-link navigation breadcrumbs
│   │   ├── CourseCard.tsx      # Interactive course preview cards
│   │   ├── FeatureCard.tsx     # Value proposition display cards
│   │   ├── FindMyPathModal.tsx # Degree-to-track recommendation wizard
│   │   ├── FlagshipArt.tsx     # Stylized vector badge art
│   │   ├── Footer.tsx          # Platform site footer with links & newsletter
│   │   ├── HeroVisual.tsx      # Interactive 3D floating hero laptop
│   │   ├── Icons.tsx           # Custom vector icon helpers
│   │   ├── Navbar.tsx          # Glassmorphic sticky navigation bar
│   │   ├── ReviewModal.tsx     # Student testimonial and review modal
│   │   ├── ScrollToTop.tsx     # Route transition scroll reset
│   │   ├── SkillHubFlowchart.tsx # Concentric roulette wheel component
│   │   ├── SkillHubFlowchart.css # Roulette wheel geometry, sizing & responsive CSS
│   │   └── StatCounter.tsx     # Animated numeric counter component
│   ├── context/
│   │   └── AuthContext.tsx     # User authentication state & session management
│   ├── data/                   # Central single-source-of-truth data models
│   │   ├── courses.ts          # Complete course catalog data
│   │   ├── generalData.ts      # Platform metadata & site configuration
│   │   ├── institutionData.ts  # Academic and college partnership tiers
│   │   ├── internshipData.ts   # Verified corporate internship postings
│   │   ├── masterArchitectureData.ts # Ecosystem mapping data
│   │   ├── partnerData.ts      # Corporate alliance directory
│   │   ├── projects.ts         # Hands-on capstone project briefs
│   │   ├── resources.ts        # Downloadable guides and study roadmaps
│   │   ├── reviews.ts          # Student success stories & alumni reviews
│   │   ├── skillHubData.ts     # Concentric wheel pathways, partners & recommendation engine
│   │   ├── technologyPathways.ts # Deep technical syllabus roadmaps
│   │   └── theme.ts            # Design tokens & color constants
│   ├── pages/                  # Page components
│   │   ├── emerging-tech/      # Emerging Tech sub-hub & detail pages
│   │   ├── general/            # General knowledge topic routes
│   │   ├── institutions/       # University services & COE pages
│   │   ├── internships/        # Internship portal & detail views
│   │   ├── non-tech/           # Non-Tech, commerce & safety pages
│   │   ├── partners/           # Partner profiles & laboratory routes
│   │   ├── technology/         # Direct tech specialization pages
│   │   ├── HomePage.tsx        # Chapter 01-07 narrative homepage
│   │   ├── CoursesPage.tsx     # Catalog explorer
│   │   ├── CourseDetailPage.tsx# Full course overview & syllabus
│   │   ├── ProgramsPage.tsx    # Accelerated cohort programs
│   │   ├── ProjectsPage.tsx    # Hands-on project laboratory
│   │   ├── ResourcesPage.tsx   # Guides and resources
│   │   ├── AboutPage.tsx       # About the academy and founders
│   │   ├── ContactPage.tsx     # Contact & institutional inquiries
│   │   ├── LoginPage.tsx       # Student login
│   │   ├── RegisterPage.tsx    # Student onboarding
│   │   ├── ProfilePage.tsx     # Student portal
│   │   └── CheckoutPage.tsx    # Course enrollment checkout
│   ├── services/               # Mock data & API service adapters
│   │   ├── authService.ts      # Authentication operations
│   │   ├── courseService.ts    # Course fetching & filtering
│   │   ├── paymentService.ts   # Enrollment & checkout handling
│   │   ├── recommendationService.ts # Career path recommendation queries
│   │   └── reviewService.ts    # Student review submission
│   ├── styles/
│   │   └── comicEditorial.css  # Vintage comic halftone, ink borders, speech bubbles
│   ├── types/
│   │   └── index.ts            # Core TypeScript interfaces and type definitions
│   ├── App.tsx                 # Application router configuration
│   ├── index.css               # Global CSS & Tailwind CSS v4 entrypoint
│   └── main.tsx                # React DOM root entrypoint
├── index.html                  # HTML entry template
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.ts              # Vite configuration with Tailwind v4 & React plugins
```

---

## ⚙️ Wheel Configuration Constants Reference (`WHEEL_CONFIG`)

Centralized in [`src/components/SkillHubFlowchart.tsx`](file:///d:/Redesign%20Frontend%20UI_UX/src/components/SkillHubFlowchart.tsx):

```typescript
export const WHEEL_CONFIG = {
  // Input normalization & sensitivity
  WHEEL_CLAMP: 60,                 // Clamps raw deltaY to +/-60
  WHEEL_SENSITIVITY_MID: 8 / 60,   // 1 mouse notch (~60 clamped) ≈ 8 deg rotation
  WHEEL_SENSITIVITY_OUTER: 12 / 60, // 1 mouse notch (~60 clamped) ≈ 12 deg rotation

  // Maximum angular velocity
  MAX_VELOCITY_MID: 60,           // Middle ring velocity cap (60 deg/s)
  MAX_VELOCITY_OUTER: 45,          // Outer ring velocity cap (45 deg/s)

  // Counter-rotating rings flag
  REVERSE_OUTER_RING: true,        // Middle & outer rings rotate in opposite directions

  // Friction & coasting physics
  FRICTION_HALF_LIFE: 0.60,        // Coasting half-life = 600ms (heavy wheel momentum)
  SNAP_IDLE_SEC: 0.15,             // Idle delay before spring snap initiates

  // Critically damped spring snap
  SNAP_STIFFNESS: 22,              // Spring constant
  SNAP_DAMPING: 8.5,               // Damping factor (settles in ~700ms, <= 1.5 deg overshoot)
  MAX_OVERSHOOT_DEG: 1.5,

  // Button & keyboard eased step (~900ms duration)
  BUTTON_SNAP_STIFFNESS: 14,
  BUTTON_SNAP_DAMPING: 7.0,

  // Idle auto-advance
  AUTO_ROTATE: true,               // Idle auto-advance enabled
  IDLE_RESUME_MS: 4000,            // 4 seconds inactivity before auto-advance resumes
  AUTO_ROTATE_INTERVAL_MS: 6000,   // Advance ring every 6 seconds
  AUTO_ROTATE_STAGGER_MS: 3000,    // Middle and outer rings staggered by 3 seconds

  // SVG Base Geometry Radii (in coordinate units)
  HUB_R: 120,                      // Center ceramic disc radius
  GUTTER_1: 7,                     // Gutter between Hub and Group Band
  GROUP_BAND_INNER: 127,           // Category band inner radius
  GROUP_BAND_WIDTH: 28,            // Category band width
  GROUP_BAND_OUTER: 155,           // Category band outer radius
  GUTTER_2: 7,                     // Gutter between Group Band and Middle Ring
  MIDDLE_INNER_R: 162,             // 9-Course Ring inner edge
  MIDDLE_WIDTH: 148,               // Course segment radial width
  MIDDLE_OUTER_R: 310,             // Course segment outer edge
  GUTTER_3: 7,                     // Gutter between Middle and Outer Ring
  OUTER_INNER_R: 317,              // 6-Partner Ring inner edge
  OUTER_WIDTH: 138,                // Partner segment radial width
  OUTER_OUTER_R: 455,              // Partner segment outer edge
  RIM_R: 463                       // Outer notched coin-edge rim
}
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v20.0.0` or higher (verified on Node `v24.13.0`)
- **Package Manager**: `pnpm` (recommended), `npm`, or `yarn`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Soma-shree/shield_skill_hub.git
   cd shield_skill_hub
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Launch development server:
   ```bash
   pnpm run dev
   ```
   Open your browser to `http://localhost:8443` (or the port reported in your terminal).

4. Build for production:
   ```bash
   pnpm run build
   ```
   The compiled, minified bundle will be output to the `dist/` directory.

5. Preview production build:
   ```bash
   pnpm run preview
   ```

6. Format code:
   ```bash
   pnpm run format
   ```

---

## 📜 License & Intellectual Property

Copyright © 2026 **Shield Skill Hub** / **Shield Group**. All rights reserved.  
Designed and engineered for high-impact workforce readiness, degree-integrated industry labs, and authentic career advancement.
