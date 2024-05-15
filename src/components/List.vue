<template>
    <div class="container">
        <div class="listContent">
            <h3 class="title" :class="{ active: $props.currentPage === 'daily' }">
                Daily tasks
            </h3>
            <h3 class="title" :class="{ active: $props.currentPage === 'important' }">Important tasks</h3>
            <ul class="list">
                <li v-for="listItem in list" :key="listItem.id">
                    <ListItem :taskText='listItem.task' :taskStatus='listItem.isDone'
                        @removeTask="$props.removeTask(listItem.id)"
                        @changeTaskStatus="$props.changeTaskStatus(listItem.id)" />
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import ListItem from './ListItem.vue';

const props = defineProps({
    list: Array,
    removeTask: Function,
    currentPage: String,
    changeTaskStatus: Function
})

</script>
<style lang="scss" scoped>
.title {
    display: none;
}

.title.active {
    display: block;
}

.container {
    min-width: 580px;
    margin-top: 20px;
}

.listContent {
    padding: 22px 45px;
    display: flex;
    flex-direction: column;
    gap: 18px;
}

ul {
    list-style-type: none;
}

.list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
</style>