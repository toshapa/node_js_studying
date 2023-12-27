
setTimeout(() => console.log('Timer'), 0)

const fibonacci = (n) => {
    if ( n === 0 ||  n === 1) {
        return n
    }
    return fibonacci(n - 1) + fibonacci( n - 2 )
}

console.log(fibonacci(40), performance.now().toFixed(2))
