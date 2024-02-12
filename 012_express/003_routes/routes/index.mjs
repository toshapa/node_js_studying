import express from 'express'

import { getRootHandler } from '../controllers/root.mjs'
import commentsRouter from './comments.mjs'
import usersRouter from './users.mjs'

const router = express.Router()

router.get('/', getRootHandler)
router.use('/comments', commentsRouter)
router.use('/users', usersRouter)

export default router
