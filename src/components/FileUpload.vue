<template>
  <div class="">
    <input type="file" id="fileUpload" @change="handleFile" />
    <table id="table">
      <thead>
        <th v-for="title in header" :key="title.id">{{ title }}</th>
      </thead>
      <tbody>
        <tr v-for="transaction in content" :key="transaction.id">
          <td v-for="test in transaction" :key="test.id">{{ test }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as d3 from "d3";
// import { Bar } from "vue-chartjs";
export default {
  data() {
    return {
      label: [],
      content: [],
      header: null,
    };
  },
  methods: {
    async handleFile(event) {
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
        this.parseData(contents);
        // this.create_table(contents);
      };
    },
    async parseData(request) {
      let data = await d3.csvParse(request, (data) => {
        this.content.push(data);
      });
      console.log(data.columns);
      this.header = await data.columns;
    },
  },
};
</script>

<style>
</style>