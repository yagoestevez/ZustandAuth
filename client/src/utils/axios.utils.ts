import axios from 'axios'
import { useAuthStore } from '../store/auth.store'

const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

authApi.interceptors.request.use((conf) => {
  conf.headers = {
    Authorization: `Bearer ${useAuthStore.getState().token || ''}`,
  }
  return conf
})

export default authApi
