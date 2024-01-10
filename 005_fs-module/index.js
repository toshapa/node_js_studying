const fs = require('fs')

fs.writeFile('./first.txt', 'First file text', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('File first.txt was written')
        fs.appendFile('./first.txt', '\nSecond string', (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('The second string was added to first.txt')
                fs.rename('./first.txt', 'renames_first.txt', (err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log('Renamed first.txt')
                    }
                })
            }
        })
    }
})
