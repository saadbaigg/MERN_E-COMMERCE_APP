import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.container}> 
            <h4>eSHOP</h4>
            <p>cart</p>
            <p>sign in</p>
        </header>
    )
}

export default Header
