import '../styles/styles.css'
import { Routes, Route, Link } from "react-router-dom";

export function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to={'/'} className={"nav-item"}>Home</Link></li>
                <li><a href={'/about'}>About</a></li>
                <li><a href={'/menu'}>Menu</a></li>
                <li><Link to={'/booking'} className={"nav-item"}>Reservations</Link></li>
                <li><a href={'/order-online'}>Order Online</a></li>
                <li><a href={'/login'}>Login</a></li>
            </ul>
        </nav>
    )
}