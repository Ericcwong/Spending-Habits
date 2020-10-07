<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ul class="datas" v-for="transaction in data" :key="transaction.id">
      <li>{{ transaction.Category }}</li>
      <li>{{ transaction.Description }}</li>
      <li>{{ transaction["Transaction Date"] }}</li>
      <li>{{ transaction.Type }}</li>
      <li>{{ transaction.Amount }}</li>
    </ul>

    <h1>{{ expenses }}</h1>
    <h2>{{ totalExpenses }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import * as d3 from "d3";
export default {
  name: "Home",
  data() {
    return {
      data: null,
      expenses: [],
      totalExpenses: null,
    };
  },
  async created() {
    await this.loadData();
    await this.expense();
  },

  methods: {
    async loadData() {
      await d3.csv("/statements/chase.csv").then((data) => {
        console.log(data);
        this.data = data;
      });
    },
    async expense() {
      await this.data.forEach((el) => {
        console.log(el.Amount);
        let amount = el.Amount;
        this.expenses.push(amount);
        this.totalExpenses = this.expenses
          .map((x) => {
            return parseInt(x, 10);
          })
          .reduce((a, b) => {
            return a + b;
          });
      });
    },
  },
};
</script>
