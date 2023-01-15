import { FormEvent } from 'react'
import { loginRequest, profileRequest } from '../services/auth.service'
import { useAuthStore } from '../store/auth.store'

export default function LoginPage() {
  const setToken = useAuthStore((state) => state.setToken)
  const setProfile = useAuthStore((state) => state.setProfile)

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const email = (evt.currentTarget.elements[0] as HTMLInputElement).value
    const password = (evt.currentTarget.elements[1] as HTMLInputElement).value

    const loginResp = await loginRequest(email, password)

    setToken(loginResp.data.token)

    const profileResp = await profileRequest()

    setProfile(profileResp.data.profile)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="your@email.com" />
        <input type="password" name="password" placeholder="*******" />
        <button>Login</button>
      </form>
    </div>
  )
}
