import { useScoreContext } from "../contexts/ScoreContext"
import { Button } from "@chakra-ui/react"

export default function ResetScoreBtn() {
    const { resetScore } = useScoreContext()

    return (
        <Button data-type='Button' variant='outline' colorScheme='red' onClick={resetScore}>Reset Your Score</Button>
    )
}