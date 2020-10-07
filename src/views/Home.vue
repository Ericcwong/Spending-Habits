<template>
  <div class="container">
    <table class="tableData">
      <tr>
        <th>Category</th>
        <th>Description</th>
        <th>Transaction Date</th>
        <th>Type</th>
        <th>Amount</th>
      </tr>
      <tr v-for="transaction in data" :key="transaction.id">
        <td>{{ transaction.Category }}</td>
        <td>{{ transaction.Description }}</td>
        <td>{{ transaction["Transaction Date"] }}</td>
        <td>{{ transaction.Type }}</td>
        <td>{{ transaction.Amount }}</td>
      </tr>
    </table>
    <div class="expenses">
      <!-- <div class="">
        <h1>Expenses:</h1>
        <p>{{ expenses }}</p>
      </div> -->
      <div class="totaledExpenses">
        <h1>Total Expenses: $ {{ totalExpenses }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
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
  //LifeCycle hooks. Called asynchronous allow data to populate and be used.
  async created() {
    await this.loadData();
    await this.expense();
  },

  methods: {
    //loads information from csv file and returns it to data
    async loadData() {
      await d3.csv("/statements/chase.csv").then((data) => {
        console.log(data);
        this.data = data;
      });
    },
    //Takes data and for each amount push it to expenses.
    //Once pushed take that data from expenses array and combine them
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
<style scoped>
.container {
  display: flex;
}
.tableData {
  flex: 0 0 70%;
}
.expenses {
  flex: 0 0 30%;
}
</style>