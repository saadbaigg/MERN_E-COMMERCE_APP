import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.container}> 
            <Link to="/"><h4>eSHOP</h4></Link>
            <Link to="/cart"><p>cart</p></Link>
            <Link to="/signin"><p>sign in</p></Link>
        </header>
    )
}

export default Header
