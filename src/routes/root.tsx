import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  }
]);
