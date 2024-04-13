import { useInfinitiveContext } from '../contexts/InfinitiveContext'

export default function RandomInfinitive() {
    const { infinitive } = useInfinitiveContext()

    return (
        <section>
            <h3>Verb: {infinitive}</h3>
        </section>
    )

}