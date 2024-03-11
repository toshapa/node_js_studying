import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const PATH = 3456
const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(morgan('common'))

//use middleware CORS
app.use(cors())

app.use((request, response, next) => {
    const personData = {
        name: 'Anton',
        thirdname: 'Pechatnov',
        isStudent: true,
    }
    console.log(request.body)
    return response.json(personData)
})

app.listen(PATH, () => {
    console.log(`We start a server, on the port ${PATH}`)
})
