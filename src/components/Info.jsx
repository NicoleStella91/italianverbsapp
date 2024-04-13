import { FaInfoCircle } from "react-icons/fa"
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

export default function Info() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <section className="info">
            <FaInfoCircle onClick={onOpen}/>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Watch out for verbs using&nbsp;<i>essere</i>!</ModalHeader>
                <ModalBody>
                    <p>With verbs using the auxiliary <i>essere</i> remember to include both the masculine and the feminine options.</p>
                    <p>For example: "io sono andato/a" or "noi siamo andati/e"</p>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </section>
    )
}