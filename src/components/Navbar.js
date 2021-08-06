import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <h1>DAMn Hotels</h1>
                <ul className="nav-links">
                    <li>
                        <Link to ="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to ="/about">
                            SingleRoom
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
