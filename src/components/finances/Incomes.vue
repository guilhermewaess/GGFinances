<template>
  <v-flex>
    <v-card class="budget-card">
      <v-toolbar flat
                 dark
                 card
                 height="20px"
                 class="elevation-0">
        <v-toolbar-title class="toolbar__title">Incomes</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-title>100.00</v-toolbar-title>
      </v-toolbar>
      <v-container class="pa-2">
        <simple-income-outcome v-for="(income, index) in incomes.detais"
                               :key="index"
                               :incomeOutcome="income">
        </simple-income-outcome>
      </v-container>
    </v-card>
  </v-flex>
</template>


<script>
import SimpleIncomeOutcome from './SimpleIncomeOutcome';

export default {
  name: 'Incomes',
  components: {
    SimpleIncomeOutcome,
  },
  props: {
    incomes: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.toolbar__title {
  font-size: 14px;
}
</style>
