<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>
            Login
          </v-toolbar-title>
        </v-toolbar>
        <v-form>
          <v-card-text>
            <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
            <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
          </v-card-text>

          <v-card-actions>
            <v-btn block color="primary">Login</v-btn>
          </v-card-actions>
          <v-layout row align-center justify-center>
            <span class="text-xs-center">OR</span>
          </v-layout>
          <v-card-actions>
            <v-btn block color="primary">Facebook</v-btn>
            <v-btn block color="secondary">Facebook</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>
