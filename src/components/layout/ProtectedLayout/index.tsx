import { Navigate } from 'react-router-dom'
import Sidebar from 'src/components/SideBar'
import { Layout } from 'antd'
import Header from 'src/components/Header'

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem('token') || ''

  if (!token) {
    return <Navigate replace to='/login' />
  }

  return (
    <Layout hasSider style={{ background: 'white' }}>
      <Sidebar />
      <div className='w-full p-16 '>
        <Header />
        {children}
      </div>
    </Layout>
  )
}
