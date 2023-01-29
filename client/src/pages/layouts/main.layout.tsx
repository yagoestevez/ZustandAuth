import { useEffect, useState } from 'react'
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import { useAuthStore } from '../../store/auth.store'

const MainLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const _logout = useAuthStore((state) => state.logout)
  const token = useAuthStore((state) => state.token)

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  const logout = () => {
    _logout()
    navigate('/login', { replace: true })
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <button onClick={logout}>Logout</button>
      </footer>
    </>
  )
}

export default MainLayout
