import logo from "../assets/logo.png"

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Italian Verbs Game Logo" className="logo" />
            <h1>Italian Verbs</h1>
        </header>
    )
}