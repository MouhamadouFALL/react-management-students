import react from "react";
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h1>React Claasroom App</h1>
            <nav>
                <Link to="/">Home</Link>&nbsp; | &nbsp;
                <Link to="/about">About</Link>
            </nav>
        </header>
    )
}