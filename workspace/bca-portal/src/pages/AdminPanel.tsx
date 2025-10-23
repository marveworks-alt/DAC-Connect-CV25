import { useAppStore } from '../store/appStore'
import { useState } from 'react'

export default function AdminPanel() {
  const { mode, setMode, scheduleNotification, clearState, setSceneMarker, setLiveFriday } = useAppStore()
  const [message, setMessage] = useState('New post from Vanessa!')
  const [delay, setDelay] = useState(2000)
  const [scene, setScene] = useState('')

  return (
    <div className="py-4 space-y-4">
      <h2 className="font-heading text-2xl">Admin & Crew</h2>
      <div className="flex gap-2 items-center">
        <span>Mode:</span>
        <button className="btn" onClick={() => setMode(mode === 'film' ? 'fan' : 'film')}>{mode === 'film' ? 'Film' : 'Fan'}</button>
      </div>
      <div className="card p-3 space-y-2">
        <h3 className="font-heading">Schedule Notification</h3>
        <input value={message} onChange={(e) => setMessage(e.target.value)} className="border rounded px-2 py-1 w-full" />
        <input type="number" value={delay} onChange={(e) => setDelay(parseInt(e.target.value))} className="border rounded px-2 py-1 w-full" />
        <button className="btn" onClick={() => scheduleNotification(message, delay)}>Schedule</button>
      </div>
      <div className="card p-3 space-y-2">
        <h3 className="font-heading">Scene Marker</h3>
        <input value={scene} onChange={(e) => setScene(e.target.value)} className="border rounded px-2 py-1 w-full" placeholder="e.g., Scene 12B" />
        <div className="flex gap-2">
          <button className="btn" onClick={() => setSceneMarker(scene)}>Set</button>
          <button className="btn" onClick={() => setSceneMarker(undefined)}>Clear</button>
        </div>
      </div>
      <div className="card p-3 space-y-2">
        <h3 className="font-heading">Live Friday</h3>
        <div className="flex gap-2">
          <button className="btn" onClick={() => setLiveFriday(true)}>Enable</button>
          <button className="btn" onClick={() => setLiveFriday(false)}>Disable</button>
        </div>
      </div>
      <button className="btn" onClick={clearState}>Reset App State</button>
    </div>
  )
}
