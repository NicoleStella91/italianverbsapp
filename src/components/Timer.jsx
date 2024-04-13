import { useEffect } from "react"
import { useTimerContext } from "../contexts/TimerContext"

export default function Timer() {
    const { timer, startTimer } = useTimerContext()

    useEffect(() => {
        const cleanup = startTimer()
        return () => {
            if (cleanup) cleanup()
        }
    }, [startTimer])

    return (
        <section className="timer">
            <p>{timer.toString().padStart(2, '0')}</p>
        </section>
    )
}