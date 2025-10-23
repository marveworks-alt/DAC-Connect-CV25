import React from 'react'
import { useAppStore } from '../store/appStore'
import ReactPlayer from 'react-player'

export default function MediaFeed() {
  const { feed, likePost } = useAppStore()
  const [tab, setTab] = React.useState<'Trending' | 'Campus Buzz' | 'BujPod Exclusive'>('Trending')

  const filtered = feed.filter((p) => p.category === tab)

  return (
    <div className="py-4 space-y-3">
      <div className="flex gap-2">
        {(['Trending', 'Campus Buzz', 'BujPod Exclusive'] as const).map((t) => (
          <button key={t} className={`px-3 py-1 rounded border ${tab === t ? 'bg-sun' : ''}`} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
      </div>
      {filtered.map((p) => (
        <div key={p.id} className="p-3 rounded border border-gold/20 bg-white space-y-2">
          <div className="text-xs text-navy/70">{p.author}</div>
          <div>{p.content}</div>
          {p.videoUrl && (
            <div className="aspect-video rounded overflow-hidden">
              <ReactPlayer src={p.videoUrl} width="100%" height="100%" controls />
            </div>
          )}
          <div className="text-sm">❤️ {p.likes} • 💬 {p.comments}</div>
          <button className="btn" onClick={() => likePost(p.id)}>Like</button>
        </div>
      ))}
    </div>
  )
}
