import axios from '../utils/axios.utils'

export const loginRequest = async (email: String, password: String) => {
  return axios.post('/login', {
    email,
    password,
  })
}

export const profileRequest = async () => {
  return axios.get('/profile')
}
