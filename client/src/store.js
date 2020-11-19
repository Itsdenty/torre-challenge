import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        people: [],
        opportunities: [],
        selectedPerson: {},
        selectedOpportunity: {}
    },
    getters: {
      getNewPeople : (state) => {
          return state.people;
      },
      getNewOpportunities : (state) => {
        return state.opportunities;
    },
    },
    mutations: {
        setPeople(state, payload){
          state.people = payload
        },
        setOpportunities(state, payload){
          state.opportunities = payload
        },
    },
    actions: {
        async getPeople({commit}){
          await axios.post("http://localhost:3100/api/v1/user/search/people?size=10&offset=0")
          .then(({data}) =>{ 
            console.log(data);
            commit('setPeople', data.results)
          })
        },
        async getOpportunities({commit}){
          await axios.post("http://localhost:3100/api/v1/user/search/opportunities?size=10&offset=0")
          .then(({data}) =>{ 
            console.log(data);
            commit('setOpportunities', data.results)
          })
        }
    },
  })
