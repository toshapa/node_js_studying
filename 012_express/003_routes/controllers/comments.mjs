// Function comments section

const getCommentsHandler = (request, response) => {
    response.send('Get Comments Route')
}
const postCommentsHandler = (request, response) => {
    response.send('Hello From PostComments')
}
const getSingleCommentHandler = (request, response) => {
    response.send(
        `What do you need from comments, MAAAAAAAN!? This is number commet is ${request.params.commentId}`
    )
}
const deleteSingleCommentHandler = (request, response) => {
    response.send(
        `It is delete single comment by Id ${request.params.commentId}`
    )
}

export {
    getCommentsHandler,
    postCommentsHandler,
    getSingleCommentHandler,
    deleteSingleCommentHandler,
}
