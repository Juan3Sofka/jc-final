// import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Form } from './Form'
import { Registro } from './Registro'

function App() {

  return (
    <>
      <div>
        <Routes>
            <Route path="/" element={<Registro/>} />
            <Route path="/form" element={<Form/>} />
        </Routes>
      </div>
    </>
    
  )
}

export default App
