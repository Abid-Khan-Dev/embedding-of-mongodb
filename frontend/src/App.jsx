import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Students from './pages/Students'
import Teachers from './pages/Teachers'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Students />} />
          <Route path='/teachers' element={<Teachers />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
