import { Navigate } from 'react-router-dom'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem('token') || ''

  if (token) {
    return <Navigate replace to='/' />
  }

  return (
    <>
      <>{children}</>
    </>
  )
}
