<template>
  <v-text-field name="password"
                label="Enter your password"
                hint="At least 6 characters"
                v-model="value"
                min="6"
                :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                :append-icon-cb="changePasswordVisibility"
                :type="showPassword ? 'password' : 'text'"
                counter>
  </v-text-field>
</template>

<script>
export default {
  name: 'Password',
  props: {
    value: { required: true },
  },
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    changePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
