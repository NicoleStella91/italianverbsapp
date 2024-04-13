import { useGameContext } from "../contexts/GameContext"
import { useIsAnsweredContext } from "../contexts/IsAnsweredContext"
import { useIsCorrectContext } from "../contexts/IsCorrectContext"
import { useTimerContext } from "../contexts/TimerContext"
import { Button } from "@chakra-ui/react"

export default function ResetButton() {
    const { game, setGame } = useGameContext()
    const { setIsAnswered, setAnswer }  = useIsAnsweredContext()
    const { setIsCorrect } = useIsCorrectContext()
    const { setTimer } = useTimerContext()

    function handleReset() {
        setTimer(10)
        setIsAnswered(false)
        setIsCorrect(false)
        setAnswer('')
        setGame(game === 'auxiliary' ? 'verbs' : 'auxiliary')
    }

    return (
        <Button data-type='Button' variant='outline' colorScheme='red' onClick={handleReset} mt='10px' mb='5px'>{game === 'auxiliary' ? "Practice verb conjugations" : "Practice auxiliary verbs"}</Button>
    )
}