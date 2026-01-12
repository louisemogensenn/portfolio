import { Link } from "react-router-dom"

export default function CallToAction(text, link) {
    return (
        <>
        <Link to={link}>
            <button>{text}</button>
        </Link>
        </>
    )
}