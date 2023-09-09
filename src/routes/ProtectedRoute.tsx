import { Navigate, useLocation } from 'react-router-dom'

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('token') || ''
  const location = useLocation()

  if (!token) {
    return <Navigate replace to='/login' state={{ from: location }} />
  } else {
    return children
  }
}
