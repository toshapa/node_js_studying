import express from 'express'
// import commentsRouter from './routes/comments.mjs'
// import usersRouter from './routes/users.mjs'

import router from './routes/index.mjs'

const app = express()

// const getRootHandler = (request, response) => {
//     response.send('Get Root Route')
// }

// // Function comments section
// const getCommentsHandler = (request, response) => {
//     response.send('Get Comments Route')
// }
// const postCommentsHandler = (request, response) => {
//     response.send('Hello From PostComments')
// }
// const getSingleCommentHandler = (request, response) => {
//     response.send(
//         `What do you need from comments, MAAAAAAAN!? This is number commet is ${request.params.commentId}`
//     )
// }
// const deleteSingleCommentHandler = (request, response) => {
//     response.send(
//         `It is delete single comment by Id ${request.params.commentId}`
//     )
// }

// // Function Users Section
// const getUsersHandler = (request, response) => {
//     response.send('It`s a response from a UserHandler')
// }
// const postUsersHandler = (request, response) => {
//     response.send('It is POST User Handler')
// }
// const getSingleUserId = (request, response) => {
//     response.send(`Get userId ${request.params.usersId}`)
// }

// //Root routes
// app.get('/', getRootHandler)
// app.use('/comments', commentsRouter)
// app.use('/users', usersRouter)

// // Comments section
// app.get('/comments', getCommentsHandler)
// app.post('/comments', postCommentsHandler)
// app.get('/comments/:commentId', getSingleCommentHandler)
// app.delete('/comments/:commentId', deleteSingleCommentHandler)

// // Users section
// app.get('/users', getUsersHandler)
// app.post('/users', postUsersHandler)
// app.get('/users/:usersId', getSingleUserId)

// Trying a router
// app.route('/comments').get(getCommentsHandler).post(postCommentsHandler)

app.use(router)

app.listen('3456', () => console.log('Server started on Port 3456'))
