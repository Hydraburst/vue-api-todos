import instance from './main'
import { useUserInfo } from '../../stores/userInfo'

const fetchData = () => {
  const userInfo = useUserInfo()
  const userId = userInfo.userInfo.userData.uid
  return instance.get(`${userId}/todos.json`)
}

const removeData = () => {
  const userInfo = useUserInfo()
  const userId = userInfo.userInfo.userData.uid
  return instance.delete(`${userId}/todos.json`)
}

const addData = (task) => {
  const userInfo = useUserInfo()
  const userId = userInfo.userInfo.userData.uid
  return instance.post(`${userId}/todos.json`, {
    task: task.task,
    type: task.type,
    isDone: false,
  })
}

const deleteTask = (idToRemove) => {
  const userInfo = useUserInfo()
  const userId = userInfo.userInfo.userData.uid
  return instance.delete(`${userId}/todos/${idToRemove}.json`)
}

const changeData = (idToFind, status) => {
  const userInfo = useUserInfo()
  const userId = userInfo.userInfo.userData.uid
  return instance.patch(`${userId}/todos/${idToFind}.json`, { isDone: status })
}

export { fetchData, removeData, addData, deleteTask, changeData }
