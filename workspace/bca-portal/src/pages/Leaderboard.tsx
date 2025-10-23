import { useEffect, useState } from 'react'

interface Entry { name: string; points: number }

export default function Leaderboard() {
  const [entries, setEntries] = useState<Entry[]>([ { name: 'You', points: 10 } ])
  useEffect(() => {
    setEntries((e) => e.map((x) => ({ ...x, points: x.points + 1 })))
  }, [])
  return (
    <div className="py-4">
      <h2 className="font-heading text-2xl mb-2">Influence Ranking</h2>
      <div className="space-y-2">
        {entries.sort((a,b) => b.points - a.points).map((e, i) => (
          <div key={i} className="p-3 rounded border bg-white flex justify-between"><span>{i+1}. {e.name}</span><span>{e.points}</span></div>
        ))}
      </div>
    </div>
  )
}
