import { createContext, useState, useContext } from "react"

const TenseContext = createContext()

export const useTenseContext = () => useContext(TenseContext)

export const TenseContextProvider = ({ children }) => {
    const [tense, setTense] = useState('')
    const [isTenseSelected, setIsTenseSelected] = useState(false)

    const pickTense = (userSelection) => {
        setTense(userSelection)
        setIsTenseSelected(true)
    }

    return (
        <TenseContext.Provider value={{ tense, setTense, pickTense, isTenseSelected, setIsTenseSelected }}>
            {children}
        </TenseContext.Provider>
    )
}