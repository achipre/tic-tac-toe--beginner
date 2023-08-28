import { Square } from './Square'

import Reload from '../assets/reload.svg'

import { CircleSVG } from '../components/CircleSVG'
import { CruzSVG } from '../components/CruzSVG'

export function WinnerModal ({ winner, resetGame }) {
  console.log(winner)
  return (
    <section className="winner">
      <div className="text">
        <h2>
          {
            winner === false
              ? 'Empate'
              : 'Ganó'
          }
        </h2>
        <header className="win">
          {
            winner && <Square>{winner === 'O' ? <CircleSVG width={240}/> : <CruzSVG width={240}/> }</Square>
          }
        </header>
        <footer>
          <img className='game-reload' onClick={resetGame} src={Reload} alt="Restart Game" />
        </footer>
      </div>
    </section>
  )
}
