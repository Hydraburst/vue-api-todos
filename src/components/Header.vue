<template>
    <div class="headerWrap">
        <div class="burgerMenu" :class="{ active: isMenuOpen }" @click="toggleMenu">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
        <h1 class="title">Todo website</h1>
    </div>
    <BurgerMenu :active="isMenuOpen" @onChangePage="changePage" @removeAllTasks="removeTasks" />
</template>
<script setup>
import { ref } from 'vue';
import BurgerMenu from './BurgerMenu.vue';
const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
}

const changePage = (page) => {
    props.changeCurrentPage(page)
    isMenuOpen.value = false
}

const removeTasks = (event) => {
    props.removeAllTasks(event)
    isMenuOpen.value = false
}

const props = defineProps({
    changeCurrentPage: Function,
    removeAllTasks: Function,
})

</script>
<style lang="scss" scoped>
ul li {
    font-size: 18px;
}

.headerWrap {
    background-color: #d19bfc;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    padding: 15px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 580px;
}

.title {
    color: #fff;
    text-align: center;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
}

.line {
    width: 40px;
    height: 3px;
    background-color: #ffffff;
    transition: all 0.3s ease;
    position: relative;

}

.burgerMenu {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 40px;
    cursor: pointer;
}

.burgerMenu.active span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
}

.burgerMenu.active span:nth-child(2) {
    opacity: 0;
}

.burgerMenu.active span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);

}

@media (max-width: 414px) {
    .headerWrap {
        min-width: 400px;
        gap: 10px 20px;
    }

    ul li {
        font-size: 16px;
    }

    .line {
        width: 30px;
        height: 3px;


    }
}
</style>
