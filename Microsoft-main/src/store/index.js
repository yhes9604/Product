import { createStore} from 'vuex'
import CreatePersistedState from 'vuex-persistedstate'
const state = {
    count:[],
    router_shop:[],
    origin_shop:[],
    search_shop:[],
  };
const mutations={
  addcount(state,payload){
    state.count.push(payload)
    
  },
  addrouter_shop(state,payload){
    state.router_shop.push(payload)
  },
  addsearch_shop(state,payload){
    state.search_shop= []
    state.search_shop.push(payload)
  },
  addorigin_shop(state,payload){
    state.origin_shop= []
    state.origin_shop.push(payload)
  },
  remove_router(state){
    state.router_shop =[]
  },
  remove(state,payload){
    state.count.splice(payload,1)
 
  },
};
const vuexPersisted = new CreatePersistedState({
  key: 'VuexPersisted',
  storage: window.sessionStorage,
})
  export default createStore({
    state,mutations,  plugins: [vuexPersisted]

  });
