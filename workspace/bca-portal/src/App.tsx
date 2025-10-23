import { RouterProvider } from 'react-router-dom'
import router from './app/routes'
import { Toaster } from 'sonner'
import Notifications from './components/Notifications'

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" richColors />
      <Notifications />
    </>
  )
}
