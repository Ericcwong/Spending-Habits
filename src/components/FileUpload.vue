<template>
  <div class="">
    <form>
      <input type="file" id="fileUpload" @change="uploadFile" />
    </form>
    {{ expenses }}
  </div>
</template>

<script>
// import * as d3 from "d3";
export default {
  data() {
    return {
      expenses: [],
    };
  },
  methods: {
    uploadFile(e) {
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.readAsText(file);
      reader.onload = (e) => {
        let contents = e.target.result;
        this.expenses = contents;
        console.log(contents);
      };
      console.log(reader);
      console.log(file);
    },
  },
};
</script>

<style>
</style>