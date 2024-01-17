import newFetch from './arrayJSONplaceholder.mjs'
import data from './data.mjs'

function getText(req, res) {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/html')
    res.write('<html><body><div>')
    res.write('<h1 style = "text-align:center">Text Page</h1>')
    res.write('</div></body></html>')
    return res.end()
}

function getComments(req, res) {
    res.statusCode = 200
    res.setHeader('Content-type', 'application/json')
    newFetch()
        .then((resp) => {
            res.end(JSON.stringify(resp))
        })
        .then(() => console.log(data))
}

function postComment(req, res) {
    let commentPOST = ''
    req.on('data', (chunk) => {
        commentPOST += chunk
    })

    req.on('end', () => {
        res.statusCode = 200
        data.push(JSON.parse(commentPOST))
        console.log(data)
        res.end('Data was recieved')
    })
    // return commentPOST
}

function getHttp(req, res) {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/html')
    console.log(data)
    return res.end(
        '<h1 style = "text-align:center">Greetings Anton, HTTP server is alive</h1>'
    )
}

function handleNotFound(req, res) {
    res.statusCode = 404
    res.setHeader('Content-type', 'text/html')
    res.end(`<h1 style = "text-align:center">404\rPage not found</h1>`)
}

export { getText, getComments, handleNotFound, getHttp, postComment }
