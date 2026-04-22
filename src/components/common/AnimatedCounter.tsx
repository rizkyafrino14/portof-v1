'use client'
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef } from 'react'

type CounterProps = {
  from: number
  to: number
}

export default function AnimatedCounter({ from, to }: CounterProps) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest)
  })
  const ref = useRef(null)
  const inView = useInView(ref)

  // while in view animate the count
  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 10 })
    }
  }, [count, inView, to])

  return <motion.span ref={ref}>{rounded}</motion.span>
}
