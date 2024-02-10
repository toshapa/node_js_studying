// import http from 'node:http'
import express from 'express'

const app = express()

const port = 3456

// const server = http.createServer(app)

app.get('/', (req, res) => {
    res.send('Start with Express')
})

app.listen(port, () => {
    console.log('We get response from Express')
})
// server.listen(port, () => console.log(`Server was start at port ${port}`))
