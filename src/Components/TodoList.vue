<template>
    <div class="todoData">
        <h2>todo list</h2>
        <template v-for="index in data" :key="index.id">
          <div class="singleList">
            <template v-if="index.category === 'personal'">
              <template v-if="index.completed === false">
                <div class="personalBullet" @click="handleUpdate(index)"></div>
              </template>
              <template v-else-if="index.completed === true">
                <div 
                  class="personalBullet personalBulletSelected" 
                  @click="handleUpdate(index)"
                >
                </div>
              </template>
            </template>
            <template v-else-if="index.category === 'business'">
              <template v-if="index.completed === false">
                <div class="businessBullet" @click="handleUpdate(index)">
                </div>
              </template>
              <template v-else-if="index.completed === true">
                <div 
                  class="businessBullet businessBulletSelected"
                  @click="handleUpdate(index)"
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
            <button @click="handleDelete(index.id)">
              delete
            </button>
          </div>
        </template>
    </div>
</template>

<script>

export default {
    name: "TodoList",
    props: ['data'],
    emits: ['DeleteListEvent', 'UpdateListEvent'],
    setup(props, { emit }) {

        const handleDelete = (id) => {
            emit('DeleteListEvent', id)
        }

        const handleUpdate = (index) => {
            emit('UpdateListEvent', index)
        }
        return {
            handleDelete,
            handleUpdate
        }
    }
}
</script>
