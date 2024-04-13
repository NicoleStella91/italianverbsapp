import verbData from "../verbData"
import { useInfinitiveContext } from '../contexts/InfinitiveContext'
import { useIsAnsweredContext } from '../contexts/IsAnsweredContext'
import { useTimerContext } from '../contexts/TimerContext'
import {
    Heading,
    Text,
    ButtonGroup,
    Button
  } from '@chakra-ui/react'

export default function AuxiliaryChoice() {
    const { infinitiveIndex } = useInfinitiveContext()
    const exampleEssere = verbData[infinitiveIndex].exampleEssere
    const exampleAvere = verbData[infinitiveIndex].exampleAvere

    const { setIsAnswered, setAnswer, isAnswered } = useIsAnsweredContext()
    const { timer } = useTimerContext()

    const handleClick = (aux) => {
        setIsAnswered(true)
        setAnswer(aux)
    }

    return (
        <section className="game--card auxiliary">
            <div>
                <ButtonGroup data-type='ButtonGroup' spacing='2' mt='20px'>
                    <Button data-type='Button' variant='solid' colorScheme='red' onClick={() => handleClick('essere')} isDisabled={isAnswered || timer === 0} mb='20px'>Essere</Button>
                </ButtonGroup>
                <p>Example:</p>
                <p>"{exampleEssere}"</p>
            </div>
            <div>
                <ButtonGroup data-type='ButtonGroup' spacing='2' mt='20px'>
                    <Button data-type='Button' variant='solid' colorScheme='red' onClick={() => handleClick('avere')} isDisabled={isAnswered || timer === 0} mb='20px'>Avere</Button>
                </ButtonGroup>
                <p>Example</p>
                <p>"{exampleAvere}"</p>
            </div>
        </section>
    )
}