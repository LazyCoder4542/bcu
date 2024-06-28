import { useEffect, useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import AdminLogin from './pages/admin-login'
import VerifyEmail from './pages/verify-email'
import Dashboard from './pages/dashboard'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home/>} />
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>} />
      <Route path='admin-login' element={<AdminLogin/>} />
      <Route path='verify-email' element={<VerifyEmail/>} />
      <Route path='dashboard' element={<Dashboard/>} />
    </Route>
  )
  // createRoutesFromElements(
  //   <Route path="/" element={<Header />}>
  //     <Route index element={<Home />} />
  //     <Route path="login" element={<Login />} />
  //     <Route path="register" element={<Register />} />
  //   </Route>
  // )
)

function App() {
  useEffect(()=> {
  }, [])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
