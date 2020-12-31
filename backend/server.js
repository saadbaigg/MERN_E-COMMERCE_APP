const express = require('express')
const dotenv = require('dotenv')
const products = require('./data/products')

dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    let product = products.find(p => p._id === parseInt(req.params.id))
    res.json(product)
})

app.listen(5000, console.log('server running on PORT 5000'))