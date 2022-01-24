import express from 'express'
import user from './user'
import server from './server'
import login from './login'
import logout from './logout'

const router = express.Router()

router.use('/user', user)
router.use('/server', server)
router.use('/login', login)
router.use('/logout', logout)

export default router