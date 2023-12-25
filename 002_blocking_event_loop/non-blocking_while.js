const fs = require('fs')

let timer = () => {
    return performance.now().toFixed(2)
}

let isRunning = true;

function setImmediatePromise () {
    return new Promise((resolve, reject) => {
        setImmediate(() => resolve())
    })
}



setTimeout(() => isRunning = false, 100)
process.nextTick(() => {console.log(`next Tick .. ${timer()}`)})

async function whileLoop() {
    while (isRunning) {
        console.log(`While is running .. ${timer()}`)
        await setImmediatePromise()
    }
} 

whileLoop().then(() => console.log(`while Loop ended .. ${timer()}`))