import { useState } from 'react'
import { hapticTap } from '../lib/haptics'
import { useAppStore } from '../store/appStore'

const subjects = ['Digital Civics', 'Influence Management', 'Algorithm Studies']

export default function Courses() {
  const [query, setQuery] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [text, setText] = useState('')
  const { pushPost } = useAppStore()

  const submit = () => {
    hapticTap('medium')
    pushPost({ author: 'You', category: 'Campus Buzz', content: `Assignment submitted: ${text || (file && file.name) || 'Untitled'}` })
    setFile(null)
    setText('')
    alert('Assignment submitted (mock).')
  }

  const onSearch = (value: string) => {
    setQuery(value)
    if (value.toLowerCase() === 'ringlight') {
      window.location.href = '/terminal'
    }
  }

  return (
    <div className="py-4 space-y-4">
      <h2 className="font-heading text-2xl mb-2">Creative Lab</h2>
      <input value={query} onChange={(e) => onSearch(e.target.value)} placeholder="Search subjects (hint: ringlight)" className="w-full border rounded px-3 py-2" />
      <div className="grid gap-2">
        {subjects.map((s) => (
          <div key={s} className="p-3 rounded bg-white border border-gold/20">{s}</div>
        ))}
      </div>

      <div className="card p-3 space-y-2">
        <h3 className="font-heading">Submit Assignment</h3>
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="w-full border rounded p-2" placeholder="Essay text (optional)" />
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        <button className="btn" onClick={submit}>Submit</button>
      </div>
    </div>
  )
}
