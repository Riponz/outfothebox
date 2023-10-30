import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import QuesAns from './QuesAns'
import View from './View'
import Account from './Account'
import About from './About'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<QuesAns/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path='/account' element={<Account/> }/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  )
}

export default App
