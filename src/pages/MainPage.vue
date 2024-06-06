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
import { useNotificationStore } from '../stores/notificationsStore';

const notificationsStore = useNotificationStore()
const { addNotification } = notificationsStore

const tasks = ref([])

const popupActive = ref(false);

const currentPage = ref('daily')

const loadData = async () => {
    try {
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
    } catch (error) {
        addNotification('Failed to load data', 'error')
    }

}

const addTask = async (task) => {
    try {
        await addData(task)
        loadData()
        addNotification('Todo added succesfully', 'info')
    } catch (error) {
        addNotification('Something went wrong', 'warning')
    }

}

const removeTask = async (idToRemove) => {
    try {
        await deleteTask(idToRemove)
        loadData()
        addNotification('Todo removed succesfully', 'info')
    } catch (error) {
        addNotification('Something went wrong', 'warning')
    }
}

const changeTaskStatus = async (idToFind) => {
    const taskToUpdate = tasks.value.find(task => task.id === idToFind)
    if (taskToUpdate) {
        const updateIsDone = !taskToUpdate.isDone
        try {
            await changeData(idToFind, updateIsDone)
            loadData()
            addNotification('Todo status changed', 'info')
        } catch (error) {
            addNotification('Something went wrong', 'warning')
        }
    }
}

const removeAllTasks = async () => {
    try {
        await removeData()
        loadData()
        addNotification('All todos removed successfully', 'info')
    } catch (error) {
        addNotification('Something went wrong', 'warning')
    }
}

const changePage = (page) => {
    currentPage.value = page
    fetchData()
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