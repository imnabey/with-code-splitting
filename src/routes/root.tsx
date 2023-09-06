import { createBrowserRouter } from 'react-router-dom'

// import Layout from 'src/components/Layout'
import Login from 'src/pages/LoginPage'
import ErrorPage from 'src/pages/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    // element: <Layout />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
])
