<template>
    <div class="notificationContainer">
        <transition-group name="user-list" tag="div">
            <div v-for="(notification, index) in notifications" v-if="readyToRender" class="notification"
                :class="notification.type" @click="removeNotification(index)">
                <div class="notificationStart">
                    <img :src="defineImgSrc(notification.type)" alt="Icon">
                    {{ notification.message }}
                </div>
                <img :src="defineCloseImgSrc(notification.type)" alt="Close">
            </div>
        </transition-group>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useNotificationStore } from '../stores/notificationsStore';

import errorIcon from '../assets/error.svg';
import errorCloseIcon from '../assets/error-close.svg';
import successIcon from '../assets/success-icon.svg';
import successCloseIcon from '../assets/success-close.svg';
import infoIcon from '../assets/info-icon.svg';
import infoCloseIcon from '../assets/info-close.svg';
import warningIcon from '../assets/warning-icon.svg';
import warningCloseIcon from '../assets/warning-close.svg';
import { onMounted, ref } from 'vue';

const notificationStore = useNotificationStore();
const { notifications } = storeToRefs(notificationStore);
const { removeNotification } = notificationStore;
const readyToRender = ref(false)

const iconMap = ref({
    error: { icon: errorIcon, closeIcon: errorCloseIcon },
    warning: { icon: warningIcon, closeIcon: warningCloseIcon },
    info: { icon: infoIcon, closeIcon: infoCloseIcon },
    success: { icon: successIcon, closeIcon: successCloseIcon }
});

const defineImgSrc = (type) => iconMap.value[type].icon;
const defineCloseImgSrc = (type) => iconMap.value[type].closeIcon;

onMounted(() => {
    setTimeout(() => {
        readyToRender.value = true
    }, 500)
})
</script>

<style>
.notificationContainer {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
}

.notification {
    background-color: #44c767;
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 20px;
}

.notificationStart {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

.user-list-enter-from {
    opacity: 0;
    transform: translateX(30px);
}

.user-list-enter-active {
    transition: all 0.3s ease-out;
}

.user-list-enter-to,
.user-list-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.user-list-leave-active {
    transition: all 0.3s ease-in;
}

.user-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.user-list-move {
    transition: transform 0.8s ease;
}

.error {
    border: 1px solid var(--error);
    background-color: var(--errorPrimary);
    color: var(--error);
}

.success {
    border: 1px solid var(--notifySuccess);
    background-color: var(--notifySuccessPrimary);
    color: var(--notifySuccess)
}

.warning {
    border: 1px solid var(--notifyWarning);
    background-color: var(--notifyWarningPrimary);
    color: var(--notifyWarning);
}

.info {
    border: 1px solid var(--notifyInfo);
    background-color: var(--notifyInfoPrimary);
    color: var(--notifyInfo)
}
</style>
