import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Groceries from './pages/Groceries'
import Fashion from './pages/Fashion'
import Electronics from './pages/Electronics'
import Beauty from './pages/Beauty'
import Kitchen from './pages/Kitchen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/groceries' element={<Groceries/>}></Route>
        <Route path='/fashion' element={<Fashion/>}></Route>
        <Route path='/electronics' element={<Electronics/>}></Route>
        <Route path='/beauty' element={<Beauty/>}></Route>
        <Route path='/kitchen' element={<Kitchen/>}></Route>
      </Routes>
    </Router>
  )
}

export default App