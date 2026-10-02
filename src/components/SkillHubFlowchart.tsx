import React, { useState, useRef, useEffect, useCallback, useMemo } from "react"
import { Link, useNavigate } from "react-router-dom"
import shieldLogo from "../assets/shield-logo.png"
import {
  skillHubFlowchartData,
  FlowchartCourseItem,
  FlowchartPartner,
} from "../data/skillHubData"
import { FindMyPathModal } from "./FindMyPathModal"
import {
  Compass,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Building2,
  Layers,
  GraduationCap,
  Code2,
} from "lucide-react"
import "./SkillHubFlowchart.css"

// =========================================================================
// EXPLICIT GEOMETRY & PHYSICS CONFIGURATION
// All positions, bounds and friction parameters derived from these constants
// =========================================================================
export const WHEEL_CONFIG = {
  // Input normalization & sensitivity
  WHEEL_CLAMP: 60, // Clamp raw deltaY to +/-60
  WHEEL_SENSITIVITY_MID: 8 / 60, // 1 mouse notch (~60 clamped) ≈ 8 deg
  WHEEL_SENSITIVITY_OUTER: 12 / 60, // 1 mouse notch (~60 clamped) ≈ 12 deg

  // Maximum angular velocity (degrees / second)
  MAX_VELOCITY_MID: 60, // middle ring 60 deg/s
  MAX_VELOCITY_OUTER: 45, // outer ring 45 deg/s

  // Counter-rotating rings flag
  REVERSE_OUTER_RING: true, // middle & outer counter-rotate on same input

  // Friction half-life in seconds (heavy wheel coasting gently)
  FRICTION_HALF_LIFE: 0.6, // ~600ms

  // Idle time before snapping initiates (seconds)
  SNAP_IDLE_SEC: 0.15,

  // Critically damped spring snap constants (~700ms settle, <= 1.5 deg overshoot)
  SNAP_STIFFNESS: 22,
  SNAP_DAMPING: 8.5,
  MAX_OVERSHOOT_DEG: 1.5,

  // Keyboard and button eased step (~900ms duration)
  BUTTON_SNAP_STIFFNESS: 14,
  BUTTON_SNAP_DAMPING: 7.0,

  // Auto-advance configuration
  AUTO_ROTATE: true,
  IDLE_RESUME_MS: 4000, // 4s inactivity before auto-advance resumes
  AUTO_ROTATE_INTERVAL_MS: 6000, // advance ring every 6s
  AUTO_ROTATE_STAGGER_MS: 3000, // middle and outer staggered by 3s

  // Geometric Radii in SVG base units
  HUB_R: 120,
  GUTTER_1: 7,
  GROUP_BAND_INNER: 127,
  GROUP_BAND_WIDTH: 28,
  GROUP_BAND_OUTER: 155,
  GUTTER_2: 7,
  MIDDLE_INNER_R: 162,
  MIDDLE_WIDTH: 148,
  MIDDLE_OUTER_R: 310,
  GUTTER_3: 7,
  OUTER_INNER_R: 317,
  OUTER_WIDTH: 138,
  OUTER_OUTER_R: 455,
  RIM_R: 463,
}

// Math helpers for SVG annular sectors and arcs
function createAnnularSector(
  rInner: number,
  rOuter: number,
  startDeg: number,
  endDeg: number,
): string {
  const rad = Math.PI / 180
  const a1 = startDeg * rad
  const a2 = endDeg * rad

  const x1 = rOuter * Math.cos(a1)
  const y1 = rOuter * Math.sin(a1)
  const x2 = rOuter * Math.cos(a2)
  const y2 = rOuter * Math.sin(a2)

  const x3 = rInner * Math.cos(a2)
  const y3 = rInner * Math.sin(a2)
  const x4 = rInner * Math.cos(a1)
  const y4 = rInner * Math.sin(a1)

  const largeArc = Math.abs(endDeg - startDeg) > 180 ? 1 : 0

  return `M ${x1} ${y1} A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 ${largeArc} 0 ${x4} ${y4} Z`
}

