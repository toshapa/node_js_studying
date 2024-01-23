import http from 'node:http'
import EventEmitter from 'node:events'
import {
    getHttp,
    getText,
    getHome,
    getComments,
    handleNotFound,
    postComment,
} from './handle.mjs'
import newFetch from './arrayJSONplaceholder.mjs'

const PORT = 3000
// let arrayJSON = []

const myServerEmit = new EventEmitter()

myServerEmit.on('json', async () => {
    await newFetch().then((res) => {
        if (res.length !== 0) {
            myServerEmit.emit('server')
        }
    })
})

myServerEmit.on('server', () => {
    const server = http.createServer((req, res) => {
        if (req.method === 'GET' && req.url === '/') {
            return getHome(req, res)
        }
        if (req.method === 'GET' && req.url === '/http') {
            return getHttp(req, res)
        }
        if (req.method === 'GET' && req.url === '/text') {
            return getText(req, res)
        }
        if (req.method === 'GET' && req.url === '/comments') {
            return getComments(req, res)
        }
        if (req.method === 'POST' && req.url === '/comments') {
            return postComment(req, res)
        }
        handleNotFound(req, res)
    })
    server.listen(PORT, () => console.log(`Hard work server, port is ${PORT}`))
})

myServerEmit.emit('json')
