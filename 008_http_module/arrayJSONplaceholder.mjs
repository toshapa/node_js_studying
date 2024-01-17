import data from './data.mjs'

async function newFetch() {
    if (data.length === 0) {
        await fetch('https://jsonplaceholder.typicode.com/posts/2/comments')
            .then((resp) => {
                return resp.json()
            })
            .then((json) => {
                json.forEach((obj) => {
                    data.push(obj)
                })
            })
        return data
    }
}
export default newFetch
