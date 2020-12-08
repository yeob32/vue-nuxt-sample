import { Nuxt, Builder } from 'nuxt'
import express from 'express'

const app = express()

// We instantiate Nuxt.js with the options
import config from '../nuxt.config.js'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  // if (config.dev) {
  const builder = new Builder(nuxt)
  await builder.build()
  // } else {
  //   await nuxt.ready()
  // }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  })
}

start()
