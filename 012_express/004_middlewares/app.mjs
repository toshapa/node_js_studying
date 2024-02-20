import express from 'express'
import morgan from 'morgan'
// import qs from 'qs'

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// const log = (request, response, next) => {
//     let data = ''
//     request.on('data', (chunk) => (data += chunk))
//     request.on('end', () => {
//         const parseJSON = JSON.parse(data)
//         request.body = parseJSON
//         next()
//     })
// }

// app.use((request, response, next) => {
//     if (
//         request.headers['content-type'] === 'application/x-www-form-urlencoded'
//     ) {
//         request.on('data', (chunk) => {
//             let data = ''
//             data += chunk.toString()
//             const parsedFormData = qs.parse(data)
//             request.body = parsedFormData
//             next()
//         })
//     } else {
//         next()
//     }
// })

app.use(morgan('common'))

app.use((request, response, next) => {
    console.log(request.body)
    response.send('Hello from Express')
})

app.listen('3456', () => console.log('We start a server on port 3456'))
