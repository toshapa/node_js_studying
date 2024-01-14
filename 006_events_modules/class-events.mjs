import EventEmitter from 'events'
import { userInfo } from 'os'

class Post extends EventEmitter {
    constructor(author, text) {
        super()
        this.author = author
        this.text = text
        this.likeQty = 0
    }

    like(username) {
        this.likeQty += 1
        this.emit('likePost', username)
    }
}

const myPost = new Post('Bogdan', 'kjhvkjhgcvjhcg')

myPost.on('likePost', (username) => {
    console.log(`${username} liked your post`, performance.now().toFixed(2))
})

console.log(myPost.author, myPost.likeQty, myPost.text)

setTimeout(() => {
    myPost.like('Julia')
}, 1000)
setTimeout(() => {
    myPost.like('Anton')
}, 2000)
setTimeout(() => {
    myPost.like('Simon')
}, 3000)
