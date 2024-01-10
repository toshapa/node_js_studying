const fs = require('fs/promises')

fs.writeFile('./first.txt', 'First file text')
    .then(() => console.log('File was written'))
    .then(fs.appendFile('./first.txt', '\nAnother text and string'))
    .then(() => console.log('Append another text to first.txt'))
    .then(fs.rename('./first.txt', 'renamed_first.txt'))
    .then(() => console.log('Renamed first text file'))
    .catch((err) => console.log(err))

// fs.writeFile('./first.txt', 'First file text', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('File first.txt was written')
//         fs.appendFile('./first.txt', '\nSecond string', (err) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.log('The second string was added to first.txt')
//                 fs.rename('./first.txt', 'renames_first.txt', (err) => {
//                     if (err) {
//                         console.log(err)
//                     } else {
//                         console.log('Renamed first.txt')
//                     }
//                 })
//             }
//         })
//     }
// })
