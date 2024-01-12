import { EventEmitter } from 'node:events'

const myEmiter = new EventEmitter()

const timeOutFn = (secQty) => {
    console.log(`Timer event is OUT after ${secQty} seconds`)
}

myEmiter.on('timeOut', timeOutFn)

setTimeout(() => {
    myEmiter.emit('timeOut', 5)
}, 5000)

setTimeout(() => {
    myEmiter.emit('timeOut', 1)
}, 1000)

setTimeout(() => {
    myEmiter.off('timeOut', timeOutFn)
}, 3000)
