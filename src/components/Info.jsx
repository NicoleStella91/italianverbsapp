import { FaInfoCircle } from "react-icons/fa"
import { Tooltip } from 'react-tooltip'

export default function Info() {
    return (
        <section className="info">
            <FaInfoCircle
                 data-tooltip-id="info-tooltip"
                 data-tooltip-content="With verbs using the auxiliary essere remember to include both the masculine and the feminine options, as in IO SONO ANDATO/A or NOI SIAMO ANDATI/E"
                 data-tooltip-place="top"
            />
            <Tooltip id="info-tooltip" />
        </section>
    )
}