import { motion } from 'framer-motion'

export default function SceneMarkerOverlay({ scene }: { scene: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pointer-events-none fixed inset-0 z-40 flex items-start justify-center pt-10"
    >
      <div className="bg-black/60 text-white px-3 py-1 rounded font-mono text-sm">SCENE: {scene}</div>
    </motion.div>
  )
}
