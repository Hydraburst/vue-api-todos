<template>
    <div class="container">
        <Header :changeCurrentPage="changePage" :removeAllTasks="removeAllTasks" />
        <List :list="filteredTasks" :removeTask="removeTask" :currentPage="currentPage"
            :changeTaskStatus="changeTaskStatus" />
        <Button text="New task" @click="togglePopup" />
        <Popup :isActive="popupActive" @onClick="closePopup" :addTask="addTask" />
    </div>

</template>
<script setup>
import Header from '../components/Header.vue';
import List from '../components/List.vue';
import Button from '../components/Button.vue';
import Popup from '../components/Popup.vue';
import { onMounted, ref } from 'vue';
import { computed } from 'vue';
import { addData, changeData, deleteTask, fetchData, removeData } from '../services/api/tasksApi';


const tasks = ref([])

const popupActive = ref(false);

const currentPage = ref('daily')

const loadData = async () => {
    const data = (await fetchData()).data
    const todos = [];
    for (const id in data) {
        todos.push({
            id: id,
            task: data[id].task,
            type: data[id].type,
            isDone: data[id].isDone
        })
    }
    tasks.value = todos
}

const addTask = async (task) => {
    await addData(task)
    loadData()
}

const removeTask = async (idToRemove) => {
    await deleteTask(idToRemove)
    loadData()
}

const changeTaskStatus = async (idToFind) => {
    const taskToUpdate = tasks.value.find(task => task.id === idToFind)
    if (taskToUpdate) {
        const updateIsDone = !taskToUpdate.isDone
        try {
            await changeData(idToFind, updateIsDone)
            loadData()
        } catch (error) {
            console.error('Произошла ошибка', error)
        }
    }
}

const removeAllTasks = async () => {
    await removeData()
    loadData()
}

const changePage = (page) => {
    currentPage.value = page
}

const closePopup = () => {
    popupActive.value = false;
}

const togglePopup = () => {
    popupActive.value = !popupActive.value
}

onMounted(() => {
    loadData()
});

const filteredTasks = computed(() => {
    if (currentPage.value === 'daily' || currentPage.value === 'important') {
        return tasks.value.filter(task => task.type === currentPage.value);
    } else {
        return [];
    }
});
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
}
</style>