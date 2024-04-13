import { useGameContext } from './contexts/GameContext'
import './App.css'
import Header from './components/Header'
import GameChoice from './components/GameChoice'
import AuxiliaryGameBoard from './components/AuxiliaryGameBoard'
import ConjugationGameBoard from './components/ConjugationGameBoard'

function App() {
  const { game }  = useGameContext()
  
  return (
    <>
      <Header />
      {game === '' && <GameChoice />}
      {game === 'auxiliary' && <AuxiliaryGameBoard />}
      {game === 'verbs' && <ConjugationGameBoard />}
    </>
  )
}

export default App
