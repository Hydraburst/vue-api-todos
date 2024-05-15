<template>
        <div class="buttonWrap">
            <p class="buttonText">{{ text }}</p>
        </div>
</template>
<script setup>
const props = defineProps({ text: String })

</script>
<style lang="scss">

.buttonWrap {
    border-radius: 5px;
    background-color: #D19BFC;
    border: none;
    padding: 10px 50px;
    max-width: 180px;
    margin: 0 auto;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    margin-top: 20px;
}

.buttonWrap:hover {
    transform: scale(1.05);
    background-color: #c176ff;
    transition: 0.3s all ease-in-out;
}

.buttonWrap:active {
    transform: scale(0.95);
}

.buttonText {
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
}
</style>