const PORT = 9001
const URLDB = 'mongodb://127.0.0.1:27017'

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const user = require('./models/User')
const {secter} = require('.config') 
const product = require('./models/Produst')



const app = express()

app.use(cors())
app.use(express.json())

const generateaccessToken = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, secret, {expiresIn:' 24h'})
}

app.post('/registration', async (req, res) => {
    console.log(req.body)
    const {login, password, email} = req.body.login
    const user = new User({login, password, email})
    await user.save()
    res.json({
        message: 'Вы успешно наступили в гавно! GREAT JOB!!!'
    })
})

app.post('/login', async (req, res) => {
    console.log(req.body)
    const {login, password,} = req.body.login
    const User =  await User.findOne({login})
    if (!user){
        return res.status(400).json({message: 'вы без ног'})
    }
    if (user.passwaord !== passwaord){
        return res.status(400).json({message: 'вы без обуви'})
    }
    const Token = generateaccessToken(user._id)
    res.json({
        message: 'Вы успешно съели гавно!',
        Token: Token
    })
})

app.get('/produt', async (req, res) => {
    /*const products = [ 
        { id: 1,  header: 'щрек 1', price: 1212 },
        { id: 2,  header: 'щрек 2', price: 2323 },
        { id: 3,  header: 'щрек 3', price: 3434 },
        { id: 4,  header: 'щрек 4', price: 6565 },
        { id: 5,  header: 'щрек 5', price: 7878 },
        { id: 6,  header: 'щрек 6', price: 9090 },
        { id: 7,  header: 'щрек 7', price: 9090 },
        { id: 8,  header: 'щрек 8', price: 9090 },
        { id: 9,  header: 'щрек 9', price: 9090 },
      ]*/

    const products = await product.find()

    res.json({
        data: products
    })
})

const start = async () => {
    try { 
        await mongoose.connect(URLDB, { authSourse: "admin"})
        app.listen(PORT, () => console.log(`сервак запиздячен на ${PORT} порте`))
    } catch (e){
        console.log(e)
    }
}

start()