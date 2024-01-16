import data from './data.mjs'

async function newFetch() {
    let arrayJSON = []
    await fetch('https://jsonplaceholder.typicode.com/posts/2/comments')
        .then((resp) => {
            return resp.json()
        })
        .then((json) => {
            return (arrayJSON = json)
        })
        .then(() => {
            data.push(arrayJSON)
        })
    return arrayJSON
}

export default newFetch
