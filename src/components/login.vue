<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-hext-centered">
        <div v-if="page == 'login'" class="column is-4 is-offset-4">
        <h1 class="title has-text-grey">Login</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FirebaseDb, FirebaseAuth } from '@/library/database'

// login en registratie section data
export default {
  data () {
    return {
      page: 'login',
      email: '',
      password: '',
      username: '',
      // login fouten
      loginError: ''
    }
  },
  // login methode en foutmelding
  methods: {
    login () {
      FirebaseAuth.signInWitEmailAndPassword(this.email, this.password).catch((error) => {
        this.loginError = error.message
      })
    },
    // veevalidate signup, als true, maak aan user email en password
    // https://vee-validate.logaretm.com/v2/api/validator.html

    // let matcher = {
    // scope: 'form-1',
    // vmId: this.$validator.id
    // }

    // this.$validator.reset(matcher);

    signup () {
      this.$validator.validateAll().then((result) => {
        // true
        if (result) {
          FirebaseAuth.createUserWithEmailAndPassword(this.email, this.password).then(
            (data) => {
              FirebaseDb.ref('users/' + data.user.uid).set({
                name: this.username
              })
            }
          )
        }
      })
    }
  },
  // check naar veranderingen in auth
  created () {
    FirebaseAuth.onAuthStateChanged((user) => {
      // als user is true, set loggen in status user ID met gegevens
      if (user) {
        this.$store.commit('SET_LOGGEDIN', { uid: user.uid, email: user.email })

        // gebruik een keer, bewaar een keer in database

        FirebaseDb.ref('users/' + user.uid)
          .once('value')
          .then((data) => {
            this.$store.commit('SET_USERNAME', data.val().name)
          })

        // push router naar chat na afloop

        this.$router.push('/chat')
      }
    })
  }
}
</script>

<style></style>
