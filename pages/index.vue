<template>
  <div>
    <super-secret-div v-if="$auth.loggedIn"/>
    <div class="content">
      <h1>Hello, {{ $auth.loggedIn ? $auth.user.username : 'friend' }}!</h1>
      <p>
        This is a super simple example of how to use <a href="https://nuxtjs.org" target="_blank">Nuxt.js</a> and <a href="https://auth0.com" target="_blank">Auth0</a> together.
      </p>
      <p v-if="$auth.loggedIn">
        Now that you're authenticated, maybe you should try going to our <nuxt-link to="/secret" class="link">super secret page</nuxt-link>!
      </p>
      <p v-else>
        You're not authenticated yet. Maybe you want to <router-link :to="'auth/login'">sign in</router-link> and see what happens?
      </p>
      <v-btn color="blue" @click="login">Login</v-btn>
    </div>
  </div>
</template>

<script>
import SuperSecretDiv from '~/components/SuperSecretDiv'

export default {
  components: {
    SuperSecretDiv
  },
  mounted() {
      console.log(this.$auth)
  },
  methods: {
    async login() {
      console.log(this.$auth)
      debugger;
      this.$auth.login()
    }
  }
}
</script>

<style scoped>
.content {
  max-width: 750px;
  margin: 0 auto;
  text-align: center;
}
</style>
