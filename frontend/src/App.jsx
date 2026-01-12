import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Students from './pages/Students'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Students />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
