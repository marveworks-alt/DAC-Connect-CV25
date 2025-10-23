import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-dvh grid place-items-center p-6">
      <div className="text-center space-y-2">
        <h2 className="font-heading text-2xl">Page Not Found</h2>
        <Link to="/dashboard" className="btn">Go Home</Link>
      </div>
    </div>
  )
}
