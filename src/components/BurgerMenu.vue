<template>
    <div class="burgerDropdown" :class="{ active: active }">
        <div class="burgerDropdownContent">
            <nav>
                <ul class="navList">
                    <li @click="$emit('onChangePage', 'daily')">Daily tasks</li>
                    <li @click="$emit('onChangePage', 'important')">Important tasks</li>
                </ul>
            </nav>
            <nav>
                <ul class="nav">
                    <li @click="$emit('removeAllTasks')"> <span class="delete">Remove all tasks</span></li>
                    <li @click="userLogout"> <span class="exit">Logout</span></li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script setup>
import { useUserInfo } from '../stores/userInfo';
import { useRouter } from 'vue-router';

const router = useRouter()
const userInfo = useUserInfo()
const props = defineProps({ active: Boolean })
const emit = defineEmits(['onChangePage', 'removeAllTasks', 'userLogout'])

const userLogout = () => {
    userInfo.userInfo.token = ''
    userInfo.userInfo.userData = ''
    router.push('/')
}

</script>
<style lang="scss" scoped>
.burgerDropdownContent {
    display: flex;
    gap: 60px;
    flex-direction: column;
    padding: 30px 40px;

}

.burgerDropdown {
    background-color: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    width: 580px;
    padding: 0;
    margin-top: 160px;
    transition: transform 0.3s ease-in-out;


    transform: translateX(-300%);

    position: absolute;

    z-index: 1000;
}

.burgerDropdown.active {
    transform: translateX(0%);

}



.nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.navList {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.navList li {
    transition: all 0.3s ease-in-out;
}

.navList li:hover {
    color: #c176ff;
    cursor: pointer;
}

.delete {
    text-transform: uppercase;
    color: #ff6a6a;
    font-size: 18px;
    transition: all 0.3s ease-in-out;
}

.delete:hover {
    color: #f82626;
    cursor: pointer;
}

.exit {
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
}

.exit:hover {
    color: #c176ff;
    cursor: pointer;
}
</style>