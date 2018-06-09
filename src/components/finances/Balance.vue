<template>
  <v-flex>
    <v-card class="budget-card">
      <v-card-text class="text-xs-center">
        <h2>Balance</h2>
      </v-card-text>
      <v-container class="pa-0">
        <v-layout row
                  wrap>
          <v-flex xs12>
            <!-- <expense v-for="expense in budget.expenses"
                   :key="expense.name"
                   :expense="expense"></expense> -->
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>


<script>
export default {
  name: 'Balance',
};
</script>
