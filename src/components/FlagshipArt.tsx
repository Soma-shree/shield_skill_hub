import React, { useState, useEffect, useRef } from "react"
import { Icon } from "./Icons"

export function FlagshipArt() {
  const [rocketState, setRocketState] =
    useState<"idle" | "launching" | "ready">("idle")
  const artRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = artRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && rocketState === "idle") {
          setRocketState("launching")
          const timer = setTimeout(() => {
            setRocketState("ready")
          }, 2800)
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rocketState])

  return (
    <div className="flagship-art" ref={artRef}>
      <div
        className={`rocket-trail ${
          rocketState === "launching" ? "trail-launching" : ""
        }`}
      >
        <i />
        <i />
        <i />
      </div>
      <div
        className={`big-rocket ${
          rocketState === "launching" ? "rocket-launching" : "rocket-idle"
        }`}
        role="img"
        aria-label="Interactive flagship career rocket"
      >
        <Icon name="rocket" size={74} />
      </div>
      <div className="orbit-card orbit-card-code">
        <Icon name="code" />
      </div>
      <div className="orbit-card orbit-card-chart">
        <Icon name="chart" />
      </div>
      <div className="orbit-card orbit-card-star">
        <Icon name="star" />
      </div>
      <div className="flag-platform" />
    </div>
  )
}
export default FlagshipArt
