import { useEffect } from "react"
import { useIsAnsweredContext } from "../contexts/IsAnsweredContext"
import { useInfinitiveContext } from "../contexts/InfinitiveContext"
import { useTenseContext } from "../contexts/TenseContext"
import { useSubjectContext } from "../contexts/SubjectContext"
import { useIsCorrectContext } from "../contexts/IsCorrectContext"
import { useScoreContext } from "../contexts/ScoreContext"
import { useTimerContext } from "../contexts/TimerContext"
import verbData from "../verbData"
import { Button } from "@chakra-ui/react"

export default function ConjugationCheck () {
    const { answer, isAnswered, setIsAnswered } = useIsAnsweredContext()
    const { infinitiveIndex } = useInfinitiveContext()
    const { tense } = useTenseContext()
    const { subjectIndex } = useSubjectContext()
    const { setIsCorrect } = useIsCorrectContext()
    const { increaseScore, decreaseScore } = useScoreContext()
    const { timer, timerExpired, setTimerExpired } = useTimerContext()

    const correctAnswer = verbData[infinitiveIndex].tenses[tense] ? verbData[infinitiveIndex].tenses[tense][subjectIndex] : null

    const handleCheck = () => {
        setIsAnswered(true)
        if(answer === correctAnswer) {
            setIsCorrect(true)
            increaseScore()
        } else {
            setIsCorrect(false)
            decreaseScore()
        }
    }

    useEffect(() => {
        if (timer === 0 && !isAnswered && !timerExpired) {
            decreaseScore()
            setTimerExpired(true)
        }
    }, [timer, isAnswered, decreaseScore, timerExpired])

    return (
        <section>
            <Button data-type='Button' variant='solid' colorScheme='red' onClick={handleCheck} isDisabled={isAnswered || timer === 0} ml='5px'>Check Answer</Button>
        </section>
    )
}