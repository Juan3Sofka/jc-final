// import './App.css'
import React from 'react'
import { Form } from './Form'
import { Registro } from './Registro'
import { Rutas } from './Rutas'

function App() {
  return (
    <Router>
      <React.Fragment>
        <Registro>
          <Form />
        </Registro>
        <Rutas />
      </React.Fragment>
    </Router>
    
  )
}

export default App
