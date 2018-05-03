<template>
      <v-expansion-panel expand>
        <v-expansion-panel-content>
          <div slot="header">
            <span>{{ expense.name }}</span>
            <span class="expense-value">{{ expense.total }}</span>
          </div>
          <v-card>
            <v-layout row
                      justify-center
                      v-for="detail in expense.details"
                      :key="detail.name">
              <v-flex xs4 class="text-xs-center">
                {{detail.name}}
              </v-flex>
              <v-flex xs4 class="text-xs-center">
                {{detail.value}}
              </v-flex>
            </v-layout>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
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

<style lang="scss" scoped>
.expense-value {
  float: right;
}
</style>

