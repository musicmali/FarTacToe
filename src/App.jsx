import { useEffect, useState } from 'react'
import sdk from '@farcaster/frame-sdk'
import TicTacToe from './components/TicTacToe'
import './App.css'

function App() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false)

  useEffect(() => {
    const load = async () => {
      try {
        // Initialize the Farcaster SDK
        await sdk.actions.ready()
        setIsSDKLoaded(true)
      } catch (error) {
        console.error('Failed to load Farcaster SDK:', error)
        // Still show the game even if SDK fails (for browser testing)
        setIsSDKLoaded(true)
      }
    }
    load()
  }, [])

  if (!isSDKLoaded) {
    return null // Show nothing while SDK is loading
  }

  return (
    <div className="App">
      <TicTacToe />
    </div>
  )
}

export default App

