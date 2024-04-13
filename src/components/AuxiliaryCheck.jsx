import { useEffect } from "react"
import verbData from "../verbData"
import { useInfinitiveContext } from '../contexts/InfinitiveContext'
import { useIsAnsweredContext } from '../contexts/IsAnsweredContext'
import { useIsCorrectContext } from "../contexts/IsCorrectContext"
import { useScoreContext } from "../contexts/ScoreContext"
import { useTimerContext } from "../contexts/TimerContext"
import { Text } from "@chakra-ui/react"

export default function AuxiliaryCheck() {
    const { isCorrect, setIsCorrect } = useIsCorrectContext()
    const { infinitiveIndex } = useInfinitiveContext()
    const { isAnswered, answer } = useIsAnsweredContext()
    const { increaseScore, decreaseScore } = useScoreContext()
    const { timer, timerExpired, setTimerExpired } = useTimerContext()
    

    const correctAnswer = verbData[infinitiveIndex].auxiliary

    useEffect(() => {
        if(answer === correctAnswer) {
            setIsCorrect(true)
            increaseScore()
        } else if(isAnswered && answer !== correctAnswer) {
            setIsCorrect(false)
            decreaseScore()
        }
    }, [isAnswered])

    useEffect(() => {
        if (timer === 0 && !isAnswered && !timerExpired) {
            decreaseScore()
            setTimerExpired(true)
        }
    }, [timer, isAnswered, decreaseScore, timerExpired])

    return (
        <div>
            {isAnswered && isCorrect && <Text data-type='Text' fontSize='lg' mt='20px' as='b'>Correct!</Text>}
            {isAnswered && !isCorrect && <Text data-type='Text' fontSize='lg' mt='20px' as='b'>That's not right...</Text>}
        </div>
    )
}