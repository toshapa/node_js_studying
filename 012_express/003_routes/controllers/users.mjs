const getUsersHandler = (request, response) => {
    response.send('It`s a response from a UserHandler')
}
const postUsersHandler = (request, response) => {
    response.send('It is POST User Handler')
}
const getSingleUserId = (request, response) => {
    response.send(`Get userId ${request.params.usersId}`)
}

export { getUsersHandler, postUsersHandler, getSingleUserId }
