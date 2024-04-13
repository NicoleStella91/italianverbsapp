import { useIsAnsweredContext } from "../contexts/IsAnsweredContext"
import { Input } from "@chakra-ui/react"

export default function AnswerInput() {
    const { answer, setAnswer } = useIsAnsweredContext()
    
    return (
        <section>
            <Input variant='filled' placeholder='Your answer' onChange={(e) => setAnswer(e.target.value)} value={answer} />
        </section>
    )
}