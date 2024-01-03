

setTimeout( () => console.log('TIMER'), 0)

const cache = new Map()

const fibonacci = (n) => {
    return new Promise((resolve, reject) => {
        if ( n === 0 ||  n === 1) {
            return resolve(n)
        }
        if (cache.has(n)) {
            return resolve(cache.get(n))
        }
        setImmediate(() => {
            fibonacci(n-1).then((fib1) => fibonacci(n-2).then((fib2) => {
                cache.set(n, fib1+fib2)
                resolve(fib1 + fib2)
            }))
            })
            // Promise.all([fibonacci(n - 1), fibonacci(n - 2)])
            //     .then(([fibonacci1, fibonacci2]) => {
            //         cache.set(n, fibonacci1+fibonacci2)
            //         resolve(fibonacci1 + fibonacci2)
            //     })
        })
    }

fibonacci(150).then((res) => console.log(res,  performance.now().toFixed(2)))