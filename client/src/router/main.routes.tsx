import { createBrowserRouter } from 'react-router-dom'
import Error from '../pages/errors/error.page'
import HomePage from '../pages/home.page'
import MainLayout from '../pages/layouts/main.layout'
import LoginPage from '../pages/login.page'
import ProfilePage from '../pages/profile.page'
import RegisterPage from '../pages/register.page'

export default createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    element: <RegisterPage />,
    path: '/register',
    errorElement: <Error />,
  },
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
    ],
  },
])
