import { useNavigate } from 'react-router-dom'
import { useAppStore } from '../store/appStore'
import { hapticTap } from '../lib/haptics'
import Metric from '../components/Metric'
import { Flame, UploadCloud, Play } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Dashboard() {
  const { user, feed, liveFridayActive } = useAppStore()
  const navigate = useNavigate()

  return (
    <div className="py-4 space-y-6">
      <header className="flex items-center gap-3">
        <img src="/branding/bca-crest.png" className="w-10 h-10" />
        <div>
          <h2 className="font-heading text-xl">Hello, {user.displayName}</h2>
          <div className="text-navy/60 text-sm">Rank {user.rank} • Influence {user.influenceScore}</div>
        </div>
      </header>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-3 gap-3">
        <Metric label="Next Class" value="10:30 AM" />
        <Metric label="Scene" value="Friday" />
        <Metric label="Alerts" value={3} />
      </motion.div>

      <section className="space-y-3">
        <h3 className="font-heading">Trending Board</h3>
        {feed.slice(0, 3).map((p) => (
          <div key={p.id} className="p-3 rounded bg-white border border-gold/20">
            <div className="text-xs text-navy/70">{p.author} • {new Date(p.createdAt).toLocaleTimeString()}</div>
            <div className="font-medium">{p.content}</div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-2 gap-3">
        <button className="btn flex items-center justify-center gap-2" onClick={() => { hapticTap('medium'); navigate('/courses') }}>
          <UploadCloud /> Upload Project
        </button>
        <button className="btn flex items-center justify-center gap-2" onClick={() => { hapticTap('medium'); navigate('/feed') }}>
          <Play /> Join Live Friday
        </button>
      </div>

      {liveFridayActive && (
        <div className="p-3 rounded bg-navy text-sun flex items-center gap-2">
          <Flame className="text-sun" /> Live Friday mode is ON. Feed is real-time.
        </div>
      )}
    </div>
  )
}
