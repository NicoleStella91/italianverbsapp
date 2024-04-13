import { useIsAnsweredContext } from "../contexts/IsAnsweredContext"
import { useTenseContext } from "../contexts/TenseContext"
import {
    Heading,
  } from '@chakra-ui/react'
import TenseSelection from "./TenseSelction"
import Timer from "./Timer"
import RandomInfinitive from "./RandomInfinitive"
import RandomSubject from "./RandomSubject"
import Info from "./Info"
import AnswerInput from "./AnswerInput"
import ConjugationCheck from "./ConjugationCheck"
import Score from "./Score"
import GenerateNewInfinitiveButton from "./GenerateNewInfinitiveButton"
import ResetButton from "./ResetButton"
import HelpButton from "./HelpButton"
import Result from "./Result"
import ResetScoreBtn from "./ResetScoreBtn"

export default function ConjugationGameBoard() {
    const { tense, isTenseSelected } = useTenseContext()
    const { isAnswered } = useIsAnsweredContext()

    return (
        <section className="game--card">
            <Heading data-type='Heading' size='lg' mt='30px'>How do you conjugate verbs in Italian?</Heading>
            <TenseSelection />
            {isTenseSelected && !isAnswered && <Timer />}
            <section className="game--card">
                {isTenseSelected && <RandomInfinitive />}
                {isTenseSelected && <RandomSubject />}
                {tense === 'passatoProssimo' && <Info />}
                <div className="answer">
                    {isTenseSelected && <AnswerInput />}
                    {isTenseSelected && <ConjugationCheck />}
                </div>
                {isAnswered && <Result />}
                {isTenseSelected && <HelpButton />}
            </section>
            {isTenseSelected && <Score />}
            <div className="btn-section">
                {isTenseSelected && <GenerateNewInfinitiveButton />}
            </div>
            <div>
                <ResetButton />
            </div>
            <div>
                <ResetScoreBtn />
            </div>
        </section>
    )
}