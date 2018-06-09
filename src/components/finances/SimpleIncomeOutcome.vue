<template>
  <div class="d-flex">
    <span class="text-xs-left">{{ incomeOutcome.name }}</span>
    <span class="text-xs-right">{{ incomeOutcome.value }}</span>
  </div>
</template>

<script>
export default {
  name: 'SimpleIncomeOutcome',
  props: {
    incomeOutcome: {
      type: Object,
      required: true,
    },
  },
};
</script>

