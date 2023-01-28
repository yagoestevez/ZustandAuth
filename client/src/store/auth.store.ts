import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  token: String
  profile: any
}

type Actions = {
  setToken: (token: String) => void
  setProfile: (token: String) => void
}

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: '',
      profile: null,
      setToken: (token: String) =>
        set((state) => ({
          token,
        })),
      setProfile: (profile: any) =>
        set((state) => ({
          profile,
        })),
    }),
    {
      name: 'auth',
    }
  )
)
