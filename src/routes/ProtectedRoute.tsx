import { Navigate, useLocation, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ token }: { token: string }) => {
  const location = useLocation()

  if (!token) {
    return <Navigate replace to='/login' state={{ from: location.pathname }} />
  } else {
    return <Outlet />
  }
}
