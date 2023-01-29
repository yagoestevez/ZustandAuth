import { useAuthStore } from '../store/auth.store'

export default function ProfilePage() {
  const profile = useAuthStore((state) => state.profile)

  return (
    <>
      <h1>ProfilePage</h1>
      <ul>
        <li>
          <strong>Payload:</strong> {JSON.stringify(profile.payload)}
        </li>
        <li>
          <strong>Expires in:</strong> {profile.exp}
        </li>
      </ul>
    </>
  )
}
