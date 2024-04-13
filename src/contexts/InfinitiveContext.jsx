import { createContext, useState, useContext } from "react"
import verbData from "../verbData"

const InfinitiveContext = createContext()

export const useInfinitiveContext = () => useContext(InfinitiveContext)

export const InfinitiveProvider = ({ children }) => {
    const [infinitiveIndex, setInfinitiveIndex] = useState(Math.floor(Math.random() * verbData.length))
    const [infinitive, setInfinitive] = useState(verbData[infinitiveIndex].infinitive)

    const generateNewInfinitive = () => {
        const newIndex = Math.floor(Math.random() * verbData.length)
        setInfinitiveIndex(newIndex)
        setInfinitive(verbData[newIndex].infinitive)
    }

    return (
        <InfinitiveContext.Provider value={{ infinitive, setInfinitive, infinitiveIndex, setInfinitiveIndex, generateNewInfinitive }}>
            {children}
        </InfinitiveContext.Provider>
    )
}