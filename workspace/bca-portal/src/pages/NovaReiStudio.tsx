import { useState } from 'react'

const SNIPPETS: { name: string; url: string }[] = [
  { name: 'Beat', url: 'https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg' },
  { name: 'Hook', url: 'https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg' },
]

export default function NovaReiStudio() {
  const [mix, setMix] = useState<string[]>([])

  const play = async () => {
    await Promise.all(mix.map((u) => new Audio(u).play()))
  }

  return (
    <div className="py-4 space-y-4">
      <h2 className="font-heading text-2xl">Nova Rei Studio</h2>
      <div className="grid grid-cols-2 gap-2">
        {SNIPPETS.map((s) => (
          <label key={s.name} className="p-3 rounded border bg-white flex items-center gap-2">
            <input type="checkbox" checked={mix.includes(s.url)} onChange={(e) => setMix((m) => e.target.checked ? [...m, s.url] : m.filter((x) => x !== s.url))} />
            {s.name}
          </label>
        ))}
      </div>
      <button className="btn" onClick={play}>Play Mix</button>
    </div>
  )
}
