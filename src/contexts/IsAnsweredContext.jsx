import { createContext, useState, useContext } from "react"

const IsAnsweredContext = createContext()

export const useIsAnsweredContext = () => useContext(IsAnsweredContext)

export const IsAnsweredProvider = ({ children }) => {
    const [isAnswered, setIsAnswered] = useState(null)
    const [answer, setAnswer] = useState('')

    return (
        <IsAnsweredContext.Provider value={{ isAnswered, setIsAnswered, answer, setAnswer }}>
            {children}
        </IsAnsweredContext.Provider>
    )
}