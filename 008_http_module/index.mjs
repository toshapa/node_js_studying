import http from 'node:http'
import EventEmitter from 'node:events'

const PORT = 3000
let arrayJSON

const myServerEmit = new EventEmitter()

myServerEmit.on('json', async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts/')
        .then((resp) => {
            return resp.json()
        })
        .then((json) => {
            arrayJSON = json
        })
        .then(() => myServerEmit.emit('server'))
})

myServerEmit.on('server', () => {
    const server = http.createServer((req, res) => {
        if (req.url === '/http') {
            console.log(req)
            res.statusCode = 200
            res.setHeader('Content-type', 'text/html')
            return res.end(
                '<h1 style = "text-align:center">Greetings Anton, HTTP server is alive</h1>'
            )
        }
        if (req.url === '/text') {
            res.statusCode = 200
            res.setHeader('Content-type', 'text/html')
            res.write('<html><body><div>')
            res.write('<h1 style = "text-align:center">Text Page</h1>')
            res.write('</div></body></html>')
            return res.end()
        }
        if (req.url === '/json') {
            res.statusCode = 200
            res.setHeader('Content-type', 'application/json')
            res.end(JSON.stringify(arrayJSON))
        }
        res.statusCode = 404
        res.setHeader('Content-type', 'text/html')
        res.end(`<h1 style = "text-align:center">404\rPage not found</h1>`)
    })
    server.listen(PORT, () => console.log(`Hard work server, port is ${PORT}`))
})

myServerEmit.emit('json')
