import express from 'express'
import envConfig from './config/env'
import setting from './lib/setting'
import logging from './lib/logging'
import log from './module/log'
import route from './route'
import IntervalManager from './lib/interval'
import { UploadDirectoryPath } from './types/module/data/data.types'

async function main() {
  const PORT = envConfig.PORT ?? 4000

  const server = express()
  server.set('trust proxy', 1)

  server.use(setting)
  server.use(logging)
  server.use('/api', route)
  server.use('/api/temp', express.static(`${UploadDirectoryPath}`))

  server.listen(PORT, () => {
    IntervalManager.run()
    log.info(`Start server - 0.0.0.0:${PORT}`)
  })
}

main()

process.on('SIGINT', () => {
  console.log(`Quit Sever`)
  process.exit()
})
