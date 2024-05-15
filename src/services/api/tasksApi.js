import instance from './main'
import { useUserInfo } from '../../stores/userInfo'

const getUserid = () => {
  const userInfo = useUserInfo()
  return userInfo.userInfo.userData.uid
}

const fetchData = () => {
  const userId = getUserid()
  return instance.get(`${userId}/todos.json`)
}

const removeData = () => {
  const userId = getUserid()
  return instance.delete(`${userId}/todos.json`)
}

const addData = (task) => {
  const userId = getUserid()
  return instance.post(`${userId}/todos.json`, {
    task: task.task,
    type: task.type,
    isDone: false,
  })
}

const deleteTask = (idToRemove) => {
  const userId = getUserid()
  return instance.delete(`${userId}/todos/${idToRemove}.json`)
}

const changeData = (idToFind, status) => {
  const userId = getUserid()
  return instance.patch(`${userId}/todos/${idToFind}.json`, { isDone: status })
}

export { fetchData, removeData, addData, deleteTask, changeData }
