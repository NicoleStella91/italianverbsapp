import { useIsAnsweredContext } from "../contexts/IsAnsweredContext"
import { useIsCorrectContext } from "../contexts/IsCorrectContext"
import { Text } from "@chakra-ui/react"

export default function Result() {
    const { isAnswered } = useIsAnsweredContext()
    const { isCorrect } = useIsCorrectContext()

    return (
        <div>
            {isAnswered && isCorrect && <Text data-type='Text' fontSize='lg' mt='20px' as='b'>Correct!</Text>}
            {isAnswered && !isCorrect && <Text data-type='Text' fontSize='lg' mt='20px' as='b'>That's not right...</Text>}
        </div>
    )
}