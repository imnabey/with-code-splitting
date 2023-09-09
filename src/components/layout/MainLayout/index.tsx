// import { Navigate, useLocation } from 'react-router-dom'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  // const token = localStorage.getItem('token') || ''
  // const location = useLocation()

  // // if (token) {
  // //   return <Navigate replace to={location.pathname} />
  // // }

  return (
    <>
      <>{children}</>
    </>
  )
}

export default MainLayout
