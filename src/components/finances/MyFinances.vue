<template>
  <v-layout row
            wrap>
    <v-flex xs12>
      <v-card height="94%">
        <v-toolbar flat
                   dark
                   color="secondary"
                   class="elevation-0">
          <v-toolbar-title>April</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-title>Freedom: 100.00</v-toolbar-title>
        </v-toolbar>
        <v-container fluid
                     grid-list-md
                     class="pa-0">
          <v-layout v-bind="layoutDisplay"
                    wrap>
            <v-flex xs12
                    sm6>
              <incomes :incomes="incomes"></incomes>
              <expenses :expenses="expenses"></expenses>
              <!-- <balance></balance> -->
              <!-- <budget :budget="budget"
                      v-for="budget in budgets"
                      :key="budget.name"></budget> -->
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Balance from './Balance';
import Incomes from './Incomes';
import Expenses from './Expenses';

export default {
  name: 'MyFinances',
  components: {
    Balance,
    Expenses,
    Incomes,
  },
  data() {
    return {
      incomes: {
        total: 1000,
        detais: [{ name: 'Salary', value: 7000.0 }, { name: 'Salary', value: 7000.0 }],
      },
      expenses: {
        total: 50000,
        expensesList: [
          {
            name: 'Contas AP',
            total: 1000,
            details: [
              {
                name: 'Aluguel',
                value: 500,
                isPaid: true,
              },
              {
                name: 'Aluguel',
                value: 500,
                isPaid: true,
              },
              {
                name: 'Aluguel',
                value: 500,
                isPaid: true,
              },
              {
                name: 'Aluguel',
                value: 500,
                isPaid: true,
              },
            ],
          },
          {
            name: 'Contas AP2',
            total: 1000,
            details: [
              {
                name: 'Aluguel2',
                value: 5200,
                isPaid: true,
              },
            ],
          },
          {
            name: 'Contas AP3',
            total: 1000,
            details: [
              {
                name: 'Aluguel3',
                value: 5200,
                isPaid: true,
              },
            ],
          },
        ],
      },
      balance: {
        real: 2000,
        planned: 1000,
      },
    };
  },
  computed: {
    layoutDisplay() {
      const displayType = {};

      if (this.$vuetify.breakpoint.smAndDown) {
        displayType.column = true;
      }

      return displayType;
    },
  },
};
</script>
