import { useInfinitiveContext } from '../contexts/InfinitiveContext'
import { useIsAnsweredContext } from '../contexts/IsAnsweredContext'
import { useSubjectContext } from '../contexts/SubjectContext'
import { useGameContext } from '../contexts/GameContext'
import { useIsCorrectContext } from '../contexts/IsCorrectContext'
import { useTimerContext } from '../contexts/TimerContext'
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function GenerateNewInfinitiveButton() {
    const { generateNewInfinitive } = useInfinitiveContext()
    const { setAnswer, setIsAnswered, isAnswered } = useIsAnsweredContext()
    const { generateNewSubject } = useSubjectContext()
    const { game } = useGameContext()
    const { setIsCorrect } = useIsCorrectContext()
    const { timer, setTimer } = useTimerContext()

    const handleNewInfinitive = () => {
        setTimer(10)
        setIsAnswered(false)
        setIsCorrect(false)
        setAnswer('')
        generateNewInfinitive()
        if(game === 'verbs') {
            generateNewSubject()
        }
    }

    return (
        <section>
            <ButtonGroup data-type='ButtonGroup' spacing='2' mt='20px'>
                    <Button data-type='Button' variant='solid' colorScheme='red' onClick={handleNewInfinitive} isDisabled={!isAnswered && timer != 0}>New Verb</Button>
                </ButtonGroup>
        </section>
    )

}