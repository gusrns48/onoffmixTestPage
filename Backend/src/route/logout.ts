import express from 'express'
import { ResponseCode } from '../constants/response'
import tokenRouter from '../lib/router/token'

const router = express.Router()

router.delete('/', tokenRouter, (_, res) => {
  res.clearCookie('Authorization')
  res.json({ code: ResponseCode.ok })
})

export default router
