import express from 'express'
import server from './server'

const router = express.Router()

router.use('/', server)

export default router
