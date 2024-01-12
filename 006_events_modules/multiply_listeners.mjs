import { EventEmitter } from 'events'

const myEmiter = new EventEmitter()

myEmiter.on('myOwnEmitter', () => {
    console.log('My First Own Event')
})

myEmiter.on('myOwnEmitter', () => {
    console.log('My Second Own Event')
})

function startingEvents() {
    myEmiter.emit('myOwnEmitter')
}

startingEvents()

myEmiter.setMaxListeners(345)
console.log(myEmiter.getMaxListeners())
