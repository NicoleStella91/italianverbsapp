import { useGameContext } from "../contexts/GameContext"
import {
    Card,
    CardBody,
    Stack,
    Heading,
    Text,
    ButtonGroup,
    Button
  } from '@chakra-ui/react'
import { FaPlay } from "react-icons/fa"

export default function GameChoice() {
    const { setGame } = useGameContext()
    return (
        <section className="choice--section">
            <Heading data-type='Heading' size='lg'>Pick a game to practice your Italian</Heading>
            <div className="game--choice">
                <Card data-type='Card' maxW='sm'>
                    <CardBody data-type='CardBody'>
                        <Stack data-type='Stack' mt='6' spacing='3'>
                        <Heading data-type='Heading' size='md'><i>Essere</i> or <i>Avere</i>?</Heading>
                        <Text data-type='Text'>
                        Practice the choice of the right auxiliary in compound tenses
                        </Text>
                        </Stack>
                        <ButtonGroup data-type='ButtonGroup' spacing='2' mt='20px'>
                        <Button data-type='Button' variant='solid' colorScheme='red' rightIcon={<FaPlay />} onClick={() => setGame('auxiliary')}>
                            Start Game
                        </Button>
                        </ButtonGroup>
                    </CardBody>
                </Card>
                    <Card data-type='Card' maxW='sm'>
                        <CardBody data-type='CardBody'>
                            <Stack data-type='Stack' mt='6' spacing='3'>
                            <Heading data-type='Heading' size='md'>What's the right conjugation?</Heading>
                            <Text data-type='Text'>
                            Practice your tense of choice and the conjugation of Italian verbs
                            </Text>
                            </Stack>
                            <ButtonGroup data-type='ButtonGroup' spacing='2' mt='20px'>
                            <Button data-type='Button' variant='solid' colorScheme='red' rightIcon={<FaPlay />} onClick={() => setGame('verbs')}>
                                Start Game
                            </Button>
                            </ButtonGroup>
                        </CardBody>
                    </Card>
            </div>
        </section>
    )
}

