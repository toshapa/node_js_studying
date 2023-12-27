setTimeout( () => console.log('TIMER'), 0)



const fibonacci = (n) => {
    return new Promise((resolve, reject) => {
        if ( n === 0 ||  n === 1) {
            return resolve(n)
        }
        setImmediate(() => {
            Promise.all([fibonacci(n - 1), fibonacci(n - 2)])
                .then(([fibonacci1, fibonacci2]) => {resolve(fibonacci1 + fibonacci2)})
        })
    })
}

fibonacci(1).then((res) => console.log(res,  performance.now().toFixed(2)))