import { useEffect } from 'react'
import { useAppStore } from '../store/appStore'
import { toast } from 'sonner'

export default function Notifications() {
  const { notifications } = useAppStore()
  useEffect(() => {
    if (notifications.length === 0) return
    const last = notifications[notifications.length - 1]
    toast(last.message)
  }, [notifications])
  return null
}
