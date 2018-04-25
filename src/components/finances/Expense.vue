<template>
  <v-layout row>
    <v-flex xs6
            class="subheading">{{ expense.name }}</v-flex>
    <v-flex xs6
            class="text-xs-right subheading">
      <span>{{ expense.total }}</span>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Expense',
  props: {
    expense: {
      type: Object,
      required: true,
    },
  },
};
</script>

