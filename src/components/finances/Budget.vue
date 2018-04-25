<template>
  <v-flex>
    <v-card class="budget-card">
      <v-card-text class="text-xs-center">
        <h2 :class="defineTitleClass()">{{ budget.name }}</h2>
      </v-card-text>
      <v-container>
        <expense v-for="expense in budget.expenses"
                 :key="expense.name"
                 :expense="expense"></expense>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import Expense from './Expense';

export default {
  name: 'Budget',
  components: {
    Expense,
  },
  props: {
    budget: {
      type: Object,
      required: true,
    },
  },
  methods: {
    defineTitleClass() {
      if (this.budget.type === 'credit') {
        return 'green--text text--darken-1';
      }
      if (this.budget.type === 'debit') {
        return 'red--text text--darken-4';
      }

      return 'blue--text text--darken-4';
    },
  },
};
</script>

<style lang="scss" scoped>
.budget-card{
  height: 100% !important;
}
</style>
