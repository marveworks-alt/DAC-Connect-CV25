import { useState } from 'react'

interface Thread { id: string; name: string; messages: { sender: string; text: string }[] }

const filmThreads: Thread[] = [
  { id: 'vanessa', name: 'Vanessa', messages: [
    { sender: 'Vanessa', text: 'New post dropping soon. Keep it hush.' },
    { sender: 'You', text: 'Copy. Timing?' },
  ]},
]

export default function Messages() {
  const [threads] = useState<Thread[]>(filmThreads)
  const [current, setCurrent] = useState<Thread>(threads[0])
  const [text, setText] = useState('')

  const send = () => {
    const t = text.trim()
    if (!t) return
    setCurrent((prev) => ({ ...prev, messages: [...prev.messages, { sender: 'You', text: t }] }))
    setText('')
    if (t.startsWith('/truth') || t.toLowerCase() === 'truth') {
      setTimeout(() => {
        setCurrent((prev) => ({ ...prev, messages: [...prev.messages, { sender: 'SYSTEM', text: 'signal> the algorithm watches those who watch it.' }] }))
      }, 500)
    }
  }

  return (
    <div className="grid grid-cols-[120px_1fr] gap-3 py-4">
      <div className="space-y-2">
        {threads.map((t) => (
          <button key={t.id} onClick={() => setCurrent(t)} className={`w-full text-left p-2 rounded border ${current.id === t.id ? 'bg-sun' : ''}`}>{t.name}</button>
        ))}
      </div>
      <div className="flex flex-col">
        <div className="flex-1 min-h-[50vh] p-3 rounded border bg-white space-y-2 overflow-y-auto">
          {current.messages.map((m, i) => (
            <div key={i} className={`max-w-[75%] p-2 rounded ${m.sender === 'You' ? 'bg-sun ml-auto' : 'bg-navy text-white'}`}>
              <div className="text-xs opacity-70">{m.sender}</div>
              <div>{m.text}</div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex gap-2">
          <input value={text} onChange={(e) => setText(e.target.value)} className="flex-1 border rounded px-3" placeholder="Type a message or /truth" />
          <button className="btn" onClick={send}>Send</button>
        </div>
      </div>
    </div>
  )
}
