<template>
  <v-container fluid>
    <v-layout xs12>
      <v-flex>
        <v-card>
          <v-toolbar flat
                     dark
                     color="secondary"
                     class="elevation-0">
            <v-toolbar-title>April</v-toolbar-title>
          </v-toolbar>
          <v-container fluid
                       grid-list-md>
            <v-layout v-bind="layoutDisplay"
                      wrap
                      justify-space-around>
              <budget :budget="budget"
                      v-for="budget in budgets"
                      :key="budget.name"></budget>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
          ],
        },
        {
          name: 'Freedom',
          type: 'remaining',
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
