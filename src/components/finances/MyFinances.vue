<template>
  <v-layout row wrap>
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
              <budget :budget="budget"
                      v-for="budget in budgets"
                      :key="budget.name"></budget>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Budget from './Budget';

export default {
  name: 'MyFinances',
  components: {
    Budget,
  },
  data() {
    return {
      budgets: [
        {
          name: 'Credit',
          type: 'credit',
          expenses: [
            {
              name: 'Contas AP',
              total: 1000,
              details: [
                {
                  name: 'Aluguel',
                  value: 500,
                },
              ],
            },
            {
              name: 'Contas AP2',
              total: 1000,
              details: [
                {
                  name: 'Aluguel',
                  value: 500,
                },
                {
                  name: 'Aluguel2',
                  value: 500,
                },
                {
                  name: 'Aluguel3',
                  value: 500,
                },
                {
                  name: 'Aluguel4',
                  value: 500,
                },
              ],
            },
          ],
        },
        {
          name: 'Debit',
          type: 'debit',
          expenses: [
            {
              name: 'Contas AP',
              total: 1000,
              details: [
                {
                  name: 'Aluguel',
                  value: 500,
                },
              ],
            },
            {
              name: 'Contas AP2',
              total: 1000,
              details: [
                {
                  name: 'Aluguel',
                  value: 500,
                },
              ],
            },
            {
              name: 'Contas AP3',
              total: 1000,
              details: [
                {
                  name: 'Aluguel',
                  value: 500,
                },
              ],
            },
          ],
        },
      ],
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
