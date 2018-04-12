<template>
  <v-text-field name="password"
                hint="At least 6 characters"
                v-model="passwordValue"
                prepend-icon="lock"
                :label="label"
                :error-messages="validationErrors"
                :append-icon="defineAppendIcon"
                :append-icon-cb="changePasswordVisibility"
                :type="defineFieldType"
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
    label: {
      default: 'Enter your password',
    },
    validationErrors: {
      required: false,
    },
  },
  data() {
    return {
      showPassword: false,
      passwordValue: this.value,
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
  computed: {
    defineAppendIcon() {
      return this.showPassword ? 'visibility' : 'visibility_off';
    },
    defineFieldType() {
      return this.showPassword ? 'text' : 'password';
    },
  },
};
</script>
