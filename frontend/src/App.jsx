import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import NavLayout from './components/NavLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/auth/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import SignupPage from './pages/auth/SignupPage'
import { Toaster } from './components/ui/sonner'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          // <ProtectedRoute>
            <NavLayout />
         // </ProtectedRoute>
        }>
          <Route index element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Route>
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
        <Toaster/>
    </BrowserRouter>
  )
}

export default App
