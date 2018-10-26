<template>
  <div>
    {{item.title}}
        <b-badge class="button-style cross" variant="danger" @click="deleteTodo(item.id)">X</b-badge>
        <b-badge class="button-style" variant="light" @click="expand = !expand">view/edit</b-badge>
        <textarea v-show="expand" @change="updateTodo" class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="item.body"></textarea>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      expand: false
    }
  },
  props: ["item"],
  methods: {
    ...mapActions([
      'deleteItem',
      'updateItem'
    ]),
    deleteTodo(id) {
      this.deleteItem(id)
    },
    updateTodo() {
      this.updateItem({id: this.item.id, body: this.item.body})
    }
  }
}
</script>
