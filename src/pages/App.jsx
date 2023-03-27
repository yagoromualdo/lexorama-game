import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
import Reports from '../components/ReportsPlayers'
import PlayerRegistration from '../components/PlayerRegistrations'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/relatorios' element={<Reports />} />
        <Route path='/registrar' element={<PlayerRegistration />} />
      </Routes>
    </div>
  )
}

export default App