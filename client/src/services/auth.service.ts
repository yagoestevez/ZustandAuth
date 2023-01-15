import axios from 'axios'

export const loginRequest = async (email: String, password: String) => {
  const url = import.meta.env.VITE_API_URL
  return axios.post(`${url}/login`, {
    email,
    password,
  })
}
