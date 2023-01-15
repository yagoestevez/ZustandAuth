import axios from 'axios'
import { useAuthStore } from '../store/auth.store'

const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

authApi.interceptors.request.use((conf) => {
  const token = useAuthStore.getState().token
  conf.headers = {
    Authorization: `Bearer ${token}`,
  }
  return conf
})

export default authApi
