import Vuex from 'vuex';
import Vue from 'vue';
import first from './first'
Vue.use(Vuex);



const store = new Vuex.Store({
    modules: {
        first
    }
})
export default store;