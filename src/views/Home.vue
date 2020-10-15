<template>
  <div class="container">
    <FileUpload />
    <!-- <table class="tableData">
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
      <div class="">
        <h1>Expenses:</h1>
        <p>{{ expenses }}</p>
      </div>
      <div class="totaledExpenses">
        <h1>Total Expenses: $ {{ totalExpenses }}</h1>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import FileUpload from "@/components/FileUpload";
export default {
  name: "Home",
  components: {
    FileUpload,
  },
  data() {
    return {};
  },
  //LifeCycle hooks. Called asynchronous allow data to populate and be used.
  async created() {
    await this.loadData();
    await this.expense();
  },
  computed: {
    ...mapState(["data", "expenses", "totalExpenses"]),
  },

  methods: {
    ...mapActions(["loadData", "expense"]),
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