<template>
    <form @submit.prevent="handleTodoSubmit">
        <div class="todoText">
            <label>what's on your todo list?</label>
            <input 
                type="text" 
                ref="inputRef" 
                v-model.trim="list"
                @input="handleList" 
            />
        </div>
        <div class="todoCategory">
            <label>what's on your todo list?</label>
            <div className="radios">
            <div>
                <input
                    type="radio" 
                    name="Category" 
                    value="business" 
                    v-model="category"
                    @input="handleCategory"    
                />
                <span>business</span>
            </div>
                <div>
                <input
                    type="radio" 
                    name="Category" 
                    value="personal" 
                    v-model="category"
                    @input="handleCategory"    
                />
                <span>personal</span>
                </div>
            </div>
        </div>
        <input type="submit" value="Add todo" />
    </form>
</template>

<script>
import { onMounted, ref, reactive, toRefs } from 'vue';

export default {
    name: "TodoForm",
    emits: ['AddListEvent'],
    setup(props ,{ emit }) {
        // input list ref
        const inputRef = ref(null);
        onMounted(() => inputRef.value.focus());

        // input list and category => value and its change
        const inputData = reactive({
            list: '',
            category: ''
        });
        const handleList = (e) => {
            inputData.list= e.target.value;
            console.log(e.target.value)
        }
        const handleCategory = (e) => {
            inputData.category= e.target.value;
            console.log(e.target.value)
        }

        // passing this data into object to emit it
        const handleTodoSubmit = () => {
            const payload = {
                list: inputData.list,
                category :inputData.category
            }
            emit('AddListEvent', payload);
            // after emit this fn, do the below
            inputData.list = '';
            inputData.category = '';
            inputRef.value.focus()
        } 

        return {
            inputRef,
            ...toRefs(inputData),
            handleList,
            handleCategory,
            handleTodoSubmit
        }
    }
}
</script>
