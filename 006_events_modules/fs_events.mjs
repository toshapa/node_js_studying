import fs from 'node:fs'
import EventEmitter from 'node:events'
const fileEmiter = new EventEmitter()

const text = ['Sooooo, it was first line', `Okey, it${'`'}s a second line`]
const path = './first_file.txt'
const queue = performance.now().toFixed(2)

fileEmiter.on('createFile', () => {
    fs.writeFile(path, text[0], () => {
        console.log('File Created ', performance.now().toFixed(2))
        fileEmiter.emit('appendToExistFile')
    })
})

fileEmiter.on('appendToExistFile', () => {
    fs.appendFile(path, text[1], () => {
        console.log('Added a second line to file', performance.now().toFixed(2))
        fileEmiter.emit('renameFile')
    })
})

fileEmiter.on('renameFile', () => {
    fs.rename(path, 'renamed.txt', () => {
        console.log('Renamed', performance.now().toFixed(2))
    })
})

fileEmiter.emit('createFile')
// console.log(fileEmiter.eventNames())
