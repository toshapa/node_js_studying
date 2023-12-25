const fs = require('fs')
const dns = require('dns')


const timeStamp = () => {
    return performance.now().toFixed(2)
}

function info (text) {
    console.log(text, timeStamp())
}

info('Program start')

setTimeout( () => info('TimeOut 1'), 0)
setTimeout( () => 
    {
        process.nextTick(() => info('NextTick 2'))
        info('TimeOut 2')
}, 10)


let intervalCount = 1
const intervalId = setInterval(() => {
    info(`Interval ${intervalCount += 1}`)
    if (intervalCount === 15) {
        clearInterval(intervalId)
    }
}, 100)

fs.writeFile('./textFile.txt', 'Hello Node.js, here was Anton', () => info('Write file is done'))

Promise.resolve().then(() => info('Promise 1'))

process.nextTick( () => info('NextTick 1'))

setImmediate(()=> info('setImmediate 1'))

dns.lookup('localhost', (err, address, family) => {
    info(err)
    info(address)
    info(family)
    // console.log('DNS 1 localhost', address, timeStamp())
    info('DNS 1 localhost')
    Promise.resolve().then(() => info('Promise 2'))
    process.nextTick( () => info("NextTick 3"))
})

info('Program end')