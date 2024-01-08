import { season, temperature } from './named_exports.mjs'
import { humidity, isRaining } from './inline_module.mjs'

import DEFAULT_SERVER, { USERNAME, PASSWORD } from './mixed_exports.mjs'

import getDataFromServ from './export-default.mjs'

console.log(`${season} and temperature is ${temperature}`)

console.log(isRaining)
console.log(humidity)

getDataFromServ('https://jsonplaceholder.typicode.com/posts/1')
    .then((posts) => console.log(posts, performance.now().toFixed(2)))
    .catch((err) => {
        console.log(err, performance.now().toFixed(2))
    })

console.log(DEFAULT_SERVER)
console.log(USERNAME, PASSWORD)