function createArcPath(r: number, startDeg: number, endDeg: number): string {
  const rad = Math.PI / 180
  const a1 = startDeg * rad
  const a2 = endDeg * rad
  const x1 = r * Math.cos(a1)
  const y1 = r * Math.sin(a1)
  const x2 = r * Math.cos(a2)
  const y2 = r * Math.sin(a2)
  const largeArc = Math.abs(endDeg - startDeg) > 180 ? 1 : 0
  return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`
}

function getClosestTargetAngle(
  currentAngle: number,
  targetSegmentIndex: number,
  stepDeg: number,
): number {
  const targetNominal = -targetSegmentIndex * stepDeg
  const diff = ((((targetNominal - currentAngle) % 360) + 540) % 360) - 180
  return currentAngle + diff
}

// 2-line non-truncating label helper for course segments
function getTwoLineCourseLabel(item: FlowchartCourseItem): [string, string] {
  const label = item.shortLabel || item.label
  switch (label) {
    case "Go Lang – Erlang":
      return ["Go Lang", "Erlang"]
    case "Wipro 3D / Epson Robotic Arm":
      return ["Wipro 3D", "Robotic Arm"]
    case "Rockwell Automation IoT":
      return ["Rockwell", "Automation IoT"]
    case "Embedded / IoT":
      return ["Embedded", "/ IoT"]
    case "AR / VR / MR":
      return ["AR / VR / MR", "Spatial Tech"]
    case "EV":
      return ["Electric", "Vehicles (EV)"]
    case "ABC + Quantum":
      return ["ABC + Quantum", "AI / Cyber / Qubit"]
    case "Commerce & Equity Lab":
      return ["Commerce &", "Equity Lab"]
    case "Cosmetics / Food Safety":
      return ["Cosmetics /", "Food Safety"]
    default: {
      const parts = label.split(" ")
      if (parts.length <= 2) return [parts[0], parts.slice(1).join(" ")]
      const mid = Math.ceil(parts.length / 2)
      return [parts.slice(0, mid).join(" "), parts.slice(mid).join(" ")]
    }
  }
}

// 2-line partner label helper
function getTwoLinePartnerLabel(
  partner: FlowchartPartner,
): [string, string | null] {
  switch (partner.id) {
    case "academic-seals":
      return ["Academic", "Seals"]
    case "saint-gobain":
      return ["Saint-Gobain", null]
    case "wipro-3d":
      return ["Wipro 3D", null]
    case "rockwell-automation":
      return ["Rockwell", "Automation"]
    case "ishrae":
      return ["ISHRAE", null]
    case "stockathon-academy":
      return ["Stockathon", "Academy"]
    default:
      return [partner.shortLabel, null]
  }
}

// Vector emblem tiles for the 6 industry partners with fallback
function PartnerVectorGraphics({ partnerId }: { partnerId: string }) {
  switch (partnerId) {
    case "academic-seals":
      return (
        <g>
          <circle
            cx="-6.5"
            cy="0"
            r="6"
            fill="#FAF6EE"
            stroke="#8C652E"
            strokeWidth="1.2"
          />
          <text
            x="-6.5"
            y="2.5"
            textAnchor="middle"
            fontSize="6.5"
            fill="#8C652E"
          >
            🏛️
          </text>
          <circle
            cx="6.5"
            cy="0"
            r="6"
            fill="#172525"
            stroke="#F5B82E"
            strokeWidth="1.2"
          />
          <text
            x="6.5"
            y="2.5"
            textAnchor="middle"
            fontSize="6.5"
            fill="#F5B82E"
          >
            🎓
          </text>
        </g>
      )
    case "saint-gobain":
      return (
        <g>
          <defs>
            <linearGradient
              id="sg-bridge-grad-v2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="50%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
          <path
            d="M -11 5 A 11 11 0 0 1 11 5"
            fill="none"
            stroke="url(#sg-bridge-grad-v2)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="0" cy="-4" r="2.5" fill="#F5B82E" />
        </g>
      )
    case "wipro-3d":
      return (
        <g>
          <circle cx="-5" cy="-5" r="3.5" fill="#10B981" />
          <circle cx="5" cy="-5" r="3.5" fill="#0284C7" />
          <circle cx="-5" cy="5" r="3.5" fill="#F59E0B" />
          <circle cx="5" cy="5" r="3.5" fill="#EF4444" />
        </g>
      )
    case "rockwell-automation":
      return (
        <g>
          <rect x="-10" y="-10" width="20" height="20" rx="4" fill="#DC2626" />
          <circle cx="0" cy="0" r="5" fill="#ffffff" />
          <polygon points="0,-7 6,4 -6,4" fill="#172525" />
        </g>
      )
    case "ishrae":
      return (
        <g>
          <circle
            cx="0"
            cy="0"
            r="11"
            fill="none"
            stroke="#0284C7"
            strokeWidth="2"
          />
          <path
            d="M -7 0 L 7 0 M 0 -7 L 0 7 M -5 -5 L 5 5 M -5 5 L 5 -5"
            stroke="#0284C7"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      )
    case "stockathon-academy":
      return (
        <g>
          <polyline
            points="-9,5 -4,0 1,3 8,-6"
            fill="none"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon points="4,-6 8,-6 8,-2" fill="#10B981" />
        </g>
      )
    default:
      return (
        <g>
          <circle cx="0" cy="0" r="10" fill="#172525" />
          <text
            x="0"
            y="3.5"
            textAnchor="middle"
            fontSize="8"
            fontWeight="bold"
            fill="#F5B82E"
          >
            {partnerId.slice(0, 2).toUpperCase()}
          </text>
        </g>
      )
  }
}

// Standalone SVG emblem for the Partner Card (fixes empty white square bug)
function PartnerCardEmblem({
  partnerId,
  size = 40,
}: {
  partnerId: string
  size?: number
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-16 -16 32 32"
      className="shrink-0 overflow-visible select-none"
    >
      <circle
        cx="0"
        cy="0"
        r="15"
        fill="#ffffff"
        stroke="#172525"
        strokeWidth="1"
      />
      <PartnerVectorGraphics partnerId={partnerId} />
    </svg>
  )
}

export function SkillHubFlowchart() {
  const navigate = useNavigate()
  const sectionRef = useRef<HTMLElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  // 1. Data initialization (9 Course Segments + 6 Partner Segments)
  const courseSegments: FlowchartCourseItem[] = useMemo(
    () => [
      ...skillHubFlowchartData.emergingTech.items, // Indices 0 to 6 (Emerging Tech)
      ...skillHubFlowchartData.nonTech.items, // Indices 7 to 8 (Non Tech)
    ],
    [],
  )

  const partnerSegments: FlowchartPartner[] = useMemo(
    () => skillHubFlowchartData.partners, // Indices 0 to 5
    [],
  )

  // Viewport calculation for complete semicircle fitting
  const [viewportDims, setViewportDims] = useState(() => {
    const vh = typeof window !== "undefined" ? window.innerHeight : 900
    const navH = 88
    const padV = 48
    const visibleH = Math.max(400, vh - navH - padV)
    const outerR = Math.min(
      Math.max(280, Math.min(0.4 * vh, 440)),
      (visibleH - 64) / 2,
    )
    const diameter = 2 * outerR
    const hubR = (outerR * 120) / 463
    const centerX = hubR + 32
    return { outerR, diameter, hubR, centerX }
  })

  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight
      const navH = 88
      const padV = 48
      const visibleH = Math.max(400, vh - navH - padV)
      const outerR = Math.min(
        Math.max(280, Math.min(0.4 * vh, 440)),
        (visibleH - 64) / 2,
      )
      const diameter = 2 * outerR
      const hubR = (outerR * 120) / 463
      const centerX = hubR + 32
      setViewportDims({ outerR, diameter, hubR, centerX })
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // State
  const [isFindPathOpen, setIsFindPathOpen] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const [flapperAngle, setFlapperAngle] = useState(0)
  const [liveAnnouncement, setLiveAnnouncement] = useState("")

  // Independent rotation angles (degrees)
  const [angleMid, setAngleMid] = useState(0)
  const [angleOuter, setAngleOuter] = useState(0)

  // Active indices based on 3 o'clock (0 degrees)
  const activeMidIndex = ((Math.round(-angleMid / 40) % 9) + 9) % 9
  const activeOuterIndex = ((Math.round(-angleOuter / 60) % 6) + 6) % 6

  // Physics animation refs
  const angleMidRef = useRef(0)
  const angleOuterRef = useRef(0)
  const velocityMidRef = useRef(0)
  const velocityOuterRef = useRef(0)
  const targetMidRef = useRef(0)
  const targetOuterRef = useRef(0)

  const isDraggingMidRef = useRef(false)
  const isDraggingOuterRef = useRef(false)
  const isSnappingMidRef = useRef(false)
  const isSnappingOuterRef = useRef(false)
  const useButtonEasingMidRef = useRef(false)
  const useButtonEasingOuterRef = useRef(false)

  const idleTimerMidRef = useRef(0)
  const idleTimerOuterRef = useRef(0)

  const pointerStartAngleRef = useRef(0)
  const lastPointerTimeRef = useRef(0)
  const lastFrameTimeRef = useRef(performance.now())

  const rafIdRef = useRef<number | null>(null)
  const isLoopRunningRef = useRef(false)
  const isIntersectingRef = useRef(true)

  // Interaction tracking for idle auto-advance
  const lastInteractionTimeRef = useRef(performance.now())
  const nextAutoAdvanceTimeRef = useRef(
    performance.now() + WHEEL_CONFIG.IDLE_RESUME_MS,
  )
  const autoAdvancePhaseRef = useRef<"mid" | "outer">("mid")
  const autoAdvanceTimerRef = useRef<number | null>(null)
  const isHoveredRef = useRef(false)
  const isFocusedRef = useRef(false)
  const isCrossSpinActiveRef = useRef(false)

  const prevMidIndexRef = useRef(0)
  const prevOuterIndexRef = useRef(0)

  // Record user interaction to pause auto-advance and schedule resume
  const recordInteraction = useCallback(() => {
    const now = performance.now()
    lastInteractionTimeRef.current = now
    nextAutoAdvanceTimeRef.current = now + WHEEL_CONFIG.IDLE_RESUME_MS
    autoAdvancePhaseRef.current = "mid"
  }, [])

  // Screen reader announcement on segment change
  useEffect(() => {
    if (courseSegments[activeMidIndex] && partnerSegments[activeOuterIndex]) {
      setLiveAnnouncement(
        `Active Pathway: ${courseSegments[activeMidIndex].label}. Active Partner: ${partnerSegments[activeOuterIndex].name}.`,
      )
    }
  }, [activeMidIndex, activeOuterIndex, courseSegments, partnerSegments])

  // Tactile flapper flick needle trigger when passing boundaries
  useEffect(() => {
    if (
      prevMidIndexRef.current !== activeMidIndex ||
      prevOuterIndexRef.current !== activeOuterIndex
    ) {
      prevMidIndexRef.current = activeMidIndex
      prevOuterIndexRef.current = activeOuterIndex

      // Quick flick sequence
      setFlapperAngle(-18)
      const t1 = setTimeout(() => setFlapperAngle(8), 60)
      const t2 = setTimeout(() => setFlapperAngle(0), 140)
      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
      }
    }
  }, [activeMidIndex, activeOuterIndex])

  // Active items
  const activeCourse = courseSegments[activeMidIndex]
  const activePartner = partnerSegments[activeOuterIndex]

  // Dynamic Gold Connector Mapping check
  const isCurrentlyMapped = useMemo(() => {
    if (!activeCourse || !activePartner) return false
    return (
      activeCourse.partnerId === activePartner.id ||
      activePartner.mappedCourseIds.includes(activeCourse.id)
    )
  }, [activeCourse, activePartner])

  // Wake the rAF loop when input occurs
  const wakeLoop = useCallback(() => {
    if (
      !isLoopRunningRef.current &&
      isIntersectingRef.current &&
      !document.hidden
    ) {
      isLoopRunningRef.current = true
      lastFrameTimeRef.current = performance.now()
      rafIdRef.current = requestAnimationFrame(updatePhysics)
    }
  }, [])

  // Controlled spin helpers with spring snapping
  const spinMiddleToSegment = useCallback(
    (index: number, isButton: boolean = false) => {
      targetMidRef.current = getClosestTargetAngle(
        angleMidRef.current,
        index,
        40,
      )
      useButtonEasingMidRef.current = isButton
      isSnappingMidRef.current = true
      velocityMidRef.current = 0
      idleTimerMidRef.current = 0
      recordInteraction()
      wakeLoop()
    },
    [recordInteraction, wakeLoop],
  )

  const spinOuterToPartner = useCallback(
    (index: number, isButton: boolean = false) => {
      targetOuterRef.current = getClosestTargetAngle(
        angleOuterRef.current,
        index,
        60,
      )
      useButtonEasingOuterRef.current = isButton
      isSnappingOuterRef.current = true
      velocityOuterRef.current = 0
      idleTimerOuterRef.current = 0
      recordInteraction()
      wakeLoop()
    },
    [recordInteraction, wakeLoop],
  )

  // Cross-linking: auto-spin outer ring when middle ring settles on mapped course
  useEffect(() => {
    if (activeCourse && activeCourse.partnerId) {
      const partnerIdx = partnerSegments.findIndex(
        (p) => p.id === activeCourse.partnerId,
      )
      if (partnerIdx !== -1 && partnerIdx !== activeOuterIndex) {
        isCrossSpinActiveRef.current = true
        spinOuterToPartner(partnerIdx, false)
      }
    }
  }, [
    activeMidIndex,
    activeCourse,
    activeOuterIndex,
    partnerSegments,
    spinOuterToPartner,
  ])

  // Frame-rate independent physics loop
  const updatePhysics = useCallback(() => {
    const now = performance.now()
    const dt = Math.min(0.04, (now - lastFrameTimeRef.current) / 1000)
    lastFrameTimeRef.current = now

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let isMovingMid = false
    let isMovingOuter = false

    // 1. Middle Ring Physics
    if (isDraggingMidRef.current) {
      isMovingMid = true
    } else if (isSnappingMidRef.current) {
      isMovingMid = true
      if (prefersReducedMotion) {
        angleMidRef.current = targetMidRef.current
        velocityMidRef.current = 0
        isSnappingMidRef.current = false
      } else {
        const diff = targetMidRef.current - angleMidRef.current
        const stiffness = useButtonEasingMidRef.current
          ? WHEEL_CONFIG.BUTTON_SNAP_STIFFNESS
          : WHEEL_CONFIG.SNAP_STIFFNESS
        const damping = useButtonEasingMidRef.current
          ? WHEEL_CONFIG.BUTTON_SNAP_DAMPING
          : WHEEL_CONFIG.SNAP_DAMPING

        const accel = stiffness * diff - damping * velocityMidRef.current
        velocityMidRef.current += accel * dt
        velocityMidRef.current = Math.max(
          -WHEEL_CONFIG.MAX_VELOCITY_MID,
          Math.min(WHEEL_CONFIG.MAX_VELOCITY_MID, velocityMidRef.current),
        )
        angleMidRef.current += velocityMidRef.current * dt

        if (Math.abs(diff) < 0.05 && Math.abs(velocityMidRef.current) < 0.25) {
          angleMidRef.current = targetMidRef.current
          velocityMidRef.current = 0
          isSnappingMidRef.current = false
          useButtonEasingMidRef.current = false
        }
      }
      setAngleMid(angleMidRef.current)
    } else if (Math.abs(velocityMidRef.current) > 0.4) {
      isMovingMid = true
      if (prefersReducedMotion) {
        velocityMidRef.current = 0
      } else {
        const decay = Math.pow(0.5, dt / WHEEL_CONFIG.FRICTION_HALF_LIFE)
        velocityMidRef.current *= decay
        angleMidRef.current += velocityMidRef.current * dt
        idleTimerMidRef.current += dt
        setAngleMid(angleMidRef.current)

        if (
          Math.abs(velocityMidRef.current) < 1.5 ||
          idleTimerMidRef.current >= WHEEL_CONFIG.SNAP_IDLE_SEC
        ) {
          velocityMidRef.current = 0
          const nearest = ((Math.round(-angleMidRef.current / 40) % 9) + 9) % 9
          targetMidRef.current = getClosestTargetAngle(
            angleMidRef.current,
            nearest,
            40,
          )
          isSnappingMidRef.current = true
        }
      }
    }

    // 2. Outer Ring Physics
    if (isDraggingOuterRef.current) {
      isMovingOuter = true
    } else if (isSnappingOuterRef.current) {
      isMovingOuter = true
      if (prefersReducedMotion) {
        angleOuterRef.current = targetOuterRef.current
        velocityOuterRef.current = 0
        isSnappingOuterRef.current = false
        isCrossSpinActiveRef.current = false
      } else {
        const diff = targetOuterRef.current - angleOuterRef.current
        const stiffness = useButtonEasingOuterRef.current
          ? WHEEL_CONFIG.BUTTON_SNAP_STIFFNESS
          : WHEEL_CONFIG.SNAP_STIFFNESS
        const damping = useButtonEasingOuterRef.current
          ? WHEEL_CONFIG.BUTTON_SNAP_DAMPING
          : WHEEL_CONFIG.SNAP_DAMPING

        const accel = stiffness * diff - damping * velocityOuterRef.current
        velocityOuterRef.current += accel * dt
        velocityOuterRef.current = Math.max(
          -WHEEL_CONFIG.MAX_VELOCITY_OUTER,
          Math.min(WHEEL_CONFIG.MAX_VELOCITY_OUTER, velocityOuterRef.current),
        )
        angleOuterRef.current += velocityOuterRef.current * dt

        if (
          Math.abs(diff) < 0.05 &&
          Math.abs(velocityOuterRef.current) < 0.25
        ) {
          angleOuterRef.current = targetOuterRef.current
          velocityOuterRef.current = 0
          isSnappingOuterRef.current = false
          useButtonEasingOuterRef.current = false
          isCrossSpinActiveRef.current = false
        }
      }
      setAngleOuter(angleOuterRef.current)
    } else if (Math.abs(velocityOuterRef.current) > 0.4) {
      isMovingOuter = true
      if (prefersReducedMotion) {
        velocityOuterRef.current = 0
      } else {
        const decay = Math.pow(0.5, dt / WHEEL_CONFIG.FRICTION_HALF_LIFE)
        velocityOuterRef.current *= decay
        angleOuterRef.current += velocityOuterRef.current * dt
        idleTimerOuterRef.current += dt
        setAngleOuter(angleOuterRef.current)

        if (
          Math.abs(velocityOuterRef.current) < 1.5 ||
          idleTimerOuterRef.current >= WHEEL_CONFIG.SNAP_IDLE_SEC
        ) {
          velocityOuterRef.current = 0
          const nearest =
            ((Math.round(-angleOuterRef.current / 60) % 6) + 6) % 6
          targetOuterRef.current = getClosestTargetAngle(
            angleOuterRef.current,
            nearest,
            60,
          )
          isSnappingOuterRef.current = true
        }
      }
    }

    // 3. Idle Auto-Advance Logic
    const isInteracting =
      isHoveredRef.current ||
      isFocusedRef.current ||
      isDraggingMidRef.current ||
      isDraggingOuterRef.current ||
      document.hidden ||
      !isIntersectingRef.current

    if (isInteracting) {
      lastInteractionTimeRef.current = now
      nextAutoAdvanceTimeRef.current = now + WHEEL_CONFIG.IDLE_RESUME_MS
    } else if (
      WHEEL_CONFIG.AUTO_ROTATE &&
      !prefersReducedMotion &&
      !isMovingMid &&
      !isMovingOuter &&
      now >= nextAutoAdvanceTimeRef.current
    ) {
      if (autoAdvancePhaseRef.current === "mid") {
        // Auto-advance Middle Ring by 1 segment
        const currentMid = ((Math.round(-angleMidRef.current / 40) % 9) + 9) % 9
        const nextMid = (currentMid + 1) % 9
        targetMidRef.current = getClosestTargetAngle(
          angleMidRef.current,
          nextMid,
          40,
        )
        isSnappingMidRef.current = true
        velocityMidRef.current = 0
        idleTimerMidRef.current = 0
        autoAdvancePhaseRef.current = "outer"
        nextAutoAdvanceTimeRef.current =
          now + WHEEL_CONFIG.AUTO_ROTATE_STAGGER_MS
        isMovingMid = true
      } else {
        // Auto-advance Outer Ring by 1 segment (waits for cross-spin to finish)
        if (!isCrossSpinActiveRef.current) {
          const currentOuter =
            ((Math.round(-angleOuterRef.current / 60) % 6) + 6) % 6
          const step = WHEEL_CONFIG.REVERSE_OUTER_RING ? -1 : 1
          const nextOuter = (((currentOuter + step) % 6) + 6) % 6
          targetOuterRef.current = getClosestTargetAngle(
            angleOuterRef.current,
            nextOuter,
            60,
          )
          isSnappingOuterRef.current = true
          velocityOuterRef.current = 0
          idleTimerOuterRef.current = 0
          autoAdvancePhaseRef.current = "mid"
          nextAutoAdvanceTimeRef.current =
            now +
            (WHEEL_CONFIG.AUTO_ROTATE_INTERVAL_MS -
              WHEEL_CONFIG.AUTO_ROTATE_STAGGER_MS)
          isMovingOuter = true
        }
      }
    }

    if (isMovingMid || isMovingOuter) {
      rafIdRef.current = requestAnimationFrame(updatePhysics)
    } else {
      isLoopRunningRef.current = false
      // Stationary: schedule wake timer for next auto-advance if eligible
      if (WHEEL_CONFIG.AUTO_ROTATE && !prefersReducedMotion && !isInteracting) {
        const delay = Math.max(50, nextAutoAdvanceTimeRef.current - now)
        if (autoAdvanceTimerRef.current)
          clearTimeout(autoAdvanceTimerRef.current)
        autoAdvanceTimerRef.current = window.setTimeout(() => {
          wakeLoop()
        }, delay)
      }
    }
  }, [wakeLoop])

  // Non-passive wheel event listener on SVG:
  // Captures event ONLY when pointer is over the interactive rings.
  // Never hijacks normal page scroll.
  useEffect(() => {
    const svgEl = svgRef.current
    if (!svgEl) return

    const onWheel = (e: WheelEvent) => {
      const rect = svgEl.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)

      // Radius scaling factor: base SVG radius is 480 units, mapped to rect.width / 2
      const scale = rect.width / 960
      const distUnits = dist / scale

      // If pointer is over the interactive rings (between HUB_R and RIM_R + 25)
      if (
        distUnits >= WHEEL_CONFIG.HUB_R &&
        distUnits <= WHEEL_CONFIG.RIM_R + 25
      ) {
        e.preventDefault()
        e.stopPropagation()

        recordInteraction()

        const factor = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 300 : 1
        const rawDelta = e.deltaY * factor
        const clampedDelta = Math.max(
          -WHEEL_CONFIG.WHEEL_CLAMP,
          Math.min(WHEEL_CONFIG.WHEEL_CLAMP, rawDelta),
        )

        // 1 notch (~60 clamped) produces ~8 deg on mid and ~12 deg on outer
        // v0_mid for 8 deg = 8 / 0.8656 ≈ 9.24 deg/s
        // v0_outer for 12 deg = 12 / 0.8656 ≈ 13.86 deg/s
        const impulseMid = -(clampedDelta / 60) * 9.24
        const dirOuter = WHEEL_CONFIG.REVERSE_OUTER_RING ? -1 : 1
        const impulseOuter = dirOuter * (-(clampedDelta / 60) * 13.86)

        velocityMidRef.current = Math.max(
          -WHEEL_CONFIG.MAX_VELOCITY_MID,
          Math.min(
            WHEEL_CONFIG.MAX_VELOCITY_MID,
            velocityMidRef.current + impulseMid,
          ),
        )
        velocityOuterRef.current = Math.max(
          -WHEEL_CONFIG.MAX_VELOCITY_OUTER,
          Math.min(
            WHEEL_CONFIG.MAX_VELOCITY_OUTER,
            velocityOuterRef.current + impulseOuter,
          ),
        )

        isSnappingMidRef.current = false
        isSnappingOuterRef.current = false
        idleTimerMidRef.current = 0
        idleTimerOuterRef.current = 0

        wakeLoop()
      }
    }

    svgEl.addEventListener("wheel", onWheel, { passive: false })
    return () => {
      svgEl.removeEventListener("wheel", onWheel)
    }
  }, [recordInteraction, wakeLoop])

  // Intersection Observer to pause rAF loop when offscreen
  useEffect(() => {
    const el = sectionRef.current
    if (!el || typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        isIntersectingRef.current = entry.isIntersecting
        if (entry.isIntersecting) {
          recordInteraction()
          wakeLoop()
        } else {
          if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
          isLoopRunningRef.current = false
          if (autoAdvanceTimerRef.current)
            clearTimeout(autoAdvanceTimerRef.current)
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [recordInteraction, wakeLoop])

  // Document visibility change listener
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
        isLoopRunningRef.current = false
        if (autoAdvanceTimerRef.current)
          clearTimeout(autoAdvanceTimerRef.current)
      } else {
        recordInteraction()
        wakeLoop()
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [recordInteraction, wakeLoop])

  // Start physics on mount
  useEffect(() => {
    wakeLoop()
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
      if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current)
    }
  }, [wakeLoop])

  // Pointer Angle Calculation relative to wheel center (0,0)
  const calculatePointerAngle = (clientX: number, clientY: number): number => {
    if (!svgRef.current) return 0
    const rect = svgRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = clientX - cx
    const dy = clientY - cy
    return Math.atan2(dy, dx) * (180 / Math.PI)
  }

  // Pointer drag on Middle Ring
  const handlePointerDownMid = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    isDraggingMidRef.current = true
    isSnappingMidRef.current = false
    velocityMidRef.current = 0
    idleTimerMidRef.current = 0
    pointerStartAngleRef.current = calculatePointerAngle(e.clientX, e.clientY)
    lastPointerTimeRef.current = performance.now()
    recordInteraction()
    wakeLoop()
  }

  const handlePointerMoveMid = (e: React.PointerEvent) => {
    if (!isDraggingMidRef.current) return
    const currentAngle = calculatePointerAngle(e.clientX, e.clientY)
    const now = performance.now()
    let delta = currentAngle - pointerStartAngleRef.current
    if (delta > 180) delta -= 360
    if (delta < -180) delta += 360

    const dt = Math.max(0.012, (now - lastPointerTimeRef.current) / 1000)
    const instantVelocity = delta / dt // deg/sec
    velocityMidRef.current = Math.max(
      -WHEEL_CONFIG.MAX_VELOCITY_MID,
      Math.min(WHEEL_CONFIG.MAX_VELOCITY_MID, instantVelocity),
    )

    angleMidRef.current += delta
    setAngleMid(angleMidRef.current)

    pointerStartAngleRef.current = currentAngle
    lastPointerTimeRef.current = now
    recordInteraction()
    wakeLoop()
  }

  const handlePointerUpMid = (e: React.PointerEvent) => {
    if (!isDraggingMidRef.current) return
    isDraggingMidRef.current = false
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {}

    recordInteraction()
    if (Math.abs(velocityMidRef.current) < 5) {
      velocityMidRef.current = 0
      const nearest = ((Math.round(-angleMidRef.current / 40) % 9) + 9) % 9
      targetMidRef.current = getClosestTargetAngle(
        angleMidRef.current,
        nearest,
        40,
      )
      isSnappingMidRef.current = true
    }
    wakeLoop()
  }

  // Pointer drag on Outer Ring
  const handlePointerDownOuter = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    isDraggingOuterRef.current = true
    isSnappingOuterRef.current = false
    velocityOuterRef.current = 0
    idleTimerOuterRef.current = 0
    pointerStartAngleRef.current = calculatePointerAngle(e.clientX, e.clientY)
    lastPointerTimeRef.current = performance.now()
    recordInteraction()
    wakeLoop()
  }

  const handlePointerMoveOuter = (e: React.PointerEvent) => {
    if (!isDraggingOuterRef.current) return
    const currentAngle = calculatePointerAngle(e.clientX, e.clientY)
    const now = performance.now()
    let delta = currentAngle - pointerStartAngleRef.current
    if (delta > 180) delta -= 360
    if (delta < -180) delta += 360

    const dt = Math.max(0.012, (now - lastPointerTimeRef.current) / 1000)
    const instantVelocity = delta / dt
    velocityOuterRef.current = Math.max(
      -WHEEL_CONFIG.MAX_VELOCITY_OUTER,
      Math.min(WHEEL_CONFIG.MAX_VELOCITY_OUTER, instantVelocity),
    )

    angleOuterRef.current += delta
    setAngleOuter(angleOuterRef.current)

    pointerStartAngleRef.current = currentAngle
    lastPointerTimeRef.current = now
    recordInteraction()
    wakeLoop()
  }

  const handlePointerUpOuter = (e: React.PointerEvent) => {
    if (!isDraggingOuterRef.current) return
    isDraggingOuterRef.current = false
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {}

    recordInteraction()
    if (Math.abs(velocityOuterRef.current) < 5) {
      velocityOuterRef.current = 0
      const nearest = ((Math.round(-angleOuterRef.current / 60) % 6) + 6) % 6
      targetOuterRef.current = getClosestTargetAngle(
        angleOuterRef.current,
        nearest,
        60,
      )
      isSnappingOuterRef.current = true
    }
    wakeLoop()
  }

  // Keyboard navigation on focused ring
  const handleKeyDownMid = (e: React.KeyboardEvent) => {
    recordInteraction()
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault()
      spinMiddleToSegment((((activeMidIndex - 1) % 9) + 9) % 9, true)
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault()
      spinMiddleToSegment((activeMidIndex + 1) % 9, true)
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleNavigatePathway()
    }
  }

  const handleKeyDownOuter = (e: React.KeyboardEvent) => {
    recordInteraction()
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault()
      spinOuterToPartner((((activeOuterIndex - 1) % 6) + 6) % 6, true)
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault()
      spinOuterToPartner((activeOuterIndex + 1) % 6, true)
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleNavigatePartner()
    }
  }

  // Click handler: non-active rotates to 3 o'clock, active navigates
  const handleCourseClick = (index: number) => {
    recordInteraction()
    if (index === activeMidIndex) {
      handleNavigatePathway()
    } else {
      spinMiddleToSegment(index, true)
    }
  }

  const handlePartnerClick = (index: number) => {
    recordInteraction()
    if (index === activeOuterIndex) {
      handleNavigatePartner()
    } else {
      spinOuterToPartner(index, true)
    }
  }

  // Prev / Next button step helpers (eased over ~900ms)
  const handlePrevMid = () => {
    spinMiddleToSegment((((activeMidIndex - 1) % 9) + 9) % 9, true)
  }

  const handleNextMid = () => {
    spinMiddleToSegment((activeMidIndex + 1) % 9, true)
  }

  const handlePrevOuter = () => {
    spinOuterToPartner((((activeOuterIndex - 1) % 6) + 6) % 6, true)
  }

  const handleNextOuter = () => {
    spinOuterToPartner((activeOuterIndex + 1) % 6, true)
  }

  // Route transition (card expands slightly, route changes within 380ms)
  const handleNavigatePathway = () => {
    if (!activeCourse) return
    setIsNavigating(true)
    setTimeout(() => {
      navigate(activeCourse.targetRoute)
    }, 380)
  }

  const handleNavigatePartner = () => {
    if (!activePartner) return
    setIsNavigating(true)
    setTimeout(() => {
      navigate(activePartner.partnerRoute)
    }, 380)
  }

  // Find My Path modal result: spins smoothly with visible rotation
  const handleFindPathSelect = (pathwayId: string) => {
    const idx = courseSegments.findIndex((c) => c.id === pathwayId)
    if (idx !== -1) {
      spinMiddleToSegment(idx, true)
    }
  }

  // Annular sector templates
  const middleSectorPath = useMemo(
    () =>
      createAnnularSector(
        WHEEL_CONFIG.MIDDLE_INNER_R,
        WHEEL_CONFIG.MIDDLE_OUTER_R,
        -20,
        20,
      ),
    [],
  )

  const outerSectorPath = useMemo(
    () =>
      createAnnularSector(
        WHEEL_CONFIG.OUTER_INNER_R,
        WHEEL_CONFIG.OUTER_OUTER_R,
        -30,
        30,
      ),
    [],
  )

  // Dedicated Group-Band sectors between Hub and Middle Ring (prevents any overlap with segment text)
  const groupBandEmergingSector = useMemo(
    () =>
      createAnnularSector(
        WHEEL_CONFIG.GROUP_BAND_INNER,
        WHEEL_CONFIG.GROUP_BAND_OUTER,
        -20,
        260,
      ),
    [],
  )

  const groupBandNonTechSector = useMemo(
    () =>
      createAnnularSector(
        WHEEL_CONFIG.GROUP_BAND_INNER,
        WHEEL_CONFIG.GROUP_BAND_OUTER,
        260,
        340,
      ),
    [],
  )

  const arcEmergingPath = useMemo(
    () =>
      createArcPath(
        (WHEEL_CONFIG.GROUP_BAND_INNER + WHEEL_CONFIG.GROUP_BAND_OUTER) / 2,
        -14,
        254,
      ),
    [],
  )

  const arcNonTechPath = useMemo(
    () =>
      createArcPath(
        (WHEEL_CONFIG.GROUP_BAND_INNER + WHEEL_CONFIG.GROUP_BAND_OUTER) / 2,
        266,
        334,
      ),
    [],
  )

  return (
    <section
      id="chapter-03"
      ref={sectionRef}
      className="skillhub-wheel-section"
      aria-label="Chapter 03: Shield Skill Hub Concentric Career Wheel"
    >
      <div className="skillhub-wheel-grain" />

      {/* Screen reader live announcement */}
      <div className="sr-only" aria-live="polite">
        {liveAnnouncement}
      </div>

      {/* Visually hidden ordered lists for assistive technologies */}
      <div className="sr-only">
        <h3>Shield Skill Hub Career Pathways</h3>
        <ol>
          {courseSegments.map((course, idx) => (
            <li key={course.id}>
              <Link to={course.targetRoute}>
                Pathway {idx + 1}: {course.label} - Eligibility:{" "}
                {course.domainPill}
              </Link>
            </li>
          ))}
        </ol>
        <h3>Accredited Industry Partners</h3>
        <ol>
          {partnerSegments.map((partner, idx) => (
            <li key={partner.id}>
              <Link to={partner.partnerRoute}>
                Partner {idx + 1}: {partner.name} - {partner.tagline}
              </Link>
            </li>
          ))}
        </ol>
      </div>

      {/* ==============================================================
          1. SECTION HEADER (Sits completely ABOVE the wheel block)
      ============================================================== */}
      <div className="skillhub-wheel-header">
        <div className="comic-chapter-badge">
          <span className="dot" />
          <span>CHAPTER 03 / FIND YOUR DOMAIN</span>
        </div>
        <h2 className="skillhub-wheel-title">
          EVERY CAREER HAS A <span>STARTING POINT.</span>
        </h2>
        <p className="skillhub-wheel-desc">
          Find where you belong in the Shield Skill Hub ecosystem. Trace your
          engineering or commerce degree to industry specializations and
          accredited corporate partnerships.
        </p>

        {/* Find My Path Button Banner */}
        <div className="skillhub-wheel-path-banner">
          <div className="flex items-center gap-3 text-left">
            <span className="p-2.5 rounded-xl bg-[#0d4545] text-[#f5b82e] shrink-0">
              <Compass className="w-5 h-5" />
            </span>
            <div>
              <div className="text-xs font-black text-[#172525] uppercase tracking-wide">
                NOT SURE WHERE YOU FIT?
              </div>
              <p className="text-[11px] text-[#536363] font-medium leading-tight">
                Enter your degree branch and career interests to spin the wheel
                to your track.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              recordInteraction()
              setIsFindPathOpen(true)
            }}
            className="comic-btn-gold text-xs px-5 py-2.5 whitespace-nowrap shrink-0 w-full sm:w-auto"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>FIND MY PATH</span>
          </button>
        </div>
      </div>

      {/* ==============================================================
          2. WHEEL BLOCK (Complete Semicircle Stage + Cards)
          Has id="master-map" with scroll-margin-top equal to navbar height
      ============================================================== */}
      <div id="master-map" className="skillhub-wheel-block">
        <div className="skillhub-wheel-stage">
          {/* Left Column: Semicircle Wheel with fully visible center hub */}
          <div
            className="skillhub-wheel-column"
            onMouseEnter={() => {
              isHoveredRef.current = true
            }}
            onMouseLeave={() => {
              isHoveredRef.current = false
              recordInteraction()
            }}
            onFocusCapture={() => {
              isFocusedRef.current = true
            }}
            onBlurCapture={() => {
              isFocusedRef.current = false
              recordInteraction()
            }}
          >
            <div className="skillhub-wheel-svg-stage">
              <svg
                ref={svgRef}
                viewBox="-480 -480 960 960"
                className="skillhub-wheel-svg select-none"
              >
                <defs>
                  {/* Outer Rim Shadow */}
                  <filter
                    id="rim-shadow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feDropShadow
                      dx="4"
                      dy="4"
                      stdDeviation="6"
                      floodColor="#172525"
                      floodOpacity="0.25"
                    />
                  </filter>

                  {/* Hub Ceramic Shadow */}
                  <filter
                    id="hub-ceramic-shadow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feDropShadow
                      dx="3"
                      dy="3"
                      stdDeviation="5"
                      floodColor="#172525"
                      floodOpacity="0.3"
                    />
                  </filter>

                  {/* Emerging Tech Arc Label Path */}
                  <path id="arc-group-emerging" d={arcEmergingPath} />
                  {/* Non Tech Arc Label Path */}
                  <path id="arc-group-nontech" d={arcNonTechPath} />
                </defs>

                {/* Outer Wheel Rim Border with tick marks */}
                <circle
                  cx="0"
                  cy="0"
                  r={WHEEL_CONFIG.RIM_R}
                  fill="none"
                  stroke="#172525"
                  strokeWidth="8"
                  filter="url(#rim-shadow)"
                />
                <circle
                  cx="0"
                  cy="0"
                  r={WHEEL_CONFIG.RIM_R - 4}
                  fill="none"
                  stroke="#FAF8F3"
                  strokeWidth="1.5"
                  strokeDasharray="4 8"
                />

                {/* ==============================================================
                    ZONE 3: OUTER RING (6 Industry Partners, 60° each)
                    Independently rotating group with counter-rotation support
                ============================================================== */}
                <g
                  transform={`rotate(${angleOuter})`}
                  className="skillhub-ring-group"
                  onPointerDown={handlePointerDownOuter}
                  onPointerMove={handlePointerMoveOuter}
                  onPointerUp={handlePointerUpOuter}
                  onPointerCancel={handlePointerUpOuter}
                  onKeyDown={handleKeyDownOuter}
                  tabIndex={0}
                  role="region"
                  aria-label="Outer Ring: Industry Partners. Counter-rotates smoothly like a roulette wheel. Use left/right arrows to step."
                >
                  {partnerSegments.map((partner, index) => {
                    const isActive = index === activeOuterIndex
                    const [line1, line2] = getTwoLinePartnerLabel(partner)

                    // Partner sector background fill
                    const panelFill = isActive
                      ? "#115B5B"
                      : index % 2 === 0
                        ? "#183F3F"
                        : "#0D4545"

                    // Calculate visible angle on the dial to prevent upside-down text
                    const currentVisAngle =
                      (((index * 60 + angleOuter) % 360) + 360) % 360
                    const isLeftHalf =
                      currentVisAngle > 90 && currentVisAngle < 270

                    return (
                      <g
                        key={partner.id}
                        transform={`rotate(${index * 60})`}
                        className="skillhub-ring-segment"
                        role="button"
                        tabIndex={0}
                        aria-label={`Partner ${index + 1} of 6: ${partner.name}. Click to select.`}
                        onClick={() => handlePartnerClick(index)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault()
                            handlePartnerClick(index)
                          }
                        }}
                      >
                        {/* Annular Sector */}
                        <path
                          d={outerSectorPath}
                          fill={panelFill}
                          stroke={isActive ? "#f5b82e" : "#172525"}
                          strokeWidth={isActive ? "3.5" : "2"}
                        />

                        {/* Inner Raised Logo Tile (r = 345px) */}
                        <g transform="translate(345, 0)">
                          <circle
                            cx="0"
                            cy="0"
                            r="14"
                            fill="#FAF8F3"
                            stroke="#172525"
                            strokeWidth="1.5"
                          />
                          <PartnerVectorGraphics partnerId={partner.id} />
                        </g>

                        {/* Partner Name along radius outward of tile (r = 370px to 442px) */}
                        <g
                          transform={
                            isLeftHalf ? "rotate(180, 406, 0)" : undefined
                          }
                        >
                          {line2 ? (
                            <>
                              <text
                                x="370"
                                y="-4"
                                fontSize="11"
                                fontWeight="900"
                                fill={isActive ? "#f5b82e" : "#FAF8F3"}
                                letterSpacing="0.04em"
                                fontFamily="'Manrope', sans-serif"
                              >
                                {line1.toUpperCase()}
                              </text>
                              <text
                                x="370"
                                y="9"
                                fontSize="10"
                                fontWeight="800"
                                fill={isActive ? "#ffffff" : "#DBE7E4"}
                                letterSpacing="0.03em"
                                fontFamily="'Manrope', sans-serif"
                              >
                                {line2.toUpperCase()}
                              </text>
                            </>
                          ) : (
                            <text
                              x="370"
                              y="3.5"
                              fontSize="11.5"
                              fontWeight="900"
                              fill={isActive ? "#f5b82e" : "#FAF8F3"}
                              letterSpacing="0.05em"
                              fontFamily="'Manrope', sans-serif"
                            >
                              {line1.toUpperCase()}
                            </text>
                          )}
                        </g>
                      </g>
                    )
                  })}
                </g>

                {/* Outer Gutter 3 */}
                <circle
                  cx="0"
                  cy="0"
                  r={WHEEL_CONFIG.OUTER_INNER_R}
                  fill="none"
                  stroke="#172525"
                  strokeWidth="2.5"
                />

                {/* ==============================================================
                    ZONE 2: MIDDLE RING (9 Courses / Pathways, 40° each)
                    Independently rotating group with continuous smooth physics
                ============================================================== */}
                <g
                  transform={`rotate(${angleMid})`}
                  className="skillhub-ring-group"
                  onPointerDown={handlePointerDownMid}
                  onPointerMove={handlePointerMoveMid}
                  onPointerUp={handlePointerUpMid}
                  onPointerCancel={handlePointerUpMid}
                  onKeyDown={handleKeyDownMid}
                  tabIndex={0}
                  role="region"
                  aria-label="Middle Ring: 9 Career Pathways. Rotates smoothly around wheel center. Use left/right arrows to step."
                >
                  {courseSegments.map((course, index) => {
                    const isActive = index === activeMidIndex
                    const isNonTech = index >= 7
                    const [line1, line2] = getTwoLineCourseLabel(course)

                    // Palette mapping: Emerging Tech alternating cream/white, Non Tech soft teal/mint
                    const baseFill = isNonTech
                      ? index % 2 === 0
                        ? "#E2F2E9"
                        : "#E7F1EF"
                      : index % 2 === 0
                        ? "#FAF8F3"
                        : "#FFFFFF"

                    const segmentFill = isActive ? "#FFF9E6" : baseFill

                    // Visual angle calculation for text orientation
                    const currentVisAngle =
                      (((index * 40 + angleMid) % 360) + 360) % 360
                    const isLeftHalf =
                      currentVisAngle > 90 && currentVisAngle < 270

                    return (
                      <g
                        key={course.id}
                        transform={`rotate(${index * 40})`}
                        className="skillhub-ring-segment"
                        role="button"
                        tabIndex={0}
                        aria-label={`Course ${index + 1} of 9: ${course.label}. Click to select.`}
                        onClick={() => handleCourseClick(index)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault()
                            handleCourseClick(index)
                          }
                        }}
                      >
                        {/* Annular Sector */}
                        <path
                          d={middleSectorPath}
                          fill={segmentFill}
                          stroke={isActive ? "#f5b82e" : "#172525"}
                          strokeWidth={isActive ? "3.5" : "2"}
                        />

                        {/* Slot 1: Editorial Numeral (01 - 09) at inner edge r = 180px */}
                        <text
                          x="180"
                          y="5"
                          textAnchor="middle"
                          fontSize="14"
                          fontWeight="900"
                          fill={
                            isActive
                              ? "#8C652E"
                              : isNonTech
                                ? "#115B5B"
                                : "#172525"
                          }
                          fontFamily="'Manrope', sans-serif"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </text>

                        {/* Slot 2: Title in the middle (r = 200px to 284px) */}
                        <g
                          transform={
                            isLeftHalf ? "rotate(180, 242, 0)" : undefined
                          }
                        >
                          <text
                            x="202"
                            y="-4"
                            fontSize="11"
                            fontWeight="800"
                            fill="#172525"
                            fontFamily="'Manrope', sans-serif"
                          >
                            {line1}
                          </text>
                          <text
                            x="202"
                            y="9"
                            fontSize="10"
                            fontWeight="700"
                            fill="#536363"
                            fontFamily="'Manrope', sans-serif"
                          >
                            {line2}
                          </text>
                        </g>

                        {/* Slot 3: Outer edge status dot at r = 298px */}
                        <circle
                          cx="298"
                          cy="0"
                          r={isActive ? "4" : "2.5"}
                          fill={isActive ? "#f5b82e" : "#172525"}
                          stroke="#172525"
                          strokeWidth="1"
                        />
                      </g>
                    )
                  })}
                </g>

                {/* Middle Gutter 2 */}
                <circle
                  cx="0"
                  cy="0"
                  r={WHEEL_CONFIG.MIDDLE_INNER_R}
                  fill="none"
                  stroke="#172525"
                  strokeWidth="2.5"
                />

                {/* ==============================================================
                    DEDICATED GROUP-LABEL BAND (GROUP_BAND: 127px to 155px)
                    Curved labels in their own band, strictly between Hub and Middle Ring
                ============================================================== */}
                <g transform={`rotate(${angleMid})`} pointerEvents="none">
                  {/* Emerging Tech Sector */}
                  <path
                    d={groupBandEmergingSector}
                    fill="#183f3f"
                    stroke="#172525"
                    strokeWidth="1.5"
                  />
                  {/* Non Tech Sector */}
                  <path
                    d={groupBandNonTechSector}
                    fill="#115b5b"
                    stroke="#172525"
                    strokeWidth="1.5"
                  />
                  {/* Emerging Tech Curved Label */}
                  <text
                    fontSize="8.5"
                    fontWeight="900"
                    fill="#f5b82e"
                    letterSpacing="0.14em"
                  >
                    <textPath
                      href="#arc-group-emerging"
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      ✦ EMERGING TECH ✦
                    </textPath>
                  </text>
                  {/* Non Tech Curved Label */}
                  <text
                    fontSize="8.5"
                    fontWeight="900"
                    fill="#ffffff"
                    letterSpacing="0.14em"
                  >
                    <textPath
                      href="#arc-group-nontech"
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      ✦ NON TECH ✦
                    </textPath>
                  </text>

                  {/* Radial Divider tick marks at group boundaries */}
                  <line
                    x1={
                      WHEEL_CONFIG.GROUP_BAND_INNER *
                      Math.cos((260 * Math.PI) / 180)
                    }
                    y1={
                      WHEEL_CONFIG.GROUP_BAND_INNER *
                      Math.sin((260 * Math.PI) / 180)
                    }
                    x2={
                      WHEEL_CONFIG.GROUP_BAND_OUTER *
                      Math.cos((260 * Math.PI) / 180)
                    }
                    y2={
                      WHEEL_CONFIG.GROUP_BAND_OUTER *
                      Math.sin((260 * Math.PI) / 180)
                    }
                    stroke="#f5b82e"
                    strokeWidth="2"
                  />
                  <line
                    x1={
                      WHEEL_CONFIG.GROUP_BAND_INNER *
                      Math.cos((340 * Math.PI) / 180)
                    }
                    y1={
                      WHEEL_CONFIG.GROUP_BAND_INNER *
                      Math.sin((340 * Math.PI) / 180)
                    }
                    x2={
                      WHEEL_CONFIG.GROUP_BAND_OUTER *
                      Math.cos((340 * Math.PI) / 180)
                    }
                    y2={
                      WHEEL_CONFIG.GROUP_BAND_OUTER *
                      Math.sin((340 * Math.PI) / 180)
                    }
                    stroke="#f5b82e"
                    strokeWidth="2"
                  />
                </g>

                {/* Inner Gutter 1 */}
                <circle
                  cx="0"
                  cy="0"
                  r={WHEEL_CONFIG.GROUP_BAND_INNER}
                  fill="none"
                  stroke="#172525"
                  strokeWidth="2"
                />

                {/* ==============================================================
                    ZONE 1: INNER CERAMIC DISC (FIXED, NEVER ROTATES, r = 120px)
                    Fully visible complete circle with centered logo & typography
                ============================================================== */}
                <g id="wheel-center-hub" filter="url(#hub-ceramic-shadow)">
                  <circle
                    cx="0"
                    cy="0"
                    r={WHEEL_CONFIG.HUB_R}
                    fill="#FAF8F3"
                    stroke="#F5B82E"
                    strokeWidth="3.5"
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r={WHEEL_CONFIG.HUB_R - 5}
                    fill="none"
                    stroke="#172525"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />

                  {/* Upright Centered Shield Logo */}
                  <image
                    href={shieldLogo}
                    x="-34"
                    y="-62"
                    width="68"
                    height="46"
                    preserveAspectRatio="xMidYMid meet"
                  />

                  {/* Hub Typography (Centered with at least 14px padding) */}
                  <text
                    x="0"
                    y="6"
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="900"
                    fill="#172525"
                    letterSpacing="0.08em"
                    fontFamily="'Manrope', sans-serif"
                  >
                    SHIELD SKILL HUB
                  </text>
                  <text
                    x="0"
                    y="20"
                    textAnchor="middle"
                    fontSize="7.5"
                    fontWeight="800"
                    fill="#536363"
                    letterSpacing="0.1em"
                    fontFamily="'Manrope', sans-serif"
                  >
                    POWERED BY SHIELD GROUP
                  </text>

                  {/* Hub Badge */}
                  <g transform="translate(0, 36)">
                    <rect
                      x="-48"
                      y="-7"
                      width="96"
                      height="15"
                      rx="9"
                      fill="#172525"
                      stroke="#F5B82E"
                      strokeWidth="1.2"
                    />
                    <text
                      x="0"
                      y="3"
                      textAnchor="middle"
                      fontSize="7.5"
                      fontWeight="800"
                      fill="#F5B82E"
                      letterSpacing="0.08em"
                      fontFamily="'Manrope', sans-serif"
                    >
                      SPIN TO EXPLORE ↺
                    </text>
                  </g>
                </g>

                {/* ==============================================================
                    ACTIVE SLOT BRACKET & POINTER ASSEMBLY (AT 3 O'CLOCK, 0°)
                    Built completely in SVG — zero stray white boxes or ghost divs!
                ============================================================== */}
                {/* Gold Active Slot Bracket spanning Middle and Outer rings at 3 o'clock */}
                <rect
                  x={WHEEL_CONFIG.MIDDLE_INNER_R - 2}
                  y={-24}
                  width={
                    WHEEL_CONFIG.OUTER_OUTER_R - WHEEL_CONFIG.MIDDLE_INNER_R + 6
                  }
                  height={48}
                  rx={6}
                  fill="none"
                  stroke="#f5b82e"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  opacity="0.85"
                  pointerEvents="none"
                />

                {/* Pointer Notch outside Outer Ring at 3 o'clock pointing inward */}
                <polygon
                  points="472,-11 458,0 472,11"
                  fill="#f5b82e"
                  stroke="#172525"
                  strokeWidth="2"
                  pointerEvents="none"
                />

                {/* Roulette Flapper Needle (flicks on boundary pass) */}
                <g
                  transform={`rotate(${flapperAngle}, 472, 0)`}
                  pointerEvents="none"
                >
                  <rect
                    x="465"
                    y="-2"
                    width="12"
                    height="4"
                    rx="1.5"
                    fill="#ffffff"
                    stroke="#172525"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </div>

            {/* Quick Step Toolbar (Previous / Next Buttons eased over ~900ms) */}
            <div className="skillhub-wheel-controls-toolbar">
              <div className="skillhub-ring-control-group">
                <span className="text-[10px] font-black uppercase text-[#172525] tracking-wider mr-1">
                  Courses:
                </span>
                <button
                  type="button"
                  aria-label="Previous Course"
                  className="skillhub-control-btn"
                  onClick={handlePrevMid}
                >
                  ‹
                </button>
                <span className="text-xs font-black text-[#172525] px-1">
                  {String(activeMidIndex + 1).padStart(2, "0")} / 09
                </span>
                <button
                  type="button"
                  aria-label="Next Course"
                  className="skillhub-control-btn"
                  onClick={handleNextMid}
                >
                  ›
                </button>
              </div>

              <div className="skillhub-ring-control-group">
                <span className="text-[10px] font-black uppercase text-[#172525] tracking-wider mr-1">
                  Partners:
                </span>
                <button
                  type="button"
                  aria-label="Previous Partner"
                  className="skillhub-control-btn"
                  onClick={handlePrevOuter}
                >
                  ‹
                </button>
                <span className="text-xs font-black text-[#172525] px-1">
                  {String(activeOuterIndex + 1).padStart(2, "0")} / 06
                </span>
                <button
                  type="button"
                  aria-label="Next Partner"
                  className="skillhub-control-btn"
                  onClick={handleNextOuter}
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Detail Content Cards Deck + Dynamic Gold Connector */}
          <div className="skillhub-wheel-right-deck">
            {/* 1. PATHWAY CARD (Driven by Middle Ring's Active Segment) */}
            {activeCourse && (
              <div
                className={`skillhub-detail-card ${
                  isNavigating ? "is-navigating" : ""
                }`}
                style={{ animation: "fadeIn 0.25s ease-out" }}
              >
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0d4545] text-[#f5b82e] text-[10px] font-black uppercase tracking-wider border border-[#172525]">
                    <span>
                      {activeMidIndex < 7 ? "EMERGING TECH" : "NON TECH"}
                    </span>
                    <span>•</span>
                    <span>
                      PATHWAY {String(activeMidIndex + 1).padStart(2, "0")} OF
                      09
                    </span>
                  </span>
                  {activeCourse.partnerId && (
                    <span className="text-[10px] font-bold text-[#15803d] bg-[#dcfce7] px-2 py-0.5 rounded border border-[#86efac]">
                      Industry Mapped
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#172525] tracking-tight mb-2 leading-snug">
                  {activeCourse.label}
                </h3>

                <p className="text-xs text-[#536363] font-medium leading-relaxed mb-4 line-clamp-2">
                  {activeCourse.overview ||
                    "Practical specialization engineering syllabus aligned with high-performance industry standards."}
                </p>

                {/* Sub-topics for ABC / Quantum */}
                {activeCourse.id === "abc-quantum" && (
                  <div className="mb-4 p-2.5 rounded-xl bg-[#FAF6EE] border border-[#C9A978]">
                    <div className="text-[9.5px] font-black uppercase tracking-wider text-[#8C652E] mb-1.5">
                      CORE SUB-TOPICS:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "Artificial Intelligence",
                        "Blockchain Ledgers",
                        "Cyber Security Defense",
                        "Quantum Qubits",
                      ].map((sub) => (
                        <span
                          key={sub}
                          className="px-2 py-0.5 rounded bg-[#ffffff] border border-[#172525]/15 text-[10px] font-bold text-[#172525]"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* RECOMMENDED FOR Chips (taken verbatim from domain pill in data file) */}
                <div className="mb-5">
                  <div className="text-[10px] font-black uppercase tracking-wider text-[#8C652E] mb-2">
                    RECOMMENDED FOR (ELIGIBLE BRANCHES):
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCourse.whoCanJoin.map((branch) => (
                      <span
                        key={branch}
                        className="px-2.5 py-1 rounded bg-[#ffffff] border border-[#172525]/25 text-[10.5px] font-extrabold text-[#172525] shadow-xs"
                      >
                        {branch}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  type="button"
                  onClick={handleNavigatePathway}
                  className="comic-btn-gold w-full text-xs"
                >
                  <span>VIEW PATHWAY SPECIFICATIONS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* DYNAMIC GOLD CONNECTOR BAR (Lights up when Active Course & Partner are Mapped) */}
            <div className="skillhub-card-connector-bar">
              {isCurrentlyMapped ? (
                <div className="skillhub-connector-pill is-active">
                  <span>⚡</span>
                  <span>VERIFIED PARTNERSHIP ECOSYSTEM LINKED</span>
                  <span>⚡</span>
                </div>
              ) : (
                <div className="skillhub-connector-pill is-dimmed">
                  <span>✦</span>
                  <span>INDEPENDENT SPECIALIZATION TRACK</span>
                  <span>✦</span>
                </div>
              )}
            </div>

            {/* 2. INDUSTRY PARTNER CARD (Driven by Outer Ring's Active Segment) */}
            {activePartner && (
              <div
                className={`skillhub-detail-card skillhub-detail-card-dark ${
                  isNavigating ? "is-navigating" : ""
                }`}
                style={{ animation: "fadeIn 0.25s ease-out" }}
              >
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#f5b82e] text-[#172525] text-[10px] font-black uppercase tracking-wider border border-[#172525]">
                    <span>INDUSTRY ALLIANCE</span>
                    <span>•</span>
                    <span>
                      PARTNER {String(activeOuterIndex + 1).padStart(2, "0")} OF
                      06
                    </span>
                  </span>
                  <span className="text-[10px] font-bold text-[#dbe7e4] bg-white/10 px-2.5 py-0.5 rounded border border-white/20">
                    Corporate Partner
                  </span>
                </div>

                <div className="flex items-center gap-3.5 mb-3">
                  <PartnerCardEmblem partnerId={activePartner.id} size={42} />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                      {activePartner.name}
                    </h3>
                    <p className="text-xs text-[#f5b82e] font-bold">
                      {activePartner.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#dbe7e4] leading-relaxed mb-4 line-clamp-2">
                  {activePartner.description}
                </p>

                {/* Status or Associated courses */}
                <div className="mb-5">
                  <div className="text-[10px] font-black uppercase tracking-wider text-[#f5b82e] mb-2">
                    ACTIVE CO-DELIVERY TRACK:
                  </div>
                  {activePartner.courses.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                      {activePartner.courses.map((cName) => (
                        <span
                          key={cName}
                          className="px-2.5 py-1 rounded bg-white/10 border border-white/20 text-[10.5px] font-bold text-white shadow-xs"
                        >
                          {cName}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="text-[11px] font-semibold text-[#f5b82e] bg-[#f5b82e]/10 border border-[#f5b82e]/30 px-3 py-1.5 rounded-lg inline-block">
                      Courses Coming Soon — Partnership Track Finalizing
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <button
                  type="button"
                  onClick={handleNavigatePartner}
                  className="comic-btn-gold w-full text-xs"
                >
                  <span>EXPLORE PARTNER PROFILE & LABS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ==============================================================
          MOBILE & TABLET FALLBACK (< 1024px)
          Linear comic chapter feed for mobile devices
      ============================================================== */}
      <div className="skillhub-mobile-journey">
        <div className="space-y-6">
          {/* Emerging Tech Section (7 Items) */}
          <div className="comic-panel-card p-5 bg-[#faf8f3]">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block px-2.5 py-1 rounded bg-[#0d4545] text-[#f5b82e] font-black text-xs uppercase">
                EMERGING TECH
              </span>
              <span className="text-xs font-bold text-[#536363]">
                7 Pathways
              </span>
            </div>
            <div className="space-y-3">
              {courseSegments.slice(0, 7).map((item, idx) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-white border border-[#172525]/15"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h5 className="text-sm font-black text-[#172525]">
                      {String(idx + 1).padStart(2, "0")}. {item.label}
                    </h5>
                    <Link
                      to={item.targetRoute}
                      className="p-1 rounded bg-[#f4efe6] text-[#172525]"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.whoCanJoin.map((b) => (
                      <span
                        key={b}
                        className="px-1.5 py-0.5 rounded bg-[#f4efe6] text-[10px] font-bold text-[#536363]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Non-Tech Section (2 Items) */}
          <div className="comic-panel-card p-5 bg-[#e7f1ef]">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block px-2.5 py-1 rounded bg-[#115b5b] text-white font-black text-xs uppercase">
                NON TECH
              </span>
              <span className="text-xs font-bold text-[#536363]">
                2 Pathways
              </span>
            </div>
            <div className="space-y-3">
              {courseSegments.slice(7).map((item, idx) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-white border border-[#172525]/15"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h5 className="text-sm font-black text-[#172525]">
                      {String(idx + 8).padStart(2, "0")}. {item.label}
                    </h5>
                    <Link
                      to={item.targetRoute}
                      className="p-1 rounded bg-[#f4efe6] text-[#172525]"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.whoCanJoin.map((b) => (
                      <span
                        key={b}
                        className="px-1.5 py-0.5 rounded bg-[#f4efe6] text-[10px] font-bold text-[#536363]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Partners Section (6 Items) */}
          <div className="comic-panel-card p-5 bg-[#183f3f] text-white">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block px-2.5 py-1 rounded bg-[#f5b82e] text-[#172525] font-black text-xs uppercase">
                INDUSTRY ALLIANCES
              </span>
              <span className="text-xs font-bold text-[#dbe7e4]">
                6 Partners
              </span>
            </div>
            <div className="space-y-3">
              {partnerSegments.map((partner) => (
                <div
                  key={partner.id}
                  className="p-3.5 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2.5">
                    <PartnerCardEmblem partnerId={partner.id} size={30} />
                    <div>
                      <h5 className="text-sm font-bold text-white">
                        {partner.name}
                      </h5>
                      <p className="text-[11px] text-[#f5b82e] line-clamp-1">
                        {partner.tagline}
                      </p>
                    </div>
                  </div>
                  <Link
                    to={partner.partnerRoute}
                    className="comic-btn-gold text-[11px] px-3 py-1.5 shrink-0"
                  >
                    <span>Profile</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Find My Path Modal with Wheel-Spin callback */}
      <FindMyPathModal
        isOpen={isFindPathOpen}
        onClose={() => setIsFindPathOpen(false)}
        onSelectPathway={handleFindPathSelect}
      />
    </section>
  )
}

export default SkillHubFlowchart
