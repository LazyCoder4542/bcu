import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import AdminLogin from './pages/admin-login'
import VerifyEmail from './pages/verify-email'
import AppLayout from './components/layout/appLayout'
import Dashboard from './pages/dashboard'
import Member from './pages/member'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home/>} />
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>} />
      <Route path='admin-login' element={<AdminLogin/>} />
      <Route path='verify-email' element={<VerifyEmail/>} />
      <Route path='app' element={<AppLayout/>}>
        <Route path='/app' element={<Dashboard/>} />
        <Route path='members' element={<Member/>} />
      </Route>
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
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
