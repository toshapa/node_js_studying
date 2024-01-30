import fs, { write } from 'node:fs'
import path from 'node:path'

const sourcePath = './files'
const destinationPath = './copied_files'

if (!fs.existsSync(sourcePath)) {
    console.log(`Sorry, Source dir ${sourcePath} doesn't exist`)
    console.log('Exiting ...')
    process.exit(0)
}

if (fs.existsSync(destinationPath)) {
    fs.rmSync(destinationPath, { recursive: true })
}

fs.mkdirSync(destinationPath)

fs.readdir('./files', (err, filesArr) => {
    if (err) {
        console.log('Hey, it is a problem.. Error!')
        process.exit(0)
    }
    filesArr.forEach((fileName, index) => {
        const sourceFilePath = path.join(sourcePath, fileName)
        const destinationFilePath = path.join(
            destinationPath,
            `${index + 1}_copy_${fileName}`
        )

        const readPathStream = fs.createReadStream(sourceFilePath)
        const writePathStream = fs.createWriteStream(destinationFilePath)

        readPathStream.pipe(writePathStream)

        writePathStream.on('finish', () =>
            console.log(`file ${fileName} was copied to ${destinationPath}`)
        )
    })
})
