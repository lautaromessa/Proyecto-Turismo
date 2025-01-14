const express = require('express');
const path = require('path')

const app = express();

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))

const viewsPath = path.resolve(__dirname, './views')
app.use(express.static(viewsPath))

app.listen( 4000, () => {
    console.log('Servidor corriendo en el puerto 4000')
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
})

app.get('/productCart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'))
})