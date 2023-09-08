import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'

import HomePage from 'src/pages/HomePage'
import Login from 'src/pages/LoginPage'
import ErrorPage from 'src/pages/ErrorPage'
import RegisterPage from 'src/pages/RegisterPage'
import DetailPage from 'src/pages/DetailPage/DetailPage'

import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/detail',
      element: <DetailPage />,
      errorElement: <ErrorPage />,
    },
  ])

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            colorBgContainer: 'transparent',
            colorItemBgHover: '#70A0AF',
            colorItemBgSelected: '#70A0AF',
            colorItemTextSelected: '#...',
          },
          Input: {
            // colorPrimary: '#eb2f96',
            // algorithm: true, // Enable algorithm
          },
          Button: {
            colorPrimary: '#383B43',
            colorSuccess: '#70A0AF',
          },
        },

        token: {
          // Seed Token
          colorPrimary: '#383B43',
          borderRadius: 2,

          // Alias Token
          colorBgContainer: 'white',
        },
      }}
    >
      <RouterProvider router={router}></RouterProvider>{' '}
    </ConfigProvider>
  )
}

export default App
