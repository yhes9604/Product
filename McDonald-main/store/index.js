import { createStore} from 'vuex'
import CreatePersistedState from 'vuex-persistedstate'
const state = {
    router_shop:[],
    calculator_items:[]
  };
const mutations={
 
  addrouter_shop(state,payload){
    state.router_shop.push(payload)
  },
  addcalulator_items(state,payload){
    state.calculator_items.push(payload)
  },
  remove_router(state){
    state.router_shop =[]
  },
  remove(state,payload){
    state.calculator_items.splice(payload,1)
 
  },
};
const vuexPersisted = new CreatePersistedState({
  key: 'VuexPersisted',
  storage: window.sessionStorage,
})
  export default createStore({
    state,mutations,  plugins: [vuexPersisted]

  });
