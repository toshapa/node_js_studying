import { readFile } from 'node:fs'
import qs from 'node:querystring'

import newFetch from './arrayJSONplaceholder.mjs'
import data from './data.mjs'

function getText(req, res) {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/html')
    res.write('<html><body><div>')
    res.write('<h1 style = "text-align:center">Text Page</h1>')
    res.write('</div></body></html>')
    return res.end('GetText')
}

function getHome(req, res) {
    readFile('./files/form.html', (err, data) => {
        if (err) {
            res.statusCode = 500
            res.setHeader('Content-type', 'text/plain')
            res.end('We hava a problem on server-side')
        } else {
            res.statusCode = 200
            res.setHeader('Content-type', 'text/html')
            res.end(data)
        }
    })
}

function getComments(req, res) {
    res.statusCode = 200
    res.setHeader('Content-type', 'application/json')
    newFetch().then((resp) => {
        res.end('We get a comments from JSONplaceholder')
    })
}

function postComment(req, res) {
    // res.setHeader('Content-type', 'text/plain')
    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk.toString()
        })
        req.on('end', () => {
            try {
                console.log(qs.parse(body))
                data.push(qs.parse(body))
                res.statusCode = 200
                res.end('We send data from form to Data comments')
            } catch (error) {
                res.statusCode = 400
                res.end(console.log('inValid form Data'))
            }
        })
    } else if (req.headers['content-type'] === 'application/json') {
        let commentPOST = ''
        req.on('data', (chunk) => {
            commentPOST += chunk
        })
        req.on('end', () => {
            try {
                res.statusCode = 200
                data.push(JSON.parse(commentPOST))
                res.end('Data was recieved')
            } catch (error) {
                res.statusCode = 400
                res.end('Client sent no correct JSON')
            }
        })
    } else {
        req.on('end', () => {
            res.statusCode === 400
            res.end('Data must be in JSON')
        })
    }
}

function getHttp(req, res) {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/html')
    return res.end(
        '<h1 style = "text-align:center">Greetings Anton, HTTP server is alive</h1>'
    )
}

function handleNotFound(req, res) {
    res.statusCode = 404
    res.setHeader('Content-type', 'text/html')
    res.end(`<h1 style = "text-align:center">404\rPage not found</h1>`)
}

export { getText, getComments, handleNotFound, getHttp, postComment, getHome }
