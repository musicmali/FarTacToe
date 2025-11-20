import { useState, useEffect } from 'react'
import './TicTacToe.css'

const TicTacToe = ({ onShowHelp }) => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isPlayerTurn, setIsPlayerTurn] = useState(true)
  const [gameOver, setGameOver] = useState(false)
  const [winner, setWinner] = useState(null)
  const [score, setScore] = useState({ player: 0, cpu: 0, draws: 0 })

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const checkWinner = (currentBoard) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a]
      }
    }
    return null
  }

  const checkDraw = (currentBoard) => {
    return currentBoard.every(cell => cell !== null)
  }

  useEffect(() => {
    if (!isPlayerTurn && !gameOver) {
      const timer = setTimeout(() => {
        makeCpuMove()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isPlayerTurn, gameOver])

  useEffect(() => {
    const gameWinner = checkWinner(board)
    if (gameWinner) {
      setWinner(gameWinner)
      setGameOver(true)
      if (gameWinner === 'X') {
        setScore(prev => ({ ...prev, player: prev.player + 1 }))
      } else {
        setScore(prev => ({ ...prev, cpu: prev.cpu + 1 }))
      }
    } else if (checkDraw(board)) {
      setWinner('draw')
      setGameOver(true)
      setScore(prev => ({ ...prev, draws: prev.draws + 1 }))
    }
  }, [board])

  const handleClick = (index) => {
    if (board[index] || !isPlayerTurn || gameOver) return

    const newBoard = [...board]
    newBoard[index] = 'X'
    setBoard(newBoard)
    setIsPlayerTurn(false)
  }

  const makeCpuMove = () => {
    const newBoard = [...board]
    const emptyIndices = newBoard
      .map((val, idx) => (val === null ? idx : null))
      .filter((val) => val !== null)

    if (emptyIndices.length === 0 || gameOver) return

    // Medium difficulty: Mix of strategy and randomness
    let moveIndex = -1

    // 60% chance to play strategically
    if (Math.random() < 0.6) {
      // First, try to win if possible
      moveIndex = findWinningMove(newBoard, 'O')
      
      // If can't win, try to block player from winning
      if (moveIndex === -1) {
        moveIndex = findWinningMove(newBoard, 'X')
      }
      
      // If no immediate win/block, try to take center
      if (moveIndex === -1 && newBoard[4] === null) {
        moveIndex = 4
      }
      
      // If center taken, try corners
      if (moveIndex === -1) {
        const corners = [0, 2, 6, 8].filter(i => newBoard[i] === null)
        if (corners.length > 0) {
          moveIndex = corners[Math.floor(Math.random() * corners.length)]
        }
      }
    }
    
    // 40% chance for random move or fallback to random
    if (moveIndex === -1) {
      moveIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)]
    }

    newBoard[moveIndex] = 'O'
    setBoard(newBoard)
    setIsPlayerTurn(true)
  }

  const findWinningMove = (currentBoard, player) => {
    // Check all winning combinations to find a winning move
    for (let combo of winningCombinations) {
      const [a, b, c] = combo
      const values = [currentBoard[a], currentBoard[b], currentBoard[c]]
      
      // Count how many positions the player has in this combo
      const playerCount = values.filter(v => v === player).length
      const emptyCount = values.filter(v => v === null).length
      
      // If player has 2 and there's 1 empty, that's the winning/blocking move
      if (playerCount === 2 && emptyCount === 1) {
        if (currentBoard[a] === null) return a
        if (currentBoard[b] === null) return b
        if (currentBoard[c] === null) return c
      }
    }
    return -1
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsPlayerTurn(true)
    setGameOver(false)
    setWinner(null)
  }

  const resetScore = () => {
    setScore({ player: 0, cpu: 0, draws: 0 })
    resetGame()
  }

  const renderSquare = (index) => {
    const value = board[index]
    return (
      <button
        className={`square ${value ? 'filled' : ''} ${value === 'X' ? 'player' : ''} ${value === 'O' ? 'cpu' : ''}`}
        onClick={() => handleClick(index)}
        disabled={gameOver}
      >
        {value}
      </button>
    )
  }

  return (
    <div className="game-container">
      <div className="game-header">
        <h1 className="game-title">FarTacToe</h1>
        <p className="game-subtitle">Play against the CPU - Medium Difficulty</p>
        {onShowHelp && (
          <button className="help-button" onClick={onShowHelp} title="How to play">
            ?
          </button>
        )}
      </div>

      <div className="scoreboard">
        <div className="score-item player-score">
          <span className="score-label">You</span>
          <span className="score-value">{score.player}</span>
        </div>
        <div className="score-item draw-score">
          <span className="score-label">Draws</span>
          <span className="score-value">{score.draws}</span>
        </div>
        <div className="score-item cpu-score">
          <span className="score-label">CPU</span>
          <span className="score-value">{score.cpu}</span>
        </div>
      </div>

      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>

      {gameOver && (
        <div className="game-status">
          {winner === 'draw' ? (
            <p className="status-message">It's a Draw!</p>
          ) : (
            <p className="status-message">
              {winner === 'X' ? 'You Win! 🎉' : 'CPU Wins!'}
            </p>
          )}
        </div>
      )}

      <div className="game-controls">
        <button className="btn btn-primary" onClick={resetGame}>
          New Game
        </button>
        <button className="btn btn-secondary" onClick={resetScore}>
          Reset Score
        </button>
      </div>

      <div className="turn-indicator">
        {!gameOver && (
          <p>{isPlayerTurn ? "Your turn (X)" : "CPU's turn (O)..."}</p>
        )}
      </div>
    </div>
  )
}

export default TicTacToe

