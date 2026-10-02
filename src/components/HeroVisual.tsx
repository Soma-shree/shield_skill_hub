import React, { useState, useRef } from "react"
import { Icon } from "./Icons"

export function HeroVisual() {
  const [isSpinning, setIsSpinning] = useState(false)
  const visualRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (!isSpinning) {
      setIsSpinning(true)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!visualRef.current) return
    if (window.matchMedia("(pointer: coarse)").matches) return

    const rect = visualRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    visualRef.current.style.setProperty("--mx", x.toFixed(3))
    visualRef.current.style.setProperty("--my", y.toFixed(3))
  }

  const handleMouseLeave = () => {
    if (!visualRef.current) return
    visualRef.current.style.setProperty("--mx", "0")
    visualRef.current.style.setProperty("--my", "0")
  }

  return (
    <div
      ref={visualRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hero-visual"
      aria-label="Interactive learning technology illustration"
    >
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />
      <div className="visual-glow" />
      <div className="float-card float-code">
        <Icon name="code" />
        <span>Build</span>
      </div>
      <div className="float-card float-cloud">
        <Icon name="cloud" />
        <span>Cloud</span>
      </div>
      <div className="float-card float-ai">
        <Icon name="brain" />
        <span>AI</span>
      </div>
      <div
        className={`laptop ${isSpinning ? "laptop-spin" : "laptop-float"}`}
        onMouseEnter={handleMouseEnter}
        onAnimationEnd={() => setIsSpinning(false)}
        role="img"
        aria-label="Interactive 3D laptop"
      >
        <div className="laptop-screen">
          <div className="screen-top">
            <span />
            <span />
            <span />
          </div>
          <div className="screen-code">
            <span className="line line-a" />
            <span className="line line-b" />
            <span className="line line-c" />
            <div className="screen-window">
              <div className="mini-orb">
                <Icon name="brain" size={24} />
              </div>
              <b>Deep Learning</b>
              <small>Model active</small>
            </div>
          </div>
        </div>
        <div className="laptop-base">
          <span />
        </div>
      </div>
      <div className="platform">
        <span />
      </div>
      <div className="visual-badge badge-students">
        <Icon name="users" />
        <b>Learn</b>
        <small>With guidance</small>
      </div>
      <div className="visual-badge badge-rating">
        <Icon name="star" />
        <b>Build</b>
        <small>Real projects</small>
      </div>
    </div>
  )
}
export default HeroVisual
