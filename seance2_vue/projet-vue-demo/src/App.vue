<template>
<div class="corps">
  <div class="todo">
  <h1>Todo list</h1>
  <input type="text" v-model="todo" @keyup.enter="pushTodo(todo)">
  <button @click="pushTodo(todo)">Add Todo</button>
  </div>
  <!-- <p>{{todos}}</p> -->
  <todolist :todos="todos"/>
</div>
  
  
</template>

<script>
import todolist from './components/todolist.vue'

export default {
  name: 'App',
  components: {
    'todolist':todolist,
  },
  data(){
    return {
      todos :[],
      todo:'',
    }
  },
  methods:{
    pushTodo(todo){
      console.log(todo);
      if (todo===''){
        window.alert('please enter todo');
      } else {
      this.todos.push(todo); }
    }
  }
}
</script>

<style>
*{
  margin : 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
  background-color: #27292d;
  height: 100%;
}
.corps {
  width: 100vw;
  
  background-color: #27292d;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.todo {
  width: 33%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 3px solid #727476;
  border-radius: 10px;
  height: 10%;
  margin-top: 3vh;
}
.todo h1 {
  align-self: flex-start;
}

.todo input {
  width: 400px;
  border-radius: 10px;
  height: 3vh;
}
button{
  width: 40%;
  background-color: #a0a4d9;
  color: black;
  height: 30%;
  border-radius: 6px;
  font-size: 1.2em;
}
</style>
