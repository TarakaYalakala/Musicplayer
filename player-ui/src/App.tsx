import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Navbar from './Components/Navbar'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Navbar/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App