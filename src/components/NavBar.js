import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="Border-b-4 border-green-700 text-center fixed w-full top-0 bg-green-600 font-bold
        text-lg text-yellow">
            <ul>
                <li className="inline-block pt-4 pb-4">
                    <Link to="/" className="pl-6 pr-8">Home</Link>
                </li>
                <li className="inline-block pt-4 pb-4">
                    <Link to="/About" className="pl-6 pr-8">About</Link>
                </li>
                <li className="inline-block pt-4 pb-4">
                    <Link to="/article-List" className="pl-6 pr-8">Articles</Link>
                </li>
            </ul>
            
        </nav>
    )
}

export default NavBar
