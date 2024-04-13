import { createContext, useState, useContext, useEffect } from "react"

const ScoreContext = createContext()

export const useScoreContext = () => useContext(ScoreContext)

export const ScoreContextProvider = ({ children }) => {
    const [score, setScore] = useState(() => {
        const storedScore = localStorage.getItem('score')
        return storedScore ? parseInt(storedScore) : 0
    })

    useEffect(() => {
        localStorage.setItem('score', score.toString())
    }, [score])

    const increaseScore = () => {
        setScore(prevScore => prevScore + 1)
    }

    const decreaseScore = () => {
        setScore(prevScore => prevScore - 1)
    }

    const resetScore = () => {
        setScore(0)
        localStorage.removeItem('score')
    }

    return (
        <ScoreContext.Provider value={{ score, setScore, increaseScore, decreaseScore, resetScore }}>
            {children}
        </ScoreContext.Provider>
    )
}