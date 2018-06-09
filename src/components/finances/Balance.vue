<template>
  <v-flex>
    <v-card>
      <finance-header>
        <div slot="left-text">Balance</div>
        <div slot="right-text"></div>
      </finance-header>
      <v-container fill-height>
        <v-layout column>
          <v-flex xs12
                  text-xs-center>
            <h1>{{balance.planned}}</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>


<script>
import FinanceHeader from './FinanceHeader';

export default {
  name: 'Balance',
  components: {
    FinanceHeader,
  },
  props: {
    balance: {
      type: Object,
      required: true,
    },
  },
};
</script>
