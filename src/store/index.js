import Vue from 'vue'
import Vuex from 'vuex'
import * as d3 from "d3";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null,
    expenses: [],
    totalExpenses: null,
  },
  mutations: {
    UPDATEDATA(state, payload) {
      state.data = payload
    },
    UPDATEEXPENSES(state, payload) {
      state.expenses.push(payload)
    }
  },
  actions: {
    async loadData({
      commit
    }) {
      await d3.csv("/statements/chase.csv").then((data) => {
        console.log(data);
        commit("UPDATEDATA", data)
      });
    },
    async expense({
      commit,
      state
    }) {
      try {
        await state.data.forEach((el) => {
          let amount = el.Amount;
          commit("UPDATEEXPENSES", amount)
          state.totalExpenses = state.expenses
            .map((x) => {
              return parseInt(x, 10);
            })
            .reduce((a, b) => {
              return a + b;
            });
        });
      } catch (error) {
        console.log(error)
      }

    },

  },
  modules: {}
})