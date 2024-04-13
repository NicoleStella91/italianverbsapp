import { useIsAnsweredContext } from "../contexts/IsAnsweredContext"
import {
    Heading,
    Text,
  } from '@chakra-ui/react'
import Timer from "./Timer"
import RandomInfinitive from "./RandomInfinitive"
import AuxiliaryChoice from "./AuxiliaryChoice"
import AuxiliaryCheck from "./AuxiliaryCheck"
import Score from "./Score"
import GenerateNewInfinitiveButton from "./GenerateNewInfinitiveButton"
import ResetButton from "./ResetButton"
import ResetScoreBtn from "./ResetScoreBtn"

export default function AuxiliaryGameBoard() {
    const { isAnswered } = useIsAnsweredContext()
    return (
        <section>
            <Heading data-type='Heading' size='lg'><i>Essere</i> or <i>Avere</i>?</Heading>
            <Text data-type='Text' fontSize='lg' mt='20px'>Click on the correct auxiliary for the following verb.</Text>

            {!isAnswered && <Timer />}
            <RandomInfinitive />
            <AuxiliaryChoice />
            <AuxiliaryCheck />
            <Score />
            <div>
                <GenerateNewInfinitiveButton />
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