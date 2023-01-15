import { FormEvent } from 'react'
import { loginRequest } from '../services/auth.service'

export default function LoginPage() {
  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const email = (evt.currentTarget.elements[0] as HTMLInputElement).value
    const password = (evt.currentTarget.elements[1] as HTMLInputElement).value

    const resp = await loginRequest(email, password)

    console.log(resp.data.token)
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
