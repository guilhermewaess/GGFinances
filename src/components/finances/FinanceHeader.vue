<template>
  <v-toolbar flat
             dark
             card
             height="20px"
             class="elevation-0">
    <v-toolbar-title class="toolbar__title">
      <slot name="left-text">Left Text</slot>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-title>
      <slot name="right-text"></slot>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'FinanceHeader',
};
</script>

<style lang="scss" scoped>
.toolbar__title {
  font-size: 14px;
}
</style>