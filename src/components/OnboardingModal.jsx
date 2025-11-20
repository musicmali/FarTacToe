import './OnboardingModal.css'

const OnboardingModal = ({ onClose }) => {
  return (
    <div className="onboarding-overlay" onClick={onClose}>
      <div className="onboarding-modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="onboarding-title">Welcome to FarTacToe! 🎮</h2>
        
        <div className="onboarding-content">
          <div className="onboarding-section">
            <h3>How to Play</h3>
            <p>Play classic tic-tac-toe against our medium difficulty CPU!</p>
          </div>
          
          <div className="onboarding-rules">
            <div className="rule-item">
              <span className="rule-icon">✓</span>
              <span>You play as <strong style={{color: '#10B981'}}>X</strong> (green)</span>
            </div>
            <div className="rule-item">
              <span className="rule-icon">✓</span>
              <span>CPU plays as <strong style={{color: '#EF4444'}}>O</strong> (red)</span>
            </div>
            <div className="rule-item">
              <span className="rule-icon">✓</span>
              <span>Get 3 in a row to win!</span>
            </div>
            <div className="rule-item">
              <span className="rule-icon">✓</span>
              <span>Score tracks your wins, losses, and draws</span>
            </div>
          </div>

          <div className="onboarding-tip">
            <strong>💡 Tip:</strong> The CPU is smart! It will block you and try to win.
          </div>
        </div>
        
        <button className="onboarding-button" onClick={onClose}>
          Got it! Let's Play
        </button>
      </div>
    </div>
  )
}

export default OnboardingModal

