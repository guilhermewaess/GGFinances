<template>
  <v-flex class="expenses">
    <v-card>
      <finance-header>
        <div slot="left-text">Expenses</div>
        <div slot="right-text">{{expenses.total}}</div>
      </finance-header>
      <v-expansion-panel>
        <v-expansion-panel-content v-for="(expense,i) in expenses.expensesList"
                                   :key="i">
          <div slot="header">
            <simple-income-outcome :incomeOutcome="{name: expense.name, value: expense.total}">
            </simple-income-outcome>
          </div>
          <v-card>
            <v-container class="pa-1">
              <simple-income-outcome v-for="(expenseDetail,i) in expense.details"
                                     :key="i"
                                     :incomeOutcome="expenseDetail">
              </simple-income-outcome>
            </v-container>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-card>
  </v-flex>

</template>

<script>
import FinanceHeader from './FinanceHeader';
import SimpleIncomeOutcome from './SimpleIncomeOutcome';

export default {
  name: 'Expense',
  components: {
    SimpleIncomeOutcome,
    FinanceHeader,
  },
  props: {
    expenses: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.expenses {
  .expansion-panel__header {
    padding-top: 6px;
    padding-bottom: 6px;
    padding-right: 17px;
    padding-left: 24px;
  }
}
</style>

