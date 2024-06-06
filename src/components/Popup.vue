<template>
    <div class="container" :class="{ active: isActive }" @click="$emit('onClick')">
        <div class="popupContent" @click.stop>
            <div class="topContent">
                <img :src="closeIcon" alt="close" class="closeIcon" @click="$emit('onClick')">
                <form @submit.prevent="submit" class="formContainer">
                    <div class="topContent">
                        <input type="text" class="inputText" placeholder="Type task..." v-model="task.task">
                        <select class="taskSelect" v-model="task.type">
                            <option value="" disabled selected>Select...</option>
                            <option value="daily">Daily</option>
                            <option value="important">Important</option>
                        </select>
                    </div>
                    <button type="submit" class="buttonWrap">
                        <p class="buttonText">
                            Add task
                        </p>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import closeIcon from '../assets/x.svg'

import { ref } from 'vue';

const task = ref({
    task: '',
    type: '',
    isDone: false
});

const submit = () => {
    if (task.value.task && task.value.type) {
        props.addTask(task.value);
        task.value = { task: '', type: '', };
        emits('onClick');
    }
}

const emits = defineEmits(['onClick'])

const props = defineProps({
    isActive: Boolean,
    addTask: Function,
})
</script>

<style lang="scss" scoped>
.topContent {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.formContainer {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 0 auto;
}

.container {
    position: fixed;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    transition: 0.3s all ease-in-out;
    opacity: 0;
    display: none;
    align-items: center;
    justify-content: center;
    pointer-events: none;
}

.container .active {
    opacity: 1;
    pointer-events: all;
    transition: all 0.3s ease-in-out;
}

.topContent {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}

.popupContent {
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 60px 70px 20px 70px;
    gap: 100px;
    background-color: #fff;
    max-width: 580px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
}

.closeIcon {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    padding: 20px 25px;
}

input,
select {
    width: 310px;
    border-radius: 5px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    background-color: #eee;
    color: #979797;
    padding: 7px 0px 7px 45px;
    font-size: 12px;
}

.closeIcon {
    cursor: pointer;
    transition: opacity 0.3s, transform 0.3s;

}

.closeIcon:hover {
    transform: scale(1.1);
    color: red;
}

.closeIcon:active {
    transform: scale(0.95);
}

@media (max-width: 414px) {
    .popupContent {
        padding: 65px 45px;
    }
}
</style>