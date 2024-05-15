import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: 'AIzaSyCMawKDWgF-9Fzk3WAKuy5lcclJNEfrc3c',
  authDomain: 'vue-todo-list-5d358.firebaseapp.com',
  databaseURL:
    'https://vue-todo-list-5d358-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'vue-todo-list-5d358',
  storageBucket: 'vue-todo-list-5d358.appspot.com',
  messagingSenderId: '770623207422',
  appId: '1:770623207422:web:2c9fbae363a2cfcfb432af',
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
export { firebaseApp, auth }
