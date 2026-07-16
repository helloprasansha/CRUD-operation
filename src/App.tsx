import {createBrowserRouter, RouterProvider} from "react-router-dom"

import LoginForm from "./Pages/login-form"
import SignupForm from "./Pages/Signup-form"
import Article from "./Pages/article"
import AxiosForm from "./Pages/axiosForm"
import Users from "./Pages/Users"

export default function App() {
  const router = createBrowserRouter([ 
    {
      path: "/",
      element: <LoginForm/>
    },
    {
      path: "/signup",
      element: <SignupForm/>
    },
    {
      path: "/article",
      element: <Article/>
    },
    {
      path: "/axiosForm",
      element: <AxiosForm/>
    },
    {
      path: "/users",
      element: <Users/>
    }
  ])
  return (
    <>
    <RouterProvider router = {router}/>
      </>
  )
}
