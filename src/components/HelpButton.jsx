import verbData from "../verbData"
import { useInfinitiveContext } from "../contexts/InfinitiveContext"
import { useTenseContext } from "../contexts/TenseContext"
import { useSubjectContext } from "../contexts/SubjectContext"
import { useScoreContext } from "../contexts/ScoreContext"
import { useIsAnsweredContext } from "../contexts/IsAnsweredContext"
import { useTimerContext } from "../contexts/TimerContext"
import { Tooltip } from 'react-tooltip'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
import { useState } from "react"

export default function HelpButton() {
    const { infinitiveIndex } = useInfinitiveContext()
    const { tense } = useTenseContext()
    const { subjectIndex } = useSubjectContext()
    const { score, setScore } = useScoreContext()
    const { isAnswered } = useIsAnsweredContext()
    const { timer } = useTimerContext()
    const [hint, setHint] = useState('')

    const { isOpen, onOpen, onClose } = useDisclosure()

    const correctAnswer = verbData[infinitiveIndex].tenses[tense] ? verbData[infinitiveIndex].tenses[tense][subjectIndex] : null

    const getHelp = () => {
        onOpen()
        if(score >= 5) {
            let answerPortionLength = Math.min(4, correctAnswer.length)
            let randomStart = correctAnswer.length > 4 ? Math.floor(Math.random() * (correctAnswer.length - answerPortionLength)) : 0
            let answerPortion = correctAnswer.slice(randomStart, randomStart + answerPortionLength)
            setHint(answerPortion)
            setScore(prevScore => prevScore - 5)
        } else {
            setHint("Not enough points to get a hint!")
        }
    }    

    return (
        <section className="hint">
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>A part of the correct answer is:</ModalHeader>
                <ModalBody>
                    {hint}
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
            {!isAnswered && timer != 0 && 
                <Button 
                    onClick={getHelp}
                    data-tooltip-id="hint-tooltip"
                    data-tooltip-content={score < 5 ? "Not enough points to get a hint!" : "Click to get a hint" }
                    data-tooltip-place="top">Get a hint</Button>
            }
            <Tooltip id="hint-tooltip" />
        </section>
    )
}