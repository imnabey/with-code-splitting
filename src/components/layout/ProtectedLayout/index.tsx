import { Navigate } from 'react-router-dom'

export default function Layout({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem('token') || ''

  if (!token) {
    return <Navigate replace to='/login' />
  }

  return (
    <>
      hellow
      <>{children}</>
    </>
  )
}
