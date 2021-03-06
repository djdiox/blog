import Middleware from './middleware'
import { Auth, authMiddleware, ExpiredAuthSessionError } from '~auth/runtime'

// Active schemes
import { Auth0Scheme } from '~auth/runtime'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {
  "resetOnError": false,
  "ignoreExceptions": false,
  "scopeKey": "scope",
  "rewriteRedirects": true,
  "fullPathRedirect": false,
  "watchLoggedIn": true,
  "redirect": {
    "login": "/auth/login",
    "logout": "/",
    "home": "/",
    "callback": "/auth/signed-in"
  },
  "vuex": {
    "namespace": "auth"
  },
  "cookie": {
    "prefix": "auth.",
    "options": {
      "path": "/"
    }
  },
  "localStorage": {
    "prefix": "auth."
  },
  "defaultStrategy": "auth0"
}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // auth0
  $auth.registerStrategy('auth0', new Auth0Scheme($auth, {
  "domain": "djdiox-blog.eu.auth0.com",
  "client_id": "4ZuN5caw10kPI0rh1nI6e0YkwJUw7B2t",
  "name": "auth0",
  "endpoints": {
    "authorization": "https://djdiox-blog.eu.auth0.com/authorize",
    "userInfo": "https://djdiox-blog.eu.auth0.com/userinfo",
    "token": "https://djdiox-blog.eu.auth0.com/oauth/token",
    "logout": "https://djdiox-blog.eu.auth0.com/v2/logout"
  },
  "scope": [
    "openid",
    "profile",
    "email"
  ]
}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
