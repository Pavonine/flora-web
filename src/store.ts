import Vue from 'vue';
import Vuex from 'vuex';
import { State } from './interfaces/store.interface';
import Item from './interfaces/item.interface';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
  } as State,
  mutations: {
    editItem(state: State, payload: Item) {
      return [
        {
          text: 1,
          completed: true,
        },
      ];
    },
    newItem(state: State, payload: Item) {
      return [
        {
          text: 1,
          completed: true,
        },
      ];
    },
    removeItem(state: State, payload: Item) {
      return [
        {
          text: 1,
          completed: true,
        },
      ];
    },
    toggleItem(state: State, payload: Item) {
      return [
        {
          text: 1,
          completed: true,
        },
      ];
    },
  },
});
