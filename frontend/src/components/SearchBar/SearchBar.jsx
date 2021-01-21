import React from 'react'
import styles from './SearchBar.module.css'

const SearchBar = () => {
    return (
        <div className={styles.container}>
            <input type="text" name="search"  />
            <button>Search</button>
        </div>
    )
}

export default SearchBar
