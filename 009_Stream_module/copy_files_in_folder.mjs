import fs, { write } from 'node:fs'

const fileName = './files/new3.txt'
const copyFile = './files/copy_new3.txt'

const readFileStream = fs.createReadStream(fileName)
const writeFileStream = fs.createWriteStream(copyFile)

readFileStream.pipe(writeFileStream)

readFileStream.on('end', () => console.log('File was read'))
writeFileStream.on('close', () => console.log('File was write'))
writeFileStream.on('finish', () => console.log('File was copied'))
