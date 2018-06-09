<template>
  <v-flex>
    <v-card>
      <finance-header>
        <div slot="left-text">Incomes</div>
        <div slot="right-text">{{incomes.total}}</div>
      </finance-header>
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
import FinanceHeader from './FinanceHeader';
import SimpleIncomeOutcome from './SimpleIncomeOutcome';

export default {
  name: 'Incomes',
  components: {
    FinanceHeader,
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
</style>
