import { useEffect } from 'react'
import TicTacToe from './components/TicTacToe'
import './App.css'

function App() {
  useEffect(() => {
    // Initialize Farcaster SDK when available
    if (window.sdk && window.sdk.actions) {
      window.sdk.actions.ready()
    }
  }, [])

  return (
    <div className="App">
      <TicTacToe />
    </div>
  )
}

export default App

