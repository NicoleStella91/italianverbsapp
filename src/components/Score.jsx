import { useScoreContext } from "../contexts/ScoreContext"
import { MdStars } from "react-icons/md"

export default function Score() {
    const { score } = useScoreContext()

    return (
        <h4 className="score"><MdStars />  {score}</h4>
    )
}