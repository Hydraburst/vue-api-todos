import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotificationStore = defineStore('notificationStore', () => {
  const notifications = ref([])

  const addNotification = (message, type) => {
    
    notifications.value.push({ id: Date.now(), message, type })

    setTimeout(() => {
      notifications.value.shift()
    }, 5000)
  }

  const removeNotification = (index) => {
    notifications.value.splice(index, 1)
  }

  return {
    notifications,
    addNotification,
    removeNotification,
  }
})
