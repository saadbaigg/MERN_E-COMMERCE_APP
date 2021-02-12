import React from 'react'
import ShopScreenBar from '../../components/ShopScreenBar/ShopScreenBar'
import styles from './ShopScreen.module.css'

const ShopScreen = () => {
    return (
        <div className={styles.container}>
            <ShopScreenBar />
        </div>
    )
}

export default ShopScreen
