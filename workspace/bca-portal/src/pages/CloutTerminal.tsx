import { useState } from 'react'

export default function CloutTerminal() {
  const [lines, setLines] = useState<string[]>([
    'WELCOME TO CLOUTCHASERS',
    'manifest> visibility is currency. anonymity is a luxury.',
    'manifest> the ringlight reveals and blinds.',
  ])
  const [input, setInput] = useState('')

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase()
      setLines((prev) => [...prev, `> ${input}`])
      if (cmd === 'help') setLines((prev) => [...prev, 'commands: help, open', 'truth reveals.'])
      else if (cmd === 'open' || cmd === 'truth') window.location.href = '/cloutboard'
      else setLines((prev) => [...prev, 'unknown. try: help'])
      setInput('')
    }
  }

  return (
    <div className="min-h-dvh bg-black text-green-400 p-4 font-mono">
      <div className="max-w-screen-sm mx-auto">
        {lines.map((l, idx) => (
          <div key={idx} className="whitespace-pre-wrap">{l}</div>
        ))}
        <div className="flex items-center gap-2 mt-2">
          <span>$</span>
          <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={onKeyDown} className="flex-1 bg-black text-green-400 outline-none" autoFocus />
        </div>
      </div>
    </div>
  )
}
