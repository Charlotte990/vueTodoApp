<template>
  <b-card class="add-one" header="<b>Add a Todo</b>">
    <form>
      <div class="form-group">
        <label>Todo Title</label>
        <input type="text" v-model="newTodoTitle" class="form-control" aria-describedby="todoTitle" placeholder="Todo">
      </div>
      <div class="form-group">
        <label>Todo Details</label>
        <input type="text" v-model="newTodoBody" class="form-control" placeholder="Details">
      </div>
      <button type="submit" @click.prevent="submitTodo" class="btn btn-primary">Submit</button>
    </form>
  </b-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      newTodoTitle: '',
      newTodoBody: ''
    }
  },
  methods: {
    ...mapActions( {
      addItem: 'addItem'
    }),
    submitTodo() {
      this.addItem({id: 0, title: this.newTodoTitle, body: this.newTodoBody, updatedAt: "", createdAt: ""}),
      this.newTodoTitle = ''
      this.newTodoBody = ''
    }
  }
}
</script>


<style>
.add-one {
  margin-top: 3%;
  width: 60%;
}
.submit {
  margin-top: 3%;
}
</style>
