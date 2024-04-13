import { createContext, useState, useContext } from "react"

const TimerContext = createContext()

export const useTimerContext = () => useContext(TimerContext)

export const TimerProvider = ({ children }) => {
    const [timer, setTimer] = useState(10)
    const [timerExpired, setTimerExpired] = useState(false)

    const startTimer = () => {
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer <= 1) {
                    clearInterval(interval)
                    return 0
                }
                return prevTimer - 1
            });
        }, 1000)
        return () => clearInterval(interval)
    }

    return (
        <TimerContext.Provider value={{ timer, setTimer, startTimer, timerExpired, setTimerExpired }}>
            {children}
        </TimerContext.Provider>
    )
}