import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { ToastContainer } from 'react-toastify'

import HomePage from 'src/pages/HomePage'
import Login from 'src/pages/LoginPage'
import ErrorPage from 'src/pages/ErrorPage'
import RegisterPage from 'src/pages/RegisterPage'
import DetailPage from 'src/pages/DetailPage'
import { ProtectedRoute } from 'src/routes/ProtectedRoute'

import './App.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const token = localStorage.getItem('token') || ''

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
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            path='/detail/:detailId'
            element={
              <ProtectedRoute token={token}>
                <DetailPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/'
            element={
              <ProtectedRoute token={token}>
                <HomePage />
              </ProtectedRoute>
            }
            errorElement={<ErrorPage />}
          />

          <Route path='/login' element={<Login />} errorElement={<ErrorPage />} />
          <Route path='/register' element={<RegisterPage />} errorElement={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
