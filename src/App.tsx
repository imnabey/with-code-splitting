import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'

import HomePage from 'src/pages/HomePage'
import Login from 'src/pages/LoginPage'
import ErrorPage from 'src/pages/ErrorPage'
import RegisterPage from 'src/pages/RegisterPage'
import DetailPage from 'src/pages/DetailPage'

import './App.css'
import { ProtectedRoute } from 'src/routes/ProtectedRoute'

function App() {
  const token = localStorage.getItem('token') || ''
  console.log(token, 'token')

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            colorBgContainer: 'transparent',
            itemHoverBg: '#70A0AF',
            itemSelectedBg: '#70A0AF',
            itemSelectedColor: '#...',
          },

          Button: {
            colorPrimary: '#383B43',
            colorSuccess: '#70A0AF',
          },
        },

        token: {
          colorPrimary: '#383B43',
          borderRadius: 2,

          colorBgContainer: 'white',
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute token={token} />}>
            <Route path='/detail/:detailId' element={<DetailPage />} />
            <Route path='/' element={<HomePage />} errorElement={<ErrorPage />} />
          </Route>

          <Route path='/login' element={<Login />} errorElement={<ErrorPage />} />
          <Route path='/register' element={<RegisterPage />} errorElement={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
