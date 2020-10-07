<template>
  <div class="">
    <h1>Statements</h1>
    <pre>{{ statements }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statements: [],
    }
  },
  async fetch() {
    this.statements = await this.$content('statements').fetch()
  },
}
</script>

<style>
</style>