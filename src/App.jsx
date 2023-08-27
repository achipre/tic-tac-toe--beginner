import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkEndGame, checkWinner } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { resetGameToStorage, saveGameToStorage } from './logic/storage'

function App() {
  const [board, setBoard] = useState(() => {
    const boardFormStorage = window.localStorage.getItem('board')
    return boardFormStorage 
      ? JSON.parse(boardFormStorage) 
      : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFormStorage = window.localStorage.getItem('turn')
    return turnFormStorage ? turnFormStorage : TURNS.X
  })
  // Null no hay ganador, false empate, true win
  const [winner, setWinner] = useState(null)
  
  const updateBoard = (index) => {
    // Si tiene algo no bolver a actualizar
    if (board[index] || winner) return
    // Actualizar el tablero siempre realizando una copia al Array
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    saveGameToStorage(newBoard, newTurn)
    // revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameToStorage()
  }
  
  return (
    <main>
      <h1>Tic Tac Toe</h1>
      <section className="turn">
        <Square updateBoard={()=>null} isSelect={turn === TURNS.X}>{TURNS.X}</Square>
        <Square updateBoard={()=>null} isSelect={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <section className='game'>
        {
          board.map((_, index) => (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          ))
        }
      </section>
      <button onClick={resetGame}>Empezar de nuevo</button>

      {
        winner !== null && (
          <WinnerModal winner={winner} resetGame={resetGame} />
        )
      }
    </main>
  )
}

export default App