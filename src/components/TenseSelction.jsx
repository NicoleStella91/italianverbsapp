import { useTenseContext } from "../contexts/TenseContext"
import {
    Text,
  } from '@chakra-ui/react'

export default function TenseSelection() {
    const { pickTense, tense } = useTenseContext()

    const getClassName = (btnTense) => {
        return btnTense === tense ? 'btn-selected' : 'btn'
    }

    return (
        <section>
            <Text data-type='Text' fontSize='lg' mt='20px'>Pick a tense to practice</Text>
            <div className="tense-selection">
                <button onClick={() => pickTense('presenteIndicativo')} className={getClassName('presenteIndicativo')}>Presente Indicativo</button>
                <button onClick={() => pickTense('passatoProssimo')} className={getClassName('passatoProssimo')}>Passato Prossimo</button>
                <button onClick={() => pickTense('imperfettoIndicativo')} className={getClassName('imperfettoIndicativo')}>Imperfetto</button>
                <button onClick={() => pickTense('futuroSemplice')} className={getClassName('futuroSemplice')}>Futuro Indicativo</button>
            </div>
        </section>
    )
}