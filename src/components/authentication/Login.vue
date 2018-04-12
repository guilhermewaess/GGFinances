<template>
  <v-layout align-center
            justify-center>
    <v-flex xs12
            sm8
            md4>
      <v-card class="elevation-12">
        <v-toolbar dark
                   color="primary">
          <v-toolbar-title>
            Login
          </v-toolbar-title>
        </v-toolbar>
        <v-form @submit.prevent="login()">
          <v-card-text>
            <span>{{ isAuthenticated }}</span>
            <v-text-field v-model="user.email"
                          prepend-icon="person"
                          name="email"
                          label="Email"
                          type="text"
                          v-validate="'required|email'"
                          data-vv-name="email"
                          :error-messages="errors.collect('email')"></v-text-field>
            <password name="password"
                      v-model="user.password"
                      v-validate="'required|min:6'"
                      dava-vv-value-path="passwordValue"
                      :validationErrors="errors.collect('password')">
            </password>
          </v-card-text>

          <v-card-actions>
            <v-btn type="submit"
                   block
                   color="primary">Login</v-btn>
          </v-card-actions>
          <v-layout row
                    align-center
                    justify-center>
            <router-link :to="{name: 'Register'}">Oh! Don't have account? Register here!</router-link>
          </v-layout>
          <v-layout row
                    align-center
                    justify-center
                    class="mt-3">
            <span class="text-xs-center social-divider">Or use your social account</span>
          </v-layout>
          <v-card-actions>
            <v-btn block
                   color="primary"
                   @click="loginWithFacebook()">
              <v-icon left>fab fa-facebook-square</v-icon>
              Facebook
            </v-btn>
            <v-btn block
                   dark
                   color="red accent-4"
                   @click="loginWithGoogle()">
              <v-icon left>fab fa-google</v-icon>
              Google
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Password from '@/components/shared/Password';

export default {
  name: 'Login',
  components: {
    Password,
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions('auth', [
      'loginWithFacebook',
      'loginWithGoogle',
      'loginWithUserAndPassword',
    ]),
    async login() {
      const isValid = await this.$validator.validateAll();
      if (isValid) {
        this.loginWithUserAndPassword(this.user);
      }
    },
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
};
</script>

<style lang="stylus" scoped>
.social-divider {
  font-weight: bolder;
}
</style>

