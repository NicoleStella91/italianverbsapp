import { createContext, useState, useContext } from "react"
import subjects from '../subjects'

const SubjectContext = createContext()

export const useSubjectContext = () => useContext(SubjectContext)

export const SubjectProvider = ({ children }) => {
    const [subjectIndex, setSubjectIndex] = useState(Math.floor(Math.random() * subjects.length))
    const [subject, setSubject] = useState(subjects[subjectIndex])

    const generateNewSubject = () => {
        const newIndex = Math.floor(Math.random() * subjects.length)
        setSubjectIndex(newIndex)
        setSubject(subjects[newIndex])
    }

    return (
        <SubjectContext.Provider value={{ subjectIndex, setSubjectIndex, subject, setSubject, generateNewSubject}}>
            {children}
        </SubjectContext.Provider>
    )
}