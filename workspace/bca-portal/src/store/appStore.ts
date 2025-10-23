import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'

export type AppMode = 'film' | 'fan'

export interface UserProfile {
  id: string
  displayName: string
  rank: 'S1' | 'S2' | 'S3' | 'S4'
  influenceScore: number
  motto: string
  isGuest: boolean
}

export interface NotificationItem {
  id: string
  message: string
  at: number
}

export interface PostItem {
  id: string
  author: string
  category: 'Trending' | 'Campus Buzz' | 'BujPod Exclusive'
  content: string
  videoUrl?: string
  likes: number
  comments: number
  createdAt: number
}

export interface ScheduledEvent {
  id: string
  message: string
  delayMs: number
}

export interface AppState {
  mode: AppMode
  user: UserProfile
  notifications: NotificationItem[]
  scheduled: ScheduledEvent[]
  sceneMarker?: string
  liveFridayActive: boolean
  feed: PostItem[]

  setMode: (mode: AppMode) => void
  setUser: (profile: Partial<UserProfile>) => void
  addNotification: (message: string) => void
  scheduleNotification: (message: string, delayMs: number) => void
  clearState: () => void
  setSceneMarker: (marker?: string) => void
  setLiveFriday: (active: boolean) => void
  pushPost: (post: Omit<PostItem, 'id' | 'createdAt' | 'likes' | 'comments'>) => void
  likePost: (id: string) => void
}

const defaultUser: UserProfile = {
  id: uuidv4(),
  displayName: 'Student',
  rank: 'S1',
  influenceScore: 128,
  motto: 'Per Videntia, Potentia',
  isGuest: true,
}

const initialFeed: PostItem[] = [
  {
    id: uuidv4(),
    author: 'Nova Rei',
    category: 'Trending',
    content: 'New teaser just dropped. Shine up your ringlights.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    likes: 320,
    comments: 58,
    createdAt: Date.now() - 1000 * 60 * 7,
  },
  {
    id: uuidv4(),
    author: 'Vanessa',
    category: 'Campus Buzz',
    content: 'Pop quiz on Algorithm Studies tomorrow. Sleep = optional.',
    likes: 204,
    comments: 31,
    createdAt: Date.now() - 1000 * 60 * 60,
  },
]

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      mode: 'film',
      user: defaultUser,
      notifications: [],
      scheduled: [],
      sceneMarker: undefined,
      liveFridayActive: false,
      feed: initialFeed,

      setMode: (mode) => set({ mode }),
      setUser: (profile) => set({ user: { ...get().user, ...profile } }),
      addNotification: (message) =>
        set((state) => ({
          notifications: [
            ...state.notifications,
            { id: uuidv4(), message, at: Date.now() },
          ],
        })),
      scheduleNotification: (message, delayMs) => {
        const id = uuidv4()
        const scheduledItem: ScheduledEvent = { id, message, delayMs }
        set((state) => ({ scheduled: [...state.scheduled, scheduledItem] }))
        setTimeout(() => {
          get().addNotification(message)
        }, delayMs)
      },
      clearState: () => set({
        user: { ...defaultUser, id: uuidv4() },
        notifications: [],
        scheduled: [],
        sceneMarker: undefined,
        liveFridayActive: false,
        feed: initialFeed,
      }),
      setSceneMarker: (marker) => set({ sceneMarker: marker }),
      setLiveFriday: (active) => set({ liveFridayActive: active }),
      pushPost: (partial) =>
        set((state) => ({
          feed: [
            {
              id: uuidv4(),
              createdAt: Date.now(),
              likes: 0,
              comments: 0,
              ...partial,
            },
            ...state.feed,
          ],
        })),
      likePost: (id) =>
        set((state) => ({
          feed: state.feed.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p)),
        })),
    }),
    { name: 'bca-portal' }
  )
)
