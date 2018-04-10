<template>
  <v-layout align-center
            justify-center>
    <v-flex xs12
            sm8
            md8>
      <v-card class="elevation-12">
        <v-toolbar dark
                   color="primary">
          <v-toolbar-title>
            Register
          </v-toolbar-title>
        </v-toolbar>
        <v-form @submit.prevent="register()">
          <v-container>
            <v-layout row
                      wrap>
              <v-flex xs12
                      sm6>
                <v-text-field name="first-name"
                              label="First name"
                              prepend-icon="person"
                              type="text"
                              v-model="user.firstName"
                              v-validate="'required|max:20'"
                              :error-messages="errors.collect('first-name')">
                </v-text-field>
              </v-flex>
              <v-flex xs12
                      sm6>
                <v-text-field name="surname"
                              label="Surname"
                              prepend-icon="person"
                              type="text"
                              v-model="user.surname"
                              v-validate="'required|max:50'"
                              :error-messages="errors.collect('surname')">
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row
                      wrap>
              <v-flex xs12
                      sm6>
                <v-text-field name="email"
                              label="E-mail"
                              prepend-icon="mail"
                              type="text"
                              v-model="user.email"
                              v-validate="'required|email'"
                              :error-messages="errors.collect('email')">
                </v-text-field>
              </v-flex>
              <v-flex xs12
                      sm6>
                <v-text-field name="confirm-email"
                              label="Confirm e-mail"
                              prepend-icon="mail"
                              type="text"
                              v-model="user.confirmEmail"
                              v-validate="'confirmed:email'"
                              data-vv-as="e-mail"
                              :error-messages="errors.collect('confirm-email')">
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row
                      wrap>
              <v-flex xs12
                      sm6>
                <password name="password"
                          v-model="user.password"
                          v-validate="'required|min:6'"
                          data-vv-value-path="passwordValue"
                          :validationErrors="errors.collect('password')">
                </password>
              </v-flex>
              <v-flex xs12
                      sm6>
                <password name="confirm-password"
                          v-model="user.confirmPassword"
                          label="Confirm password"
                          v-validate="'confirmed:password'"
                          data-vv-value-path="passwordValue"
                          data-vv-as="password"
                          :validationErrors="errors.collect('confirm-password')">
                </password>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-btn type="submit"
                   block
                   dark
                   color="primary">Register</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Password from '@/components/shared/Password';

export default {
  name: 'Register',
  components: {
    Password,
  },
  data() {
    return {
      user: {
        firstName: '',
        surname: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
  methods: {
    async register() {
      const isValid = await this.$validator.validateAll();
      if (isValid) {
        // yey
      }
    },
  },
};
</script>

