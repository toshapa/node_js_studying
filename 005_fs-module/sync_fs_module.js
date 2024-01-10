const fs = require('fs')

try {
    fs.writeFileSync('./1.txt', 'It was a first string from module_fs')
    console.log('The first string added to 1.txt')
    fs.appendFileSync('./1.txt', 'Added a second string')
    console.log('Added a second string')
    fs.renameSync('./1.txt', 'Rename_1.txt')
    console.log('Renamed a 1.txt file')
} catch (error) {
    console.log(error)
}
