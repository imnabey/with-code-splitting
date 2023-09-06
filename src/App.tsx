import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import reactLogo from 'src/assets/react.svg'
import { Counter } from 'src/features/counter/Counter'
import HomePage from 'src/pages/HomePage'
import Login from 'src/pages/LoginPage'
import ErrorPage from 'src/pages/ErrorPage'

import viteLogo from '/vite.svg'
import './App.css'
// import Layout from "./components/Layout";
// import { Button, Card } from "antd";

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
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default App
