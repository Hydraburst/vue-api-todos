<template>
  <div class="container">
    <RouterView />
    <notifications />

  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useUserInfo } from './stores/userInfo';
import { useRouter } from 'vue-router';
import Notifications from './components/Notifications.vue';

const router = useRouter()
const userInfo = useUserInfo()

onMounted(() => {
  if (userInfo.userInfo.token) {
    if (router.currentRoute.value.path === "/") {
      router.replace("/todos");
    }
  } else {
    if (router.currentRoute.value.path !== "/") {
      router.replace("/");
    }
  }
})

</script>



<style scoped>
.container {
  display: flex;
  max-width: 580px;
  margin: 0 auto;
  justify-content: center;
  height: 100vh;
}

@media (max-width: 414px) {
  .container {
    max-width: 400px;
  }
}
</style>
