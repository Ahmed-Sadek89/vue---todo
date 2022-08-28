<script setup>
import App from './App'
import { onMounted,watch } from 'vue'


    const { 
      data, list, category,  todotextRef,
      handleTodoSubmit, handleDeleteFromList , handleUpdateCompletedList
    } = App()

    console.log({ 
      data, list, category,  todotextRef,
      handleTodoSubmit, handleDeleteFromList , handleUpdateCompletedList
    })
    
    onMounted(() => {
      todotextRef.value.focus()
      data.value = JSON.parse(localStorage.getItem('list')) || []
    });

    watch(data, (newV, oldV) => {
      console.log({newV, oldV});
      localStorage.setItem('list', JSON.stringify(newV))
    }, {deep: true})
    
    
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
    
    <form @submit.prevent="handleTodoSubmit">
      <div class="todoText">
        <label>what's on your todo list?</label>
        <input type="text" ref="todotextRef" v-model.trim="list" />
      </div>
      <div class="todoCategory">
        <label>what's on your todo list?</label>
        <div className="radios">
          <div>
            <input type="radio" name="Category" value="business" v-model="category"/>
            <span>business</span>
          </div>
            <div>
              <input type="radio" name="Category" value="personal" v-model="category" />
              <span>personal</span>
            </div>
        </div>
      </div>
      <input type="submit" value="Add todo" />
    </form>
    
    <div class="todoData">
      <h2>todo list</h2>
      <template v-for="index in data" :key="index.id">
        <div class="singleList">
          <template v-if="index.category === 'personal'">

            <template v-if="index.completed === false">
              <div class="personalBullet" @click="handleUpdateCompletedList(index)"></div>
            </template>
            <template v-else-if="index.completed === true">
              <div 
                class="personalBullet personalBulletSelected" 
                @click="handleUpdateCompletedList(index)"
              >
              </div>
            </template>

          </template>


          <template v-else-if="index.category === 'business'">

            <template v-if="index.completed === false">
              <div class="businessBullet" @click="handleUpdateCompletedList(index)">
              </div>
            </template>
            <template v-else-if="index.completed === true">
              <div 
                class="businessBullet businessBulletSelected"
                @click="handleUpdateCompletedList(index)"
              >
              </div>
            </template>

          </template>
              
          <template v-if="index.completed === false">
            <h3>{{index.list}}</h3>
          </template>
          <template v-else-if="index.completed === true">
            <h3 class="isCompleted">{{index.list}}</h3>
          </template>

          <button @click="handleDeleteFromList(index.id)">
            delete
          </button>
        </div>
          <!-- // complete it ==> -->
      </template>
    </div>
  </div>
</template>


