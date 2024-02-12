import express from 'express'

const router = express.Router()

import {
    getUsersHandler,
    postUsersHandler,
    getSingleUserId,
} from '../controllers/users.mjs'

// Users section
router.get('/', getUsersHandler)
router.post('/', postUsersHandler)
router.get('/:usersId', getSingleUserId)

export default router
