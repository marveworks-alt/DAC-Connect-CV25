import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { Flame, Home, BookOpen, Video, MessageCircle, User2, Radio } from 'lucide-react'
import { useAppStore } from '../store/appStore'
import { hapticTap } from '../lib/haptics'
import { AnimatePresence } from 'framer-motion'
import SceneMarkerOverlay from './SceneMarkerOverlay'

export default function Layout() {
  const navigate = useNavigate()
  const { sceneMarker } = useAppStore()
  return (
    <div className="min-h-dvh flex flex-col bg-[url('/branding/bca-crest.png')] bg-no-repeat bg-[length:260px] bg-[position:90%_5%]">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-gold/20">
        <div className="max-w-screen-sm mx-auto px-4 py-3 flex items-center gap-3">
          <button onClick={() => { hapticTap('light'); navigate('/dashboard') }} className="flex items-center gap-2">
            <Flame className="text-sun animate-torch" />
            <span className="font-heading text-lg">BCA Portal</span>
          </button>
          <div className="ml-auto flex items-center gap-2 text-xs">
            <ModeBadge />
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-screen-sm w-full mx-auto px-4">
        <Outlet />
      </main>
      <nav className="sticky bottom-0 z-30 border-t border-gold/20 bg-white/90 backdrop-blur">
        <div className="max-w-screen-sm mx-auto grid grid-cols-6">
          <Tab to="/dashboard" icon={<Home />} label="Home" />
          <Tab to="/courses" icon={<BookOpen />} label="Courses" />
          <Tab to="/feed" icon={<Video />} label="Feed" />
          <Tab to="/messages" icon={<MessageCircle />} label="Messages" />
          <Tab to="/bujpod" icon={<Radio />} label="BujPod" />
          <Tab to="/profile" icon={<User2 />} label="Profile" />
        </div>
      </nav>
      <AnimatePresence>{sceneMarker && <SceneMarkerOverlay scene={sceneMarker} />}</AnimatePresence>
    </div>
  )
}

function ModeBadge() {
  const { mode, setMode } = useAppStore()
  return (
    <button
      onClick={() => { setMode(mode === 'film' ? 'fan' : 'film'); hapticTap('medium') }}
      className="btn text-xs px-3 py-1"
      aria-label="Toggle film/fan mode"
    >
      {mode === 'film' ? 'Film Mode' : 'Fan Mode'}
    </button>
  )
}

function Tab({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center justify-center py-2 text-xs ${isActive ? 'text-navy' : 'text-navy/60'}`
      }
      onClick={() => hapticTap('light')}
    >
      <div className="h-6 w-6">{icon}</div>
      <span>{label}</span>
    </NavLink>
  )
}
