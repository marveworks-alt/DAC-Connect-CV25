import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { hapticTap } from '../lib/haptics'

export default function Splash() {
  const navigate = useNavigate()
  const [_, setSwipes] = useState(0)
  const lastX = useRef<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => navigate('/login'), 2200)
    return () => clearTimeout(timer)
  }, [navigate])

  const onTouchMove = (e: React.TouchEvent) => {
    const x = e.touches[0].clientX
    if (lastX.current === null) lastX.current = x
    const dx = Math.abs(x - lastX.current)
    if (dx > 60) {
      lastX.current = x
      setSwipes((s) => {
        const next = s + 1
        if (next >= 5) {
          hapticTap('medium')
          navigate('/cloutboard')
        }
        return next
      })
    }
  }

  return (
    <div className="min-h-dvh flex items-center justify-center bg-navy text-sun relative overflow-hidden" onTouchMove={onTouchMove}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,200,69,0.12),transparent_60%)]" />
      <div className="flex flex-col items-center gap-4">
        <motion.img
          src="/branding/bca-crest.png"
          alt="BCA Crest"
          className="w-40 h-40 object-contain select-none"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="font-heading text-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Per Videntia, Potentia – Through Visibility, Power
        </motion.h1>
        <motion.div
          className="h-1 w-56 rounded bg-gradient-to-r from-transparent via-sun to-transparent bg-[length:200%_100%] animate-shimmer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        />
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-6 text-white/60 text-xs"
        >
          Swipe crest 5× to unlock
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
