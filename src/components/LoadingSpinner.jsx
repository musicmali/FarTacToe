import './LoadingSpinner.css'

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">Loading FarTacToe...</p>
    </div>
  )
}

export default LoadingSpinner

