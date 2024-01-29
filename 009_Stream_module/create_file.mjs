import fs from 'node:fs'
import path from 'node:path'

if (!process.argv[2] || !process.argv[3]) {
    console.log('You need send me a more arguments')
    process.exit(0)
}

const fileName = process.argv[2]
const number = parseInt(process.argv[3])

if (isNaN(number)) {
    console.log('Hey Man, I need a number')
    process.exit(0)
}

const createStream = fs.createWriteStream(path.join('./files', fileName))

for (let i = 1; i <= number; i++) {
    createStream.write(`The line has a number ${i} from ${number}\n`)
}

createStream.end(() => console.log(`A file ${fileName} was created`))
