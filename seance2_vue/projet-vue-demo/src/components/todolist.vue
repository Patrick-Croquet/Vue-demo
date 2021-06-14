<template>
    <div class="todoCard" v-for="(todo,index) in todos" :key="todo" >
        <p>{{todos[index]}}</p>
        <button @click="eraseTodo(index)">erase</button>
    </div>
</template>

<script>

export default {
    name : 'todolist',
    data(){
        return{
            index:0,
        }
    },
    props : ['todos'],
    methods:{
        //splice(index,1)
        eraseTodo(index) {
            this.$props.todos.splice(index,1);
        }
    },
    
}

</script>

<style>
.todoCard {
    width: 33%;
    height: 60px;
    border: 3px solid #727476;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2%;
}

.todoCard button {
    width: 22%;
    height: 50%;
}
</style>