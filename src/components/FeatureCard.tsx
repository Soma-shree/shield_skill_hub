import React, { useRef } from "react"
import { Link } from "react-router-dom"
import { Icon } from "./Icons"
import { IconName } from "../types"

export function FeatureCard({
  number,
  icon,
  title,
  copy,
  index,
  link = "/programs",
}: {
  number: string
  icon: IconName
  title: string
  copy: string
  index: number
  link?: string
}) {
  const cardRef = useRef<HTMLElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches) return
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const tiltX = ((-y / (rect.height / 2)) * 3).toFixed(2)
    const tiltY = ((x / (rect.width / 2)) * 3).toFixed(2)
    card.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = ""
  }

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`feature-card feature-card-${index + 1} stagger-card`}
    >
      <span className="feature-number">{number}</span>
      <div className="feature-icon">
        <span />
        <Icon name={icon} size={34} />
      </div>
      <h3>{title}</h3>
      <p>{copy}</p>
      <Link to={link} aria-label={`Learn more about ${title}`}>
        <Icon name="arrow" size={18} />
      </Link>
    </article>
  )
}
export default FeatureCard
