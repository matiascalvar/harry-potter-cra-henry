import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

function Navbar() {
    return (
        <div className={style.main}>
            <Link to="/"><p>Home</p></Link>

            <Link to="/about"><p>About</p></Link>

            <Link to="/form"><p>Add Character</p></Link>
        </div>
    )
}

export default Navbar