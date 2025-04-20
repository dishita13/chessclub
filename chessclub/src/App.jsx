import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import pawnLogo from '/pawn.svg'
import NavBar from './components/Navigation'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={pawnLogo} className="logo" alt="Pawn logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={pawnLogo} className="logo spinning" alt="Pawn logo" />
        </a>
      </div>
      <h1>Chess Club</h1> {/*add hover effect to this heading too */}
      <h4>Welcome to our chess community!</h4>

      

    </>
  )
}

export default App
