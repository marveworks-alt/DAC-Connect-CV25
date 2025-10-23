import { useAppStore } from '../store/appStore'
import { useState } from 'react'

export default function Profile() {
  const { user } = useAppStore()
  const [verifyOpen, setVerifyOpen] = useState(false)
  return (
    <div className="py-4 space-y-4">
      <div className="flex items-center gap-3">
        <img src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${encodeURIComponent(user.displayName)}`} className="w-16 h-16 rounded-full border" />
        <div>
          <div className="font-heading text-xl">{user.displayName}</div>
          <div className="text-navy/60">Rank {user.rank} • Influence {user.influenceScore}</div>
          <div className="text-sm italic">{user.motto}</div>
        </div>
      </div>
      <button className="btn" onClick={() => setVerifyOpen(true)}>Verify Me</button>
      {verifyOpen && (
        <div className="p-3 rounded bg-navy text-sun">
          You are already visible. Stay real.
        </div>
      )}
    </div>
  )
}
