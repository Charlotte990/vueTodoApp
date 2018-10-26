import Vue from 'vue'
// import axios from 'axios';
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  todos: []
}
const actions = {
  addItem({commit}, item){
    // axios.post(`http://localhost:3333/api/notes`, {
    //   "title": item
    // })
    // .then(response => {
    //   commit('addItemToStore', response.data);
    // })
    // .catch(e => {
    //   this.errors.push(e)
    // })
    commit('addItemToStore', item)
  },
  deleteItem({commit}, todoID){
    // axios.delete(`http://localhost:3333/api/notes/` + todoID)
    // .then(response => {
    //   commit('removeItemFromStore', response.data);
    // })
    // .catch(e => {
    //   this.errors.push(e)
    // })
    commit('removeItemFromStore', todoID)
  },
  updateItem({commit}, item){
    // do axios call to PATCH the correct note by its ID.
    commit('updateItemInStore', item)
  }
}
const mutations = {
  addItemToStore(state, item){
    var uniqueId = Math.floor((Math.random() * 10000000) + 1);
    state.todos.push({id: uniqueId, title: item.title, body: item.body, updatedAt: "", createdAt: ""})
  },
  removeItemFromStore(state, deletedTodo){
    const index = state.todos.findIndex(todo => todo.id === deletedTodo)
    state.todos.splice(index,1);
  },
  updateItemInStore(state, item){
    const index = state.todos.findIndex(todo => todo.id === item.id)
    Object.assign(state.todos[index], item)
  }
}
export default new Vuex.Store({
  state,
  actions,
  mutations
})