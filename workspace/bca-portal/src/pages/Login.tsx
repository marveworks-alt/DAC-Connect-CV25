import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '../store/appStore'
import { hapticTap } from '../lib/haptics'
import { Wifi, LoaderCircle } from 'lucide-react'

export default function Login() {
  const navigate = useNavigate()
  const { setUser } = useAppStore()
  const [studentId, setStudentId] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [morph, setMorph] = useState(false)

  const submit = (guest = false) => {
    setLoading(true)
    setTimeout(() => {
      setMorph(true)
      setTimeout(() => {
        setUser({
          displayName: guest ? 'Guest' : `ID ${studentId}`,
          isGuest: guest,
        })
        hapticTap('medium')
        navigate('/dashboard')
      }, 700)
    }, 800)
  }

  return (
    <div className="min-h-dvh grid place-items-center p-6 bg-white">
      <div className="w-full max-w-sm card p-6">
        <div className="flex justify-center mb-4">
          <img src="/branding/bca-crest.png" alt="BCA Crest" className="w-20 h-20" />
        </div>
        <h2 className="font-heading text-2xl text-center mb-2">Welcome to BCA</h2>
        <p className="text-center text-navy/70 mb-6">Where Influence Meets Intelligence</p>
        <label className="block text-sm mb-1">Student ID</label>
        <input value={studentId} onChange={(e) => setStudentId(e.target.value)} className="w-full rounded border px-3 py-2 mb-3" placeholder="e.g. S12345" />
        <label className="block text-sm mb-1">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded border px-3 py-2 mb-4" placeholder="••••••" />
        <button className="btn w-full mb-2" onClick={() => submit(false)} disabled={loading}>
          {loading ? (
            <span className="inline-flex items-center gap-2">
              {!morph ? <LoaderCircle className="animate-spin" /> : <Wifi />}
              Connecting
            </span>
          ) : (
            'Login'
          )}
        </button>
        <button className="w-full text-sm underline" onClick={() => submit(true)} disabled={loading}>
          Continue as Guest (read-only)
        </button>
      </div>
    </div>
  )
}
