import express from 'express'
import {
    getCommentsHandler,
    postCommentsHandler,
    getSingleCommentHandler,
    deleteSingleCommentHandler,
} from '../controllers/comments.mjs'

const router = express.Router()

// Comments section
router.get('/', getCommentsHandler)
router.post('/', postCommentsHandler)
router.get('/:commentId', getSingleCommentHandler)
router.delete('/:commentId', deleteSingleCommentHandler)

export default router
