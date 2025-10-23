import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Splash from '../pages/Splash'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Courses from '../pages/Courses'
import CloutTerminal from '../pages/CloutTerminal'
import MediaFeed from '../pages/MediaFeed'
import Messages from '../pages/Messages'
import Profile from '../pages/Profile'
import CloutBoard from '../pages/CloutBoard'
import AdminPanel from '../pages/AdminPanel'
import IDGenerator from '../pages/IDGenerator'
import Leaderboard from '../pages/Leaderboard'
import NovaReiStudio from '../pages/NovaReiStudio'
import BujPod from '../pages/BujPod'
import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
  { path: '/', element: <Splash /> },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/login', element: <Login /> },
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/courses', element: <Courses /> },
      { path: '/terminal', element: <CloutTerminal /> },
      { path: '/feed', element: <MediaFeed /> },
      { path: '/messages', element: <Messages /> },
      { path: '/profile', element: <Profile /> },
      { path: '/cloutboard', element: <CloutBoard /> },
      { path: '/admin', element: <AdminPanel /> },
      { path: '/id', element: <IDGenerator /> },
      { path: '/leaderboard', element: <Leaderboard /> },
      { path: '/studio', element: <NovaReiStudio /> },
      { path: '/bujpod', element: <BujPod /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default router
