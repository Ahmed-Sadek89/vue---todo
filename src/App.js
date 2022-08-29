import { ref } from 'vue';


const App = () => {

    const data = ref([]);

    const handleTodoSubmit = (payload) => {
        const { list, category } = payload
        if (list.trim() === '' || category.trim() === '') {
            alert('missing your list or category')
        } else {
            data.value.push({
                id: Math.random() * 10,
                list,
                category,
                completed: false
            })
        }
    }

    const handleDeleteFromList = (id) => {
        console.log("id")
        data.value = data.value.filter(i => i.id !== id)
    }

    const handleUpdateCompletedList = (index) => {
        console.log(index);
        index['completed'] === false ? index['completed'] = true : index['completed'] = false
    }

    return {
        data, 
        handleTodoSubmit,
        handleDeleteFromList,
        handleUpdateCompletedList
    }
}

export default App