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
              <v-flex>
                <v-card>
                  <v-card-text class="text-xs-center">
                    <h2 class="green--text text--darken-1">Credit</h2>
                  </v-card-text>
                  <v-container>
                    <v-layout row>
                      <v-flex xs6
                              class="subheading">Conta</v-flex>
                      <v-flex xs6
                              class="text-xs-right 
                                     subheading">
                        <span>100</span>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs6
                              class="subheading">Conta</v-flex>
                      <v-flex xs6
                              class="text-xs-right 
                                     subheading">
                        <span>100</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
              <v-flex>
                <v-card>
                  <v-card-text class="text-xs-center">
                    <h2 class="red--text text--darken-1">Debit</h2>
                  </v-card-text>
                  <v-container>
                    <v-layout row>
                      <v-flex xs6
                              class="subheading">Conta</v-flex>
                      <v-flex xs6
                              class="text-xs-right 
                                     subheading">
                        <span>100</span>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs6
                              class="subheading">Conta</v-flex>
                      <v-flex xs6
                              class="text-xs-right 
                                     subheading">
                        <span>100</span>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs6
                              class="subheading">Total</v-flex>
                      <v-flex xs6
                              class="text-xs-right 
                                     subheading">
                        <span>200</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
              <v-flex>
                <v-card>
                  <v-card-text class="text-xs-center">
                    <h2 class="blue--text text--darken-4">Freedom</h2>
                  </v-card-text>
                  <v-container>
                    <v-layout row>
                      <v-flex xs6
                              class="subheading">Conta</v-flex>
                      <v-flex xs6
                              class="text-xs-right 
                                     subheading">
                        <span>100</span>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs6
                              class="subheading">Conta</v-flex>
                      <v-flex xs6
                              class="text-xs-right 
                                     subheading">
                        <span>100</span>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs6
                              class="subheading">Total</v-flex>
                      <v-flex xs6
                              class="text-xs-right 
                                     subheading">
                        <span>200</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'MyFinances',
  computed: {
    layoutDisplay() {
      const displayType = {};
      console.log(this.$vuetify.breakpoint);

      if (this.$vuetify.breakpoint.smAndDown) {
        displayType.column = true;
      }

      return displayType;
    },
  },
};
</script>
