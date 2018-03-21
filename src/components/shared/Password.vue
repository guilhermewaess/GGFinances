<template>
  <v-text-field name="password"
                label="Enter your password"
                hint="At least 6 characters"
                v-model="fieldValue"
                min="6"
                prepend-icon="lock"
                :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                :append-icon-cb="changePasswordVisibility"
                :type="showPassword ? 'text' : 'password'"
                @input="valueChange">
  </v-text-field>
</template>

<script>
export default {
  name: 'Password',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: { required: true },
  },
  data() {
    return {
      showPassword: false,
      fieldValue: this.value,
    };
  },
  methods: {
    changePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    valueChange($event) {
      this.$emit('input', $event);
    },
  },
};
</script>
