import React from 'react'
import styles from './ProductScreen.module.css'
import { products } from '../../products'

const ProductScreen = ({ match }) => {
    const product = products.find((p) => parseInt(p._id) === parseInt(match.params.id))
    return (
        <div className={styles.container}>
            {product.name}
        </div>
    )
}

export default ProductScreen
