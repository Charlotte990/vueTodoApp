<template>
  <b-card class="outer-card" header="<b>Current Todos</b>">
    <b-list-group>
      <p class="addOne" v-if="todos.length < 1">Add a Todo item</p>
      <b-list-group-item
        v-else
        class="list-items"
        variant="secondary" 
        v-for="todo in todos" 
        :key="todo.id">
          <SingleItem :item="todo"/>
      </b-list-group-item>
    </b-list-group>
      <p v-if="todos.length >= 1" class="card-text mt-2">
        Todo: {{count}} item(s).
      </p>
  </b-card>   
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SingleItem from '../components/SingleItem'

export default {
  data() {
    return {
      expand: false
    }
  },
  components: {
    SingleItem
  },
  computed: {
    ...mapState({
      todos: state => state.todos
    }),
    count() {
      return this.todos.length
    }
  }
}
</script>

<style>

.outer-card {
  margin-top: 5%;
  width: 60%;
}
.list-items {
  text-align: left;
}
.button-style {
  float: right;
}
.cross {
  margin-left: 2%;
}
.addOne {
  color: #17a2b8;
  font-size: 1.2em;
  font-weight: bold;
}
</style>

