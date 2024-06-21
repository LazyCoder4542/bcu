import { useEffect, useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home/>} />
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>} />
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
