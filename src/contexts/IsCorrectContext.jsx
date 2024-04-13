import { createContext, useState, useContext } from "react"

const IsCorrectContext = createContext()

export const useIsCorrectContext = () => useContext(IsCorrectContext)

export const IsCorrectProvider = ({ children }) => {
    const [isCorrect, setIsCorrect] = useState(null)

    return (
        <IsCorrectContext.Provider value={{ isCorrect, setIsCorrect }}>
            {children}
        </IsCorrectContext.Provider>
    )
}