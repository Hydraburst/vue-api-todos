<template>
    <div class="container">
        <form action="submit" @submit.prevent>
            <div class="formContent">
                <div class="inputSection">
                    <label for="email">Email</label>
                    <div class="inputFieldWrap" :class="setMailError">
                        <input type="text" v-model="email" @blur="validateEmail" @click="toggleEmailError">
                    </div>
                    <span class="errorText" v-if="!isEmailValid">{{ invalidEmailErrorText }}</span>
                </div>
                <div class="inputSection">
                    <label for="password">Passwrod</label>
                    <div class="inputFieldWrap" :class="setPasswordError">
                        <input :type="type" v-model="password" @blur="validatePassword" @click="togglePasswordError">
                        <img :src="passwordImg" alt="img" @click="toggleShowPassword">
                    </div>
                    <span class="errorText" v-if="!isPasswordValid">{{ invalidPasswordErrorText }}</span>
                </div>
                <button type="submit" @click="userLogin(email, password)">
                    <p>Log In</p>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>

import { ref, computed } from 'vue';
import imgNotVisible from '../assets/not-visible.png'
import imgVisible from '../assets/visible.png'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import router from '../routes/router';
import { useUserInfo } from '../stores/userInfo';
import { useNotificationStore } from '../stores/notificationsStore';

const showPassword = ref(false)
const isEmailValid = ref(true)
const isPasswordValid = ref(true)
const email = ref('')
const password = ref('')
const invalidEmailErrorText = ref('')
const invalidPasswordErrorText = ref('')
const passwordImg = ref(imgVisible)
const type = ref('password')
const userInfo = useUserInfo()
const notificationsStore = useNotificationStore()
const { addNotification } = notificationsStore


async function userLogin(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        if (user) {
            userInfo.userInfo.token = user.accessToken
            userInfo.userInfo.userData = user
            addNotification('Succesfull login', 'success')

        }
        router.push("/todos")
    } catch (error) {
        addNotification('Invalid credetianls', 'error')
    }
}

const validateEmail = () => {
    if (email.value !== "") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        isEmailValid.value = emailPattern.test(email.value)
        invalidEmailErrorText.value = 'Please enter valid Email adress.'
    }
    else {
        invalidEmailErrorText.value = 'Required field'
        isEmailValid.value = false
    }
}
const validatePassword = () => {
    if (password.value !== "") {
        isPasswordValid.value = password.value.length >= 6
        invalidPasswordErrorText.value = "Please enter a valid password"
    }
    else {
        invalidPasswordErrorText.value = "Required field"
        isPasswordValid.value = false
    }
}
const toggleEmailError = () => {
    if (!isEmailValid.value) {
        isEmailValid.value = true;
    }
}
const togglePasswordError = () => {
    if (!isPasswordValid.value) {
        isPasswordValid.value = true;
    }
}
const toggleShowPassword = () => {
    if (showPassword.value) {
        passwordImg.value = imgNotVisible;
        type.value = 'text';
        showPassword.value = !showPassword.value;
    }
    else {
        passwordImg.value = imgVisible;
        type.value = 'password';
        showPassword.value = !showPassword.value;
    }
}
const setMailError = computed(function () {
    return {
        inputFieldError: !isEmailValid.value,
    };
})
const setPasswordError = computed(function () {
    return {
        inputFieldError: !isPasswordValid.value
    }
})
</script>

<style lang="scss" scoped>
form {
    background-color: #e9dffb;
    min-width: 402px;
    border-radius: 4px;
    margin: 0 auto;
    z-index: 100;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}


p {
    font-size: 12px;
}


label {
    font-size: 14px;
    line-height: 20px;
}

.footerText span {
    font-weight: 600;
    border-bottom: 2px solid black;
}

input {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box
}

button {
    background-color: var(--primary);
    margin-top: 36px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: var(--primaryHover);
    }

    &:active {
        transform: scale(0.95);
    }

    p {
        color: #fff;
        font-weight: 500;
        font-size: 16px;
        padding: 14px 0
    }
}

img {
    max-width: 20px;
    max-height: 15px;
}

.formContent {
    padding: 2rem 1.625rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.inputSection {
    display: flex;
    flex-direction: column;
    gap: 8px;

    p {
        font-size: 14px;
    }
}

.inputFieldWrap {
    display: flex;
    padding: 14px 16px 14px 16px;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid var(--primary);
    align-items: center;
}

.inputFieldError {
    border: 1px solid var(--error);
}

.errorText {
    color: var(--error);
    font-size: 14px;
}

.footerText {
    text-align: center;
}

@media screen and (max-width: 414px) {
    form {
        min-width: 355px;
    }
}
</style>