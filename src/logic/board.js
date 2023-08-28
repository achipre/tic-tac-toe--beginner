import { WINNER_COMBOS } from '../constants'

export const checkWinner = (boardtoCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (boardtoCheck[a] && boardtoCheck[a] === boardtoCheck[b] && boardtoCheck[a] === boardtoCheck[c]) {
      return boardtoCheck[a]
    }
  }
  return null
}
// Revisar si esta lleno

export const checkEndGame = (newBoard) => newBoard.every((square) => square !== null)
