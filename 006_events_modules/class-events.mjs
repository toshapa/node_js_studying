import { error } from 'console'
import EventEmitter from 'events'
import { userInfo } from 'os'

class Post extends EventEmitter {
    constructor(author, text) {
        super()
        this.author = author
        this.text = text
        this.likeQty = 0
        this.on('likePost', (username) => {
            console.log(
                `${username} liked your post`,
                performance.now().toFixed(2)
            )
        })
        this.on('Error', (error) => {
            console.log(error)
        })
    }

    like(username) {
        if (!username) {
            return this.emit(
                'Error',
                new Error('No username in the like request')
            )
        }
        this.likeQty += 1
        this.emit('likePost', username)
    }
}

const myPost = new Post('Bogdan', 'kjhvkjhgcvjhcg')

// myPost.on('likePost', (username) => {
//     console.log(`${username} liked your post`, performance.now().toFixed(2))
// })

console.log(myPost.author, myPost.likeQty, myPost.text)

setTimeout(() => {
    myPost.like('Julia')
}, 1000)
setTimeout(() => {
    myPost.like()
}, 2000)
setTimeout(() => {
    myPost.like('Simon')
}, 3000)
