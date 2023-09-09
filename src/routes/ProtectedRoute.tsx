import { Navigate, useLocation } from 'react-router-dom'

export const ProtectedRoute = ({
  token,
  children,
}: {
  token: string
  children: React.ReactNode
}) => {
  const location = useLocation()

  if (!token) {
    return <Navigate replace to='/login' state={{ from: location }} />
  } else {
    return children
  }
}
