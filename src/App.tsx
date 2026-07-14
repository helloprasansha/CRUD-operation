import {createBrowserRouter, RouterProvider} from "react-router-dom"

import LoginForm from "./Pages/login-form"
import SignupForm from "./Pages/Signup-form"

export default function App() {
  const router = createBrowserRouter([ 
    {
      path: "/",
      element: <LoginForm/>
    },
    {
      path: "/signup",
      element: <SignupForm/>
    }
  ])
  return (
    <>
    <RouterProvider router = {router}/>
      </>
  )
}
