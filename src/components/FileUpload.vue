<template>
  <div class="">
    <input type="file" id="fileUpload" @change="handleFile" />
    <table id="table">
      <thead>
        <th v-for="title in state.header" :key="title.id">{{ title }}</th>
      </thead>
      <tbody>
        <tr v-for="transaction in state.content" :key="transaction.id">
          <td v-for="test in transaction" :key="test.id">{{ test }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as d3 from "d3";
import { reactive } from "@vue/composition-api";
// import { Bar } from "vue-chartjs";
export default {
  setup() {
    const state = reactive({
      label: [],
      content: [],
      header: null,
    });
    async function handleFile(event) {
      state.content = [];
      state.header = [];
      //Targets file from DOM
      let file = event.target.files[0];
      //Creates a new reader
      const reader = new FileReader();
      //Reads the file as text/string
      reader.readAsText(file);
      //When the file is completed...
      reader.onload = (e) => {
        //contents takes what readAsText is
        let contents = e.target.result;
        parseData(contents);
        // this.create_table(contents);
      };

      async function parseData(request) {
        let data = await d3.csvParse(request, (data) => {
          state.content.push(data);
        });
        console.log(data.columns);
        state.header = await data.columns;
      }
      // data() {
      //   return {
      //     label: [],
      //     content: [],
      //     header: null,
      //   };
      // },
      // methods: {
    }
    return { state, handleFile };
  },
};
// },
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
}
</style>