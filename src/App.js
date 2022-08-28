import { ref } from 'vue'
const App = () => {
    const data = ref([]);
    const list = ref('');
    const category = ref('');
    const todotextRef = ref(null);

    const handleTodoSubmit = () => {
        if (list.value === '' || category.value === '') {
            alert('missing your list or category')
        } else {
            data.value.push({
            id: Math.random() * 10,
            list: list.value,
            category: category.value,
            completed: false
            })
        }
        list.value = '';
        category.value='';
        todotextRef.value.focus();
        console.log(data.value)
    }

    const handleDeleteFromList = (id) => {
        console.log(id)
        data.value = data.value.filter(i => i.id !== id)
    } 

    const handleUpdateCompletedList = (index) => {
        console.log(index);
        index['completed'] === false ? index['completed'] = true : index['completed'] = false
    }

    return {
        data, 
        list,
        category, 
        todotextRef,
        handleTodoSubmit,
        handleDeleteFromList,
        handleUpdateCompletedList
    }
}

export default App