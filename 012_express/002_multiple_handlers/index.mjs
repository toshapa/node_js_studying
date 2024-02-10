import express from 'express'

const app = express()

const firstHandler = (req, res, next) => {
    console.log('FirstHandler')
    // res.send('Hello screen ... ')
    next()
}
const secondHandler = (req, res) => {
    console.log('SecondHandler')
    res.send('Hello from Second Handlers')
}

app.get('/', firstHandler, secondHandler)

app.listen('3456', () => {
    console.log('Server is start')
})
