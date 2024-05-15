<template>
    <div class="border">
        <img :src="okImg" alt="ok" :class="{ visible: taskStatus }">
    </div>
</template>
<script setup>
import okImg from "../assets/ok.svg"

const props = defineProps({
    taskStatus: Boolean
})
</script>

<style lang="scss" scoped>
.border {
    width: 15px;
    height: 15px;
    border: 1px solid #000;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
}

img {
    transition: 0.3s all ease-in-out;
    opacity: 0;
}

.visible {
    opacity: 1;
}
</style>