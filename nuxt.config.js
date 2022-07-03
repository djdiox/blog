import bodyParser from 'body-parser'
import session from 'express-session'
import path from 'path'
import fs from 'fs'
import 'dotenv/config'
console.log( process.env.AUTH0_DOMAIN)
console.log( process.env.AUTH0_CLIENT_ID)
console.log(' PUBLIC_PATH',  process.env.PUBLIC_PATH)
export default {
  head: {
    title: 'Auth Routes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'Auth Routes example' }
    ]
  },
 target: 'static',
router: {
       base: '/blog/'
  },
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',

    // With options
    // ['@nuxtjs/vuetify', {

    //   /* module options */ }]
  ],
    /*
  ** Modules
  */
  modules: [
    // axios is required by @nuxtjs/auth
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org
   '@nuxtjs/auth-next'
  ],
  auth: {
    redirect: {
      login: '/auth/login', // redirect user when not connected
      callback: '/auth/signed-in',

    },
    strategies: {
      local: false,
      auth0: {
        redirect_uri: process.env.PUBLIC_PATH,
        domain: process.env.AUTH0_DOMAIN,
        client_id: process.env.AUTH0_CLIENT_ID
      }
    }
  },
  build: {
    // For stormkit.io
    publicPath: process.env.PUBLIC_PATH,
  },
  /*
  ** Add server middleware
  ** Nuxt uses `connect` module as server
  ** So most of express middleware works with nuxt server middleware
  */
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    // session middleware
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 }
    }),
    // Api middleware
    // We add /api/login & /api/logout routes
    '~/api',
  ],
  server: {
  https: {
    key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
    cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
  }
}
}
