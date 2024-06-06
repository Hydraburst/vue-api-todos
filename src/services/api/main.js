import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL

const instance = axios.create({
  baseURL: `${baseUrl}`,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
})

export default instance
