import React, { useState, useEffect, useRef } from "react"

export function StatCounter({
  target,
  suffix = "",
  sublabel,
}: {
  target: number
  suffix?: string
  sublabel: string
}) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 1600
          const start = performance.now()
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(easeOut * target))
            if (progress < 1) {
              requestAnimationFrame(step)
            }
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, hasAnimated])

  return (
    <span ref={ref}>
      <strong>
        {count}
        {suffix}
      </strong>
      {sublabel}
    </span>
  )
}
export default StatCounter
