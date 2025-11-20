import { useEffect, useState } from 'react'
import sdk from '@farcaster/frame-sdk'
import TicTacToe from './components/TicTacToe'
import OnboardingModal from './components/OnboardingModal'
import UserProfile from './components/UserProfile'
import LoadingSpinner from './components/LoadingSpinner'
import NavigationBar from './components/NavigationBar'
import './App.css'

function App() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        // Initialize the SDK
        await sdk.actions.ready()
        
        // Get user context
        const context = await sdk.context
        if (context?.user) {
          setUser(context.user)
        }
        
        // Check if user has seen onboarding
        const hasSeenOnboarding = localStorage.getItem('fartactoe-onboarding')
        if (!hasSeenOnboarding) {
          setShowOnboarding(true)
        }
        
        setIsSDKLoaded(true)
      } catch (error) {
        console.error('Failed to load SDK:', error)
        // Still show the game even if SDK fails (for browser testing)
        setIsSDKLoaded(true)
      }
    }
    load()
  }, [])

  const handleCloseOnboarding = () => {
    localStorage.setItem('fartactoe-onboarding', 'true')
    setShowOnboarding(false)
  }

  const handleHome = () => {
    // Already on home, could add refresh logic if needed
    window.location.reload()
  }

  if (!isSDKLoaded) {
    return <LoadingSpinner />
  }

  return (
    <div className="App">
      {user && <UserProfile user={user} />}
      <div className="app-content">
        <TicTacToe onShowHelp={() => setShowOnboarding(true)} />
      </div>
      <NavigationBar 
        onShowHelp={() => setShowOnboarding(true)} 
        onHome={handleHome}
      />
      {showOnboarding && <OnboardingModal onClose={handleCloseOnboarding} />}
    </div>
  )
}

export default App

