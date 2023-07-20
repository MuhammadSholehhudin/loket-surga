import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./components/home"
import Layout from "./components/global/layout"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/layout",
      element: <Layout />
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
