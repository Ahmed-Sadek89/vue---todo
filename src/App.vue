<script>
import App from './App'
import { onMounted,watch } from 'vue'
import TodoForm from './Components/TodoForm.vue';
import TodoList from './Components/TodoList.vue';
export default {
  name: "App",
  components: { TodoForm, TodoList},
  setup() {
    const { 
      data,
      handleTodoSubmit, 
      handleDeleteFromList, 
      handleUpdateCompletedList
    } = App();

    onMounted(() => {
      data.value = JSON.parse(localStorage.getItem('list')) || []
    });

    watch( data, (newV, oldV) => {
      console.log({newV, oldV});
      localStorage.setItem('list', JSON.stringify(newV))
    }, { 
      deep: true 
    })

    return{ 
      data,
      handleTodoSubmit, 
      handleDeleteFromList, 
      handleUpdateCompletedList
    }
  }
}
</script>

<template>
  <div class="parentComponent">
    <h1>
      what's up, 
      <a 
        href='https://ahmed-sadek89.github.io/s-a-d-e-k/' 
        target="_blank"
      >
        sadek
      </a> 
    </h1>
    <p>
      create a todo
    </p>
    
    <TodoForm 
      @AddListEvent="handleTodoSubmit"
    />
    
    <TodoList 
      :data="data"
      @DeleteListEvent="handleDeleteFromList"
      @UpdateListEvent="handleUpdateCompletedList"
    />
  </div>
</template>


