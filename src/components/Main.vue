<template>
  <b-container fluid class="main-container">
      <List/>
      <Add v-if="todos.length < 10"/>
      <p v-else>You have maxed out your Todos! Complete some tasks before adding more.</p>
  </b-container>
</template>

<script>
import List from './ListOfItems'
import Add from './AddItem'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },
  components: {
    List,
    Add
  }
}
</script>


<style>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
