<template>
    <div class="listItem" @mouseover="isHover = true" @mouseleave="isHover = false">
        <div class="leftSide">
            <Checkbox :taskStatus="taskStatus" @click="changeTaskStatus" />
            <p class="itemText" :class="{ overline: taskStatus }">{{ taskText }}
            </p>
        </div>
        <img :src="closeIcon" alt="close" class="closeIcon" :class="{ showIcon: isHover || taskStatus }"
            @click="$emit('removeTask')">
    </div>
</template>

<script setup>
import Checkbox from './Checkbox.vue';
import closeIcon from '../assets/x.svg'
import { ref } from 'vue';

const props = defineProps({
    taskText: String,
    indx: Number,
    taskStatus: Boolean
})




const emits = defineEmits(['removeTask', 'changeTaskStatus'])

const changeTaskStatus = () => {
    emits('changeTaskStatus')
}
const isHover = ref(false);
</script>

<style lang="scss" scoped>
.listItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

.leftSide {
    display: flex;
    gap: 20px;
    flex-direction: row;
    align-items: center;
}

.closeIcon {
    cursor: pointer;
    transition: opacity 0.3s, transform 0.3s;
    opacity: 0;

}

.showIcon {
    opacity: 1;
}

.closeIcon:hover {
    transform: scale(1.1);
}

.closeIcon:active {
    transform: scale(0.95);
}

.itemText {
    transition: 0.3s all ease-in-out;
}

.overline {
    color: #b4b4b4;
    text-decoration: line-through;
}
</style>
