import Sidebar from 'src/components/SideBar'
import { Layout } from 'antd'
import Header from 'src/components/Header'

export const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider style={{ background: 'white' }}>
      <Sidebar />
      <div className='w-full md:p-16 p-6'>
        <Header />
        {children}
      </div>
    </Layout>
  )
}

export default ProtectedLayout
