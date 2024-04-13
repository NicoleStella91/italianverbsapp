import { useSubjectContext } from "../contexts/SubjectContext"

export default function RandomSubject() {
    const { subject } = useSubjectContext()

    return (
        <section>
            <h3>Subject: {subject}</h3>
        </section>
    )
}